import Grid from '@mui/material/Grid2';
import dynamic from "next/dynamic";
import React from "react";
const StyledGreyButton = dynamic(() => import("../../styles/ButtonStyles"), {
  ssr: false,
});
export const QuestionButtonFooter = ({handleSkip,handleFinished}) => {
  return (
    <Grid
      container
      spacing={2}
      sx={{ pt: 2,pl:3,pr:3,pb:2 }}
    >
      <Grid item 
      size={{ xs: 12, md: 8, lg: 8, sm: 12 }} style={{...styles.left}}>
        <StyledGreyButton
          className="full_width"
          variant="contained"
          disableRipple
          onClick={handleSkip}
        >
          Skip
        </StyledGreyButton>{" "}
        {/* <StyledGreyButton
          // className="full_width"
          sx={{ml:'3px !important'}}
          variant="contained"
          disableRipple
          // onClick={handleLogin}
        >
          Remark
        </StyledGreyButton>{" "} */}
      </Grid>
      {/* <Grid item lg={6} md={6} sm={6} xs={6} style={{...styles.left}}>
        
      </Grid> */}
      <Grid item size={{ xs: 12, md: 4, lg: 4, sm: 12 }} style={{...styles.right}}>
        <StyledGreyButton
          // className="full_width"
          variant="contained"
          disableRipple
          onClick={handleFinished}
        >
          Finish
        </StyledGreyButton>{" "}
      </Grid>
    </Grid>
  );
};
const styles={
    left:{
        display: "flex", justifyContent: "left"
    },
    center:{
        display: "flex", justifyContent: "center"
    },
    right:{
        display: "flex", justifyContent: "right"
    }

}