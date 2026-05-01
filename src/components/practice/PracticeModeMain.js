import React from "react";
import { PracticeQuestion } from "./PracticeQuestion";
import { Grid } from "@mui/material";
export const PracticeModeMain = () => {
    return (
        <div className="question_padding">
            <Grid
                item
                lg={12}
                md={12}
                sm={12}
                xs={12}
                style={{ ...styles.questionbox }}
            >
                <div style={{ ...styles.questionpadding }}>
                    <PracticeQuestion />
                </div>
            </Grid>
        </div>
    )
}
const styles = {
    questionbox: {
        // border: "3px solid #dedede",
        // borderRadius: "5px",
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
