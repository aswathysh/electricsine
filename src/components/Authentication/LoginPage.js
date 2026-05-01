"use client";
import React from "react";
import {
  Button,
  IconButton,
  InputAdornment,
  InputLabel,
  TextField,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import "../../styles/authStyles.css";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import StyledGreyButton from "@/styles/ButtonStyles";
import { loginUser } from "@/services/Auth/AuthenticationServices";
import { useMutation } from "@tanstack/react-query";
import HomeIcon from '@mui/icons-material/Home';
import Image from "next/image";
import { useRouter } from "next/navigation";
export const LoginPage = ({ }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({});
  const router = useRouter();
  // Mutation for creating a user



  const mutation = useMutation({
    mutationFn: (newUser) => loginUser(newUser),

    onSuccess: (data) => {
      console.log("User created successfully:", data);
      console.log("User created successfully:", data.data.token);

      sessionStorage.setItem("token", data.data.token);
      sessionStorage.setItem("userName",data.username);
       window.location.href = '/user/home'
      // Optionally redirect or show a success message username
    },
    onError: (error) => {
      console.error("Error  while loggin:", error.response.data.error);
    },
  });
  const validate = () => {
    let validationErrors = {};
    if (!formData.username) {
      validationErrors.username = "Username is required";
    }
    // else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    //   validationErrors.email = "Email is invalid";
    // }
    if (!formData.password) {
      validationErrors.password = "Password is token required";
    } else if (formData.password.length < 6) {
      validationErrors.password = "Password must be at least 6 characters long";
    }
    return validationErrors;
  };
  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  }
  const handleForgot = () => {
    window.location.href = '/auth/forgot-password'
  }
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
  // Handle input changes
  const handleChange = (event) => {
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

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      console.trace("validationErrors", validationErrors)

    } else {
      setErrors({});
      console.log("formData", formData)

      let data = {
        username: formData.username,
        password: formData.password
      }
      mutation.mutate(data);
      //  window.location.href='/dashboard'
    }
  };
  const handleSignup = () => {
    window.location.href = '/signup'
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
        style={{ display: "flex", justifyContent: "center", height: "100%", flexDirection: 'column' }}
      >    <Grid
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
              <form onSubmit={handleSubmit}>
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
                    User Id
                  </InputLabel>
                  <TextField
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                    className={"text form_text_light"}
                  //   error={!!errors.email}
                  //   helperText={errors.email}
                  // value={loginDetails.username}
                  // onChange={(e) => handleLoginDetailChange(e.target.value, 'username')}
                  // error={!!validationErrors.username}
                  // helperText={validationErrors.username}
                  />
                  {errors.username && (
                    <div style={{ color: "red" }}>{errors.username}</div>
                  )}
                </div>
                <div>
                  <InputLabel
                    className="loginlabel"
                    sx={{
                      color: "black",
                      fontSize: 14,
                      mb: 2,
                      mt: 3,
                      fontWeight: 600,
                    }}
                  >
                    Password
                  </InputLabel>
                  <TextField
                    //  type="email"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required

                    // error={!!validationErrors.password}
                    // helperText={validationErrors.password}
                    type={showPassword ? "text" : "password"}
                    // value={loginDetails.password}
                    // onChange={(e) => handleLoginDetailChange(e.target.value, 'password')}
                    className={"text form_text_light"}
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
                  {errors.password && (
                    <div style={{ color: "red" }}>{errors.password}</div>
                  )}
                </div>

                <div className="forget_div">
                  <Button
                    variant="text"
                    onClick={handleForgot}
                    className="forgotlabel"
                    style={{
                      textTransform: "capitalize",
                      color: "#E28909",
                      fontWeight: 700,
                    }}
                  >
                    Forgot Password
                  </Button>
                </div>

                <Grid item lg={12} md={12} sm={12} xs={12}>
                  <StyledGreyButton
                    className="full_width"
                    variant="contained"
                    disableRipple
                    //  onClick={handleLogin}
                    type="submit"
                    disabled={mutation.isLoading}
                  >
                    SUBMIT
                  </StyledGreyButton>
                </Grid>
                {/* <button type="submit" disabled={mutation.isLoading}>
          {mutation.isLoading ? 'Creating...' : 'Create User'}
        </button> */}
                {mutation?.isError && (
                  <div>Error: {mutation?.error?.response?.data?.messages.error}</div>
                )}
                {mutation?.isSuccess && <div>{mutation.data.message}</div>}
                <Grid item lg={12} md={12} sm={12} xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>

                  <Button
                    variant="text"
                    onClick={handleSignup}
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
              </form>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
