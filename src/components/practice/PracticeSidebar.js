import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import "../../styles/examStyles.css";
import Grid from '@mui/material/Grid2';
export const PracticeSidebar = ({
  questions,
  totalQuestions,
  currentQuestion,
  handleSideBarClick,
  handleScroll,
  skippedQuestions,
  answeredQuestions,
  totalSkipped,
  totalAnswered

}) => {
  return (
    <div style={styles.sidebar}>
      <Typography variant="h6" style={styles.title}>
        Questions{currentQuestion}
      </Typography>
      <div className="scrollable-sidebar"
      // onScroll={handleScroll}
      >
        <Grid container spacing={2} style={styles.gridContainer}>
          {Array.from({ length: totalQuestions }, (_, index) => (
            <Grid item
              size={{ xs: 2, md: 2, lg: 2, sm: 2 }}
              key={index }>
              <Paper
                elevation={currentQuestion-1 == index  ? 4 : 1}
                style={{
                  ...styles.paper,
                  backgroundColor:currentQuestion-1 == index ? 'blue' : 
                  skippedQuestions.has(index+1) ? 'red' : 
                  answeredQuestions.has(index+1) ? 'green' : 
                  'transparent',
                color: currentQuestion-1 == index ? 'white' : 'black', // Text color for current question
              
                  // backgroundColor:
                  //   currentQuestion === index + 1 ? "#1976d2" : "#fff",
                  // color: currentQuestion === index + 1 ? "#fff" : "#000",
                }}
                onClick={() => handleSideBarClick(index+1)}
              >
                <Typography variant="body2">{index +1}</Typography>
              </Paper>
            </Grid>
          ))}
          {/* {Array.from(
                  { length: questions?.data.length },
                  (_, index) => (
                    <Grid
                      item
                      lg={2}
                      md={2}
                      xs={2}
                      key={index + 1}
                    >
                      <Paper
                        elevation={currentQuestion === index + 1 ? 4 : 1}
                        style={{
                          backgroundColor:
                            currentQuestion === index + 1
                              ? '#1976d2'
                              : '#fff',
                          color:
                            currentQuestion === index + 1
                              ? '#fff'
                              : '#000',
                          cursor: 'pointer',
                          padding: '10px',
                          textAlign: 'center',
                        }}
                        onClick={() => handleQuestionClick(index + 1)}
                      >
                        <Typography variant="body2">
                          {index + 1}
                        </Typography>
                      </Paper>
                    </Grid>
                  )
                )} */}
        </Grid>
      </div>
      <Grid container style={{ ...styles.overalldiv }} sx={{ mt: 2,justifyContent:'space-around' }} >
      {/* <Grid item size={{ xs: 12, md: 6, lg: 6, sm: 12 }}>
          <Box display="flex" alignItems="center">
            <Paper
              elevation={1}
              style={{
                ...styles.paper,
                backgroundColor: "#fff",
                color: "#000",
                marginRight: 8, // Adds some space between Paper and Typography
              }}
            >
              <Typography variant="body2">{totalQuestions}</Typography>
            </Paper>
            <Typography variant="body2">Total Questions</Typography>
          </Box>
        </Grid> */}
      <Grid item size={{ xs: 12, md: 6, lg: 6, sm: 12 }}>
      <Box display="flex" alignItems="center">
            <Paper
              elevation={1}
              style={{
                ...styles.paper,
                backgroundColor: "#53c158",
                color: "#000",
                marginRight: 8, // Adds some space between Paper and Typography
              }}
            >
              <Typography variant="body2">{totalAnswered}</Typography>
            </Paper>
            <Typography variant="body2">Attended Questions</Typography>
          </Box>
        </Grid>
        <Grid item size={{ xs: 12, md: 6, lg: 6, sm: 12 }}>
          <Box display="flex" alignItems="center">
            <Paper
              elevation={1}
              style={{
                ...styles.paper,
                backgroundColor: "#fff",
                color: "#000",
                marginRight: 8, // Adds some space between Paper and Typography
              }}
            >
              <Typography variant="body2">{totalSkipped}</Typography>
            </Paper>
            <Typography variant="body2">Skipped Question</Typography>
          </Box>
        </Grid>
        {/* <Grid item size={{ xs: 12, md: 6, lg: 6, sm: 12 }}>
          <Box display="flex" alignItems="center">
            <Paper
              elevation={1}
              style={{
                ...styles.paper,
                backgroundColor: "#fff",
                color: "#000",
                marginRight: 8, // Adds some space between Paper and Typography
              }}
            >
              <Typography variant="body2">0</Typography>
            </Paper>
            <Typography variant="body2">Remarked Questions</Typography>
          </Box>
        </Grid> */}
      </Grid>

    </div>
  );
};

const styles = {
  sidebar: {
    width: "90%",
    // height: "85%",
    backgroundColor: "#f5f5f5",
    border: "3px solid #dedede",
    padding: "10px 10px ",
    borderRadius: "5px",
    // overflowY: "scroll",
    marginTop: "30px",
  },
  overalldiv: { height: "130px !important" },
  title: {
    marginBottom: "20px",
  },
  gridContainer: {
    flexGrow: 1,
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
