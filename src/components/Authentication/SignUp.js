"use client"
import { Box, Skeleton, Stack } from "@mui/material";
import Grid from '@mui/material/Grid2';
import { useState } from "react";
import { SignUpModal } from './SignUpModal'
export const SignUp = () => {
    const [loading, setLoading] = useState(true);
   const[openSignUpModal,setOpenSignupMpdal] = useState(true)
    const handleModal = () => {
        window.location.href='/auth/login'
    }
    return (
        <div>
            <SignUpModal
                openSignUpModal={openSignUpModal}
                handleModal={handleModal}
            />
            <Stack spacing={.1}>
                {/* For variant="text", adjust the height via font-size */}
                <Skeleton variant="text" sx={{ fontSize: '7rem' }} />
                {/* For other variants, adjust the size with `width` and `height` */}
                <Skeleton variant="rectangular" width={'100%'} height={'38vh'} />
                <Skeleton variant="text" sx={{ fontSize: '1.2rem' }} />

                <Grid container wrap="nowrap">
                    {(loading ? Array.from(new Array(3)) : data).map((item, index) => (
                        <Box key={index} sx={{ width: '35%', marginRight: 0.5, my: 5 }}>
                            <Skeleton variant="rectangular" width={'100%'} height={118} />

                            <Box sx={{ pt: 0.5 }}>
                                <Skeleton />
                                <Skeleton width="60%" />
                            </Box>
                        </Box>
                    ))}
                </Grid>
            </Stack>
        </div>
    )
}