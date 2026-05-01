import { Box, IconButton, InputAdornment, InputLabel, Modal, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import Grid from "@mui/material/Grid2";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import CloseIcon from '@mui/icons-material/Close';
import { useMutation } from "@tanstack/react-query";
import { createUser } from "@/services/Auth/AuthenticationServices";
// import { StyledGreyButton, BorderButton } from "@/styles/ButtonStyles";
const StyledGreyButton = dynamic(() => import("../../styles/ButtonStyles"), {
    ssr: false,
});
//   const BorderButt = dynamic(() => import("../../styles/ButtonStyles"), {
//     ssr: false,
//   });

export const SignUpModal = ({ openSignUpModal, handleModal }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({ email: "", password: "", username: "", mobile: '' });
    const [errors, setErrors] = useState({});
    const mutation = useMutation({
        mutationFn: (newUser) => createUser(newUser),

        onSuccess: (data) => {
            console.log("User created successfully:", data);
            //   console.log("User created successfully:", data.data.token);

            //   sessionStorage.setItem("token", data.data.token);
            //   window.location.href = '/practice'
            // Optionally redirect or show a success message
            window.location.href = '/auth/login'

        },
        onError: (error) => {
            console.error("Error creating user:", error.response.data.error);
            console.error("Error creating user msg:", error.response.data.messages);

            toast.error(error.response.data.messages || 'Something went wrong', {
                autoClose: 5000,
                style: { fontSize: '16px', fontWeight: 600 }
            });

        },
    });
    const validate = () => {
        let validationErrors = {};
        if (!formData.email) {
            validationErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            validationErrors.email = "Email is invalid";
        }
        if (!formData.password) {
            validationErrors.password = "Password is tokenrequired";
        } else if (formData.password.length < 6) {
            validationErrors.password = "Password must be at least 6 characters long";
        }
        return validationErrors;
    };
    const handleChange = (value, key) => {
        setFormData((prev) => ({ ...prev, [key]: value }));
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        }
        else {

            setErrors({});
        }
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {

            setErrors({});
            mutation.mutate(formData);

            //  window.location.href='/dashboard'
        }
    };
    const handleTogglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }
    return (
        <>
            <Modal
                open={openSignUpModal}
                //  onClose={onLogoutModalClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box style={{}} sx={{ ...TagModalstyle.modal }}>
                    <Grid container sx={{ display: 'flex', justifyContent: 'right', width: '100% !important' }}>
                        <Grid item size={{ xs: 12, md: 12, lg: 12, sm: 12 }} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <IconButton onClick={handleModal}>
                                <CloseIcon sx={{ color: "#161616F" }} />
                            </IconButton>
                        </Grid>
                    </Grid>

                    <Typography style={TagModalstyle.head}>Create a new account  </Typography>



                    <Typography className="modalBody modallight" sx={{ mt: 1 }}>
                        It&apos;s quick and easy.
                    </Typography>
                    {mutation?.isError && (
                        <Typography sx={{color:'red !important'}}
                         style={TagModalstyle.redText}>Error: {mutation?.error?.response?.data?.messages.error}</Typography>
                    )}
                    <form style={TagModalstyle.fullWidth}
                    //onSubmit={handleSubmit}
                    >
                        <Grid container sx={{ mt: 1, pb: 5, display: 'flex', justifyContent: 'center' }} spacing={2} >

                            <Grid item size={{ xs: 12, md: 6, lg: 6, sm: 12 }}
                                sx={{ mt: 3 }}>
                                <InputLabel
                                    className={"form_text_light"}
                                    sx={{ color: "black", ml: 0, mb: 1, }}>
                                    User Name</InputLabel>
                                <TextField
                                    className={"form_field form_field_light"}
                                    placeholder="Enter your user name"
                                    sx={{ width: '100% !important', height: '50px !important' }}
                                    value={formData.username}
                                    onChange={(e) => handleChange(e.target.value, 'username')}
                                    error={!!errors.username}
                                    helperText={errors.username}
                                />

                            </Grid>
                            <Grid item size={{ xs: 12, md: 6, lg: 6, sm: 12 }}
                                sx={{ mt: 3 }}>
                                <InputLabel
                                    className={"form_text_light"}
                                    sx={{ color: "black", ml: 0, mb: 1, }}>
                                    Email</InputLabel>
                                <TextField
                                    className={"form_field form_field_light"}
                                    placeholder="Enter your email"
                                    sx={{ width: '100% !important', height: '50px !important' }}
                                    value={formData.email}
                                    onChange={(e) => handleChange(e.target.value, 'email')}
                                    error={!!errors.email}
                                    helperText={errors.email}
                                />

                            </Grid>

                            <Grid item size={{ xs: 12, md: 6, lg: 6, sm: 12 }}
                                sx={{ mt: 3 }}>
                                <InputLabel
                                    className={"form_text_light"}
                                    sx={{ color: "black", ml: 0, mb: 1, }}>
                                    Phone Number</InputLabel>
                                <TextField
                                    className={"form_field form_field_light"}
                                    placeholder="Enter your phone number"
                                    sx={{ width: '100% !important', height: '50px !important' }}
                                    value={formData.mobile}
                                    onChange={(e) => handleChange(e.target.value, 'mobile')}
                                    error={!!errors.mobile}
                                    helperText={errors.mobile}
                                />

                            </Grid>
                            <Grid item size={{ xs: 12, md: 6, lg: 6, sm: 12 }}
                                sx={{ mt: 3 }}>
                                <InputLabel
                                    className={"form_text_light"}
                                    sx={{ color: "black", ml: 0, mb: 1, }}>
                                    Password</InputLabel>
                                <TextField
                                    className={"form_field form_field_light"}
                                    placeholder="Password"
                                    sx={{ width: '100% !important', height: '50px !important' }}
                                    value={formData.password}
                                    onChange={(e) => handleChange(e.target.value, 'password')}
                                    error={!!errors.password}
                                    helperText={errors.password}
                                    type={showPassword ? "text" : "password"}

                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    onClick={handleTogglePasswordVisibility}
                                                    edge="end"
                                                >
                                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                />

                            </Grid>
                        </Grid>




                        <Grid item size={{ xs: 12, md: 12, lg: 12, sm: 12 }} sx={{ display: 'flex', justifyContent: 'center' }}>
                            <StyledGreyButton
                                className="full_width"
                                variant="contained"
                                disableRipple
                                onClick={handleSubmit}
                                type="submit"
                            //   disabled={mutation.isLoading}
                            >
                                SUBMIT
                            </StyledGreyButton>
                        </Grid>
                        {/* <button type="submit" disabled={mutation.isLoading}>
          {mutation.isLoading ? 'Creating...' : 'Create User'}
        </button> */}

                    </form>
                    {/* <div style={{ display: "flex" }}>
            <StyledGreyButton
              sx={{ mr: 2, mt: 3 }}
              variant="contained"
              onClick={onLogoutModalClose}
            >
              <HighlightOffRoundedIcon
                sx={{ fontSize: "20px", mr: "5px", color: "#ffffff" }}
              />
              Cancel
            </StyledGreyButton>
            <StyledGreyButton
              // className="full_width"
              variant="contained"
              disableRipple
              // onClick={handleLogin}

              startIcon={<LogoutOutlinedIcon color="white" />}
              sx={{ mt: 3 }}
            //  onClick={onLogOutConform}
            >
              Sign Out
            </StyledGreyButton>
          </div> */}
                </Box>
            </Modal>
        </>
    );
};
const TagModalstyle = {
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
        "@media (max-width: 700px)": {
            // Adjust styles for small screens (sm and xs)
            width: "80% !important",
            height: "auto !important",
        },

    },
    head: {
        fontSize: '1.5rem'
    }
    ,
    fullWidth: {
        width: "100% !important"

    },
    redText:{
        color:'red !important'
    }
};

