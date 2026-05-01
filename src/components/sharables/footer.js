"use client"
import { Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useRouter } from "next/navigation";
export const Footer = () => {
    const router = useRouter();

    return (
        <Grid >
            <Grid item size={{ xs: 10, md: 8, lg: 8, sm: 10 }}
                style={{ display: 'flex',justifyContent:'center' }}
                // sx={{ backgroundColor: '#00277e' }}
                className="center">
                <div className="mob-show column">
                    <div className="row pb">
                        <div
                            variant="text"
                            onClick={() => router.push('/privacypolicy')}
                            className="footer-link mob-show"
                            style={{
                                textTransform: "none",
                                color: "#ffffff !important",
                                fontWeight: '500px !important',
                            }}
                        >
                            <Typography className="apx_watermark" sx={{ color: 'white' }}>
                                Privacy Policy
                            </Typography>

                        </div>
                        <div
                            variant="text"
                            onClick={() => router.push('/terms-and-conditions')}
                            className="footer-link mob-show"
                            style={{
                                textTransform: "none",
                                color: "#ffffff !important",
                                fontWeight: '500px !important',
                            }}
                        >
                            <Typography className="apx_watermark" sx={{ color: 'white' }}>
                                Terms and Conditions
                            </Typography>

                        </div>
                    </div>
                    {/* Additional links row for mobile */}
                    <div className="row pb">
                        <div
                            variant="text"
                            onClick={() => router.push('/aboutus')}
                            className="footer-link mob-show"
                            style={{
                                textTransform: "none",
                                color: "#ffffff !important",
                                fontWeight: '500px !important',
                            }}
                        >
                            <Typography className="apx_watermark" sx={{ color: 'white' }}>
                                About Us
                            </Typography>
                        </div>
                        <div
                            variant="text"
                            onClick={() => router.push('/contactus')}
                            className="footer-link mob-show"
                            style={{
                                textTransform: "none",
                                color: "#ffffff !important",
                                fontWeight: '500px !important',
                            }}
                        >
                            <Typography className="apx_watermark" sx={{ color: 'white' }}>
                                Contact
                            </Typography>
                        </div>
                    </div>
                    <div className="morefooterdiv">
                        <Typography className="apx_watermark" sx={{ color: 'white' }}>
                            electricsine.com All rights reserved. 2024
                        </Typography>

                    </div>
                </div>

                <div className="morefooterdiv mob-hide">
                    <Typography className="apx_watermark" sx={{ color: 'white' }}>
                        electricsine.com All rights reserved. 2024
                    </Typography>

                </div>
                <div
                    variant="text"
                    onClick={() => router.push('/privacypolicy')}
                    className="footer-link mob-hide"
                    style={{
                        textTransform: "none",
                        color: "#ffffff !important",
                        fontWeight: '500px !important',
                        cursor: 'pointer'
                    }}
                >
                    <Typography className="apx_watermark" sx={{ color: 'white' }}>
                        Privacy Policy
                    </Typography>

                </div>
                <div
                    variant="text"
                    onClick={() => router.push('/terms-and-conditions')}
                    className="footer-link mob-hide"
                    style={{
                        textTransform: "none",
                        color: "#ffffff !important",
                        fontWeight: '500px !important',
                        cursor: 'pointer'
                    }}
                >
                    <Typography className="apx_watermark" sx={{ color: 'white' }}>
                        Terms and Conditions
                    </Typography>
                </div>
                {/* Desktop extra links */}
                <div
                    variant="text"
                    onClick={() => router.push('/aboutus')}
                    className="footer-link mob-hide"
                    style={{
                        textTransform: "none",
                        color: "#ffffff !important",
                        fontWeight: '500px !important',
                        cursor: 'pointer'
                    }}
                >
                    <Typography className="apx_watermark" sx={{ color: 'white' }}>
                        About Us
                    </Typography>
                </div>
                <div
                    variant="text"
                    onClick={() => router.push('/contactus')}
                    className="footer-link mob-hide"
                    style={{
                        textTransform: "none",
                        color: "#ffffff !important",
                        fontWeight: '500px !important',
                        cursor: 'pointer'
                    }}
                >
                    <Typography className="apx_watermark" sx={{ color: 'white' }}>
                        Contact
                    </Typography>
                </div>
            </Grid>

        </Grid>

    )
}