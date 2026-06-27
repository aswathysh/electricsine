"use client"
import { Header } from "@/components/sharables/Header";
import MediaCard from "@/components/sharables/subjectCard";
import { useCart } from "@/context/CartContext";
import Grid from "@mui/material/Grid2";
import React, { useState } from "react";
import { Alert, Snackbar } from "@mui/material";
import { CourseViewModal } from "@/components/sharables/CourseViewModal";
import '@/components/sharables/sharables.css';

export default function CoursesClient({ subjects = [] }) {
  const { setCart } = useCart();
  const [showAlert, setShowAlert] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [viewItem, setViewItem] = useState({});
  const [alertMessage, setAlertMessage] = useState("");

  const showUserAlert = (message, success = true) => {
    setIsSuccess(success);
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
      setIsSuccess(false);
    }, 6000);
  };

  const updateCartStorage = (updatedCart) => {
    sessionStorage.setItem('cart', JSON.stringify(updatedCart));
    setCart([...updatedCart]);
  };

  const handleCartItem = (item) => {
    const existingCart = JSON.parse(sessionStorage.getItem('cart')) || [];
    const isItemInCart = existingCart.some((cartItem) => cartItem.id === item.id);

    if (!isItemInCart) {
      const newCart = [...existingCart, item];
      updateCartStorage(newCart);
      showUserAlert(`Added ${item.title} to cart`, true);
    } else {
      showUserAlert(`${item.title} is already in the cart`, false);
    }
  };

  const handlePurchaseItem = (item) => {
    const existingCart = JSON.parse(sessionStorage.getItem('cart')) || [];
    const isItemInCart = existingCart.some((cartItem) => cartItem.id === item.id);

    if (!isItemInCart) {
      const newCart = [...existingCart, item];
      updateCartStorage(newCart);
      showUserAlert(`Added ${item.title} to cart and redirecting to purchase`, true);
    } else {
      showUserAlert(`${item.title} is already in the cart. Redirecting to cart.`, true);
    }

    window.location.href = '/cart';
  };

  const handleView = (item) => {
    setViewItem(item);
    setShowViewModal(true);
  };

  const handleAlertClose = () => {
    setShowAlert(false);
  };

  return (
    <div>
      <Header />
      <Grid container style={{ justifyContent: 'center', backgroundColor: '#012967 !important', minHeight: '100vh' }} className="light_bg">
        <Snackbar
          open={showAlert}
          autoHideDuration={6000}
          onClose={handleAlertClose}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
          <Alert
            onClose={handleAlertClose}
            severity={isSuccess ? 'success' : 'warning'}
            variant="outlined"
            sx={{ width: 'auto', backgroundColor: '#FCDFDF' }}
          >
            {alertMessage}
          </Alert>
        </Snackbar>

        <Grid container sx={{ pt: 0, pb: 2, pl: { sm: 3, lg: 15, xs: 3, md: 10 }, pr: { sm: 3, lg: 15, xs: 3, md: 10 } }}
          style={{ justifyContent: 'center', alignItems: 'center', alignContent: 'center', backgroundColor: '#012967' }}
          rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 5 }}
        >
          <CourseViewModal showViewModal={showViewModal} closeView={() => setShowViewModal(false)} item={viewItem} />

          <Grid item size={{ xs: 12, md: 12, lg: 12, sm: 12 }} style={{ display: 'flex', justifyContent: 'center' }}>
            <h1 style={styles.mainheading}>Our Courses</h1>
          </Grid>

          {subjects.length > 0 ? (
            subjects.map((item, index) => (
              <Grid item size={{ xs: 11, md: 5, lg: 4, sm: 11 }} key={item.id ?? index}>
                <MediaCard
                  item={item}
                  handleCartItem={handleCartItem}
                  handleView={handleView}
                  handlePurchase={handlePurchaseItem}
                />
              </Grid>
            ))
          ) : (
            <Grid item size={{ xs: 12, md: 12, lg: 12, sm: 12 }} style={{ textAlign: 'center' }}>
              <p style={styles.emptyMessage}>No subjects available right now.</p>
            </Grid>
          )}
        </Grid>
      </Grid>
    </div>
  );
}

const styles = {
  mainheading: {
    fontSize: '65px',
    margin: '0 0 10px 0',
    fontFamily: 'DM Serif Display, serif',
    color: 'white',
    paddingTop: '0px !important',
  },
  emptyMessage: {
    color: 'white',
    fontSize: '20px',
  },
};
