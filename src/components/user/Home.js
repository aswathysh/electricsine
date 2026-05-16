"use client"
import { usePurchasedSubjects, useSampleQuestionSections, useSubjects } from '@/services/PracticeQueris';
import StyledGreyButton from '@/styles/ButtonStyles';
import Grid from '@mui/material/Grid2';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from "react";
import '../sharables/sharables.css';
import { CourseViewModal } from '@/components/sharables/CourseViewModal'
import { useCart } from '@/context/cartContext';
import { Alert, Snackbar } from '@mui/material';
export const UserHome = () => {
    const router = useRouter();
    const { cart, setCart } = useCart();
    const [courseListItems, setCourseListtems] = useState([]);
    const [showViewModal, setShowViewModal] = useState(false);
    const [viewItem, setViewItem] = useState({});
    const [showAlert, setShowAlert] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");

    const { data: subjectListDatas, isLoading, error } = usePurchasedSubjects(); // Call the custom hook
    console.log("subjectListItems", subjectListDatas)
    

    useEffect(() => {
        // Only run the effect if data is available and not in a loading state
        if (isLoading) {
            console.log("Loading...");
            return; // Early return to avoid further logic while loading
        }

        if (error) {
            console.log("Error:", error);
            return; // Early return to avoid further logic if error
        }

        // Ensure that subjectListDatas is not undefined
        if (subjectListDatas && subjectListDatas.data) {
            console.log("subjectListItems", subjectListDatas);
            setCourseListtems(subjectListDatas.data); // Set course list items when data is available
        }
    }, [subjectListDatas, isLoading, error]);
    const handleCartItem = (item) => {
        const existingCart = JSON.parse(sessionStorage.getItem('cart')) || [];

        const isItemInCart = existingCart.some(cartItem => cartItem.id === item.id);

        if (!isItemInCart) {
            existingCart.push(item);
            sessionStorage.setItem('cart', JSON.stringify(existingCart));
            const updatedCart = [...existingCart];
            setCart(updatedCart);
            let msg = `Added ${item.title} to cart`;
            setIsSuccess(true);
            setAlertMessage(msg);
            setShowAlert(true);
            setTimeout(() => {
                setShowAlert(false);
                setIsSuccess(false);
            }, 20000);
        } else {
            let msg = `${item.title} is already in the cart`;
            setIsSuccess(false);
            setAlertMessage(msg);
            setShowAlert(true);
            setTimeout(() => {
                setShowAlert(false);
            }, 20000);
            //alert(`${item.title} is already in the cart`);
        }

        console.log(existingCart);

    }
    const handlePracticeMode = (id) => {
// alert("comming soon")
       window.location.href=`practice/${id}`;
    }
    const handleExamMode = (id) => {
        // alert("comming soon")

        window.location.href=`exam/${id}`;
    }
    const handleView = (item) => {
        setViewItem(item);
        setShowViewModal(true);
    }
    const handleTryItOut = (item) => {
        // setViewItem(item);
        // setShowViewModal(true);
         window.location.href=`sample_questions/${item.id}`;

    }
    const closeView = () => {
        setShowViewModal(!showViewModal);
    }
    // const handlePurchase = () => {
    //     win
    // }
    const handlealertClose = () => {
        setShowAlert(false)
    }
    return (
        <Grid container style={{ ...styles.center, ...styles.fullwidth }} sx={{ mt: 3 }}>
            <Snackbar
                open={showAlert}
                autoHideDuration={6000}
                onClose={handlealertClose}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            >
                <Alert
                    onClose={handlealertClose}
                    severity={isSuccess ? "success" : "warning"}
                    variant="outlined"
                    sx={{ width: 'auto', backgroundColor: '#FCDFDF' }}

                >
                    {alertMessage}
                </Alert>
            </Snackbar>
            {courseListItems?.map((item) =>
                <>

                    <Grid container size={{ xs: 10, md: 8, lg: 8, sm: 10 }}
                        sx={{
                            backgroundColor: 'white', border: '1px solid grey',
                            borderRadius: 2, mt: 3, mb: 2
                        }}
                    >
                        {/* <div style={{ ...styles.center, ...styles.fullwidth }}> */}
                        <Grid item container size={{ xs: 12, md: 0, lg: 0, sm: 12 }}
                            style={{
                                position: 'relative', minHeight: '200px', display: 'flex',
                                flexDirection: { lg: 'row', sm: 'column' }
                            }}>
                            <Image
                                className="responsive-image"

                                // width={200}
                                // height={200}
                                layout="fill"
                                objectFit="cover"
                                src={item.image ? `https://rubiksoftwares.com/demoelectric/public${item?.image}` : '/assets/images/logincoverpic.jpg'}
                                alt="courseimg" />
                        </Grid>
                        <Grid item size={{ xs: 0, md: 3, lg: 3, sm: 0 }}
                            style={{
                                position: 'relative', minHeight: '200px',
                            }}>
                            <Image
                                className="responsive-image"

                                // width={200}
                                // height={200}
                                layout="fill"
                                objectFit="cover"
                                src={item.image ? `https://rubiksoftwares.com/demoelectric/public${item?.image}` : '/assets/images/logincoverpic.jpg'}
                                alt="courseimg" />
                        </Grid>
                        <Grid item size={{ xs: 12, md: 9, lg: 9, sm: 12 }}
                            sx={{ paddingLeft: { lg: '20px', md: '20px', sm: '0px', xs: '0px' } }}>
                            <Grid item size={{ xs: 12, md: 12, lg: 12, sm: 12 }}
                                sx={{ paddingLeft: { lg: '0px', md: '0px', sm: '10px', xs: '10px' } }}

                                style={{ ...styles.contentleft, ...styles.pleft }}>
                                <p className='subject_card_title mt5 title-font'>
                                    {item.title}
                                </p>
                            </Grid>
                            <Grid item size={{ xs: 12, md: 12, lg: 12, sm: 12 }}
                                sx={{ paddingLeft: { lg: '0px', md: '0px', sm: '10px', xs: '10px' } }}

                                style={{ ...styles.contentleft }}>
                                <p
                                    className='mt5 subject_card_subtitle sub-font mb'

                                >
                                    {item.description}
                                </p>
                            </Grid>
                            {/* </div> */}
                            {item.has_access == 0 ?

                                <Grid container spacing={2} 
                                sx={{ alignItems: 'center', mb: { lg: 0, md: 0, sm: 2, xs: 2 } }}
                                    style={{ ...styles.center }}>
                                    <Grid item size={{ xs: 3, md: 3, lg: 3, sm: 3 }}>
                                        <StyledGreyButton
                                            onClick={() => handleView(item)}
                                            sx={{
                                                ml: { lg: '10px', md: '10px', sm: '0px', xs: '0px' },
                                                width: { lg: "120px !important", sm: "100px !important", md: "120px !important", xs: "120px !important" }
                                            }}
                                            variant="contained"
                                        >
                                            View
                                        </StyledGreyButton>
                                    </Grid>
                                    <Grid item size={{ xs: 3, md: 3, lg: 3, sm: 3 }}>
                                        <StyledGreyButton
                                            onClick={() => handleTryItOut(item)}
                                            sx={{
                                                ml: { lg: '10px', md: '10px', sm: '0px', xs: '0px' },
                                                width: { lg: "120px !important", sm: "100px !important", md: "120px !important", xs: "120px !important" }
                                            }}
                                            variant="contained"

                                        >
                                            Try it out
                                        </StyledGreyButton>
                                    </Grid>
                                    <Grid item size={{ xs: 3, md: 3, lg: 3, sm: 3 }}>
                                        <StyledGreyButton

                                            onClick={() => handleCartItem(item)}

                                            sx={{
                                                ml: { lg: '10px', md: '10px', sm: '0px', xs: '0px' },
                                                width: { lg: "120px !important", sm: "100px !important", md: "120px !important", xs: "120px !important" }
                                            }}
                                            variant="contained"

                                        >
                                            Purchase
                                        </StyledGreyButton>
                                    </Grid>
                                </Grid> :
                                <Grid container spacing={2}
                                 sx={{ alignItems: 'center', mb: { lg: 0, md: 0, sm: 2, xs: 2 } }}
                                    style={{ ...styles.center }}>

                                    <Grid item size={{ xs: 4, md: 4, lg: 4, sm: 4 }}>
                                        <StyledGreyButton
                                            onClick={() => handlePracticeMode(item.id)}
                                            sx={{
                                                ml: { lg: '10px', md: '10px', sm: '0px', xs: '0px' },

                                                width: { lg: "200px !important", sm: "150px !important", md: "200px !important", xs: "150px !important" }
                                            }}
                                            variant="contained"

                                        >
                                            Practice Mode
                                        </StyledGreyButton>
                                    </Grid>
                                    <Grid item size={{ xs: 4, md: 4, lg: 4, sm: 4 }}>
                                        <StyledGreyButton

                                            onClick={() => handleExamMode(item.id)}

                                            sx={{
                                                ml: { lg: '10px', md: '10px', sm: '0px', xs: '0px' },

                                                width: { lg: "200px !important", sm: "150px !important", md: "200px !important", xs: "150px !important" }
                                            }}
                                            variant="contained"

                                        >
                                            Exam Mode
                                        </StyledGreyButton>
                                    </Grid>
                                </Grid>
                            }
                        </Grid>

                    </Grid >
                </>

            )
            }
            <CourseViewModal
                showViewModal={showViewModal}
                closeView={closeView}
                item={viewItem} />
        </Grid >
    )
}
const styles = {

    padding: {
        padding: '2%',
    },
    // checkoutPadding: {
    //     padding: '2%',
    // },
    // sliderImage: {
    //     width: '100%',
    //     height: '500px', // Adjust the height as needed
    //     objectFit: 'cover',
    // },
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
    heading: {
        fontSize: "22px", // Adjust font size as needed
        margin: "0", // No margin for subheading
        fontFamily: "DM Serif Display, serif",
        paddingBottom: "2%",
        color: "black",
    },
    description: {
        fontSize: "18px", // Adjust font size as needed
        margin: "0", // No margin for subheading
        fontFamily: "DM Serif Display, serif",
        paddingBottom: "2%",
        color: "black",
    },
    pleft: {
        paddingLeft: '40px !important'
    },

};