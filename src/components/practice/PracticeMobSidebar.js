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
    const sidebarWidth = totalQuestions === 1 ? "100px" : `${totalQuestions * 60}px`;

  return (
    <div 
    className="practice_mob_sidebar"
    // style={{ ...styles.sidebar }}
    >
      <Typography variant="h6" style={styles.title}>
        Questions
      </Typography>
      <div className="scrollable-sidebar" style={{...styles.scrollableContainer,width:sidebarWidth}}>
        <Grid container spacing={2} style={styles.gridContainer}>
          {Array.from({ length: totalQuestions }, (_, index) => (
            <Grid item style={{ display: 'inline-block' }}
            size={{ xs: 2, md: 2, lg: 2, sm: 2 }}
            key={index + 1}>
              <Paper
                elevation={currentQuestion === index + 1 ? 4 : 1}
                style={{
                  ...styles.paper,
                  backgroundColor: currentQuestion === index + 1 ? "#1976d2" : "#fff",
                  color: currentQuestion === index + 1 ? "#fff" : "#000",
                }}
                onClick={() => handleQuestionClick(index + 1)}
              >
                <Typography variant="body2">{index + 1}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </div>
      <Grid container style={{ ...styles.overalldiv }}></Grid>
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
