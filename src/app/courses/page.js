"use client"
import { Header } from "@/components/sharables/Header";
import MediaCard from "@/components/sharables/subjectCard";
import { useCart } from "@/context/cartContext";
import Grid from "@mui/material/Grid2";
import React, { useEffect, useState } from "react";
import { useSubjects } from '../../services/PracticeQueris';
import { Alert, Snackbar } from "@mui/material";
import { CourseViewModal } from "@/components/sharables/CourseViewModal";
import  '@/components/sharables/sharables.css'

export default function Home() {
  // const [courseListItems, setCourseListtems] = useState(subjectListItems);
  const { cart, setCart } = useCart(); // Destructure both cart and setCart
  const [showAlert, setShowAlert] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [viewItem, setViewItem] = useState({})
  const [alertMessage, setAlertMessage] = useState("");
  const [isError, setError] = useState(false);
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
  const [courseListItems, setCourseListtems] = useState([]);
  const { data: subjectListDatas, isLoading, error } = useSubjects(); // Call the custom hook
  useEffect(() => {
    console.log("subjectListItems", subjectListDatas)

    if (subjectListDatas) {
      setCourseListtems(subjectListDatas.data); // Set course list items when data is available
    }
  }, [subjectListDatas]);
  const handlealertClose = () => {
    setShowAlert(false)
  }
  const handleView = (item) => {
    setViewItem(item);
    setShowViewModal(true);
  }
  const closeView = () => {
    setShowViewModal(!showViewModal);
  }

  return (
    <div>
      <Header />
      <Grid container 
      style={{ justifyContent: 'center', backgroundColor: '#012967 !important', height: '100vh' }} 
      className="light_bg">

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

        <Grid container sx={{ pt: 0, pb: 2, pl:{sm:3, lg:15,xs:3,md:10}, pr: {sm:3, lg:15,xs:3,md:10} }}
          style={{
             justifyContent: 'center',
            alignItems: "center",
            alignContent: 'center',
            backgroundColor: "#012967"
          }}
          rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 5 }}
        >
          <CourseViewModal
            showViewModal={showViewModal}
            closeView={closeView}
            item={viewItem} />
          <Grid item size={{ xs: 12, md: 12, lg: 12, sm: 12 }} 
          style={{ display: 'flex', justifyContent: 'center' }}>
            <h1 style={styles.mainheading}>Our Courses</h1>

          </Grid>
          {
            courseListItems.length != 0 ?
              courseListItems.map((item, index) => (
                <Grid item
                  size={{ xs: 11, md: 5, lg: 4, sm: 11 }} key={index} >
                  <MediaCard
                    // Title={"Electrical & Electronics Engineering"}
                    item={item}
                    //Title={item.title}
                    handleCartItem={handleCartItem}
                    handleView={handleView}
                  />
                </Grid>))
              : <></>}

        </Grid>
      </Grid>
    </div>
  )
}
const styles = {

  mainheading: {
    fontSize: "65px", // Adjust font size as needed
    margin: "0 0 10px 0", // Margin below heading
    fontFamily: "DM Serif Display, serif",
    color: 'white',
    paddingTop: '0px !important'
  },
  sliderImage: {
    width: '100%',
    height: '500px', // Adjust the height as needed
    objectFit: 'cover',
  }
};