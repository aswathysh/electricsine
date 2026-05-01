import { Box, Button, IconButton, InputAdornment, InputLabel, Modal, TextField, Typography } from "@mui/material"
import Grid from "@mui/material/Grid2";
import CloseIcon from '@mui/icons-material/Close';
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import StyledGreyButton from "@/styles/ButtonStyles";
import { useMutation } from "@tanstack/react-query";
import { loginUser } from "@/services/Auth/AuthenticationServices";
export const LoginModal = ({ openLoginModal, onLogoutModalClose, handleSignUpModal }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({ username: "", password: "" });
    const [errors, setErrors] = useState({});
    const mutation = useMutation({
        mutationFn: (newUser) => loginUser(newUser),
    
        onSuccess: (data) => {
          console.log("User created successfully:", data);
          console.log("User created successfully:", data.data.token);
    
          sessionStorage.setItem("token", data.data.token);
          onLogoutModalClose();
         // window.location.href = '/practice'
          // Optionally redirect or show a success message
        },
        onError: (error) => {
          console.error("Error while loggin user:", error.response.data.error);
        },
      });
    const handleTogglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }
    const handleChange = (event) => {
        console.log(" event.target", event.target.value)
        console.log(" event.targetname",event.target.name)
        const { name, value } = event.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        const validationErrors = loginvalidate();
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
          console.trace("validationErrors",validationErrors)
    
        } else {
          setErrors({});
          console.log("formData",formData)
    
          let data = {
            username: formData.username,
            password: formData.password
          }
          mutation.mutate(data);
          //  window.location.href='/dashboard'
        }
      };
      const validate = () => {
        let validationErrors = {};
        if (!formData.username) {
          validationErrors.username = "Username is required";
        } 
        // else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        //   validationErrors.email = "Email is invalid";
        // }
        if (!formData.password) {
          validationErrors.password = "Password is tokenrequired";
        } else if (formData.password.length < 6) {
          validationErrors.password = "Password must be at least 6 characters long";
        }
        return validationErrors;
      };
      const loginvalidate = () => {
        let validationErrors = {};
        if (!formData.username) {
          validationErrors.username = "User name is required";
        }
        //  else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        //   validationErrors.email = "Email is invalid";
        // }
        if (!formData.password) {
          // validationErrors.password = "Password is required";
        } else if (formData.password.length < 6) {
          validationErrors.password = "Password must be at least 6 characters long";
        }
        return validationErrors;
      };
    return (
        <>
            <Modal
                open={openLoginModal}
                onClose={onLogoutModalClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box style={{}} sx={{ ...TagModalstyle.modal }}>
                    <Grid container sx={{ display: 'flex', justifyContent: 'center', width: '100% !important' }}>
                        <Grid item size={{ xs: 10, md: 8, lg: 8, sm: 10 }}
                            sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Typography style={TagModalstyle.head}>Login </Typography>

                        </Grid>
                        <Grid item size={{ xs: 2, md: 4, lg: 4, sm: 2 }} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <IconButton
                                onClick={onLogoutModalClose}
                            >
                                <CloseIcon sx={{ color: "#161616F" }} />

                            </IconButton>
                        </Grid>

                    </Grid>
                    <form style={TagModalstyle.fullWidth}
                    onSubmit={handleSubmit}
                    >
                        <Grid container
                            sx={{ mt: 1, pb: 5, display: 'flex', justifyContent: 'center' }}
                            spacing={2} >

                            <Grid item size={{ xs: 12, md: 12, lg: 12, sm: 12 }}
                                sx={{ mt: 2 }}>
                                <InputLabel
                                    className={"form_text_light"}
                                    sx={{ color: "black", ml: 0, mb: 1, }}>
                                    User Name</InputLabel>
                                <TextField
                                    className={"form_field form_field_light"}
                                    placeholder="Enter your user name"
                                    sx={{ width: '100% !important', height: '50px !important' }}
                                    value={formData.username}
                                    name="username"
                                    onChange={handleChange}
                                    error={!!errors.username}
                                    helperText={errors.username}
                                />

                            </Grid>
                            <Grid item size={{ xs: 12, md: 12, lg: 12, sm: 12 }}
                                sx={{ mt: 2 }}>
                                <InputLabel
                                    className={"form_text_light"}
                                    sx={{ color: "black", ml: 0, mb: 1, }}>
                                    Password</InputLabel>
                                <TextField
                                    className={"form_field form_field_light"}
                                    placeholder="Password"
                                    name="password"

                                    sx={{ width: '100% !important', height: '50px !important' }}
                                    value={formData.password}
                                    onChange={handleChange}
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
                            <Grid item size={{ xs: 12, md: 12, lg: 12, sm: 12 }} sx={{ display: 'flex', justifyContent: 'center' }}>
                                <StyledGreyButton
                                    className="full_width"
                                    variant="contained"
                                    disableRipple
                                    //onClick={handleSubmit}
                                    type="submit"
                                //   disabled={mutation.isLoading}
                                >
                                    SUBMIT
                                </StyledGreyButton>
                            </Grid>
                            <Grid item size={{ xs: 12, md: 12, lg: 12, sm: 12 }} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                                <Typography className="modalBody modallight" sx={{ mt: 1, fontSize: '13px' }}>
                                    Not a member?
                                </Typography>
                                <Button
                                    variant="text"
                                    onClick={handleSignUpModal}
                                    className="forgotlabel"
                                    style={{
                                        textTransform: "none",
                                        color: "#ffffff !important",
                                        fontWeight: '500px !important',
                                    }}
                                >
                                    Create an account
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Box>
            </Modal>
        </>
    )
}

const TagModalstyle = {
    modal: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: '40% ', // Responsive width
        height: '60% !important',
        backgroundColor: "white",
        border: "1px solid #666666",
        borderRadius: "5px",
        padding: '1% 3% 3% 3%',
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
};