import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { Stack } from "@mui/material";
import Divider from "@mui/material/Divider";
import { ArrowForwardIos } from "@mui/icons-material";


const ResponsiveNavBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const callFromNavbar = (value) => {
    setSearchQuery(value);
  };

  const navigate = useNavigate();
  const searchPage = () => {
    navigate(`/search`);
  };

  return (
    <AppBar sx={{ backgroundColor: "background.default", mb: "60px" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <MobileUserAccountCircle />

          <MobileTransitionsModal />
          <MobileUserAppTitle />

          <UserAppTitle />

          <MenuSection />
          <Search queryData={callFromNavbar} searchBox={searchPage} />
          <MobileNavSearch queryData={callFromNavbar} searchBox={searchPage} />
          <SignInButton />
          <MobileSignInButton />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveNavBar;

const MenuSection = () => {
  //instantiate useNavigate object
  let navigate = useNavigate();

  return (
    <>
      <Box sx={{ display: { xs: "none", md: "flex" }, ml: "30%" }}>
        <NavLink
          to="/client-drawer"
          style={{ textDecoration: "none", color: "#87CEEB" }}
        >
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Profile &nbsp;&nbsp;
        </NavLink>

        <NavLink
          to="/freelancer-drawer"
          style={{ textDecoration: "none", color: "#87CEEB" }}
        >
          Messages &nbsp;&nbsp;
        </NavLink>
        <NavLink
          to="/categories"
          style={{ textDecoration: "none", color: "#87CEEB" }}
        >
          Settings &nbsp; &nbsp;
        </NavLink>
        <NavLink
          to="/categories"
          style={{ textDecoration: "none", color: "#87CEEB" }}
        >
          How It Works
        </NavLink>
      </Box>
    </>
  );
};

const MobileTransitionsModal = () => {
  const style = {
    position: "absolute",
    top: "17%",
    left: "80%",
    transform: "translate(-50%, -50%)",
    width: 240,
    bgcolor: "background.paper",
    border: "0px solid #87CEEB",
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Box sx={{ display: { xs: "flex", md: "none" } }}>
        <IconButton onClick={handleOpen}>
          <MenuIcon />
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
            <Box sx={style} className="transitionalModalBox">
              <Stack direction="column">
                <Stack direction="row">
                  <a
                    href="/client-drawer"
                    style={{ textDecoration: "none", color: "#87CEEB" }}
                  >
                    Profile
                  </a>{" "}
                  <ArrowForwardIos sx={{ ml: "56%" }} />
                </Stack>
                <Divider />

                <Stack direction="row">
                  <a
                    href="/freelancer-drawer"
                    style={{ textDecoration: "none", color: "#87CEEB" }}
                  >
                    Messages
                  </a>{" "}
                  <ArrowForwardIos sx={{ ml: "41%" }} />
                </Stack>
                <Divider />
                <Stack direction="row">
                  <a
                    href=""
                    style={{ textDecoration: "none", color: "#87CEEB" }}
                  >
                    Settings
                  </a>{" "}
                  <ArrowForwardIos sx={{ ml: "48%" }} />
                </Stack>
                <Divider />
                <Stack direction="row">
                  <a
                    href=""
                    style={{ textDecoration: "none", color: "#87CEEB" }}
                  >
                    How It Works
                  </a>{" "}
                  <ArrowForwardIos sx={{ ml: "27%" }} />
                </Stack>
                <Divider />
              </Stack>
            </Box>
          </Fade>
        </Modal>
      </Box>
    </>
  );
};

const MobileUserAccountCircle = () => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    console.log("Mobile User Menu Clicked!");
    setAnchorElUser(event.currentTarget);
  };

  return (
    <>
      <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
        <Tooltip title="Log in">
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <AccountCircle sx={{ color: "#87CEEB" }} />
          </IconButton>
        </Tooltip>
      </Box>
    </>
  );
};

const MobileUserAppTitle = () => {
  return (
    <>
      <Typography
        variant="h5"
        noWrap
        component="a"
        href=""
        sx={{
          mr: 2,
          display: { xs: "flex", md: "none" },
          flexGrow: 1,
          fontFamily: "monospace",
          fontWeight: 50,
          letterSpacing: ".05rem",
          color: "#87CEEB",
          textDecoration: "none",
          textAlign: "center",
        }}
      >
        #########
      </Typography>
    </>
  );
};

const UserAppTitle = () => {
  return (
    <>
      <Typography
        variant="h6"
        noWrap
        component="a"
        href="/"
        sx={{
          mr: 2,
          display: { xs: "none", md: "flex" },
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "#87CEEB",
          textDecoration: "none",
        }}
      >
        #########
      </Typography>
    </>
  );
};

const Search = ({ queryData, searchBox }) => {
  const [query, setQuery] = useState("");

  const onChangeFunction = (e) => setQuery(e.target.value);

  useEffect(() => {
    queryData(query);
  }, [query]);

  return (
    <>
      <Box
        className="headerSearch"
        sx={{ display: { md: "flex", xs: "none" } }}
      >
        <input
          type="text"
          placeholder="Search"
          value={query}
          onChange={onChangeFunction}
          onClick={searchBox}
        ></input>
      </Box>
    </>
  );
};

export const MobileNavSearch = ({ queryData, searchBox }) => {
  const [query, setQuery] = useState("");

  const onChangeFunction = (e) => setQuery(e.target.value);

  useEffect(() => {
    queryData(query);
  }, [query]);

  return (
    <>
      <Box
        className="mobileNavSearch"
        sx={{ display: { xs: "flex", md: "none" } }}
      >
        <input
          type="text"
          placeholder="Search"
          value={query}
          onChange={onChangeFunction}
          onClick={searchBox}
          style={{
            borderRadius: "8px",
            paddingLeft: "10px",
            paddingTop: "3px",
            paddingBottom: "3px",
          }}
        ></input>
      </Box>
    </>
  );
};

const MobileSignInButton = () => {
  //instantiate useNavigate object
  let navigate = useNavigate();

  return (
    <Box
      className="mobileSignUpButton"
      sx={{ display: { xs: "flex", md: "none" } }}
    >
      <Button
        onClick={() => navigate("/sign-up")}
        variant="contained"
        sx={{
          backgroundColor: "#87CEEB",
          "&:hover": {
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[400]
                : theme.palette.grey[500],
          },
        }}
      >
        Sign Up
      </Button>
    </Box>
  );
};

const SignInButton = () => {
  //instantiate useNavigate object
  let navigate = useNavigate();

  return (
    <Box
      className="headerSignUpButton"
      sx={{ display: { md: "flex", xs: "none" } }}
    >
      <Button
        onClick={() => navigate("/sign-up")}
        variant="contained"
        sx={{
          backgroundColor: "#87CEEB",
          "&:hover": {
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[400]
                : theme.palette.grey[500],
          },
        }}
      >
        Sign Up
      </Button>
    </Box>
  );
};
