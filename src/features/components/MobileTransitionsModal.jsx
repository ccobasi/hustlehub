import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { Stack } from "@mui/material";
import Divider from "@mui/material/Divider";
import { ArrowForwardIos } from "@mui/icons-material";

export default function MobileTransitionsModal() {
  // Data for mobile modal
  const mobileModalData = [
    {
      id: 0,
      name: "How It Works",
      url: "/about",
      icon: (
        <ArrowForwardIos
          sx={{
            ml: "51%",
            mt: "20px",
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

  //Intialization of useState hook
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      {/* Box for the Mobile Transitions Modal*/}
      <Box sx={{ display: { xs: "flex", md: "none" } }}>
        <IconButton onClick={handleOpen}>
          <MenuIcon
            sx={{
              typography: (theme) => theme.typography.mobileMenuIcon,
            }}
          />
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
                top: "25%",
                left: "70%",
                transform: "translate(-50%, -50%)",
                width: "207px",
                height: "220px",
                bgcolor: (theme) =>
                  theme.palette.mode === "light"
                    ? theme.palette.primary.lightFadeBoxColor
                    : theme.palette.primary.darkFadeBoxColor,
                borderRadius: "10px",
                p: 4,
              }}
            >
              <Box>
                {mobileModalData.map((item, index) => (
                  <>
                    <Stack key={index} direction="row">
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
                          textDecoration: "none",
                          fontWeight: "700",
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
                    </Stack>
                    <Divider
                      sx={{
                        width: "134px",
                        color: (theme) =>
                          theme.palette.mode === "light"
                            ? theme.palette.primary.lightModeTitleTextColor
                            : theme.palette.primary.darkModeTitleTextColor,
                      }}
                    />
                  </>
                ))}
              </Box>
            </Box>
          </Fade>
        </Modal>
      </Box>
      {/* Box End */}
    </>
  );
}
