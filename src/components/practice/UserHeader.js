"use client";
import { Avatar, Badge, Box, Button, Menu, MenuItem, Typography } from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import "../../styles/header.css";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { LogoutModal } from "../sharables/LogoutModal";
import Grid from '@mui/material/Grid2';
import Image from "next/image";
import { useCart } from "@/context/cartContext";
import { useRouter } from "next/navigation";
import { stringAvatar } from "../sharables/HelperFunctions";
export const UserHeader = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openLogOutModal, setOpenLogOutModal] = useState(false);
  const { cart } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);
  // const name = sessionStorage.getItem('userName');
  // const capitalizedName = name?.charAt(0).toUpperCase() + name?.slice(1);  // const theme = useTheme();
  const [userName, setUserName] = useState('');

  // const cart=[];
  const cartLength = useMemo(() => Array.isArray(cart) ? cart.length : 0, [cart]);
  const [showButton, setShowButton] = useState(false);
  const [showLogin, setShowLogin] = useState(true);
  useEffect(() => {
    let logged = sessionStorage.getItem('token');
     if (typeof window !== 'undefined') {
      const n = sessionStorage.getItem('userName') || '';
      const capitalizedName = n ? n.charAt(0).toUpperCase() + n.slice(1) : '';

      setUserName(capitalizedName);
    }
    console.log("logged", logged)
    if (logged == "" || logged == null) {
      setShowLogin(true)
    }
    else{
      setShowLogin(false);
}
  }, [])
  useEffect(() => {
    // const cartLength = Array.isArray(cart) ? cart.length : 0;
    if (cartLength > 0) {
      // Ensure client-side only logic happens in useEffect
      setShowButton(true);
    }
    else
      setShowButton(false);

  }, [cartLength]);
  //   const handleChange = (event) => {
  //     setAuth(event.target.checked);
  //   };
  const handleCartPage = () => {
    window.location.href = "/user/cart";
  }
  const handleUserHome = () => {

    window.location.href = '/dashboard'

  }
  const onLogoutModalClose = () => {
    setOpenLogOutModal(false);
  };
  const handleOpenLogOutModal = () => {
    setOpenLogOutModal(true);
  };
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClick = (tab) => {
    if (tab == "dashboard") {
      window.location.href = "/dashboard";
    } else if (tab == "logout") {
      handleOpenLogOutModal();
    }
    else if( tab == "orders") {
      window.location.href = "/orders";
    }
    else if( tab == "profile") {
      window.location.href = "/profile";
    }
  };
  const handleCourse = () => {

    window.location.href = "/user/home";

  }
   const handleHistory = () => {

    window.location.href = "/user/home";

  }
  return (
    <div className="headerbg headerpad">
      <LogoutModal
        //onLogOutConform={onLogOutConform}
        openLogOutModal={openLogOutModal}
        onLogoutModalClose={onLogoutModalClose}
      />
      <Grid container>
        <Grid item
          size={{ xs: 6, md: 4, lg: 4, sm: 6 }}>
          <div>
            <Image
              src="/assets/images/logo.png"
              alt=" logo"
              className="header_exam_logo"
              width={10}
              height={10}

            />
            {/* <h1 style={styles.logo}>ELECTRIC SINE TRAINING SOLUTIONS</h1> */}
          </div>
        </Grid>


        <Grid item size={{ xs: 6, md: 8, lg: 8, sm: 6 }} style={{ ...styles.flex }}>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>

            <Button
              // key={page}
              onClick={handleUserHome}
              sx={{ my: 2, color: 'white', display: 'block', textTransform: 'none', fontSize: '16px' }}
            >
              Home

            </Button>
            <Button
              // key={page}
              onClick={handleCourse}
              sx={{ my: 2, color: 'white', display: 'block', textTransform: 'none', fontSize: '16px' }}
            >
              Courses
            </Button>
           
            <IconButton
              // key={page}
              onClick={handleCartPage}
              // onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              {showButton ?
                <Badge
                  badgeContent={cartLength}
                  color="error">
                  <ShoppingCartOutlinedIcon />

                </Badge>
                :
                <ShoppingCartOutlinedIcon />
              }

            </IconButton>

            {/* <Button
              // key={page}
              onClick={handleCourse}
              sx={{ my: 2, color: 'white', display: 'block', textTransform: 'none', fontSize: '16px' }}
            >
              Welcome {capitalizedName}
            </Button> */}
          </Box>
          <IconButton onClick={handleMenu}>
            <Avatar {...stringAvatar(userName)} />
          </IconButton>
          <Menu
            sx={{ mt: "45px" }}
            //   id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
          
            <MenuItem onClick={() => handleClick("dashboard")}>
              <Typography textAlign="center">Dashboard</Typography>
            </MenuItem>
             <MenuItem onClick={() => handleClick("orders")}>
              <Typography textAlign="center">Order History</Typography>
            </MenuItem>
             <MenuItem onClick={() => handleClick("profile")}>
              <Typography textAlign="center">Profile</Typography>
            </MenuItem>
            <MenuItem onClick={() => handleClick("logout")}>
              <Typography textAlign="center">Logout</Typography>
            </MenuItem>
          </Menu>
        </Grid>
      </Grid>
    </div>
  );
};
const styles = {
  flex: {
    display: "flex",
    justifyContent: "flex-end",
  },
};
