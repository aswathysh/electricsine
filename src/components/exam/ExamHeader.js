import { Grid, Typography,Box } from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const ExamHeader=()=>{
    const numbers = Array.from({ length: 200 }, (_, index) => index + 1);    
    const currentQstn=20;
    return <>

    <Grid container>
        <Grid  sm={9} >
            <Typography className='head left'>Electrical Engineering</Typography>         
        </Grid>
        <Grid  sm={3} >
        <Typography sx={{ textAlign: 'left',fontSize:"32px" ,mt:1}} className="time ">01:20:10</Typography>     
        </Grid>
    </Grid>
    <Box sx={{ display: 'flex', width: '100%', height: '50px' }}>
        <Box className="page-btns">
            <ArrowForwardIosIcon/>
        </Box>
        <Box sx={{ flexGrow: 1,  overflowX: 'auto' }}>                   
            <Box sx={{ display: 'flex', minWidth: '600px' }}>
                {numbers.map((item,index)=>( 
                    <div item key={index} className={"questnoitems "+(index<10?'attended':index==11?'current':'')}>
                        <Typography>{item}</Typography>
                    </div>
                ))}
            </Box>                             
            </Box>
            <Box className="page-btns">
                <ArrowBackIosIcon/>
            </Box>
        </Box>
    </>
}
export default ExamHeader;