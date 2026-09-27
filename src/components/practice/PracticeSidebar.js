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
    <div className="ims-src-components-practice-PracticeSidebar-js-0001" >
      <Typography className="ims-src-components-practice-PracticeSidebar-js-0002" variant="h6" >
        Questions{currentQuestion}
      </Typography>
      <div className="scrollable-sidebar"
      // onScroll={handleScroll}
      >
        <Grid className="ims-src-components-practice-PracticeSidebar-js-0003" container spacing={2} >
          {Array.from({ length: totalQuestions }, (_, index) => (
            <Grid item
              size={{ xs: 2, md: 2, lg: 2, sm: 2 }}
              key={index }>
              <Paper
                className={`ims-question-number ${currentQuestion - 1 === index ? "ims-practice-question--current" : skippedQuestions.has(index + 1) ? "ims-practice-question--skipped" : answeredQuestions.has(index + 1) ? "ims-practice-question--answered" : "ims-practice-question--idle"}`}
                elevation={currentQuestion-1 == index  ? 4 : 1}
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
      <Grid className="ims-src-components-practice-PracticeSidebar-js-0004" container  sx={{ mt: 2,justifyContent:'space-around' }} >
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
            <Paper className="ims-src-components-practice-PracticeSidebar-js-0005"
              elevation={1}

            >
              <Typography variant="body2">{totalAnswered}</Typography>
            </Paper>
            <Typography variant="body2">Attended Questions</Typography>
          </Box>
        </Grid>
        <Grid item size={{ xs: 12, md: 6, lg: 6, sm: 12 }}>
          <Box display="flex" alignItems="center">
            <Paper className="ims-src-components-practice-PracticeSidebar-js-0006"
              elevation={1}

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
