import { Box, CircularProgress, Typography } from "@mui/material";
import React from "react";
export const ScoreProgress =(props)=> {
    return (
      <Box sx={{ position: 'relative', display: 'inline-flex' }}>
        <CircularProgress variant="determinate" {...props} size="4rem" />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography
            variant="caption"
            component="div"
            sx={{ color: 'black',fontSize:"18px" }}
          >
            {`${Math.round(props.value)}%`}
          </Typography>
        </Box>
      </Box>
    );
  }