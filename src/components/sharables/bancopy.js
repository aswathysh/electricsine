import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import { Grid } from "@mui/material";
import { Directions } from "@mui/icons-material";
export const Banner = () => {
  return (
    <div style={styles.mainbg}>
      <Grid container style={styles.container}>
        <div style={styles.main}>
          <div style={styles.overlay}>
            <div
              style={{
                ...styles.content,
                ...styles.center,
                ...styles.dirColumn,
              }}
            >
              <h1 style={styles.heading}>
                Electric Sine: Online Examination System
              </h1>
              <p style={styles.subheading}>
                Effortless exams for a brighter future
              </p>
            </div>
          </div>
        </div>
      </Grid>
      {/* <Grid container style={styles.aboutcontainer}>
        <div style={styles.about}>
          <div style={styles.overlay}>
            <div
              style={{
                ...styles.content,
                ...styles.contentBox,
                ...styles.dirColumn,
              }}
            >
              <h1
                style={{
                  ...styles.heading,
                  ...styles.aboutheadpadding,
                  ...styles.aboutHead,
                }}
              >
                About Us
              </h1>
              <p style={styles.subheading}>
                We are a team of passionate educators and tech experts dedicated
                to revolutionizing online assessments.
              </p>
              <Grid
                container
                spacing={{ xs: 2, md: 3, lg: 4, sm: 2 }}
                sx={{ pt: 3 }}
                style={{ display: "flex", justifyContent: "space-around" }}
              >
                <Grid
                  item
                  lg={5.7}
                  md={5.7}
                  sm={12}
                  xs={12}
                  style={{ ...styles.bluebox }}
                >
                  <h1 style={{ ...styles.blueboxhead }}>Mission</h1>
                  <p style={styles.subheading}>
                    To empower educators and learners with a seamless and secure
                    online examination platform.
                  </p>
                </Grid>
                <Grid
                  item
                  lg={5.7}
                  md={5.7}
                  sm={12}
                  xs={12}
                  style={{ ...styles.bluebox }}
                >
                  <h1 style={{ ...styles.blueboxhead }}>Vision</h1>
                  <p style={styles.subheading}>
                    To become the leading provider of innovative and accessible
                    online assessment solutions.
                  </p>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      </Grid> */}
      <Grid container style={{ ...styles.featureContainer, ...styles.center }}>
        <div style={{ ...styles.featurebox, ...styles.gridbox }}>
          <Grid item lg={11} md={11}>
            <div style={{ ...styles.content, ...styles.dirColumn }}>
              <h1
                style={{
                  ...styles.heading,
                  ...styles.aboutheadpadding,
                  ...styles.pt3,
                  ...styles.aboutHead,
                }}
              >
                Our Features
              </h1>
              <p style={styles.subheading}>
                Our system is packed with features designed to enhance the exam
                experience for both educators and students.
              </p>
            </div>
          </Grid>
          <Grid
            item
            lg={11}
            md={11}
            style={{ ...styles.featureItembox }}
            sx={{ p: "2%" }}
          >
            <Grid container>
              <Grid
                item
                lg={6}
                md={6}
                sm={12}
                xs={12}
                style={{ ...styles.featureItembox }}
              >
                <Grid item lg={2} md={2}>
                  <div className="gridItems">
                    <h1 style={{ fontSize: "25px" }}>1</h1>
                  </div>
                </Grid>
                <Grid item lg={8} md={8}>
                  <h1 style={{ ...styles.blueboxhead }}>Customizable Exams</h1>
                  <p style={styles.subheading}>
                    Create exams tailored to your specific needs with a wide
                    array of question types, difficulty levels, and time limits.
                  </p>
                </Grid>
              </Grid>
              <Grid
                item
                lg={6}
                md={6}
                sm={12}
                xs={12}
                style={{ ...styles.featureItembox }}
              >
                <Grid item lg={2} md={2}>
                  <div className="gridItems">
                    <h1 style={{ fontSize: "25px" }}>2</h1>
                  </div>
                </Grid>
                <Grid item lg={8} md={8}>
                  <h1 style={{ ...styles.blueboxhead }}>Customizable Exams</h1>
                  <p style={styles.subheading}>
                    Create exams tailored to your specific needs with a wide
                    array of question types, difficulty levels, and time limits.
                  </p>
                </Grid>
              </Grid>
              <Grid
                item
                lg={6}
                md={6}
                sm={12}
                xs={12}
                style={{ ...styles.featureItembox }}
              >
                <Grid item lg={2} md={2}>
                  <div className="gridItems">
                    <h1 style={{ fontSize: "25px" }}>3</h1>
                  </div>
                </Grid>
                <Grid item lg={8} md={8}>
                  <h1 style={{ ...styles.blueboxhead }}>Customizable Exams</h1>
                  <p style={styles.subheading}>
                    Create exams tailored to your specific needs with a wide
                    array of question types, difficulty levels, and time limits.
                  </p>
                </Grid>
              </Grid>
              <Grid
                item
                lg={6}
                md={6}
                sm={12}
                xs={12}
                style={{ ...styles.featureItembox }}
              >
                <Grid item lg={2} md={2}>
                  <div className="gridItems">
                    <h1 style={{ fontSize: "25px" }}>4</h1>
                  </div>
                </Grid>
                <Grid item lg={8} md={8}>
                  <h1 style={{ ...styles.blueboxhead }}>Customizable Exams</h1>
                  <p style={styles.subheading}>
                    Create exams tailored to your specific needs with a wide
                    array of question types, difficulty levels, and time limits.
                  </p>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          {/* <div >
            <div style={{ ...styles.content, ...styles.dirColumn }}>
              <h1
                style={{
                  ...styles.heading,
                  ...styles.aboutheadpadding,
                  ...styles.aboutHead,
                }}
              >
                About Us
              </h1>
              <p style={styles.subheading}>
                We are a team of passionate educators and tech experts dedicated
                to revolutionizing online assessments.
              </p>
              <Grid
                container
                spacing={{ xs: 2, md: 3, lg: 4, sm: 2 }}
                sx={{ pt: 3 }}
                style={{ display: "flex", justifyContent: "space-around" }}
              >
                <Grid
                  item
                  lg={5.7}
                  md={5.7}
                  sm={12}
                  xs={12}
                  style={{ ...styles.bluebox }}
                >
                  <h1 style={{ ...styles.blueboxhead }}>Mission</h1>
                  <p style={styles.subheading}>
                    To empower educators and learners with a seamless and secure
                    online examination platform.
                  </p>
                </Grid>
                <Grid
                  item
                  lg={5.7}
                  md={5.7}
                  sm={12}
                  xs={12}
                  style={{ ...styles.bluebox }}
                >
                  <h1 style={{ ...styles.blueboxhead }}>Vision</h1>
                  <p style={styles.subheading}>
                    To become the leading provider of innovative and accessible
                    online assessment solutions.
                  </p>
                </Grid>
              </Grid>
            </div>
          </div> */}
        </div>
      </Grid>
      <Grid
        container
        style={{ ...styles.aboutcontainer, ...styles.gridbox }}
        sx={{ backgroundColor: "blue" }}
      >
        <Grid item lg={8} md={8}>
          <div style={{ ...styles.content, ...styles.dirColumn }}>
            <h1
              style={{
                ...styles.heading,
                ...styles.aboutheadpadding,
                ...styles.pt3,
                ...styles.aboutHead,
              }}
            >
              Secure Exam Delivery
            </h1>
            <p style={styles.subheading}>
              We understand the importance of secure and reliable exam delivery.
              Our platform utilizes advanced security measures to ensure data
              integrity and prevent unauthorized access.
            </p>
          </div>
        </Grid>
        <Grid
          item
          lg={8}
          md={8}
          style={{ ...styles.featureItembox, ...styles.spacearound }}
        >
          <Grid
            item
            lg={3}
            md={3}
            sm={12}
            xs={12}
            style={{ ...styles.featureItembox, ...styles.dirColumn }}
          >
            <h1 style={{ ...styles.blueboxhead }}>Encryption</h1>
            <p style={styles.subheading}>
              All exam data is encrypted during transmission and storage,
              protecting sensitive information from unauthorized access.
            </p>
          </Grid>
          <Grid
            item
            lg={3}
            md={3}
            sm={12}
            xs={12}
            style={{ ...styles.featureItembox, ...styles.dirColumn }}
          >
            <h1 style={{ ...styles.blueboxhead }}>Redundancy</h1>
            <p style={styles.subheading}>
              Our servers are designed with redundancy, ensuring uninterrupted
              service even in case of hardware failures.
            </p>
          </Grid>
          <Grid
            item
            lg={3}
            md={3}
            sm={12}
            xs={12}
            style={{ ...styles.featureItembox, ...styles.dirColumn }}
          >
            <h1 style={{ ...styles.blueboxhead }}>Authentication</h1>
            <p style={styles.subheading}>
              We use multi-factor authentication to verify user identities,
              ensuring only authorized individuals can access the platform.
            </p>
          </Grid>
        </Grid>
      </Grid>
      <Grid container style={{ ...styles.featureContainer, ...styles.center }}>
        <div style={{ ...styles.featurebox, ...styles.gridbox }}>
          <Grid item lg={11} md={11}>
            <div style={{ ...styles.content, ...styles.dirColumn }}>
              <h1
                style={{
                  ...styles.heading,
                  ...styles.aboutheadpadding,
                  ...styles.pt3,
                  ...styles.aboutHead,
                }}
              >
                Grading and Reporting
              </h1>
              <p style={styles.subheading}>
                Our system automates grading and provides comprehensive
                reporting features, saving you time and effort while offering
                valuable insights into student progress.
              </p>
              <ul className="triangle-list">
      
        <li style={styles.subheading}>Automated Grading</li>
        <li ></li>

    </ul>
            </div>
          </Grid>
        </div>
      </Grid>
    </div>

  );
};
const styles = {
  mainbg: {
    backgroundImage: "url(/assets/images/about.png) !important",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    // height: "100%",
    width: "100%",
  //  position: "absolute",
  },
  gridbox: {
    display: "grid",
    justifyItems: "center",
  },
  container: {
    // position: "relative", // Ensure that child elements are positioned relative to this container
    height: "500px", // Full viewport height
    width: "100%", // Full width
  },
  aboutcontainer: {
   // position: "relative", // Ensure that child elements are positioned relative to this container
    height: "600px", // Full viewport height
    width: "100%", // Full width
  },
  featureContainer: {
    backgroundColor: "#ced1d6",
    position: "relative", // Ensure that child elements are positioned relative to this container
    height: "auto", // Full viewport height
    width: "100%",
    display: "flex",
    padding: "5% 15%",
  },
  main: {
    backgroundImage: "url(/assets/images/electicsignbg.png)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
    position: "absolute", // Position it absolutely within the container
    top: 0,
    left: 0,
    // zIndex: 1,
  },
  about: {
    // backgroundSize: "cover",
    // backgroundPosition: "center",
    // backgroundRepeat: "no-repeat",
    // height: "100%",
    // width: "100%",
    // position: "absolute", // Position it absolutely within the container
    // top: 0,
    // left: 0,
    // zIndex: 1,
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
  overlay: {
    position: "absolute", // Position it absolutely within the container
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(2, 2, 2, 0.65)", // Black color with 50% opacity
   // zIndex: 2, // Ensure it's above the background image
    display: "flex",
    justifyContent: "center",
  },
  content: {
    position: "relative", // Positioned relative to the container
    // zIndex: 2, // Ensure it is above the background image
    color: "white", // Text color
    textAlign: "left", // Center text horizontally
    padding: "20px",
    display: "flex",
  },
  contentBox: {
    width: "51%",
  },
  dirColumn: {
    flexDirection: "column",
  },
  center: {
    justifyContent: "center",
  },
  spacearound: {
    justifyContent: "space-around",
  },
  heading: {
    fontSize: "4rem", // Adjust font size as needed
    margin: "0 0 10px 0", // Margin below heading
    fontFamily: "DM Serif Display, serif",
  },
  subheading: {
    fontSize: "1.2rem", // Adjust font size as needed
    margin: "0", // No margin for subheading
    fontFamily: "DM Serif Display, serif",
    paddingBottom: "2%",
    color: "white",
  },
  aboutheadpadding: {
    paddingTop: "8%",
    paddingBottom: "2%",
  },
  pt3: { paddingTop: "3% !important" },
  aboutHead: {
    fontSize: "2.5em !important", // Adjust font size as needed
  },
  bluebox: {
    padding: "4%",
    backgroundColor: "#003180ff",
    border: "1px solid #194a99ff",
    height: "220px",
    borderRadius: "10px",
  },
  blueboxhead: {
    fontSize: "1.25em", // Adjust font size as needed
    margin: "0", // No margin for subheading
    fontFamily: "DM Serif Display, serif",
    paddingBottom: "2%",
    color: "white",
  },
  slider: {
    width: "100%",
  },
  sliderImage: {
    width: "100%",
    height: "500px", // Adjust the height as needed
    objectFit: "cover",
  },
};
