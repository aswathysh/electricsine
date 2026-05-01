import { Button, Typography } from "@mui/material";
import Grid from '@mui/material/Grid2';
import Image from "next/image";
import '@/app/cart/cart.css'
export const CartItem = ({ title, image, description, price, index, removeItem }) => {
    return (
        <div class="bordered-div">
            <Grid container spacing={4}>
                <Grid item size={{ xs: 3, md: 2, lg: 2.3, sm: 3 }} sx={{ position: 'relative' }}>
                    <Image
                        className="responsive-image"
                        layout="fill"
                        objectFit="cover"
                        // width={100}
                        // height={100}
                        src={`https://rubiksoftwares.com/demoelectric/public${image}`}
                        alt="courseimg" />
                </Grid>
                <Grid item size={{ xs: 6, md: 5.5, lg: 5.5, sm: 6 }}>
                    <div>
                        <Typography gutterBottom variant="h5" component="div">
                            {title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {description}
                        </Typography>
                    </div>
                </Grid>
                <Grid item
                    size={{ xs: 0, md: 2.6, lg: 2.6, sm: 0 }}
                    className="hide"
                    style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                    <Button size="small"
                        // sx={{ width: "200px !important" }}
                        variant="text"
                        onClick={() => removeItem(index)}

                    >Remove</Button>
                    {/* <Button
                        // sx={{ width: "200px !important" }}
                        variant="text"
                    >Save for Later </Button> */}
                </Grid>
                <Grid item
                    size={{ xs: 2, md: 1.5, lg: 1.5, sm: 2 }}
                    className="">
                    <Typography variant="body2" color="text.secondary">

                        {price}
                    </Typography>
                </Grid>
                <Grid item size={{ xs: 12, md: 12, lg: 12, sm: 12 }} className="hide_above_mob"
                    style={{ ...styles.contentleft, ...styles.padding,display:'flex',justifyContent:'flex-end' }}>
                    <Button size="small"
                        // sx={{ width: "200px !important" }}
                        variant="text"
                        onClick={() => removeItem(index)}

                    >Remove</Button>
                    {/* <Button
                        // sx={{ width: "200px !important" }}
                        variant="text"
                    >Save for Later </Button> */}
                </Grid>
            </Grid>
        </div>
    )
}
const styles={
    contentleft: {
        display: 'flex',
        justifyContent: 'left'
    },
    padding: {
        padding: '2%',
    },
}