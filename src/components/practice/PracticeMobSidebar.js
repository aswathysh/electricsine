import { Paper, Typography } from "@mui/material";
import React from "react";
import "../../styles/examStyles.css";
import Grid from "@mui/material/Grid2";
import '../../app/exam/exam.css'
export const PracticeMobSidebar = ({
  questions,
  totalQuestions,
  currentQuestion,
  handleQuestionClick,
  handleScroll,
}) => {
  return (
    <div 
    className="practice_mob_sidebar"
    // style={{ ...styles.sidebar }}
    >
      <Typography className="ims-src-components-practice-PracticeMobSidebar-js-0001" variant="h6" >
        Questions
      </Typography>
      <div className={`scrollable-sidebar ims-demo-practice-scroll ims-question-count-${totalQuestions}`}>
        <Grid className="ims-src-components-practice-PracticeMobSidebar-js-0002" container spacing={2} >
          {Array.from({ length: totalQuestions }, (_, index) => (
            <Grid className="ims-src-components-practice-PracticeMobSidebar-js-0003" item
            size={{ xs: 2, md: 2, lg: 2, sm: 2 }}
            key={index + 1}>
              <Paper
                className={`ims-question-number ${currentQuestion === index + 1 ? "ims-question-number--current" : "ims-question-number--idle"}`}
                elevation={currentQuestion === index + 1 ? 4 : 1}
                onClick={() => handleQuestionClick(index + 1)}
              >
                <Typography variant="body2">{index + 1}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </div>
      <Grid className="ims-src-components-practice-PracticeMobSidebar-js-0004" container ></Grid>
    </div>
  );
};

const styles = {
  sidebar: {
    backgroundColor: "#f5f5f5",
    border: "3px solid #dedede",
    padding: "10px 10px",
    borderRadius: "5px",
    marginTop: "30px",
    height:'30px !important'
  },
  overalldiv: { height: "330px !important" },
  title: {
    marginBottom: "20px",
  },
  scrollableContainer: {
    display: 'flex', // Use flexbox for horizontal layout
    overflowX: 'auto', // Enable horizontal scrolling
    paddingBottom: '10px',
  },
  gridContainer: {
    flexWrap: 'nowrap', // Prevent wrapping to the next line
  },
  paper: {
    height: 50,
    width: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    transition: "all 0.2s ease",
  },
};
