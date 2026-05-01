
import { Header } from "@/components/sharables/Header";
import Grid from "@mui/material/Grid2";
import React from "react";
import { IoMailOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { IconButton, Typography } from "@mui/material";
export default function Home() {

  return (
    <div style={{ backgroundColor: 'white !important', height: '100vh !important' }}>
      <Header />
      <Grid container style={{ justifyContent: 'center', backgroundColor: 'white !important' }} className="light_bg">
        <Grid item size={{ xs: 12, md: 11, lg: 11, sm: 12 }}
          style={{ display: 'flex', justifyContent: 'center', marginTop: '3%', ...styles.fullwidth }}>
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
                Contact Us
              </h1>
            </div>
            <div style={{ ...styles.center, ...styles.fullwidth }}>
              <Grid item size={{ xs: 12, md: 12, lg: 12, sm: 12 }}
                style={{ ...styles.contentleft, ...styles.center, marginTop: "5%" }}>
                <Grid container style={{ ...styles.center }}>
                  <Grid item
                    container
                    size={{ xs: 12, md: 4.5, lg: 4.5, sm: 12 }}

                    className='center mt-3'>
                    <Grid item
                      size={{ xs: 4, md: 2, lg: 2, sm: 4 }}
                      className='right' >
                      <IconButton className='footerbtn'>
                        <IoMailOutline color="#2833c3" fontSize={"30px"} />
                      </IconButton>
                    </Grid>
                    <Grid item
                      size={{ xs: 8, md: 10, lg: 10, sm: 8 }}

                      className='ml-2'
                    >
                      <Typography className="contactfooterhead">
                        Mail us on
                      </Typography>
                      <Typography className="contactfootertext">
                        electricsine2024@gmail.com
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item
                    container
                    size={{ xs: 12, md: 3.5, lg: 3.5, sm: 12 }}
                    className='center mt-3'>
                    <Grid item
                      size={{ xs: 4, md: 2.5, lg: 2.5, sm: 4 }}
                      style={{ ...styles.justifyContent, }}
                      className='left'
                    >
                      <IconButton className='footerbtn'>
                        <FiPhone color="#2833c3" fontSize={"30px"} />
                      </IconButton>
                    </Grid>
                    <Grid item
                      size={{ xs: 7, md: 9.5, lg: 9.5, sm: 7 }}
                      className='ml-3'                        >
                      <Typography className="contactfooterhead">
                        Call us on
                      </Typography>
                      <Typography className="contactfootertext">
                        +91 7560884560
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item
                    container
                    size={{ xs: 12, md: 4, lg: 4, sm: 12 }}

                    className='center mt-3'>
                    <Grid item
                      size={{ xs: 3, md: 2, lg: 2, sm: 3 }}
                      className='right'
                    >
                      <IconButton className='footerbtn'>
                        <IoLocationOutline color="#2833c3" fontSize={"30px"} />
                      </IconButton>
                    </Grid>
                    <Grid item
                      size={{ xs: 7, md: 10, lg: 10, sm: 7 }}
                      className='ml-2'                        >
                      <Typography className="contactfooterhead">
                        Our Address
                      </Typography>
                      <Typography className="contactfootertext">
                        Electricsine,Marwahills,
                      </Typography>
                      <Typography className="contactfootertext">
                        Punnala(P.O), Punnala,
                      </Typography>
                      <Typography className="contactfootertext">
                        Kollam , Kerala, India                      
                        </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>

  )
}
const styles = {
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
  heading: {
    fontSize: "20px", // Adjust font size as needed
    margin: "0", // No margin for subheading
    fontWeight: 600,
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
    flexDirection: 'column'
  },

  subheading: {
    fontSize: "18px", // Adjust font size as needed
    margin: "0", // No margin for subheading
    fontFamily: "DM Serif Display, serif",
    paddingBottom: "2%",
    color: "black",
    textAlign: 'justify'

  },
  paddingTop: {
    paddingTop: '2% '
  },
  underlined: {
    textDecoration: 'underlined'
  }
};