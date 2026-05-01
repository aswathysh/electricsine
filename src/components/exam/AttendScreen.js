import { Grid, Typography } from "@mui/material";
import React from "react";
import { Options } from "./Options";
import { Question } from "./Question";
import { QuestionButtonFooter } from "./QuestionButtonFooter";
export const AttendExam =({})=>{
    return(
        <div className="light_bg exam_qustion_div">
            <Grid container sx={{mt:5}}>
                
                <Grid item lg={3} md={3} sm={0} xs={0} className="light_bg" sx={{p:2,display:{sm:'block',xs:'block',md:'none',lg:'none'}}}>
                    
                    </Grid>
                <div className="question_padding">
                <Grid item lg={12} md={12} sm={12} xs={12} style={{display:'flex',flexDirection:'column',justifyContent:'center'}}>
                    <Question />
                    <Options />
                    {/* <Grid item lg={12} md={12} sm={12} xs={12} sx={{mt:5}} > */}
                    <QuestionButtonFooter />

                    {/* </Grid> */}
                    </Grid>
                </div>
            </Grid>
        </div>
    )
}