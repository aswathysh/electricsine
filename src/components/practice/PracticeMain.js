import {
  Button,
  Typography,
  Radio,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Modal,
  Box,
} from "@mui/material";
import Grid from '@mui/material/Grid2';
import React, { useState } from "react";
import { Options } from "../exam/Options";
import { Question } from "../exam/Question";
import { QuestionButtonFooter } from "../exam/QuestionButtonFooter";

export const PracticeMain = ({ currentQuestion, currentIndex, maxTimeInMinutes,
  selectedAnswer, handleAnswerChange, handleSave, handleSkip, handleFinished,timer,handleTimer }) => {
  // console.log('selectedAnswer', selectedAnswer)



  return (
    <div>
      <div
      // className="question_padding"
      >
        <Grid
          item
          size={{ xs: 12, md: 12, lg: 12, sm: 12 }}

          style={{ ...styles.questionbox }}
        >
          <div style={{ ...styles.questionpadding }}>
            <Question
            handleTimer={handleTimer}
            timer={timer}
              currentQuestion={currentQuestion}
              currentIndex={currentIndex}
              maxTimeInMinutes={maxTimeInMinutes}
            />
            <Options
              currentQuestion={currentQuestion}
              handleAnswerChange={handleAnswerChange}
              selectedAnswer={selectedAnswer}

            />
            {/* <Grid item lg={12} md={12} sm={12} xs={12} sx={{mt:5}} > */}
            <Grid
              item
              size={{ xs: 12, md: 12, lg: 12, sm: 12 }}
              style={{ ...styles.center }}
              sx={{ mt: 2, mb: 4 }}>
              <Button
                variant="contained"
                color="success"
                onClick={handleSave}
                disabled={selectedAnswer == '' ? true : false}
              >
                Save & Next
              </Button>
            </Grid>
          </div>

          <div style={{ ...styles.footerbg }}>
            <QuestionButtonFooter
              handleSkip={handleSkip}
              handleFinished={handleFinished}
            />

          </div>

          {/* </Grid> */}
        </Grid>
      </div>
     
    </div>
  );
};
const styles = {
  questionbox: {
    border: "3px solid #dedede",
    borderRadius: "5px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginTop: "30px"
  },
  footerbg: { backgroundColor: '#dedede' },
  questionpadding: {
    padding: "10px 30px 10px 30px",

  },
  center: {
    display: 'flex',
    justifyContent: 'center'
  }
};
