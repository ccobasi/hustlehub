import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { Stack } from "@mui/material";
import { ArrowForwardIos } from "@mui/icons-material";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


 // Data for mobile modal
 const mobileModalData = [
  {
    id: 0,
    name: "Sign up",
    url: "/sign-up",
    icon: (
      <ArrowForwardIos
        sx={{
          ml: "5%",
          mt: "10px",
          mb:'10px',
          width: "24px",
          height: "24px",
          color: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.primary.lightModeTitleTextColor
              : theme.palette.primary.darkModeTitleTextColor,
        }}
      />
    ),
  },
  {
    id: 0,
    name: "Sign in",
    url: "/sign-in",
    icon: (
      <ArrowForwardIos
        sx={{
          ml: "5%",
          mt: "10px",
          mb:'10px',
          width: "24px",
          height: "24px",
          color: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.primary.lightModeTitleTextColor
              : theme.palette.primary.darkModeTitleTextColor,
        }}
      />
    ),
  },
];

export default function MobileTransitionsModal() {
 

  //Intialization of useState hook
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      {/* Box for the Mobile Transitions Modal*/}
      <Box sx={{ display: { xs: "flex", md: "none", } }}>
        <IconButton onClick={handleOpen} 
        
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"  
        >
          <MenuIcon sx={{color:"#87CEEB"}} />
        </IconButton>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}
        >
          <Fade in={open}>
            <Box
              sx={{
                position: "absolute",
                top: "17%",
                left: "85%",
                transform: "translate(-20%, -50%)",
                width: "607px",
                height: "220px",
                bgcolor: (theme) =>
                  theme.palette.mode === "light"
                    ? theme.palette.primary.lightFadeBoxColor
                    : theme.palette.primary.darkFadeBoxColor,
                borderRadius: "10px",
                p: 4,
              }}
            >
             
             {mobileModalData.map((item, index) => (
              <Stack key={index} direction="row" >
                <Typography
                  component="a"
                  key={index}
                  href={item.url}
                  sx={{
                    color: (theme) =>
                      theme.palette.mode === "light"
                        ? theme.palette.primary.lightModeTitleTextColor
                        : theme.palette.primary.darkModeTitleTextColor,
                    fontFamily: "Poppins",
                    textDecoration: "true",
                    fontWeight: "600",
                    fontSize: "16px",
                    lineHeight: "19.2px",
                    letter: "-1.5%",
                    marginTop: "10px",
                    marginBottom: "5px",
                }}
                >
                  {item.name}
                </Typography>
                {item.icon}
                {/* <Divider
                  sx={{
                    width: "134px",
                    color: (theme) =>
                      theme.palette.mode === "light"
                        ? theme.palette.primary.lightModeTitleTextColor
                        : theme.palette.primary.darkModeTitleTextColor,
                  }}
                /> */}

              </Stack>
            ))}
            </Box>
          </Fade>
        </Modal>
      </Box>
    </>
  );
}
