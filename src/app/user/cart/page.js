"use client"
import { Button, Paper, Typography } from "@mui/material";
import Grid from '@mui/material/Grid2';
import React, { useEffect, useState } from "react";
import { CartItem } from "@/components/sharables/CartItem";
import '../../cart/cart.css'
import { useCart } from "@/context/cartContext";
import { useMutation } from "@tanstack/react-query";
import { UserHeader } from "@/components/practice/UserHeader";
import { createUserOrder, updateUserOrder } from "@/services/OrderServices";
import { LoginModal } from "@/components/Authentication/LoginModal";
import { SignUpModal } from "@/components/Authentication/SignUpModal";
export default function Home() {
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [openLoginModal, setOpenLoginMdal] = useState(false);
    const [openSignUpModal, setOpenSignupMpdal] = useState(false);

    const { cart, setCart } = useCart();
    const [loading, setLoading] = useState(false);

    const loadRazorpay = () => {
        console.log("loadRazorpay")
        return new Promise((resolve) => {
            const script = document.createElement('script');
            script.src = 'https://checkout.razorpay.com/v1/checkout.js';
            script.onload = () => resolve(true);
            script.onerror = () => resolve(false);
            document.body.appendChild(script);
        });
    };

    useEffect(() => {
        const tempCart = sessionStorage.getItem('cart');
        if (tempCart) {
            try {
                // Parse the JSON string to an array
                const parsedCart = JSON.parse(tempCart);
                const price = parsedCart.reduce((sum, item) => sum + parseFloat(item.price), 0);
                setTotalPrice(Math.round(price * 100) / 100);
                if (Array.isArray(parsedCart)) {
                    setCartItems(parsedCart);
                } else {
                    console.error("Parsed cart is not an array:", parsedCart);
                }
            } catch (error) {
                console.error("Failed to parse cart from sessionStorage:", error);
            }
        }
    }, []);
    useEffect(() => {
        // Load cart data when the component mounts
        loadCart();

        // Custom event listener for session storage changes
        const handleStorageChange = (event) => {
            if (event.key === 'cart') {
                loadCart();
            }
        };

        // Add the event listener
        window.addEventListener('storage', handleStorageChange);

        // Cleanup event listener on unmount
        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);
    const mutation = useMutation({
        mutationFn: (newOrder) => createUserOrder(newOrder),

        onSuccess: (data) => {
            console.log("Order created successfully:", data);
            //   console.log("User created successfully:", data.data.token);

            sessionStorage.setItem("user_order_id_elec", data.order_id);
            createOrderAndHandlePayment();
            //   window.location.href = '/practice'
            // Optionally redirect or show a success message
            //   window.location.href = '/auth/login'

        },
        onError: (error) => {
            console.error("Error creating Order:", error.response.data.error);
        },
    });
    const updateMutation = useMutation({
        mutationFn: (newOrder) => updateUserOrder(newOrder),

        onSuccess: (data) => {
            console.log("Order updated successfully:", data);
            //   console.log("User created successfully:", data.data.token);

            sessionStorage.setItem("user_order_id_elec", data.order_id);
            //   window.location.href = '/practice'
            // Optionally redirect or show a success message
            const electoken = sessionStorage.getItem('token');

            console.log("Orelectoken:", electoken);

            if (electoken) {
                setCart([])
                window.location.href = '/user/home'


            }
           else{
            setCart([])

            window.location.href = '/auth/login'

           }

        },
        onError: (error) => {
            console.error("Error creating Order:", error.response.data.error);
        },
    });
    const loadCart = () => {
        const tempCart = sessionStorage.getItem('cart');
        if (tempCart) {
            try {
                const parsedCart = JSON.parse(tempCart);
                if (Array.isArray(parsedCart)) {
                    setCartItems(parsedCart);
                    const price = parsedCart.reduce((sum, item) => sum + parseFloat(item.price), 0);
                    setTotalPrice(Math.round(price * 100) / 100);
                } else {
                    console.error("Parsed cart is not an array:", parsedCart);
                }
            } catch (error) {
                console.error("Failed to parse cart from sessionStorage:", error);
            }
        }
    };
    const removeItem = (index) => {
        const newCartItems = cartItems.filter((_, i) => i !== index);
        const removedItemPrice = parseFloat(cartItems[index].price);
        const newTotalPrice = Math.round((totalPrice - removedItemPrice) * 100) / 100;
        console.log("newCartItems", newCartItems)
        setCartItems(newCartItems);
        setTotalPrice(newTotalPrice);

        // Optionally, update sessionStorage
        sessionStorage.setItem('cart', JSON.stringify(newCartItems));
        localStorage.setItem('cart', JSON.stringify(newCartItems));
        // window.location.href = '/cart'
        window.dispatchEvent(new Event('storage', { key: 'cart' }));

        const updatedCart = [...newCartItems];
        setCart(updatedCart);

    };
    const handlePayment = async () => {
        setLoading(true);

        // Call your backend to create a Razorpay order
        const res = await fetch('/api/order', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ amount: totalPrice }), // Amount in INR
        });
        if (!res.ok) {
            throw new Error(`Failed to fetch: ${res.statusText}`);
        }
    
        const data = await res.json();
console.log("data",)
        // Check if the order creation was successful
        if (data.id) {
            const razorpay = await loadRazorpay();

            if (!razorpay) {
                console.log('Failed to load Razorpay SDK');
                setLoading(false);
                return;
            }

            // Open Razorpay Checkout with order details
            const options = {
                key: "rzp_live_qcxMgOYqlU0Aez",
                amount: totalPrice,
                currency: "INR",
                order_id: data.id,
                handler: function (response) {
                    let data = {
                        id: sessionStorage.getItem("user_order_id_elec"),
                        order_number: response.razorpay_order_id,
                        payment_id: response.razorpay_payment_id,
                        status: "completed"
                    }
                    handleUpdateOrder(data)
                    console.log('Payment successful: ' + response.razorpay_payment_id);

                    console.log("responseresponse", response);
                    setLoading(false);
                },
                theme: {
                    color: "#F37254",
                },
            };

            const rzp = new window.Razorpay(options);
            rzp.open();
        } else {
            console.log('Error creating order');
            console.log("error", error)
            setLoading(false);
        }
    };
    const handleUpdateOrder = (data) => {
        updateMutation.mutate(data);
    }
    const handleCreateOrder = () => {
        console.log(cart);
        const tempOrderItems = cart?.map(item => {
            return {
                product_id: item.id,
                quantity: 1,
                price: item.price
            }
        })

        let data = {
            total_amount: totalPrice,
            items: tempOrderItems
        }
        console.log(data);
        mutation.mutate(data);

    }
    const createOrderAndHandlePayment = async () => {
        try {

            const orderId = sessionStorage.getItem("user_order_id_elec");

            if (orderId) {
                await handlePayment();
            } else {
                console.log("order id not present")
            }
        } catch (error) {
            // Handle any errors that may occur
            console.error("An error occurred:", error);
        }
    }
    const handleContinuePurchasing = () => {
        window.location.href = '/user/home'
    }
    const handlePlaceOrder = () => {
        const electoken = sessionStorage.getItem('token');

        console.log("Orelectoken:", electoken);

        if (electoken) {
            handleCreateOrder();
        }
        else {
            setOpenLoginMdal(true)
        }

    }
    const onLogoutModalClose = () => {
        setOpenLoginMdal(false);
    }
    const handleSignUpModal = () => {
        setOpenLoginMdal(false);
        setOpenSignupMpdal(true);
    }
    const handleModal = () => {
        setOpenSignupMpdal(false);

    }
    return (
        <div style={{ backgroundColor: 'white !important', height: '100vh !important' }}>
            <UserHeader />
            <Grid container style={{ justifyContent: 'center', backgroundColor: 'white !important' }} className="light_bg">
                <Grid item size={{ xs: 12, md: 12, lg: 12, sm: 12 }} style={{ display: 'flex', justifyContent: 'center' }}>

                    <div style={{ ...styles.fullwidth }}>
                        <div style={{ ...styles.center, ...styles.fullwidth }}>

                            <h1
                                style={{
                                    ...styles.mainsubhead,
                                    ...styles.aboutheadpadding,
                                    // ...styles.pt3,
                                    // ...styles.aboutHead,
                                }}
                            >
                                Shopping Cart
                            </h1>
                        </div>
                        <Grid container style={{ ...styles.center, ...styles.fullwidth }}>
                            <Grid item size={{ xs: 12, md: 12, lg: 12, sm: 12 }} className="hide_above_mob"
                                style={{ ...styles.contentleft, ...styles.padding }}>
                                <p style={styles.subheading}>
                                    Total:{totalPrice}₹
                                </p>
                            </Grid>

                            <Grid item size={{ xs: 12, md: 8, lg: 8, sm: 12 }}
                                style={{ ...styles.contentleft, ...styles.padding, ...styles.column }}>
                                <p style={styles.subheading}>
                                    number Courses in Cart
                                </p>
                                {/* {JSON.stringify(cartItems)} */}

                                {
                                    cartItems?.length ? (
                                        cartItems.map((item, index) => (
                                            <div key={index}>
                                                <CartItem
                                                    index={index}
                                                    title={item.title}
                                                    price={item.price}
                                                    validity={item.validity}
                                                    image={item.image}
                                                    description={item.short}
                                                    removeItem={removeItem}
                                                />
                                            </div>
                                        ))
                                    )
                                        : <></>
                                }
                            </Grid>
                            <Grid item
                                size={{ xs: 0, md: 3, lg: 4, sm: 0 }}
                                className=""
                                style={{ ...styles.contentleft, ...styles.padding, ...styles.column }}>

                                <p style={styles.subheading}>
                                    Total
                                </p>
                                {/* <div style={{ ...styles.checkoutPadding }} > */}
                                <Typography variant="body2" color="text.secondary" sx={{ mt: 2, mb: 2 }}>

                                    {totalPrice}₹
                                </Typography>
                                <Button size="small"
                                    sx={{ height: "60px !important" }}
                                    variant="contained"
                                    onClick={cartItems.length ? handlePlaceOrder : handleContinuePurchasing}

                                >
                                    {cartItems.length ? "Place Order" : "Continue Purchasing"}                                </Button>
                                {/* </div> */}


                            </Grid>
                            {/* <Grid item size={{ xs: 12, md: 6, lg: 12, sm: 12 }} className="hide_above_mob">
                                <Paper elevation={3} className="checkout-footer-btn">
                                    <Button
                                        onClick={cartItems.length ? handlePlaceOrder : handleContinuePurchasing}
                                        sx={{ height: "60px !important", width: '95%' }}
                                        variant="contained"
                                    >
                                        {cartItems.length ? "Place Order" : "Continue Purchasing"}
                                    </Button>
                                </Paper>
                            </Grid> */}
                        </Grid>
                    </div >
                </Grid >

            </Grid >
            <LoginModal
                openLoginModal={openLoginModal}
                onLogoutModalClose={onLogoutModalClose}
                handleSignUpModal={handleSignUpModal}
                openSignUpModal={openSignUpModal}
            />
            <SignUpModal
                openSignUpModal={openSignUpModal}
                handleModal={handleModal}


            />
        </div >
    )
}
const styles = {

    padding: {
        padding: '2%',
    },
    checkoutPadding: {
        padding: '2%',
    },
    sliderImage: {
        width: '100%',
        height: '500px', // Adjust the height as needed
        objectFit: 'cover',
    },
    mainsubhead: {
        fontSize: "45px", // Adjust font size as needed
        margin: "0", // No margin for subheading
        fontFamily: "DM Serif Display, serif",
        paddingBottom: "2%",
        color: "black",
    },
    fullwidth: { width: "100%" },
    contentleft: {
        display: 'flex',
        justifyContent: 'left'
    },
    center: {
        display: 'flex',
        justifyContent: 'center'
    },
    column: {
        flexDirection: 'column',
    },
    subheading: {
        fontSize: "22px", // Adjust font size as needed
        margin: "0", // No margin for subheading
        fontFamily: "DM Serif Display, serif",
        paddingBottom: "2%",
        color: "black",
    },
};