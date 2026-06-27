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
import { IconButton, Button, ButtonGroup } from '@mui/material';
import { useRouter } from 'next/navigation';
export default function MediaCard({ handleCartItem, item, handleView, handlePurchase }) {
      const router = useRouter();  
  const handleTryItOut = (item) => {
    // setViewItem(item);
    // setShowViewModal(true);
    // router.push(`sample_questions/${item.id}`);
    window.location.href=`sample_questions/${item.id}`

}
  return (
    <Card sx={{ height: "300px" }}
      style={{ alignContent: "center", display: 'flex', flexDirection: 'column', justifyContent: 'center',marginBottom:'30px' }}>
      <CardMedia
        className='product-new-label'
        sx={{ height: "100%" }}
        image={item.image ? `https://rubiksoftwares.com/demoelectric/public${item?.image}` : '/assets/images/logincoverpic.jpg'}
        title={item?.title}
      />
      <CardContent style={{ alignContent: "center", display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <Grid container sx={{ alignContent: 'center', display: 'flex', justifyContent: 'center' }}>
          <Grid size={{ xs: 12, md: 12, lg: 12, sm: 12 }}>
            <Typography gutterBottom variant="h5" component="div" className='subject_card_title'>
              {item?.title}
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 12, lg: 12, sm: 12 }} className='subject_card_subtitle'>
            <Typography variant="body2" color="text.secondary" className='truncate'>
              {item?.short}
            </Typography>
          </Grid>


        </Grid>

      </CardContent>
      <CardActions sx={{ paddingBottom: '0px !important' }}>
        {/* <Grid container className="fullwidth bordered-div " style={{display:'flex'}}>

        </Grid> */}
        <Grid container className="fullwidth " style={{borderTop:'1px solid #1976d2',display:'flex',justifyContent:'center'}}>
          <ButtonGroup variant="text" size="small" fullWidth aria-label="Basic button group"> 

            <Button size="small"
              onClick={() => handleView(item)}
              startIcon={<VisibilityOutlinedIcon  />}
            >
              
              View
            </Button>
            <Button size="small"
              onClick={() => handleTryItOut(item)}
              startIcon={<ShoppingCartOutlinedIcon  />}
            >

             
                Try it out
            </Button>
            <Button size="small"
              onClick={() => handleCartItem(item)}
              startIcon={<ShoppingCartOutlinedIcon  />}
            >
              Add to Cart
            </Button>
          </ButtonGroup>
          
        </Grid>
        {/* <Grid container className="fullwidth  " sx={{ mt: 1, justifyContent: 'center' }}>
          <Grid size={{ xs: 12, md: 12, lg: 12, sm: 12 }} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button size="small" variant="contained" onClick={() => handlePurchase && handlePurchase(item)}>
                className='hide-button-text'
                variant="body2" sx={{ marginLeft: 1, color: "#000000" }}>
                
              </Typography>
            </IconButton>
          </Grid>
        </Grid>
        {/* <Grid container className="fullwidth  " sx={{ mt: 1, justifyContent: 'center' }}>
          <Grid size={{ xs: 12, md: 12, lg: 12, sm: 12 }} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button size="small" variant="contained" onClick={() => handlePurchase && handlePurchase(item)}>
              Purchase
            </Button>
          </Grid>
        </Grid> */}
      </CardActions>
    </Card >
  );
}