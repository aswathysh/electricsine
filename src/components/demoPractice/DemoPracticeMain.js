import React from 'react';
import Grid from '@mui/material/Grid2';
import './demoPractice.css'
import Image from 'next/image';
import { blue, green, red } from "@mui/material/colors";

import { Button, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { QuestionButtonFooter } from '../exam/QuestionButtonFooter';
import StyledGreyButton from '@/styles/ButtonStyles';
export const DemoPracticeMain = () => {
    return (
        <div>
            <Grid
                item
                size={{ xs: 12, md: 12, lg: 12, sm: 12 }}

                style={{ ...styles.questionbox }}
            >
                <Grid contaniner>
                    <Grid item size={{ xs: 12, md: 6, lg: 6, sm: 12 }}>
                        <div className="top_container">
                            <div className="background_border">
                                <div className="border"></div>
                            </div>
                            <div className="qn_container">
                                <label >Q1. What is the main objective of a CT Polarity Test?</label>
                                
                            </div>
                            
                        </div>

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
                    >
                        <Grid container style={{ display: 'flex', justifyContent: 'space-around' }}>
                            <Grid item size={{ xs: 6, md: 6, lg: 6, sm: 6 }} className="option_box1">
                                <div className="option_background">
                                    <div className="option_border"></div>
                                </div>
                                <div className="option_container">
                                    <FormControlLabel value="a"
                                        control={<Radio
                                            sx={{
                                                '& .MuiSvgIcon-root': {
                                                    fontSize: 15,
                                                },
                                                color: blue[800],
                                                '&.Mui-checked': {
                                                    color: green[600],
                                                },
                                            }}
                                        />} label="To apply voltage to the CT Secondary" />
                                </div>

                            </Grid>
                            <Grid item size={{ xs: 6, md: 6, lg: 6, sm: 6 }} className="option_box1">
                                <div className="option_background">
                                    <div className="option_border"></div>
                                </div>
                                <div className="option_container">
                                    <FormControlLabel value="b"
                                        control={<Radio
                                            sx={{
                                                '& .MuiSvgIcon-root': {
                                                    fontSize: 15,
                                                },
                                                color: blue[800],
                                                '&.Mui-checked': {
                                                    color: green[600],
                                                },
                                            }}
                                        />} label="To test the CT  with primary injection current" />
                                </div>

                            </Grid>
                            <Grid item size={{ xs: 6, md: 6, lg: 6, sm: 6 }} className="option_box1">
                                <div className="option_background">
                                    <div className="option_border"></div>
                                </div>
                                <div className="option_container">
                                    <FormControlLabel value="c"
                                        control={<Radio
                                            sx={{
                                                '& .MuiSvgIcon-root': {
                                                    fontSize: 15,
                                                },
                                                color: blue[800],
                                                '&.Mui-checked': {
                                                    color: green[600],
                                                },
                                            }}
                                        />} label="To confirm the CT polarity" />
                                </div>

                            </Grid>
                            <Grid item size={{ xs: 6, md: 6, lg: 6, sm: 6 }} className="option_box1">
                                <div className="option_background">
                                    <div className="option_border"></div>
                                </div>
                                <div className="option_container">
                                    <FormControlLabel value="d"
                                        control={<Radio
                                            sx={{
                                                color: 'white',
                                                '& .MuiSvgIcon-root': {
                                                    fontSize: 15,
                                                },
                                                color: blue[800],
                                                '&.Mui-checked': {
                                                    color: green[600],
                                                },
                                            }}
                                        />} label="To measure the magnetization curve" />
                                </div>

                            </Grid>
                        </Grid>
                    </RadioGroup>
                    <Grid
                        item
                        size={{ xs: 12, md: 12, lg: 12, sm: 12 }}
                        style={{ ...styles.center }}
                        sx={{ mt: 2, mb: 4 }}>
                        <Button variant="contained" sx={{ backgroundColor: "#21507c" }}>
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
