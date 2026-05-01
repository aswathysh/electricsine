"use client";
import {
  Avatar,
  Badge,
  Drawer,
  IconButton,
  List,
  MenuItem,
  useTheme,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import React, { useEffect, useMemo, useState } from "react";
import "../../styles/header.css";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { useRouter } from "next/navigation";
import { LogoutModal } from "./LogoutModal";
import { stringAvatar } from "../sharables/HelperFunctions";
export const Header = () => {
  const router = useRouter();
  const { cart } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const [showLogin, setShowLogin] = useState(true);
  const [openLogOutModal, setOpenLogOutModal] = useState(false);

  // const cart=[];
  const cartLength = useMemo(
    () => (Array.isArray(cart) ? cart.length : 0),
    [cart],
  );
  const [showButton, setShowButton] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    let logged = sessionStorage.getItem("token");
    if (typeof window !== "undefined") {
      const n = sessionStorage.getItem("userName") || "";
      const capitalizedName = n ? n.charAt(0).toUpperCase() + n.slice(1) : "";

      setUserName(capitalizedName);
    }
    console.log("logged", logged);
    if (logged == "" || logged == null) {
      setShowLogin(true);
    } else setShowLogin(false);
  }, []);

  useEffect(() => {
    // const cartLength = Array.isArray(cart) ? cart.length : 0;
    if (cartLength > 0) {
      // Ensure client-side only logic happens in useEffect
      setShowButton(true);
    } else setShowButton(false);
  }, [cartLength]);
  const handleHome = () => {
    window.location.href = "/";
  };
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const handleUserPage = () => {
    window.location.href = "/user/home";
  };
  const handleLogout = () => {
    handleOpenLogOutModal();
  };
  const onLogoutModalClose = () => {
    setOpenLogOutModal(false);
  };
  const handleOpenLogOutModal = () => {
    setOpenLogOutModal(true);
  };
  const onLogOutConform = () => {
    sessionStorage.clear();
    window.location.href = "/";
  };
  return (
    <header style={styles.header}>
      <LogoutModal
        //onLogOutConform={onLogOutConform}
        openLogOutModal={openLogOutModal}
        onLogoutModalClose={onLogoutModalClose}
      />
      <Grid container style={styles.headerContent}>
        <Grid
          item
          size={{ xs: 2, md: 2, sm: 2 }}
          style={{ display: "flex" }}
          className="hide_for_large"
        >
          <IconButton onClick={handleDrawerToggle}>
            <MenuIcon sx={{ color: "white" }} />
          </IconButton>
        </Grid>
        <Grid
          item
          size={{ xs: 8, md: 8, lg: 3, sm: 8 }}
          // sm={6} xs= {6} lg={4} md={4}
          sx={{
            display: "flex",
            justifyContent: {
              sm: "center",
              md: "center",
              xs: "center",
              lg: "left",
            },
          }}
          onClick={handleHome}
        >
          <Image
            //onClick={handleHome}
            src="/assets/images/logo.png"
            alt=" logo"
            className="headerlogo"
            width={10}
            height={10}
          />
          {/* <h1 style={styles.logo}>ELECTRIC SINE TRAINING SOLUTIONS</h1> */}
        </Grid>
        <Grid
          item
          size={{ xs: 2, md: 2, lg: 0, sm: 2 }}
          sx={{ pr: 2 }}
          style={{ display: "flex", justifyContent: "flex-end" }}
          className="hide_for_large"
        >
          <IconButton
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
            onClick={() => router.push("/cart")}
          >
            {showButton ? (
              <Badge badgeContent={cartLength} color="error">
                <ShoppingCartOutlinedIcon sx={{ color: "white" }} />
              </Badge>
            ) : (
              <ShoppingCartOutlinedIcon sx={{ color: "white" }} />
            )}
          </IconButton>
        </Grid>
        <Grid
          item
          size={{ xs: 0, md: 7, lg: 9, sm: 0 }}
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          <nav style={styles.nav} className="hide_for_small">
            {/* <a href="#" style={styles.navLink}> */}
            <MenuItem
              onClick={() => router.replace("/dashboard")}
              style={styles.navLink}
            >
              <p style={{ ...styles.navLinkLabel }}>Home</p>
            </MenuItem>
            {/* </a> */}
            {/* <a href="/aboutus" style={styles.navLink}> */}
            {/* <MenuItem onClick={() => router.push('/aboutus')} style={styles.navLink}>
              <p style={{ ...styles.navLinkLabel }}>
                About Us
              </p>
            </MenuItem> */}
            {/* </a> */}
            {/* <a href="/privacypolicy" style={styles.navLink}> */}
            {/* <MenuItem onClick={() => router.push('/privacypolicy')} style={styles.navLink}>
              <p style={{ ...styles.navLinkLabel }}>
                Privacy Policy
              </p>
            </MenuItem> */}
            {/* </a> */}
            {/* <a href="/terms-and-conditions" style={styles.navLink}>
            </a> */}
            {/* <a href="/terms-and-conditions" style={styles.navLink}> */}
            {/* <MenuItem onClick={() => router.push('/terms-and-conditions')} style={styles.navLink}>
              <p style={{ ...styles.navLinkLabel }}>
                Terms and Conditions
              </p>
            </MenuItem> */}
            {/* </a> */}
            {/* <a href="/contactus" style={styles.navLink}> */}
            {/* <MenuItem onClick={() => router.push('/contactus')} style={styles.navLink}>
              <p style={{ ...styles.navLinkLabel }}>Contact</p>
            </MenuItem> */}
            {/* </a> */}
            {/* <a href="/courses" style={styles.navLink}> */}
            <MenuItem
              onClick={() => router.push("/courses")}
              style={styles.navLink}
            >
              <p style={{ ...styles.navLinkLabel }}>Courses</p>
            </MenuItem>
            {/* {showLogin ? <></> :
              <MenuItem onClick={() => router.push('/orders')} style={styles.navLink}>
                <p style={{ ...styles.navLinkLabel }}>Order History</p>
              </MenuItem>} */}

            {/* </a> */}
            {/* <a href="/cart" style={{ ...styles.navLink }} suppressHydrationWarning> */}
            <MenuItem
              sx={{ mt: -1 }}
              onClick={() => router.replace("/cart")}
              style={styles.navLink}
              suppressHydrationWarning
            >
              {/* /   <div size="large" aria-label={`show ${cart?.length} new mails`} color="inherit" suppressHydrationWarning>
              <>
                <ShoppingCartOutlinedIcon />
                {showButton &&

                  <button style={{ ...styles.cartbutton }}>{cartLength}</button>
                }
              </> */}

              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                {showButton ? (
                  <Badge badgeContent={cartLength} color="error">
                    <ShoppingCartOutlinedIcon />
                  </Badge>
                ) : (
                  <ShoppingCartOutlinedIcon />
                )}
              </IconButton>
              {/* </div> */}
            </MenuItem>
            {/* </a> */}
            {
              showLogin ? (
                <MenuItem
                  onClick={() => router.replace("/auth/login")}
                  style={styles.navLink}
                >
                  <p style={{ ...styles.navLinkLabel }}>Login</p>
                </MenuItem>
              ) : (
                <MenuItem
                  sx={{ mt: 0 }}
                  suppressHydrationWarning
                  onClick={() => router.push("/user/home")}
                  style={styles.navLink}
                >
                  <Avatar {...stringAvatar(userName)} />
                </MenuItem>
              )
              // </a>
            }
          </nav>
        </Grid>
      </Grid>
      <Drawer
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: "260px", // Adjust the width for small screens
            boxSizing: "border-box",
            border: "0px, 1px, 0px, 0px !important",
            borderColor: "#E9E9E9",
            backgroundColor: "#ffffff",
            [theme.breakpoints.down("sm")]: {
              minWidth: 130, // Adjust the width for small screens
              border: "0px, 1px, 0px, 0px !important",
              borderColor: "#E9E9E9",
            },
          },
          backgroundColor: "#ffffff00",
        }}
        variant="temporary"
        anchor="left"
      >
        <List component="div" id="sidebar">
          {showLogin ? (
            <></>
          ) : (
            <MenuItem
              disabled
              style={{ pointerEvents: "none", opacity: 1, cursor: "default" }}
            >
              {/* <a href="/dashboard" style={{ textDecoration: 'none', color: 'inherit' }}> */}
              Welcome <p className="header_name">{userName}</p>
              {/* </a> */}
            </MenuItem>
          )}
          <MenuItem
            sx={{ pt: 2, pb: 2 }}
            onClick={() => router.push("/dashboard")}
          >
            {/* <a href="/dashboard" style={{ textDecoration: 'none', color: 'inherit' }}> */}
            Home
            {/* </a> */}
          </MenuItem>
          <MenuItem
            onClick={() => router.push("/courses")}
            sx={{ pt: 2, pb: 2 }}
          >
            {/* <a href="/courses" style={{ textDecoration: 'none', color: 'inherit' }}> */}
            Courses
            {/* </a> */}
          </MenuItem>
          {showLogin ? (
            <></>
          ) : (
            <MenuItem
              onClick={() => router.push("/orders")}
              sx={{ pt: 2, pb: 2 }}
            >
              Order History
            </MenuItem>
          )}

          <MenuItem
            onClick={() => router.push("/privacypolicy")}
            sx={{ pt: 2, pb: 2 }}
          >
            {/* <a href="/privacypolicy" style={{ textDecoration: 'none', color: 'inherit' }}> */}
            Privacy Policy
            {/* </a> */}
          </MenuItem>
          <MenuItem
            onClick={() => router.push("/terms-and-conditions")}
            sx={{ pt: 2, pb: 2 }}
          >
            {/* <a href="/terms-and-conditions" style={{ textDecoration: 'none', color: 'inherit' }}> */}
            Terms and Conditions
            {/* </a> */}
          </MenuItem>
          {showLogin ? (
            <MenuItem
              onClick={() => router.replace("/auth/login")}
              sx={{ pt: 2, pb: 2 }}
            >
              {/* <a href="/contactus" style={{ textDecoration: 'none', color: 'inherit' }}> */}
              Login
              {/* </a> */}
            </MenuItem>
          ) : (
            <MenuItem onClick={onLogOutConform}>Logout</MenuItem>
          )}
        </List>
      </Drawer>
    </header>
  );
};
const styles = {
  header: {
    backgroundColor:"#135aac",
     padding: "20px 0px 25px 0px",
    display: "flex",
    justifyContent: "center", // Center the content within the header
    width: "100%",
    borderBottom: "1px solid #a67422",
  },
  headerContent: {
    display: "flex",
    // justifyContent: "space-between", // Space between logo and nav
    alignItems: "center",
    width: "100%",
    //  maxWidth: '1200px', // Optional: to constrain the width of the header content
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
  },
  logo: {
    color: "white",
    // marginLeft: "2px", // Add some space between the logo image and text
  },
  nav: {
    display: "flex",
  },
  navLink: {
    color: "white",
    marginLeft: "4px",
    textDecoration: "none",
  },
  navLinkLabel: {
    color: "white",
    textDecoration: "none",
    fontSize: "20px",
  },
  cartbutton: {
    fontSize: "13px",
    border: "1px solid red",
    borderRadius: "81px",
    paddingLeft: "5px",
    paddingRight: "5px",
    backgroundColor: "red",
    color: "white",
    textDecoration: "none",
  },
};
