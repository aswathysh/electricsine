import { Button, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { FiPhone, FiMail } from "react-icons/fi";
import { IoEarthSharp } from "react-icons/io5";
import { Footer } from './footer.js';
import './sharables.css';
import zIndex from '@mui/material/styles/zIndex.js';
export const Banner = () => {
  return (
    <div>
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
              style={{
                ...styles.content,
                ...styles.flexend,
                ...styles.dirColumn,

              }}
              className='contentBox'
            >
              <h1 className='mainheading'>
                Electric Sine: Online Examination System
              </h1>
              <p style={styles.mainsubhead}>
                Effortless exams for a brighter future
              </p>
            </div>
          </div>
        </div>
      </Grid>

      {/*  */}
      <Grid
        container
        style={{
          ...styles.aboutcontainer,
          ...styles.darkshade,
          ...styles.bluebg
        }}
      >
        <Grid
          item
          lg={8}
          md={8}
          style={{ paddingLeft: "2%" }}
        >
          <div style={{ ...styles.content, ...styles.dirColumn }}>
            <h1
              style={{
                ...styles.heading,
                ...styles.aboutheadpadding,
                ...styles.pt3,
                ...styles.aboutHead,
              }}
            >
              About Us
            </h1>
            <p style={styles.subheading}>
              We are a team of passionate educators and tech experts dedicated
              to revolutionizing online assessments.
            </p>
          </div>
        </Grid>
        <Grid
          item
          size={{ lg: 8, md: 8 }}
          columnGap={2}
          rowSpacing={3}
          style={{
            ...styles.featureItembox,
            ...styles.spacearound,
            ...styles.pl3,
            paddingLeft: 6,
            paddingRight: 6
          }}
        >
          <Grid
            item
            lg={4}
            md={4}
            sm={12}
            xs={12}
            // style={{
            //   ...styles.bluebox,
            // }}
            className="bluebox"
          >
            <h1 style={{ ...styles.blueboxhead }}>Mission</h1>
            <p style={styles.subheading}>
              Empower the next generation of engineers with exam-ready knowledge that bridges theory and practical application.
            </p>
          </Grid>
          <Grid
            item
            lg={4}
            md={4}
            sm={12}
            xs={12}
            className="bluebox"
          >
            <h1 style={{ ...styles.blueboxhead }}>Vision</h1>
            <p style={styles.subheading}>
              Become the world’s most trusted platform for electrical, electronics, and instrumentation engineering, helping every engineer succeed in exams, interviews, and real-world projects.
            </p>
          </Grid>
          <Grid
            item
            lg={4}
            md={4}
            sm={12}
            xs={12}
            className="bluebox"
          >
            <h1 style={{ ...styles.blueboxhead }}>Goal</h1>
            <p style={styles.subheading}>
              To become the leading provider of innovative and accessible
              online assessment solutions.
            </p>
          </Grid>
        </Grid>
      </Grid>

      <Grid container style={{ ...styles.center, ...styles.lightbluebg }} className='featureContainer'>
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
                    <h1 style={{ fontSize: "18px", color: 'white' }}>1.</h1>
                  </div>
                </Grid>
                <Grid item lg={8} md={8} className="mob-10 tab-pl5">
                  <h1 style={{ ...styles.blueboxhead }}
                    className=''> Solved Question Papers</h1>
                  <p style={styles.subheading}>
                 Solved papers help users understand exam patterns, build confidence, and improve problem-solving speed for timed tests and interviews in Electrical, Electronics, Communication, and Instrumentation engineering.
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
                    <h1 style={{ fontSize: "18px", color: 'white' }}>2.</h1>
                  </div>
                </Grid>
                <Grid item lg={8} md={8} className="mob-10 tab-pl5">
                  <h1 style={{ ...styles.blueboxhead }} className=''>Objective Type Questions & MCQs</h1>
                  <p style={styles.subheading}>
                    For students preparing for exams and job seekers preparing for interviews, as it directly improves test-taking skills and knowledge recall in Electrical, Electronics, Communication, and Instrumentation engineering.
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
                    <h1 style={{ fontSize: "18px", color: 'white' }}>3.</h1>
                  </div>
                </Grid>
                <Grid item lg={8} md={8} className="mob-10 tab-pl5">
                  <h1 style={{ ...styles.blueboxhead }} className='mobpl5 '>Industry-Relevant Know-How</h1>
                  <p style={styles.subheading}>
                   It covers practical applications, case studies, and modern technologies like AI and automation, essential for becoming a competent professional in the field.
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
                    <h1 style={{ fontSize: "18px", color: 'white' }}>4.</h1>
                  </div>
                </Grid>
                <Grid item lg={8} md={8} className='mob-10 tab-pl5'>
                  <h1 style={{ ...styles.blueboxhead }} className='mobpl5'>Mock Tests</h1>
                  <p style={styles.subheading}>
                   Taking full-length mock tests helps familiarize with exam format and difficulty, crucial for competitive exams like Diploma, B.Tech, GATE, or IES in Electrical, Electronics, Communication, and Instrumentation engineering.
                  </p>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </Grid>

      <Grid
        container
        style={{
          ...styles.aboutcontainer,
          ...styles.darkshade,
          ...styles.bluebg
        }}
        className='mobrl10'
      >
        <Grid
          item
          lg={8}
          md={8}
          style={{ paddingLeft: "2%" }}
        >
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
              We are a team of passionate educators and tech experts dedicated
              to revolutionizing online assessments.
            </p>
          </div>
        </Grid>
        <Grid
          item
          size={{ lg: 8, md: 8 }}
          columnGap={2}
          rowSpacing={3}
          style={{
            ...styles.featureItembox,
            ...styles.spacearound,
            ...styles.pl3,
          }}
        >
          <Grid
            item
            lg={4}
            md={4}
            sm={12}
            xs={12}
            className='securebox'>

            <h1 style={{ ...styles.blueboxhead }}>Encryption</h1>
            <p style={styles.subheading}>
              All exam data is encrypted during transmission and storage, protecting sensitive information from unauthorized access.
            </p>
          </Grid>
          <Grid
            item
            lg={4}
            md={4}
            sm={12}
            xs={12}
            className='securebox'>

            <h1 style={{ ...styles.blueboxhead }}>Redundancy</h1>
            <p style={styles.subheading}>
              Our servers are designed with redundancy, ensuring uninterrupted service even in case of hardware failures.
            </p>
          </Grid>
          <Grid
            item
            lg={4}
            md={4}
            sm={12}
            xs={12}
            className='securebox'>
            <h1 style={{ ...styles.blueboxhead }}>Authentication</h1>
            <p style={styles.subheading}>
              We use multi-factor authentication to verify user identities, ensuring only authorized individuals can access the platform.
            </p>
          </Grid>
        </Grid>
      </Grid>
      <Grid container style={{ ...styles.center, ...styles.lightbluebg }} className="featureContainer">
        <div style={{ ...styles.featurebox, ...styles.gridbox }}>
          <Grid item lg={11} md={11} sm={11} xs={11}>
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
                <li style={styles.subheading}>Detailed Reports</li>
              </ul>
            </div>
          </Grid>
        </div>
      </Grid>

      <div style={styles.footer} className='pb-1 footer'>
        <div className='footer-content-container pb-1' style={{ ...styles.dirColumn }}>
          <div style={styles.overlay}></div>

          <Grid
            container
            style={{
              ...styles.footerCotent,
              ...styles.footerbox,
              ...styles.featureItembox,
              ...styles.darkshade,
              ...styles.center,
              ...styles.fullwidth,
              ...styles.fullHeight,
              ...styles.pt7,

            }}
          >

            <Grid
              item
              size={{ xs: 10, md: 8, lg: 8, sm: 10 }}
              // style={{
              //   ...styles.featureItembox,
              //   ...styles.spacearound,
              //   ...styles.pl3,
              //   ...styles.center,
              //   // ...styles.pt3
              //   ...styles.topCenter
              // }}
              className="footer-row-grid"

            >
              <Grid container
                // className="footer-grid"
                style={{
                  ...styles.footerbox,
                  ...styles.featureItembox,
                  // ...styles.darkshade,
                  ...styles.center,
                  ...styles.fullwidth
                }}>
                <Grid
                  item
                  size={{ xs: 12, md: 4, lg: 4, sm: 12 }}
                  style={{ ...styles.featureItembox, ...styles.dirColumn }}

                >
                  <div><FiPhone color="#609dff" size="50px" /></div>
                  <h1 style={{ ...styles.blueboxhead }}>Phone</h1>
                  <p style={styles.subheading}>
                    +91 7560884560
                  </p>
                </Grid>
                <Grid
                  item
                  size={{ xs: 12, md: 4, lg: 4, sm: 12 }}
                  style={{ ...styles.featureItembox, ...styles.dirColumn }}
                // className='pr-2'

                >
                  <div><FiMail color="#609dff" size="50px" /></div>

                  <h1 style={{ ...styles.blueboxhead }}>Email</h1>
                  <p style={styles.subheading}>
                    electricsine2024@gmail.com
                  </p>
                </Grid>
                <Grid
                  item
                  className='pl-2'
                  size={{ xs: 12, md: 4, lg: 4, sm: 12 }}
                  style={{ ...styles.featureItembox, ...styles.dirColumn }}
                >
                  <div><IoEarthSharp color="#609dff" size="50px" /></div>

                  <h1 style={{ ...styles.blueboxhead }}>Website</h1>
                  <p style={styles.subheading}>
                    electricsine.com
                  </p>
                </Grid>
              </Grid>

            </Grid>
          </Grid>
          <div style={{ ...styles.footerCotent }}>
            <Footer />

          </div>


        </div>
      </div>


    </div>
  );
};
const styles = {
  container: {
    // position: "relative", // Ensure that child elements are positioned relative to this container
    height: "450px", // Full viewport height
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
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    color: "white",
    backgroundColor: "rgba(0, 0, 0, 0.4)", // change this to rgba(128, 128, 128, 0.5) for gray
    zIndex: 1,
  },
  // footer: {

  //   backgroundImage: "url(/assets/images/footer.png)",
  //   backgroundSize: "cover",
  //   backgroundPosition: "center",
  //   backgroundRepeat: "no-repeat",
  //   height: "300px",
  //   width: "100%",
  //   top: 0,
  //   left: 0,
  //   // zIndex: 1,
  // },
  topCenter: { alignItems: 'center' },
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
  fullHeight: { height: "100%" },
  pt7: { paddingTop: "7%" },
  darkshade: {
    backgroundColor: "#8383837d  !important",
  },
  footerCotent: {
    zIndex: 5,
  },
  bluebg:
  {
    backgroundImage: "url(/assets/images/about.png)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },
  paddingTop: {
    paddingTop: '3% !important'
  },
  aboutcontainer: {
    // position: "relative", // Ensure that child elements are positioned relative to this container
    height: "600px", // Full viewport height
    width: "100%", // Full width
    display: 'flex',
    justifyContent: 'center'
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
  long_text_div: {
    width: "100% !important"
  },
  bluebox: {
    padding: "4%",
    backgroundColor: "#003180ff",
    border: "1px solid #194a99ff",
    height: "220px",
    borderRadius: "10px",
    "@media (max-width: 600px)": {
      padding: "4%",        // More padding on small screens
      height: "325px !important",      // Smaller height for mobile
    }
  },
  blueboxhead: {
    fontSize: "19px", // Adjust font size as needed
    margin: "0", // No margin for subheading
    fontFamily: "DM Serif Display, serif",
    paddingBottom: "2%",
    color: "white",
  },
  footerbox: {
    display: 'flex',
    justifyContent: 'center'
  },
  gridbox: {
    display: "grid",
    justifyItems: "center",
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
  lightbluebg: {
    backgroundImage: "url(/assets/images/thin-smoke-blue.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  }
};
