"use client"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Grid from '@mui/material/Grid2';
import { StyledGreyButton } from '@/styles/ButtonStyles';
import './sharables.css'
import { IconButton } from '@mui/material';
import { useRouter } from 'next/navigation';
export default function MediaCard({ handleCartItem, item, handleView }) {
      const router = useRouter();  
  const handleTryItOut = (item) => {
    // setViewItem(item);
    // setShowViewModal(true);
    // router.push(`sample_questions/${item.id}`);
    window.location.href=`sample_questions/${item.id}`

}
  return (
    <Card sx={{ height: "300px" }}
      style={{ alignContent: "center", display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <CardMedia
        className='product-new-label'
        sx={{ height: "100%" }}
        image={item.image ? `https://rubiksoftwares.com/demoelectric/public${item?.image}` : '/assets/images/logincoverpic.jpg'}
        title={item?.title}
      />
      <CardContent style={{ alignContent: "center", display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <Grid container style={{ alignContent: "center", display: 'flex', justifyContent: 'center' }}>
          <Grid item size={{ xs: 12, md: 12, lg: 12, sm: 12 }}>
            <Typography gutterBottom variant="h5" component="div" className='subject_card_title'>
              {item?.title}
            </Typography>
          </Grid>
          <Grid item size={{ xs: 12, md: 12, lg: 12, sm: 12 }} className='subject_card_subtitle'>
            <Typography variant="body2" color="text.secondary" className='truncate'>
              {item?.short}
            </Typography>
          </Grid>


        </Grid>

      </CardContent>
      <CardActions sx={{ paddingBottom: '0px !important' }}>
        {/* <Grid container className="fullwidth bordered-div " style={{display:'flex'}}>

        </Grid> */}
        <Grid container className="fullwidth bordered-div">
          <Grid item
            size={{ xs: 2.8, md: 3, lg: 3, sm: 4 }}
            style={{ display: 'flex', 
              justifyContent: 'left',
                '@media(min-width:380px)': {
                  justifyContent: 'left !important',}
            }}>
            <IconButton size="small"
              // sx={{ width: "200px !important" }}

              variant="contained"
              onClick={() => handleView(item)}
            >
              <VisibilityOutlinedIcon sx={{ color: "#000000", fontSize: 20 }} />
              <Typography
                className='hide-button-text'
                variant="body2" sx={{ marginLeft: 1, color: "#000000" }}>
                View
              </Typography>
            </IconButton>
          </Grid>

          <Grid item size={{ xs: 5, md: 4.7, lg: 4.7, sm: 4 }}
            style={{ display: 'flex', justifyContent: 'center', '@media(min-width:380px)': {
              justifyContent: 'center !important',} }}>
            <IconButton size="small"
              // sx={{ width: "200px !important" }}
              variant="contained"

              onClick={() => handleTryItOut(item)}
            >

              <ShoppingCartOutlinedIcon sx={{ color: "#000000", fontSize: 20 }} />
              <Typography variant="body2" sx={{ marginLeft: 1, color: "#000000" }}
                className='hide-button-text' >
                Try it Out
              </Typography>
            </IconButton>
          </Grid>
          <Grid item size={{ xs: 4, md: 4, lg: 4, sm: 4 }}
            style={{ display: 'flex', justifyContent: 'right', '@media(min-width:380px)': {
              justifyContent: 'right !important',} }}>
            <IconButton size="small"
              // sx={{ width: "200px !important" }}
              variant="contained"

              onClick={() => handleCartItem(item)}
            >

              <ShoppingCartOutlinedIcon sx={{ color: "#000000", fontSize: 20 }} />
              <Typography
                className='hide-button-text'
                variant="body2" sx={{ marginLeft: 1, color: "#000000" }}>
                Add to Cart
              </Typography>
            </IconButton>
          </Grid>
          {/* <Button size="small"
         sx={{ width:"200px !important" }}
         variant="contained"
        >Purchase</Button> */}
        </Grid>
        {/* <Button size="small">Learn More</Button> */}
      </CardActions>
    </Card >
  );
}