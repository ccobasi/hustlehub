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
import Button from "@mui/material/Button";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { Avatar, Stack } from "@mui/material";
import Divider from "@mui/material/Divider";
import { ArrowForwardIos } from "@mui/icons-material";
import Search from "@mui/icons-material/Search";


// Data for mobile modal
const mobileModalData = [
  {
    name: "Profile",
    url: "/client-drawer",
    icon: (
      <ArrowForwardIos
        sx={{
          ml: "57%",
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
    name: "Messages",
    url: "/freelancer-drawer",
    icon: (
      <ArrowForwardIos
        sx={{
          ml: "35%",
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
    name: "Settings",
    url: "#Outbox",
    icon: (
      <ArrowForwardIos
        sx={{
          ml: "45%",
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
    name: "How It Works",

    url: "#Home",
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

// Data for menu section
const menuSectionData = [
  {
    name: "Profile",
    url: "/",
  },
  {
    name: "Messages",
    url: "#Inbox",
  },
  {
    name: "Settings",
    url: "#Outbox",
  },
  {
    name: "How It Works",

    url: "#Home",
  },
];
const AppLogo = ({src, alt}) => {
  return (
    <>
      {/* Box for App logo */}
      <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "flex" } }}>
        <Avatar
          src={src}
          alt={alt}
          sx={{
            position: "fixed",
            typography: (theme) => theme.typography.logo,
          }}
        
        />
      </Box>
      {/* Box End */}
    </>
  );
};

const MobileTransitionsModal = () => {
  //Get list function
  const getModalList = () => (
    <Box>
      {mobileModalData.map((item, index) => (
        <>
          <Stack direction="row" key={index}>
            <Typography
              component="a"
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
  );
  //Function End

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
              <Stack direction="column">{getModalList()}</Stack>
            </Box>
          </Fade>
        </Modal>
      </Box>
      {/* Box End */}
    </>
  );
};

const MobileUserAppTitle = () => {
  return (
    <>
      {/* Mobile App title */}
      <Typography
        variant="h6"
        noWrap
        component="a"
        href="/"
        sx={{
          display: { xs: "flex", md: "none" },
          fontSize: "16px",
          flexGrow: 1,
          fontFamily: "Poppins",
          fontWeight: 50,
          letterSpacing: ".05rem",
          color: "#87CEEB",
          textDecoration: "none",
          textAlign: "center",
        }}
      >
        Hustle Hub
      </Typography>
      {/* Mobile Title End */}
    </>
  );
};

export const MobileNavSearch = ({ queryData, searchBox, placeholder }) => {
  //Initialization of useState hook
  const [query, setQuery] = useState("");
  //Handler for onChangeFunction
  const onChangeFunction = (e) => setQuery(e.target.value);
  //Intialization of useEffect hook
  useEffect(() => {
    queryData(query);
  }, [query]);

  return (
    <>
      {/* Box for the mobile nav search */}
      <Box
        sx={{
          display: { xs: "flex", md: "none" },
          width: "118.23px",
          height: "19px",
          mr: "20%",
        }}
      >
        <Search
          sx={{
            position: "absolute",
            ml: "0.2%",
            color: "#000000",
            width: "10.99px",
            height: "9.92px",
            top: "27.54px",
            opacity: "40%",
          }}
        />
        <input
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={onChangeFunction}
          onClick={searchBox}
          style={{
            borderRadius: "8px",
            paddingLeft: "10px",
            paddingTop: "3px",
            paddingBottom: "3px",
            border: "1px solid #AAA6B9",
            fontFamily: "Poppins",
            fontWeight: "400",
            lineHeight: "15px",
            fontSize: "10px",
            color: "#95969D",
            backgroundColor: "#F2F2F3",
          }}
        ></input>
      </Box>
      {/* Box End  */}
    </>
  );
};

const MobileSignInButton = () => {
  //instantiate useNavigate object
  let navigate = useNavigate();

  return (
    <>
      {/* Box for mobile sign in feature */}
      <Box
        sx={{
          display: { xs: "flex", md: "none" },
          width: "62px",
          height: "24px",
          top: "7px",
          ml: "3px",
          borderRadius: "5px",
        }}
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
            fontFamily: "Poppins",
            fontWeight: "500",
            fontSize: "8px",
            top: "2px",
          }}
        >
          Sign Up
        </Button>
      </Box>
      {/* Box End */}
    </>
  );
};

const UserAppTitle = () => {
  return (
    <>
      {/* App title */}
      <Typography
        variant="h6"
        noWrap
        component="a"
        href="/"
        sx={{
          display: { xs: "none", md: "flex" },
          fontSize: "16px",
          flexGrow: 1,
          fontFamily: "Poppins",
          fontWeight: 50,
          letterSpacing: ".05rem",
          color: "#87CEEB",
          textDecoration: "none",
          textAlign: "center",
          marginTop: "10px",
          marginBottom: "5px",
          ml: "2%",
          mr: "7%",
        }}
      >
        Hustle Hub
      </Typography>
      {/* Title End */}
    </>
  );
};

const MenuSection = () => {
  //instantiate of useNavigate hook
  let navigate = useNavigate();

  //Get list function
  const getMenuSectionList = () => (
    <Stack direction="row">
      {menuSectionData.map((item, index) => (
        <Stack key={index}>
          <Typography
            component="a"
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

              marginTop: "10px",
              marginBottom: "5px",

              my: 1,
              mx: 1.5,
            }}
          >
            {item.name}
          </Typography>
        </Stack>
      ))}
    </Stack>
  );
  // Function End
  return (
    <>
      {/* Box */}
      <Box sx={{ display: { xs: "none", md: "flex" } }}>
        {getMenuSectionList()}
      </Box>
      {/* Box End */}
    </>
  );
};

export const NavBarSearch = ({ queryData, searchBox, placeholder }) => {
  //Intialization of useState Hook
  const [query, setQuery] = useState("");
  //Handle for onChangeFunction
  const onChangeFunction = (e) => setQuery(e.target.value);
  //Use effect hook
  useEffect(() => {
    queryData(query);
  }, [query]);

  return (
    <>
      {/* Box for the Search Feature */}
      <Box
        sx={{
          display: { md: "flex", xs: "none" },
          width: "118.23px",
          height: "19px",
          mr: "5%",
        }}
      >
        <Search
          sx={{
            position: "absolute",
            ml: "0.2%",
            color: "#000000",
            width: "10.99px",
            height: "9.92px",
            top: "27.54px",
            opacity: "40%",
          }}
        />
        <input
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={onChangeFunction}
          onClick={searchBox}
          style={{
            borderRadius: "8px",
            paddingLeft: "10px",
            paddingTop: "3px",
            paddingBottom: "3px",
            border: "1px solid #AAA6B9",
            fontFamily: "Poppins",
            fontWeight: "400",
            lineHeight: "15px",
            fontSize: "10px",
            color: "#95969D",
            backgroundColor: "#F2F2F3",
          }}
        ></input>
      </Box>
      {/* Box End */}
    </>
  );
};

const SignInButton = () => {
  //instantiate useNavigate object
  let navigate = useNavigate();

  return (
    <>
      {/* Box for the Signin Feature */}
      <Box
        sx={{
          display: { md: "flex", xs: "none" },
          width: "62px",
          height: "24px",
          top: "7px",
          ml: "3px",
          borderRadius: "5px",
        }}
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
            fontFamily: "Poppins",
            fontWeight: "500",
            fontSize: "8px",
            top: "2px",
          }}
        >
          Sign Up
        </Button>
      </Box>
      {/* Box End */}
    </>
  );
};

export default function ResponsiveNavBar() {
  //Initialization of useState Hook
  const [searchQuery, setSearchQuery] = useState("");
  //Handler for callFromNavbar
  const callFromNavbar = (value) => {
    setSearchQuery(value);
  };
  //Initialization of useNavigate hook
  const navigate = useNavigate();
  //Handler for searchPage
  const searchPage = () => {
    navigate(`/search`);
  };

  return (
    <>
      {/* App or Navigation bar */}
      <AppBar
        elevation="3"
        sx={{
          backgroundColor: "background.default",
          typography: (theme) => theme.typography.appBar,
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AppLogo  src="/assets/hustlehub-transparent-logo250x100.png" alt="Logo"/>

            <MobileTransitionsModal />
            <MobileUserAppTitle />

            <UserAppTitle />

            <MenuSection />
            <NavBarSearch queryData={callFromNavbar} searchBox={searchPage} placeholder="Search"/>
            <MobileNavSearch
              queryData={callFromNavbar}
              searchBox={searchPage}
              placeholder="Search"
            />
            <SignInButton />
            <MobileSignInButton />
          </Toolbar>
        </Container>
      </AppBar>
      {/* Bar End  */}
    </>
  );
}
