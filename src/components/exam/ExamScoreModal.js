import React, { useEffect, useState } from "react";
import { Box, IconButton, Modal, Typography } from "@mui/material";
import Grid from '@mui/material/Grid2';
import CloseIcon from '@mui/icons-material/Close';
import { ScoreProgress } from '@/styles/ScoreProgress'
export const ExamScoreModal = ({ showScoreModal, closeScoreCard, scoreData }) => {
    const [progress, setProgress] = useState(10);
    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= scoreData.score_percentage ? scoreData.score_percentage : prevProgress + 10));
        }, 800);
        return () => {
            clearInterval(timer);
        };
    }, [scoreData]);
    return (
        <Modal
            open={showScoreModal}
            //  onClose={onLogoutModalClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box style={{}} sx={{ ...styles.modal }}>
                <Grid container sx={{ display: 'flex', justifyContent: 'right', width: '100% !important' }}>
                    <Grid item size={{ xs: 12, md: 12, lg: 12, sm: 12 }} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <IconButton onClick={closeScoreCard}>
                            <CloseIcon sx={{ color: "#161616F" }} />

                        </IconButton>
                    </Grid>
                </Grid>
                <Grid container sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center', width: '100% !important' }}>
                    <Grid item size={{ xs: 12, md: 12, lg: 12, sm: 12 }} sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
                        < ScoreProgress
                            value={progress}
                        />
                    </Grid>
                    <Grid item size={{ xs: 12, md: 12, lg: 12, sm: 12 }} sx={{ display: 'flex', justifyContent: 'center' }}>

                        <Typography
                        style={{...styles.scoreFont}}
                        >{`Your Score :`}
                            <span style={{ ...styles.valuestyle }}>{`${scoreData.score_percentage}`}</span>
                        </Typography><br></br>
                    </Grid>
                    <Grid item size={{ xs: 12, md: 12, lg: 12, sm: 12 }} sx={{ display: 'flex', justifyContent: 'center' }}>

                        <Typography>{`Total Attended Questions :`}
                            <span style={{ ...styles.valuestyle }}>{` ${scoreData.total_questions}`}</span>

                        </Typography>

                    </Grid>
                    <Grid item size={{ xs: 12, md: 12, lg: 12, sm: 12 }} sx={{ display: 'flex', justifyContent: 'center', justifyContent: 'center' }}>
                        <Typography style={{ ...styles.greenlabel }}>{`Correct Answers : `}
                            <span style={{ ...styles.valuestyle }}>{`${scoreData.correct_answers}`}</span></Typography><br></br>
                    </Grid>
                </Grid>
            </Box>
        </Modal>
    )
}
const styles = {

    modal: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 'auto ', // Responsive width
        height: 'auto !important',
        backgroundColor: "white",
        border: "1px solid #666666",
        borderRadius: "5px",
        padding: '3% 5% 3% 5%',
        alignContent: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        "@media (max-width: 700px)": {
            // Adjust styles for small screens (sm and xs)
            width: "80% !important",
            height: "auto !important",
        },

    },
    head: {
        fontSize: '1.5rem'
    }
    ,
    fullWidth: {
        width: "100% !important"

    },
    valuestyle: {
        fontSize: '18px',
        fontWeight: '600'
    },
    greenlabel: {
        color: 'green'
    },
scoreFont:{
    fontSize:'18px'
}

};