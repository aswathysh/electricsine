import { Grid, Typography } from '@mui/material';
import React from 'react';

import Image from "next/image";
export const SingleSubject =()=>{
    return(
        <Grid container >
            <Grid  item lg={6} md={6} sm={12} sx={12}>
                <Grid item lg={4} md={4} sm={12} sx={12}>
                <Image
                src="/assets/images/sub1.jpg"
                alt="Subject 1"
                style={styles.subjectImg}
                />  
                   <Typography>

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec convallis mi velit, 
</Typography>             
                </Grid>
                <Grid item lg={8} md={8} sm={12} sx={12}>
            
      </Grid>
            </Grid>
            <Grid item lg={6} md={6} sm={12} sx={12}>
            <Grid item lg={4} md={4} sm={12} sx={12}>
                <Image
                src="/assets/images/sub2.jpg"
                alt="Subject 1"
                style={styles.subjectImg}
                />  
                   <Typography>

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec convallis mi velit, 
</Typography>             
                </Grid>
                <Grid item lg={8} md={8} sm={12} sx={12}>
            
      </Grid>
                </Grid>
        </Grid>
    )
}
const styles={
    subjectImg:{
            height:"300px",
            width:'100%'
    }
}