import React from 'react';
import Grid from '@mui/material/Grid2';
import './demoPractice.css'
import Image from 'next/image';
import { blue, green, red } from "@mui/material/colors";

import { Button, FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material';
import { QuestionButtonFooter } from '../exam/QuestionButtonFooter';
import StyledGreyButton from '@/styles/ButtonStyles';
export const DemoPracticeSection = ({currentQuestion,currentIndex,handleAnswerChange,rightAnswer,
    handlePrevQuestion,handleNextQuestion,selectedAnswer,disableNext
}) => {
    console.log("currentQuestion",currentQuestion)
    return (
        <div>
            <Grid
                item
                className={["fullwidth", "ims-src-components-demoPractice-DemoPracticeSection-js-0001"].filter(Boolean).join(" ")}
                size={{ xs: 12, md: 12, lg: 12, sm: 12 }}

            >
                <Grid contaniner className="center fullwidth" >
                    <Grid item size={{ xs: 12, md: 6, lg: 6, sm: 12 }} sx={{ mb: 2, mt: 2 }}
                        className="practiceHeader">
                        {/* <div className="top_container">
                            <div className="background_border">
                                <div className="border"></div>
                            </div> */}
                        {/* <div className="qn_container"> */}
                        <Typography className='whiteText'>{`Q${currentIndex+1}.${currentQuestion?.question}`}</Typography>

                        {/* </div> */}

                        {/* </div> */}

                    </Grid>
                    <Grid item size={{ xs: 12, md: 12, lg: 12, sm: 12 }} sx={{ display: 'flex', justifyContent: 'center' }}>

                        <div className="question_img_div">
                            <Image
                                src="/assets/questionImages/samplequstion1.png"
                                alt="sample Image"
                                width={300}
                                height={100}
                            />
                        </div>
                    </Grid>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="female"
                        name="radio-buttons-group"
                        value={selectedAnswer}
                        onChange={handleAnswerChange}
                    >
                        <Grid className="ims-src-components-demoPractice-DemoPracticeSection-js-0002" container >
                            <Grid item size={{ xs: 12, md: 5.5, lg: 5.5, sm: 12 }} className="option_box1">

                                <FormControlLabel value="a"
                                    control={<Radio
                                        sx={{
                                            '& .MuiSvgIcon-root': {
                                                fontSize: 15,
                                            },
                                            color: blue[800],
                                            '&.Mui-checked': {
                                                color: rightAnswer ?green[600] :'red',
                                            },
                                        }}
                                    />} label={currentQuestion?.option1} />

                            </Grid>
                            <Grid item size={{ xs: 12, md: 5.5, lg: 5.5, sm: 12 }} className="option_box1">

                                <FormControlLabel value="b"
                                    control={<Radio
                                        sx={{
                                            '& .MuiSvgIcon-root': {
                                                fontSize: 15,
                                            },
                                            color: blue[800],
                                            '&.Mui-checked': {
                                                color: rightAnswer ?green[600] :'red',
                                            },
                                        }}
                                    />} label={currentQuestion?.option2} />

                            </Grid>
                            <Grid item size={{ xs: 12, md: 5.5, lg: 5.5, sm: 12 }} className="option_box1">

                                <FormControlLabel value="c"
                                    control={<Radio
                                        sx={{
                                            '& .MuiSvgIcon-root': {
                                                fontSize: 15,
                                            },
                                            color: blue[800],
                                            '&.Mui-checked': {
                                                color:rightAnswer ?green[600] :'red',
                                            },
                                        }}
                                    />} label={currentQuestion?.option3} />

                            </Grid>
                            <Grid item size={{ xs: 12, md: 5.5, lg: 5.5, sm: 12 }} className="option_box1">

                                <FormControlLabel value="d"
                                    control={<Radio
                                        sx={{
                                            color: 'white',
                                            '& .MuiSvgIcon-root': {
                                                fontSize: 15,
                                            },
                                            color: blue[800],
                                            '&.Mui-checked': {
                                                color:rightAnswer ?green[600] :'red',
                                            },
                                        }}
                                    />} label={currentQuestion?.option4} />

                            </Grid>
                        </Grid>
                    </RadioGroup>
                    <Grid className="ims-src-components-demoPractice-DemoPracticeSection-js-0003"
                        item
                        size={{ xs: 12, md: 12, lg: 12, sm: 12 }}

                        sx={{ mt: 2, mb: 4 }}>
                        {/* <Button variant="contained" sx={{ backgroundColor: "#21507c" }}
                        onClick={handlePrevQuestion}>
                            Previous
                        </Button> */}
                        <Button variant="contained" sx={{ backgroundColor: "#21507c" }}
                        onClick={handleNextQuestion}
                        disabled = {disableNext?true:false}>
                            Next
                        </Button>
                    </Grid>

                </Grid>
            </Grid>
        </div >
    )
}
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
