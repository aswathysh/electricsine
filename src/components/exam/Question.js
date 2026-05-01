import { Typography } from "@mui/material";
import Grid from '@mui/material/Grid2';
import Timer from '@/components/sharables/Timer'
import Image from "next/image";
import React from "react";
export const Question = ({ currentQuestion, currentIndex, maxTimeInMinutes,handleTimer,timer}) => {
  // console.log("currentQuestion", currentQuestion)
  return (
    <div style={{ ...styles.columndiv }}>
      <Grid container style={{ display: "flex" }}>
        <Grid item size={{ xs: 6, md: 6, lg: 6, sm: 6 }}>
          <Typography
            className="subhead light_text "
            style={{ ...styles.numberblock }}
          >
            {`Q${currentIndex}`}
          </Typography>
        </Grid>
        <Grid item
          size={{ xs: 6, md: 6, lg: 6, sm: 6 }}
          style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Timer
          handleTimer={handleTimer}
          timer={timer}
            maxTimeInMinutes={maxTimeInMinutes}
          />
          {/* <Typography
            className="subhead light_text "
            style={{ ...styles.righttext }}
          >
            Timeleft : 00.28
          </Typography> */}

        </Grid>
      </Grid>

      <Typography className="subhead light_text " sx={{ mt: 1 }}>
        {currentQuestion?.question}
      </Typography>
      <Typography className='whiteTexthint'
        sx={{ display: currentQuestion?.hint == null ? 'none' : 'flex', justifyContent: 'left' }}
      >{`Hint:${currentQuestion?.hint}`}</Typography>
      <div className="question_img_div"
        style={{ display: currentQuestion?.image == null ? 'none' : 'flex', justifyContent: 'center' }}>
        <Image
          src="/assets/questionImages/samplequstion1.png"
          alt="sample Image"
          width={300}
          height={200}
        />
      </div>
    </div>
  );
};
const styles = {
  numberblock: {
    width: "45px",
    backgroundColor: "#dedede",
    padding: "5px 8px",
  },
  columndiv: {
    display: "flex",
    flexDirection: "column",
  },
  righttext: {
    textAlign: "right",
  },
};
