"use client";
import {  Menu, MenuItem, Typography } from "@mui/material";
import React, { useState } from "react";
import "../../styles/header.css";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { LogoutModal } from "../sharables/LogoutModal";
import Grid from '@mui/material/Grid2';
import Image from "next/image";
export const PracticeHeader = () => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openLogOutModal, setOpenLogOutModal] = useState(false);

  //   const handleChange = (event) => {
  //     setAuth(event.target.checked);
  //   };
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
  };
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
        <Grid item  size={{ xs: 6, md: 8, lg: 8, sm: 6 }}  style={{ ...styles.flex }}>
          <IconButton onClick={handleMenu}>
            <AccountCircle sx={{ fontSize: 40, color: "white" }} />
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
            <MenuItem onClick={() => handleClick("profile")}>
              <Typography textAlign="center">Profile</Typography>
            </MenuItem>
            <MenuItem onClick={() => handleClick("dashboard")}>
              <Typography textAlign="center">Dashboard</Typography>
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
