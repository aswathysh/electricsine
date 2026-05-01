"use client"
import React, { useState } from "react";
import Grid from "@mui/material/Grid2";
import {
    Button,
    IconButton,
    InputAdornment,
    InputLabel,
    TextField,
} from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import "../../styles/authStyles.css";

import Image from "next/image";
import StyledGreyButton from "@/styles/ButtonStyles";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { forgetPasswordLogin } from "@/services/Auth/AuthenticationServices";
import { toast } from 'react-toastify';

export const ForgotPasswordPage = () => {
    const router = useRouter();
    const [email, setEmail] = useState('')

    const forgetMutation = useMutation({
        mutationFn: (forgetEmail) => forgetPasswordLogin(forgetEmail),

        onSuccess: (data) => {
            console.log("User email sended successfully:", data);
            toast.success('New Password sended to your email. Please check your email.', {
              autoClose: 5000,
              style: { fontSize: '16px', fontWeight: 600 }
            });
            setTimeout(() => {
              window.location.href = '/auth/login';
            }, 1500);
        },
        onError: (error) => {
            console.error("Error  while loggin:", error.response?.data?.error);
            toast.error(error.response?.data?.messages.error || 'Something went wrong', {
              autoClose: 5000,
              style: { fontSize: '16px', fontWeight: 600 }
            });
        },
    });
    const handleSubmit = () => {
            event.preventDefault();

                    console.log('email click',email)

        if (email == '') {

        }
        else {
            console.log('email',email)
            let data={
                email:email
            }
            forgetMutation.mutate(data)
        }
    }
    return (
        <Grid
            container
            style={{ display: "flex", justifyContent: "right" }}
            className="light_bg login"
        >


            {/* <Grid item lg={6} md={6} sm={0}
                    sx={{ display: { xs: 'none', sm: 'none', md: 'block', lg: 'block', alignItems: 'center' } }}
                    >
                    <div className="login">

                    </div>
        </Grid>   */}
            <Grid
                item
                size={{ xs: 12, md: 6, lg: 6, sm: 12 }}

                className="bg_grey "
                // style={{ justifyContent: 'center' }}
                style={{
                    display: "flex",
                    //  justifyContent: "center",
                    height: "100%", flexDirection: 'column'
                }}
            >
                <Grid
                    style={{ display: "flex", justifyContent: 'flex-end' }}
                    size={{ xs: 12, md: 12, lg: 12, sm: 12 }}>
                    <IconButton onClick={() => { router.push('/dashboard') }}>
                        <HomeIcon sx={{ color: "white", fontSize: "30px" }} />
                    </IconButton>
                </Grid>
                <Grid
                    style={{ display: "flex", justifyContent: 'center' }}
                    size={{ xs: 12, md: 12, lg: 12, sm: 12 }}>
                    <Grid item
                        size={{ xs: 12, md: 12, lg: 8, sm: 8 }}
                        className="">

                        <div className="login_div1 ">
                            <div className="logo-wrap">
                                <Image
                                    src="/assets/images/logo.png"
                                    alt=" logo"
                                    className="loginlogostyle"
                                    width={10}
                                    height={10}
                                />
                            </div>
                            <form
                            //  onSubmit={handleSubmit}

                            >
                                <div>
                                    <InputLabel
                                        className="loginlabel"
                                        sx={{
                                            color: "black",
                                            fontSize: 14,
                                            mb: 2,
                                            mt: 2,
                                            fontWeight: 600,
                                        }}
                                    >
                                        Mail Id
                                    </InputLabel>
                                    <TextField
                                        type="text"
                                        name="username"
                                        // value={formData.username}
                                        // onChange={handleChange}
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        className={"text form_text_light"}
                                    //   error={!!errors.email}
                                    //   helperText={errors.email}
                                    // value={loginDetails.username}
                                    // onChange={(e) => handleLoginDetailChange(e.target.value, 'username')}
                                    // error={!!validationErrors.username}
                                    // helperText={validationErrors.username}
                                    />

                                </div>



                                <Grid item lg={12} md={12} sm={12} xs={12} sx={{ mt: 5 }}>
                                    <StyledGreyButton
                                        className="full_width"
                                        variant="contained"
                                        disableRipple
                                        onClick={handleSubmit}
                                        type="submit"
                                    // disabled={mutation.isLoading}
                                    >
                                        SUBMIT
                                    </StyledGreyButton>
                                </Grid>

                                {/* <Grid item lg={12} md={12} sm={12} xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>

                                    <Button
                                        variant="text"
                                        // onClick={handleSignup}
                                        className="forgotlabel"
                                        style={{
                                            textTransform: "none",
                                            color: "#ffffff !important",
                                            fontWeight: '500px !important',
                                        }}
                                    >
                                        Create an account
                                    </Button>
                                </Grid> */}
                            </form>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};
