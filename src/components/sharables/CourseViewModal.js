import { Box, Card, CardContent, CardMedia, IconButton, Modal, Typography } from "@mui/material";
import Grid from '@mui/material/Grid2';
import CloseIcon from '@mui/icons-material/Close';
import './sharables.css'

export const CourseViewModal = ({ showViewModal, closeView, item }) => {
    return (

        <Modal
            open={showViewModal}
            onClose={closeView}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box style={{}} sx={{ ...styles.modal }}>
                <Grid container sx={{ display: 'flex', justifyContent: 'flex-end',                 
                width:{ lg:'100%',sm:'100%',xs:'100%',md:'100%' }}}>
                    <Grid item size={{ xs: 12, md: 12, lg: 12, sm: 12 }} 
                    sx={{ display: 'flex', justifyContent: 'flex-end',p:'0px !important' }}>
                        <IconButton onClick={closeView}
                         sx={{ p:'0px !important' }}>
                            <CloseIcon sx={{ color: "#161616F",p:'0px !important' }} />

                        </IconButton>
                    </Grid>
                </Grid>
                <Card sx={{ height: { lg:'300px',sm:'400px',xs:'400px',md:'300px' },
                 width:{  lg:'100%',sm:'100%',xs:'100%',md:'100%' }}}
                    style={{
                        alignContent: "center", display: 'flex', flexDirection: 'column',
                        justifyContent: 'center'
                    }}>

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
                                <Typography variant="body2" color="text.secondary">
                                    {item?.description}
                                </Typography>
                            </Grid>
                            <Grid container className="fullwidth " sx={{mt:2}}>
                                <Grid item
                                    size={{ xs: 6, md: 6, lg: 6, sm: 6 }}
                                    style={{ display: 'flex', justifyContent: 'left' }}>
                                    <Typography variant="body2" sx={{ color: "#000000" }}>
                                        {`Validity:${item?.validity} days`}
                                    </Typography>
                                </Grid>
                                <Grid item size={{ xs: 6, md: 6, lg: 6, sm: 6 }}
                                    style={{ display: 'flex', justifyContent: 'right' }}>
                                    <Typography variant="body2" sx={{ marginLeft: 1, color: "#000000" }}>
                                        {`Price:${item?.price}₹`}
                                    </Typography>
                                </Grid>
                                {/* <Button size="small"
         sx={{ width:"200px !important" }}
         variant="contained"
        >Purchase</Button> */}
                            </Grid>

                        </Grid>

                    </CardContent>

                </Card >
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
        "@media (max-width: 900px)": {
            // Adjust styles for small screens (sm and xs)
            width: "75% !important",
            height: "auto !important",
        },

    },
}