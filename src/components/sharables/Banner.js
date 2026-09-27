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
      <Grid className="ims-src-components-sharables-Banner-js-0001" container >
        <div className="ims-src-components-sharables-Banner-js-0002" >
          <div className="ims-src-components-sharables-Banner-js-0003"

          >
            <div

              className={["contentBox", "ims-src-components-sharables-Banner-js-0004"].filter(Boolean).join(" ")}
            >
              <h1 className='mainheading'>
                Electric Sine: Online Examination System
              </h1>
              <p className="ims-src-components-sharables-Banner-js-0005" >
                Effortless exams for a brighter future
              </p>
            </div>
          </div>
        </div>
      </Grid>

      {/*  */}
      <Grid className="ims-src-components-sharables-Banner-js-0006"
        container

      >
        <Grid className="ims-src-components-sharables-Banner-js-0007"
          item
          lg={8}
          md={8}

        >
          <div className="ims-src-components-sharables-Banner-js-0008" >
            <h1 className="ims-src-components-sharables-Banner-js-0009"

            >
              About Us
            </h1>
            <p className="ims-src-components-sharables-Banner-js-0010" >
              We are a team of passionate educators and tech experts dedicated
              to revolutionizing online assessments.
            </p>
          </div>
        </Grid>
        <Grid className="ims-src-components-sharables-Banner-js-0011"
          item
          size={{ lg: 8, md: 8 }}
          columnGap={2}
          rowSpacing={3}

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
            <h1 className="ims-src-components-sharables-Banner-js-0012" >Mission</h1>
            <p className="ims-src-components-sharables-Banner-js-0013" >
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
            <h1 className="ims-src-components-sharables-Banner-js-0014" >Vision</h1>
            <p className="ims-src-components-sharables-Banner-js-0015" >
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
            <h1 className="ims-src-components-sharables-Banner-js-0016" >Goal</h1>
            <p className="ims-src-components-sharables-Banner-js-0017" >
              To become the leading provider of innovative and accessible
              online assessment solutions.
            </p>
          </Grid>
        </Grid>
      </Grid>

      <Grid container  className={["featureContainer", "ims-src-components-sharables-Banner-js-0018"].filter(Boolean).join(" ")}>
        <div className="ims-src-components-sharables-Banner-js-0019" >
          <Grid item lg={11} md={11}>
            <div className="ims-src-components-sharables-Banner-js-0020" >
              <h1 className="ims-src-components-sharables-Banner-js-0021"

              >
                Our Features
              </h1>
              <p className="ims-src-components-sharables-Banner-js-0022" >
                Our system is packed with features designed to enhance the exam
                experience for both educators and students.
              </p>
            </div>
          </Grid>
          <Grid className="ims-src-components-sharables-Banner-js-0023"
            item
            lg={11}
            md={11}

            sx={{ p: "2%" }}
          >
            <Grid container>
              <Grid className="ims-src-components-sharables-Banner-js-0024"
                item
                lg={6}
                md={6}
                sm={12}
                xs={12}

              >
                <Grid item lg={2} md={2}>
                  <div className="gridItems">
                    <h1 className="ims-src-components-sharables-Banner-js-0025" >1.</h1>
                  </div>
                </Grid>
                <Grid item lg={8} md={8} className="mob-10 tab-pl5">
                  <h1
                    className={["", "ims-src-components-sharables-Banner-js-0026"].filter(Boolean).join(" ")}> Solved Question Papers</h1>
                  <p className="ims-src-components-sharables-Banner-js-0027" >
                 Solved papers help users understand exam patterns, build confidence, and improve problem-solving speed for timed tests and interviews in Electrical, Electronics, Communication, and Instrumentation engineering.
                  </p>
                </Grid>
              </Grid>
              <Grid className="ims-src-components-sharables-Banner-js-0028"
                item
                lg={6}
                md={6}
                sm={12}
                xs={12}

              >
                <Grid item lg={2} md={2}>
                  <div className="gridItems">
                    <h1 className="ims-src-components-sharables-Banner-js-0029" >2.</h1>
                  </div>
                </Grid>
                <Grid item lg={8} md={8} className="mob-10 tab-pl5">
                  <h1  className={["", "ims-src-components-sharables-Banner-js-0030"].filter(Boolean).join(" ")}>Objective Type Questions & MCQs</h1>
                  <p className="ims-src-components-sharables-Banner-js-0031" >
                    For students preparing for exams and job seekers preparing for interviews, as it directly improves test-taking skills and knowledge recall in Electrical, Electronics, Communication, and Instrumentation engineering.
                  </p>
                </Grid>
              </Grid>
              <Grid className="ims-src-components-sharables-Banner-js-0032"
                item
                lg={6}
                md={6}
                sm={12}
                xs={12}

              >
                <Grid item lg={2} md={2}>
                  <div className="gridItems">
                    <h1 className="ims-src-components-sharables-Banner-js-0033" >3.</h1>
                  </div>
                </Grid>
                <Grid item lg={8} md={8} className="mob-10 tab-pl5">
                  <h1  className={["mobpl5 ", "ims-src-components-sharables-Banner-js-0034"].filter(Boolean).join(" ")}>Industry-Relevant Know-How</h1>
                  <p className="ims-src-components-sharables-Banner-js-0035" >
                   It covers practical applications, case studies, and modern technologies like AI and automation, essential for becoming a competent professional in the field.
                  </p>
                </Grid>
              </Grid>
              <Grid className="ims-src-components-sharables-Banner-js-0036"
                item
                lg={6}
                md={6}
                sm={12}
                xs={12}

              >
                <Grid item lg={2} md={2}>
                  <div className="gridItems">
                    <h1 className="ims-src-components-sharables-Banner-js-0037" >4.</h1>
                  </div>
                </Grid>
                <Grid item lg={8} md={8} className='mob-10 tab-pl5'>
                  <h1  className={["mobpl5", "ims-src-components-sharables-Banner-js-0038"].filter(Boolean).join(" ")}>Mock Tests</h1>
                  <p className="ims-src-components-sharables-Banner-js-0039" >
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

        className={["mobrl10", "ims-src-components-sharables-Banner-js-0040"].filter(Boolean).join(" ")}
      >
        <Grid className="ims-src-components-sharables-Banner-js-0041"
          item
          lg={8}
          md={8}

        >
          <div className="ims-src-components-sharables-Banner-js-0042" >
            <h1 className="ims-src-components-sharables-Banner-js-0043"

            >
              Secure Exam Delivery
            </h1>
            <p className="ims-src-components-sharables-Banner-js-0044" >
              We are a team of passionate educators and tech experts dedicated
              to revolutionizing online assessments.
            </p>
          </div>
        </Grid>
        <Grid className="ims-src-components-sharables-Banner-js-0045"
          item
          size={{ lg: 8, md: 8 }}
          columnGap={2}
          rowSpacing={3}

        >
          <Grid
            item
            lg={4}
            md={4}
            sm={12}
            xs={12}
            className='securebox'>

            <h1 className="ims-src-components-sharables-Banner-js-0046" >Encryption</h1>
            <p className="ims-src-components-sharables-Banner-js-0047" >
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

            <h1 className="ims-src-components-sharables-Banner-js-0048" >Redundancy</h1>
            <p className="ims-src-components-sharables-Banner-js-0049" >
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
            <h1 className="ims-src-components-sharables-Banner-js-0050" >Authentication</h1>
            <p className="ims-src-components-sharables-Banner-js-0051" >
              We use multi-factor authentication to verify user identities, ensuring only authorized individuals can access the platform.
            </p>
          </Grid>
        </Grid>
      </Grid>
      <Grid container  className={["featureContainer", "ims-src-components-sharables-Banner-js-0052"].filter(Boolean).join(" ")}>
        <div className="ims-src-components-sharables-Banner-js-0053" >
          <Grid item lg={11} md={11} sm={11} xs={11}>
            <div className="ims-src-components-sharables-Banner-js-0054" >
              <h1 className="ims-src-components-sharables-Banner-js-0055"

              >
                Grading and Reporting
              </h1>
              <p className="ims-src-components-sharables-Banner-js-0056" >
                Our system automates grading and provides comprehensive
                reporting features, saving you time and effort while offering
                valuable insights into student progress.
              </p>
              <ul className="triangle-list">
                <li className="ims-src-components-sharables-Banner-js-0057" >Automated Grading</li>
                <li className="ims-src-components-sharables-Banner-js-0058" >Detailed Reports</li>
              </ul>
            </div>
          </Grid>
        </div>
      </Grid>

      <div className='pb-1 footer'>
        <div className={["footer-content-container pb-1", "ims-src-components-sharables-Banner-js-0059"].filter(Boolean).join(" ")} >
          <div className="ims-src-components-sharables-Banner-js-0060" ></div>

          <Grid className="ims-src-components-sharables-Banner-js-0061"
            container

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
              <Grid className="ims-src-components-sharables-Banner-js-0062" container
                // className="footer-grid"
                >
                <Grid className="ims-src-components-sharables-Banner-js-0063"
                  item
                  size={{ xs: 12, md: 4, lg: 4, sm: 12 }}


                >
                  <div><FiPhone color="#609dff" size="50px" /></div>
                  <h1 className="ims-src-components-sharables-Banner-js-0064" >Phone</h1>
                  <p className="ims-src-components-sharables-Banner-js-0065" >
                    +91 7560884560
                  </p>
                </Grid>
                <Grid className="ims-src-components-sharables-Banner-js-0066"
                  item
                  size={{ xs: 12, md: 4, lg: 4, sm: 12 }}

                // className='pr-2'

                >
                  <div><FiMail color="#609dff" size="50px" /></div>

                  <h1 className="ims-src-components-sharables-Banner-js-0067" >Email</h1>
                  <p className="ims-src-components-sharables-Banner-js-0068" >
                    electricsine2024@gmail.com
                  </p>
                </Grid>
                <Grid
                  item
                  className={["pl-2", "ims-src-components-sharables-Banner-js-0069"].filter(Boolean).join(" ")}
                  size={{ xs: 12, md: 4, lg: 4, sm: 12 }}

                >
                  <div><IoEarthSharp color="#609dff" size="50px" /></div>

                  <h1 className="ims-src-components-sharables-Banner-js-0070" >Website</h1>
                  <p className="ims-src-components-sharables-Banner-js-0071" >
                    electricsine.com
                  </p>
                </Grid>
              </Grid>

            </Grid>
          </Grid>
          <div className="ims-src-components-sharables-Banner-js-0072" >
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
