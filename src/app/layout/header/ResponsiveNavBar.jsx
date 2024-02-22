import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";



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

          <MobileMenuSection />
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
      <Box sx={{ display: { xs: "none", md: "flex",  }, ml: "30%" }}>
        <NavLink to="/categories" style={{ textDecoration: "none",color:"#87CEEB"}}>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Profile &nbsp;&nbsp;  
         
        </NavLink>
        <NavLink to="/categories" style={{ textDecoration: "none", color:"#87CEEB" }}>
         Messages &nbsp;&nbsp;  
        </NavLink>
        <NavLink to="/categories" style={{ textDecoration: "none", color:"#87CEEB" }}>
         Settings &nbsp; &nbsp; 
        </NavLink>
        <NavLink to="/categories" style={{ textDecoration: "none",color:"#87CEEB" }}>
         How It Works
        </NavLink>
      </Box>
    </>
  );
};

const MobileMenuSection = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <>
      <Box sx={{ display: { xs: "flex", md: "none" } }}>
        <Tooltip title="Open Menu">
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="#87CEEB"
          >
            <MenuIcon />
          </IconButton>
        </Tooltip>

        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: "block", md: "none" },
          }}
        >
          <MenuItem>
            <a href="/project-update" style={{ textDecoration: "none", color: "#87CEEB" }}>
              Profile
            </a>
          </MenuItem>

          <MenuItem>
            <a href="" style={{ textDecoration: "none", color: "#87CEEB" }}>
              Messages
            </a>
          </MenuItem>
          <MenuItem>
            <a href="" style={{ textDecoration: "none", color: "#87CEEB" }}>
              Settings
            </a>
          </MenuItem>
          <MenuItem>
            <a href="" style={{ textDecoration: "none", color: "#87CEEB" }}>
              How It Works
            </a>
          </MenuItem>
        </Menu>
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
          style={{borderRadius:"8px" , paddingLeft:"10px", paddingTop:"3px",paddingBottom:"3px"}}
        >
        </input>
        
        
        
        
        
         
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
