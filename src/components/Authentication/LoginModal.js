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
import Grid from "@mui/material/Grid2";
import CloseIcon from "@mui/icons-material/Close";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import StyledGreyButton from "@/styles/ButtonStyles";
import { useMutation } from "@tanstack/react-query";
import { loginUser } from "@/services/Auth/AuthenticationServices";

const COLORS = {
  ink: "#222546",
  inkSoft: "#565b74",
  border: "#e3dfd6",
  borderFocus: "#222546",
  accent: "#2a52e8",
  gold: "#d4a017",
  error: "#c94a2a",
};

export const LoginModal = ({
  openLoginModal,
  onLogoutModalClose,
  handleSignUpModal,
}) => {
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
  };
  const handleChange = (event) => {
    console.log(" event.target", event.target.value);
    console.log(" event.targetname", event.target.name);
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    const validationErrors = loginvalidate();
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
      console.trace("validationErrors", validationErrors);
    } else {
      setErrors({});
      console.log("formData", formData);

      let data = {
        username: formData.username,
        password: formData.password,
      };
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
                Log in
              </Typography>
            </Grid>
            <Grid
              item
              size={{ xs: 2, md: 4, lg: 4, sm: 2 }}
              sx={{ display: "flex", justifyContent: "flex-end" }}
            >
              <IconButton
                onClick={onLogoutModalClose}
                sx={TagModalstyle.closeBtn}
              >
                <CloseIcon sx={{ color: COLORS.inkSoft, fontSize: 20 }} />
              </IconButton>
            </Grid>
          </Grid>

          <Typography sx={TagModalstyle.subhead}>
            Welcome back — enter your details to continue.
          </Typography>

          <form style={TagModalstyle.fullWidth} onSubmit={handleSubmit}>
            <Grid
              container
              sx={{ mt: 1, display: "flex", justifyContent: "center" }}
              spacing={0}
            >
              <Grid
                item
                size={{ xs: 12, md: 12, lg: 12, sm: 12 }}
                sx={{ mt: 2.5 }}
              >
                <InputLabel sx={TagModalstyle.label}>User Name</InputLabel>
                <TextField
                  fullWidth
                  placeholder="Enter your user name"
                  sx={TagModalstyle.textField}
                  value={formData.username}
                  name="username"
                  onChange={handleChange}
                  error={!!errors.username}
                  helperText={errors.username}
                />
              </Grid>

              <Grid
                item
                size={{ xs: 12, md: 12, lg: 12, sm: 12 }}
                sx={{ mt: 2.5 }}
              >
                <InputLabel sx={TagModalstyle.label}>Password</InputLabel>
                <TextField
                  fullWidth
                  placeholder="Enter your password"
                  name="password"
                  sx={TagModalstyle.textField}
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

              <Grid
                item
                size={{ xs: 12, md: 12, lg: 12, sm: 12 }}
                sx={{ mt: 4 }}
              >
                <StyledGreyButton
                  fullWidth
                  variant="contained"
                  disableRipple
                  type="submit"
                  sx={TagModalstyle.submitBtn}
                  //   disabled={mutation.isLoading}
                >
                  Log in
                </StyledGreyButton>
              </Grid>

              <Grid
                item
                size={{ xs: 12, md: 12, lg: 12, sm: 12 }}
                sx={{
                  mt: 2.5,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography sx={TagModalstyle.footerText}>
                  Not a member?
                </Typography>
                <Button
                  variant="text"
                  onClick={handleSignUpModal}
                  disableRipple
                  sx={TagModalstyle.linkBtn}
                >
                  Create an account
                </Button>
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
    maxWidth: { xs: "100%", sm: "420px", md: "460px" },
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
    mb: 0,
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
  footerText: {
    fontSize: { xs: "14px", md: "18px" },
    color: COLORS.inkSoft,
  },
  linkBtn: {
    textTransform: "none",
    color: `${COLORS.accent} !important`,
    fontWeight: 600,
    fontSize: { xs: "14px", md: "18px" },
    padding: "0 0 0 4px !important",
    minWidth: "auto",
    "&:hover": {
      backgroundColor: "transparent",
      textDecoration: "underline",
    },
  },
  fullWidth: {
    width: "100% !important",
  },
};
