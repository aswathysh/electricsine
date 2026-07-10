import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  InputLabel,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import Grid from "@mui/material/Grid2";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import CloseIcon from "@mui/icons-material/Close";
import { useMutation } from "@tanstack/react-query";
import { createUser } from "@/services/Auth/AuthenticationServices";
import { toast } from "react-toastify";

const StyledGreyButton = dynamic(() => import("../../styles/ButtonStyles"), {
  ssr: false,
});

const COLORS = {
  ink: "#222546",
  inkSoft: "#565b74",
  border: "#e3dfd6",
  borderFocus: "#222546",
  accent: "#2a52e8",
  gold: "#d4a017",
  error: "#c94a2a",
};

export const SignUpModal = ({ openSignUpModal, handleModal }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: "",
    mobile: "",
  });
  const [errors, setErrors] = useState({});

  const mutation = useMutation({
    mutationFn: (newUser) => createUser(newUser),

    onSuccess: (data) => {
      console.log("User created successfully:", data);
      window.location.href = "/auth/login";
    },
    onError: (error) => {
      console.error("Error creating user:", error.response.data.error);
      console.error("Error creating user msg:", error.response.data.messages);

      toast.error(error.response.data.messages || "Something went wrong", {
        autoClose: 5000,
        style: { fontSize: "18px", fontWeight: 600 },
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
      validationErrors.password = "Password is required";
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
    } else {
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
  };

  return (
    <>
      <Modal
        open={openSignUpModal}
        onClose={handleModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 2,
        }}
      >
        <Box sx={TagModalstyle.modal}>
          <Grid
            container
            sx={{
              display: "flex",
              alignItems: "center",
              width: "100% !important",
            }}
          >
            <Grid item size={{ xs: 10, md: 8, lg: 8, sm: 10 }}>
              <Typography id="modal-modal-title" sx={TagModalstyle.head}>
                Create a new account
              </Typography>
            </Grid>
            <Grid
              item
              size={{ xs: 2, md: 4, lg: 4, sm: 2 }}
              sx={{ display: "flex", justifyContent: "flex-end" }}
            >
              <IconButton onClick={handleModal} sx={TagModalstyle.closeBtn}>
                <CloseIcon sx={{ color: COLORS.inkSoft, fontSize: 20 }} />
              </IconButton>
            </Grid>
          </Grid>

          <Typography sx={TagModalstyle.subhead}>
            It&apos;s quick and easy.
          </Typography>

          {mutation?.isError && (
            <Typography sx={TagModalstyle.errorText}>
              Error:{" "}
              {mutation?.error?.response?.data?.messages?.error ||
                "Something went wrong"}
            </Typography>
          )}

          <form style={TagModalstyle.fullWidth} onSubmit={handleSubmit}>
            <Grid container sx={{ mt: 1 }} spacing={2.5}>
              {/* Username Field */}
              <Grid item size={{ xs: 12, sm: 6, md: 6, lg: 6 }}>
                <InputLabel sx={TagModalstyle.label}>User Name</InputLabel>
                <TextField
                  fullWidth
                  placeholder="Enter your user name"
                  sx={TagModalstyle.textField}
                  value={formData.username}
                  onChange={(e) => handleChange(e.target.value, "username")}
                  error={!!errors.username}
                  helperText={errors.username}
                />
              </Grid>

              {/* Email Field */}
              <Grid item size={{ xs: 12, sm: 6, md: 6, lg: 6 }}>
                <InputLabel sx={TagModalstyle.label}>Email</InputLabel>
                <TextField
                  fullWidth
                  placeholder="Enter your email"
                  sx={TagModalstyle.textField}
                  value={formData.email}
                  onChange={(e) => handleChange(e.target.value, "email")}
                  error={!!errors.email}
                  helperText={errors.email}
                />
              </Grid>

              {/* Phone Number Field */}
              <Grid item size={{ xs: 12, sm: 6, md: 6, lg: 6 }}>
                <InputLabel sx={TagModalstyle.label}>Phone Number</InputLabel>
                <TextField
                  fullWidth
                  placeholder="Enter your phone number"
                  sx={TagModalstyle.textField}
                  value={formData.mobile}
                  onChange={(e) => handleChange(e.target.value, "mobile")}
                  error={!!errors.mobile}
                  helperText={errors.mobile}
                />
              </Grid>

              {/* Password Field */}
              <Grid item size={{ xs: 12, sm: 6, md: 6, lg: 6 }}>
                <InputLabel sx={TagModalstyle.label}>Password</InputLabel>
                <TextField
                  fullWidth
                  placeholder="Password"
                  sx={TagModalstyle.textField}
                  value={formData.password}
                  onChange={(e) => handleChange(e.target.value, "password")}
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
                          {showPassword ? (
                            <VisibilityOff
                              sx={{ color: COLORS.inkSoft, fontSize: 20 }}
                            />
                          ) : (
                            <Visibility
                              sx={{ color: COLORS.inkSoft, fontSize: 20 }}
                            />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>

              {/* Submit Button */}
              <Grid
                item
                size={{ xs: 12, md: 12, lg: 12, sm: 12 }}
                sx={{ mt: 2, display: "flex", justifyContent: "center" }}
              >
                <StyledGreyButton
                  fullWidth
                  variant="contained"
                  disableRipple
                  type="submit"
                  sx={TagModalstyle.submitBtn}
                >
                  SUBMIT
                </StyledGreyButton>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Modal>
    </>
  );
};

const TagModalstyle = {
  modal: {
    position: "relative",
    width: "100%",
    maxWidth: { xs: "100%", sm: "600px", md: "650px" },
    maxHeight: "90vh",
    overflowY: "auto",
    backgroundColor: "#ffffff",
    border: "none",
    borderRadius: { xs: "16px", md: "18px" },
    boxShadow: "0 24px 60px rgba(34, 37, 70, 0.22)",
    padding: {
      xs: "24px 20px 22px",
      sm: "32px 32px 28px",
      md: "36px 36px 32px",
    },
    display: "flex",
    flexDirection: "column",
  },
  closeBtn: {
    width: 32,
    height: 32,
    borderRadius: "50%",
    backgroundColor: "#f5f3ee",
    "&:hover": {
      backgroundColor: "#edeae3",
    },
  },
  head: {
    fontSize: { xs: "1.35rem", md: "1.75rem" },
    fontWeight: 700,
    letterSpacing: "-0.5px",
    color: COLORS.ink,
  },
  subhead: {
    fontSize: { xs: "14px", md: "18px" },
    color: COLORS.inkSoft,
    mt: 0.5,
    mb: 1.5,
  },
  label: {
    color: COLORS.ink,
    fontSize: { xs: "14px", md: "18px" },
    fontWeight: 600,
    mb: 0.75,
    position: "static",
    transform: "none",
  },
  textField: {
    width: "100% !important",
    "& .MuiOutlinedInput-root": {
      borderRadius: "10px",
      fontSize: { xs: "15px", md: "18px" },
      "& fieldset": {
        borderColor: COLORS.border,
      },
      "&:hover fieldset": {
        borderColor: COLORS.inkSoft,
      },
      "&.Mui-focused fieldset": {
        borderColor: COLORS.borderFocus,
        borderWidth: "1.5px",
      },
    },
    "& .MuiOutlinedInput-input": {
      padding: { xs: "13px 14px", md: "15px 16px" },
    },
  },
  submitBtn: {
    width: "100% !important",
    height: { xs: "46px", md: "50px" },
    borderRadius: "10px !important",
    backgroundColor: `${COLORS.ink} !important`,
    color: "#ffffff !important",
    fontWeight: 600,
    fontSize: { xs: "15px", md: "18px" },
    letterSpacing: "0.3px",
    textTransform: "none",
    boxShadow: "none !important",
    "&:hover": {
      backgroundColor: `${COLORS.accent} !important`,
    },
  },
  errorText: {
    color: `${COLORS.error} !important`,
    fontSize: { xs: "14px", md: "18px" },
    fontWeight: 500,
    mt: 1,
    mb: 1,
  },
  fullWidth: {
    width: "100% !important",
  },
};
