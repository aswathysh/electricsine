import React from "react";
import { PracticeQuestion } from "./PracticeQuestion";
import { Grid } from "@mui/material";
export const PracticeModeMain = () => {
    return (
        <div className="question_padding">
            <Grid className="ims-src-components-practice-PracticeModeMain-js-0001"
                item
                lg={12}
                md={12}
                sm={12}
                xs={12}

            >
                <div className="ims-src-components-practice-PracticeModeMain-js-0002" >
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
