"use client";

import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid2";
import { PracticeHeader } from "../practice/PracticeHeader";
import StyledGreyButton from "@/styles/ButtonStyles";
import MediaCard from "../sharables/subjectCard";
import { subjectListItems} from '../../data'

import './home.css';
import { useSubjects } from "@/services/PracticeQueris";
export const Dashboard = () => {
  const [courseListItems, setCourseListtems] = useState([]);
  const { data: subjectListDatas, isLoading, error } = useSubjects(); // Call the custom hook
  useEffect(() => {
    console.log("subjectListItems",subjectListDatas)

    if (subjectListDatas) {
       setCourseListtems(subjectListDatas.data); // Set course list items when data is available
    }
  }, [subjectListDatas]);
  const handleGetStarted = () => {
    window.location.href = '/practice'
  }
  const handleCartItem =()=>{
    
  }
  return (
    <div style={{ backgroundColor: "lightgray" }}>
      <PracticeHeader />
      <Grid container style={styles.container}>
        <div style={styles.main}>
          <div
            style={{
              ...styles.featureItembox,
              ...styles.center,
              ...styles.fullwidth,
              ...styles.darkshade,
            }}
          >
            <div
            className="main_div_width main_div center_column"
              
            >
              <h1 className="home_header home_header_size" >Welcome To Dashboard</h1>
              <div  className="main_div_width main_div ">
                <p style={styles.mainsubhead}>Want to take a test?</p>
                <StyledGreyButton
                  onClick={handleGetStarted}
                  sx={{ ml: "10px !important", width: "200px !important" }}
                  variant="contained"

                >
                  GET STARTED
                </StyledGreyButton>
              </div>

            </div>
          </div>
        </div>
      </Grid>
      <Grid container sx={{ paddingTop: 2, pb: 2 ,pl:1,pr:1}} style={{
        // justifyContent: 'space-around',
        alignItems: "center", alignContent: 'center', backgroundColor: "#012967"
      }} spacing={2}>
           

        <Grid item size={{ xs: 12, md: 12, lg: 12, sm: 12 }}
          style={{ display: 'flex', justifyContent: 'center' }}>
          <h1 className="home_header home_header_size">Our Subjects</h1>

        </Grid>
       

        {
            courseListItems?.length != 0 ?
            courseListItems?.map((item, index) => (
        <Grid item
          size={{ xs: 11, md: 4, lg: 4, sm: 11 }} key={index} >
          <MediaCard
            // Title={"Electrical & Electronics Engineering"}
            item={item}
                    //Title={item.title}
          />
        </Grid>))
         :<></>}
      </Grid>
    </div>
  );
};
const styles = {
  container: {
    // position: "relative", // Ensure that child elements are positioned relative to this container
    height: "500px", // Full viewport height
    width: "100%", // Full width
  },
  main: {
    backgroundImage: "url(/assets/images/electicsignbg.png)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
    top: 0,
    left: 0,
    display: "flex",
    justifyContent: "center",
    // zIndex: 1,
  },
  footer: {
    backgroundImage: "url(/assets/images/footer.png)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
    top: 0,
    left: 0,
    display: "flex",
    justifyContent: "center",
    // zIndex: 1,
  },
  spacearound: {
    justifyContent: "space-around",
  },
  content: {
    // position: "relative", // Positioned relative to the container
    // zIndex: 2, // Ensure it is above the background image
    color: "white", // Text color
    textAlign: "left", // Center text horizontally
    padding: "20px",
    display: "flex",
    // width:'60%'
  },
  contentBox: {
    width: "60%",
  },
  dirColumn: {
    flexDirection: "column",
  },
  center: {
    justifyContent: "center",
  },
  flexend: {
    justifyContent: "flex-end",
  },
  mainheading: {
    fontSize: "65px", // Adjust font size as needed
    margin: "0 0 10px 0", // Margin below heading
    fontFamily: "DM Serif Display, serif",
    color: 'white'
  },
  mainsubhead: {
    fontSize: "22px", // Adjust font size as needed
    margin: "0", // No margin for subheading
    fontFamily: "DM Serif Display, serif",
    paddingBottom: "2%",
    color: "white",
  },

  heading: {
    fontSize: "10vh", // Adjust font size as needed
    margin: "0 0 10px 0", // Margin below heading
    fontFamily: "DM Serif Display, serif",
  },

  subheading: {
    fontSize: "19px", // Adjust font size as needed
    margin: "0", // No margin for subheading
    fontFamily: "DM Serif Display, serif",
    paddingBottom: "2%",
    color: "white",
  },
  fullwidth: { width: "100%" },
  darkshade: { backgroundColor: "#6b6868ba" },
  aboutcontainer: {
    // position: "relative", // Ensure that child elements are positioned relative to this container
    height: "600px", // Full viewport height
    width: "100%", // Full width
  },
  aboutheadpadding: {
    paddingTop: "8%",
    paddingBottom: "2%",
  },
  pt3: { paddingTop: "3% !important" },
  pl3: { paddingLeft: "3% !important" },

  aboutHead: {
    fontSize: "40px !important", // Adjust font size as needed
  },
  bluebox: {
    padding: "4%",
    backgroundColor: "#003180ff",
    border: "1px solid #194a99ff",
    height: "220px",
    borderRadius: "10px",
  },
  blueboxhead: {
    fontSize: "19px", // Adjust font size as needed
    margin: "0", // No margin for subheading
    fontFamily: "DM Serif Display, serif",
    paddingBottom: "2%",
    color: "white",
  },
  gridbox: {
    display: "grid",
    justifyItems: "center",
  },
  featureContainer: {
    backgroundColor: "#ced1d6",
    // position: "relative", // Ensure that child elements are positioned relative to this container
    height: "auto", // Full viewport height
    width: "100%",
    display: "flex",
    padding: "5% 15%",
  },
  featurebox: {
    padding: "2%",
    backgroundColor: "#061b33",
    border: "1px solid #3b5f9a",
    borderRadius: "10px",
    // boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
  },
  featureItembox: {
    display: "flex",
    paddingBottom: "2%",
  },
};

// const styles = {
//     container: {
//         height: "650px",
//         width: "100%",
//         position: "relative",
//         backgroundColor:"red",
//         display: "flex",
//         justifyContent: "center",
//     },
//     blueboxhead: {
//         fontSize: "20px", // Adjust font size as needed
//         margin: "0", // No margin for subheading
//         fontFamily: "DM Serif Display, serif",
//         paddingBottom: "2%",
//         color: "white",
//       },
//       subheading: {
//         fontSize: "18px", // Adjust font size as needed
//         margin: "0", // No margin for subheading
//         fontFamily: "DM Serif Display, serif",
//         paddingBottom: "2%",
//         color: "white",
//       },
// };
