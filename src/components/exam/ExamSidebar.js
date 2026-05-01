import { Grid, IconButton, Typography } from "@mui/material";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import React from "react";
export const ExamSidebar =({})=>{
    const numbers = Array.from({ length: 20 }, (_, index) => index + 1);    
    return(
        <div className="light_bg exam_qustion_div" >
           
            <Grid container sx={{mt:2,p:2}} className="light_bg qustionlistGrid"  >
            
       <Typography sx={{ textAlign: 'left' }} className="timerhead light_text">Legends</Typography>

 <Grid container sx={{display:"flex",justifyContent:'left',p:2,justifyItems:'space-around'}}>
    <Grid item lg={12} md={12} sx={{display:"flex",justifyContent:'left',p:2,}}>
    <Grid item sx={{display:"flex",justifyContent:'left'}} className="attended questnoitems"> </Grid>
    <Grid item sx={{display:'flex',alignItems:'left'}}>       
    <Typography sx={{ textAlign: 'center' ,pl:1}} className="timerhead light_text">Answered</Typography>
</Grid>
</Grid>
<Grid item lg={12} md={12} sx={{display:"flex",p:2,justifyContent:'left'}}>
    <Grid item sx={{display:"flex",justifyContent:'left'}} className="notattended questnoitems"> </Grid>
    <Grid item sx={{display:'flex',alignItems:'left'}}>       
    <Typography sx={{ textAlign: 'center',pl:1 }} className="timerhead light_text">Not answered</Typography>
</Grid>
</Grid>
<Grid item lg={12} md={12} sx={{display:"flex",p:2,justifyContent:'left'}}>
    <Grid item sx={{display:"flex",justifyContent:'left'}} className="tagged questnoitems"> </Grid>
    <Grid item sx={{display:'flex',alignItems:'center'}}>       
    <Typography sx={{ textAlign: 'center' ,pl:1}} className="timerhead light_text">Marked</Typography>
</Grid>

    </Grid>
    <Grid item lg={12} md={12} sx={{display:"flex",p:2,justifyContent:'left'}}>
    <Grid item sx={{display:"flex",justifyContent:'left'}} className="notvisited questnoitems"> </Grid>
    <Grid item sx={{display:'flex',alignItems:'center'}}>       
    <Typography sx={{ textAlign: 'center' ,pl:1}} className="timerhead light_text">Not Visited</Typography>
</Grid>

    </Grid>
{/* <Grid container sx={{display:"flex",justifyContent:'left', p:2}}>
  
<Grid container sx={{display:"flex",justifyContent:'left',p:2}}>
    
    </Grid>
    </Grid> */}

 </Grid>
 
 <Typography sx={{ textAlign: 'left' }} className="timerhead light_text">Hints</Typography>

            </Grid>
        </div>
    )
}