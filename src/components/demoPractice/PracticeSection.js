import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid2';
import './demoPractice.css'
import Image from 'next/image';
import { blue, green, red } from "@mui/material/colors";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button, FormControlLabel, IconButton, Radio, RadioGroup, Typography } from '@mui/material';
import { QuestionButtonFooter } from '../exam/QuestionButtonFooter';
import StyledGreyButton from '@/styles/ButtonStyles';
import { useRouter } from 'next/navigation';
export const PracticeSection = ({ currentQuestion, currentIndex, handleAnswerChange, rightAnswer,
    handlePrevQuestion, handleNextQuestion, selectedAnswer, disableNext, lastIndex, sample
}) => {
    // console.log("selectedAnswercurrentQuestion", currentQuestion)
    // console.log("selectedAnswer", selectedAnswer);
    const [selectedOption, setSelectedOption] = useState('');
    const router = useRouter();

    const [answer, setAnswer] = useState("")
    useEffect(() => {
        const radioValue = currentIndex <= lastIndex ? currentQuestion?.answer?.trim().toLowerCase() : selectedAnswer;
        setAnswer(radioValue);
        console.log("selecteradioValue", radioValue);

    }, [currentIndex, lastIndex, currentQuestion, selectedAnswer])
    const handleGridClick = (value) => {
        setSelectedOption(value); // Programmatically select the radio button
        handleAnswerChange(value);


    };
    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);

    };
    const getOptionBgColor = (optionValue) => {
        const correctAnswer = currentQuestion?.answer?.trim().toLowerCase();
        if (selectedAnswer === optionValue) {
            return correctAnswer === optionValue ? green[600] : red[600];
        }
        return '#204d77'; // Default background
    };
    return (
        <div>
            <Grid
                item
                className="fullwidth min_height"
                size={{ xs: 12, md: 12, lg: 12, sm: 12 }}
                style={{ ...styles.questionbox }}
            >
                <Grid contaniner className="center min_height " >

                    {/* {sample && <Grid item size={{ xs: 12, md: 12, lg: 12, sm: 12 }} sx={{ mb: 0, mt: 1 }}>
                        <IconButton onClick={()=>window.location.href='/user/home'}>
                            <ArrowBackIcon sx={{ color: "white", fontSize: "30px" }} />
                        </IconButton>
                    </Grid>} */}
                    <Grid item size={{ xs: 12, md: 6, lg: 6, sm: 12 }} sx={{ mb: 2, mt: 2 }}
                        className="practiceHeader">
                        {/* <div className="top_container">
                            <div className="background_border">
                                <div className="border"></div>
                            </div> */}
                        {/* <div className="qn_container"> */}
                        <Typography className='whiteText'>{`Q${currentIndex}.${currentQuestion?.question}`}</Typography>
                        <Typography className='whiteTexthint'
                            sx={{ display: currentQuestion?.hint == null ? 'none' : 'flex', justifyContent: 'left' }}
                        >{`Hint:${currentQuestion?.hint}`}</Typography>

                        {/* </div> */}

                        {/* </div> */}

                    </Grid>
                    <Grid item size={{ xs: 12, md: 12, lg: 12, sm: 12 }} sx={{ display: currentQuestion?.image == null ? 'none' : 'flex', justifyContent: 'center' }}>

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
                        value={answer}
                        onChange={handleAnswerChange}
                    >
                        <Grid container style={{ display: 'flex', flexDirection: 'row !important', justifyContent: 'space-around' }}>
                            <Grid item size={{ xs: 12, md: 5.5, lg: 5.5, sm: 12 }} className="option_box1"
                                style={{ backgroundColor: getOptionBgColor('a') }}

                                onClick={() => handleGridClick('a')}                             >

                                <FormControlLabel value="a"
                                    control={<Radio
                                        sx={{
                                            '& .MuiSvgIcon-root': {
                                                fontSize: 15,
                                            },
                                            color: 'transparent',
                                            '&.Mui-checked': {
                                                color: 'transparent'
                                                //  currentQuestion?.answer?.trim().toLowerCase() == selectedAnswer ? green[600] : 'red',
                                            },
                                        }}
                                        checked={selectedOption === 'a'}
                                        onChange={handleOptionChange}
                                    />} label={currentQuestion?.option1} />

                            </Grid>
                            <Grid item size={{ xs: 12, md: 5.5, lg: 5.5, sm: 12 }}
                                style={{ backgroundColor: getOptionBgColor('b') }}

                                onClick={() => handleGridClick('b')}
                                className="option_box1">

                                <FormControlLabel value="b"
                                    control={<Radio
                                        sx={{
                                            '& .MuiSvgIcon-root': {
                                                fontSize: 15,
                                            },
                                            color: 'transparent',
                                            '&.Mui-checked': {
                                                color: 'transparent'
                                            }
                                        }}
                                        checked={selectedOption === 'b'}
                                        onChange={handleOptionChange}
                                    />} label={currentQuestion?.option2} />

                            </Grid>
                            <Grid item size={{ xs: 12, md: 5.5, lg: 5.5, sm: 12 }}
                                style={{ backgroundColor: getOptionBgColor('c') }}

                                onClick={() => handleGridClick('c')}
                                className="option_box1">

                                <FormControlLabel value="c"
                                    control={<Radio
                                        sx={{
                                            '& .MuiSvgIcon-root': {
                                                fontSize: 15,
                                            },
                                            color: 'transparent',
                                            '&.Mui-checked': {
                                                color: 'transparent'
                                            },
                                        }}
                                        checked={selectedOption === 'c'}
                                        onChange={handleOptionChange}
                                    />} label={currentQuestion?.option3} />

                            </Grid>
                            <Grid item size={{ xs: 12, md: 5.5, lg: 5.5, sm: 12 }}
                                style={{ backgroundColor: getOptionBgColor('d') }}

                                onClick={() => handleGridClick('d')}
                                className="option_box1">

                                <FormControlLabel value="d"
                                    control={<Radio
                                        sx={{
                                            color: 'white',
                                            '& .MuiSvgIcon-root': {
                                                fontSize: 15,
                                            },
                                            color: 'transparent',
                                            '&.Mui-checked': {
                                                color: 'transparent'
                                            },
                                        }}
                                        checked={selectedOption === 'd'}
                                        onChange={handleOptionChange}
                                    />} label={currentQuestion?.option4} />

                            </Grid>
                        </Grid>
                    </RadioGroup>
                    <Grid
                        item
                        size={{ xs: 12, md: 12, lg: 12, sm: 12 }}
                        style={{ ...styles.center }}
                        sx={{ mt: 2, mb: 4 }}>
                        {/* <Button variant="contained" sx={{ backgroundColor: "#21507c" }}
                        onClick={handlePrevQuestion}>
                            Previous
                        </Button> */}
                        <Button variant="contained" sx={{ backgroundColor: "#21507c" }}
                            onClick={handleNextQuestion}
                            disabled={currentQuestion?.answer?.trim().toLowerCase() != selectedAnswer ? true : false}>
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
        // marginTop: "30px"
    },
    footerbg: { backgroundColor: '#dedede' },
    questionpadding: {
        padding: "10px 30px 10px 30px",

    },
    center: {
        display: 'flex',
        justifyContent: 'center'
    },
    greenbg: {
        backgroundColor: green[600]
    },
    redbg: {
        backgroundColor: 'red'
    }
};
