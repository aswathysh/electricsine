import { Box, IconButton, Modal, Typography } from "@mui/material";
import React from "react";
import dynamic from "next/dynamic";

import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
// import { StyledGreyButton, BorderButton } from "@/styles/ButtonStyles";
const StyledGreyButton = dynamic(() => import("../../styles/ButtonStyles"), {
    ssr: false,
  });
  const BorderButton = dynamic(() => import("../../styles/ButtonStyles"), {
    ssr: false,
  });
export const LogoutModal = ({ openLogOutModal, onLogoutModalClose }) => {
  const onLogOutConform = () => {
    sessionStorage.clear();
    window.location.href = "/";
  };
  return (
    <>
      <Modal
        open={openLogOutModal}
        onClose={onLogoutModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box style={TagModalstyle.modal}>
          <IconButton>
            <LogoutOutlinedIcon
              sx={{ fontSize: "32px", mr: "5px", color: "#00007f" }}
            />
          </IconButton>
          <Typography className="modalhead">Sign Out</Typography>
          <Typography className="modalBody modallight" sx={{ mt: 2 }}>
            Are you sure you want to Sign Out?
          </Typography>
          <div style={{ display: "flex" }}>
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
              onClick={onLogOutConform}
            >
              Sign Out
            </StyledGreyButton>
          </div>
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
    width: { xs: "90%", sm: "25%" }, // Responsive width
    height: { xs: "40%", sm: "auto" },
    backgroundColor: "white",
    border: "1px solid #666666",
    borderRadius: "5px",
    padding:'5%',
    alignContent: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "@media (max-width: 425px)": {
      // Adjust styles for small screens (sm and xs)
      width: "90% !important",
      height: "40% !important",
    },
  },
};
