// import React, {useEffect} from "react";
// import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import Link from "@mui/material/Link";
// import { AppBar, Box } from "@mui/material";
// import { ArrowBack } from "@mui/icons-material";
// import { useTheme } from "@mui/material/styles";
// import { useNavigate } from "react-router-dom";
// //import Logo from "../../assets/logo.png"
// import axiosInstance from "../../utils/axiosInstance";
// import { toast } from "react-toastify";
// import Button from "@mui/material/Button";

// export default function UserDashboardHeader() {
//   const theme = useTheme();
//   let navigate = useNavigate();
//   const jwt_access=localStorage.getItem('access')
//   const user = JSON.parse(localStorage.getItem("user"));


//   useEffect(()=>{
//     if(jwt_access===null && !user){
//       navigate("/sign-in")
//     }else{
//       getSomeData()
//     }
//   }, [jwt_access, navigate, user]
//   )
  
//   let isClient = user.role === "client";
//   const editLinkHref = isClient? "/edit-client" : "/edit-freelancer"; 
//   const refresh=JSON.parse(localStorage.getItem("refresh"))

//  const handleLogout = async () => {
//   try {
//     const res = await axiosInstance.post("/logout/", { refresh_token: refresh });
//     if (res.status === 200) {
//       localStorage.removeItem('access');
//       localStorage.removeItem('refresh');
//       localStorage.removeItem('user');
//       navigate('/sign-in');
//       toast.success("logout successful");
//     } else {
//       console.error("Logout failed:", res.data);
//       toast.error("Logout failed. Please try again.");
//     }
//   } catch (error) {
//     console.error("Logout error:", error);
//     toast.error("An error occurred during logout. Please try again.");
//   }
// };


//   const getSomeData = async ()=>{
//     const resp = await axiosInstance.get("/profile/")
//     if(resp.status === 200){
//       console.log('Successful')
//     }
//   }
//   return (
//     <React.Fragment>
//       {/* Box for UserDashboard header  feature */}
//       <Box
//         sx={{
//           display: { xs: "flex", md: "none" },
//           backgroundColor: theme.palette.mode,
//           pt: "25px",
//           pl: "25px",
//         }}
//       >
//         <IconButton onClick={() => navigate("/")}>
//           <ArrowBack />
//         </IconButton>
//         <Link
//           noWrap
//           sx={{
//             flex: 1,
//             padding: "10px",
//             color: (theme) =>
//               theme.palette.mode === "light"
//                 ? theme.palette.grey[900]
//                 : theme.palette.grey[500],

//             fontSize: "1.05rem",
//             textDecoration: "none",
//             "&:hover": {
//               color: (theme) =>
//                 theme.palette.mode === "light"
//                   ? theme.palette.grey[700]
//                   : theme.palette.grey[300],
//             },
//             ml: "65%",
//           }}
//           href={isClient ? "/edit-client" : "/edit-freelancer"}
          
//         >
//           Edit
//         </Link>
//          <Button
//             type="submit"
//             variant="contained"
//             sx={{
//               mr:2,
//               backgroundColor: "#87CEEB",
//               color: "white",
//               "&:hover": {
//                 backgroundColor: (theme) =>
//                   theme.palette.mode === "light"
//                     ? theme.palette.grey[400]
//                     : theme.palette.grey[500],
//                 color: (theme) =>
//                   theme.palette.mode === "light"
//                     ? theme.palette.primary.lightModeHeroTitle
//                     : theme.palette.primary.darkModeHeroTitle,

//                 fontFamily: "Poppins",
//                 fontWeight: "500",
//                 fontSize: "16px",
//                 lineHeight: "24px",
//                 letterSpacing: "-1%",
                
//               },
//             }}
//             onClick={handleLogout}
//           >
//             Sign Out
//           </Button>
        
//       </Box>

//       {/* Box for the Arrow back icon*/}
//       <Box
//         sx={{
//           backgroundColor: theme.palette.mode,
//           display: { xs: "none", md: "flex" },
//         }}
//       >
//         <AppBar
//           sx={{ backgroundColor: "background.default", mb: "60px" }}
//           className="appspotAppBar"
//         >
//           <Toolbar className="appspotToolbar">
//             <Link
//               noWrap
//               sx={{
//                 flex: 1,
//                 padding: "10px",
//                 color: (theme) =>
//                   theme.palette.mode === "light"
//                     ? theme.palette.grey[900]
//                     : theme.palette.grey[500],

//                 fontSize: "1.05rem",
//                 textDecoration: "none",
//                 "&:hover": {
//                   color: (theme) =>
//                     theme.palette.mode === "light"
//                       ? theme.palette.grey[700]
//                       : theme.palette.grey[300],
//                 },
               
//               }}
//               href="/"
//             >
//               <img src="./frontend/dist/assets/logo.png" alt="logo" style={{ width: '80px', height: '50px' }} />
//             </Link>

//             <Link
//               noWrap
//               sx={{
//                 flex: 1,
//                 padding: "10px",
//                 color: (theme) =>
//                   theme.palette.mode === "light"
//                     ? theme.palette.grey[900]
//                     : theme.palette.grey[500],

//                 fontSize: "1.05rem",
//                 textDecoration: "none",
//                 "&:hover": {
//                   color: (theme) =>
//                     theme.palette.mode === "light"
//                       ? theme.palette.grey[700]
//                       : theme.palette.grey[300],
//                 },
//                 ml: "75%",
//               }}
//               href={editLinkHref}
//             >
//               Edit
//             </Link>
//             <Button
//             type="submit"
//             variant="contained"
//             sx={{
//               mr:2,
//               backgroundColor: "#87CEEB",
//               color: "white",
//               "&:hover": {
//                 backgroundColor: (theme) =>
//                   theme.palette.mode === "light"
//                     ? theme.palette.grey[400]
//                     : theme.palette.grey[500],
//                 color: (theme) =>
//                   theme.palette.mode === "light"
//                     ? theme.palette.primary.lightModeHeroTitle
//                     : theme.palette.primary.darkModeHeroTitle,

//                 fontFamily: "Poppins",
//                 fontWeight: "500",
//                 fontSize: "16px",
//                 lineHeight: "24px",
//                 letterSpacing: "-1%",
                
//               },
//             }}
//             onClick={handleLogout}
//           >
//             Sign Out
//           </Button>
//           </Toolbar>
          
//         </AppBar>
//       </Box>
//       {/* Box End */}
//     </React.Fragment>
//   );
// }





import React, { useEffect } from "react";
import Link from "@mui/material/Link";
import { ArrowBack } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/axiosInstance";
import { toast } from "react-toastify";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Sidebar from "../components/Sidebar";

export default function UserDashboardHeader() {
  const theme = useTheme();
  let navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const jwt_access = localStorage.getItem("access");
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (jwt_access === null || !user) {
      navigate("/sign-in");
    } else {
      getSomeData();
    }
  }, [jwt_access, navigate, user]);

  // Ensure user is not null before accessing role
  const isClient = user && user.role === "client";
  const editLinkHref = isClient ? "/edit-client" : "/edit-freelancer";
  const backToDashboard = isClient ? "/client" : "/freelancer";
  const refresh = JSON.parse(localStorage.getItem("refresh"));

  const handleLogout = async () => {
    try {
      const res = await axiosInstance.post("/logout/", {
        refresh_token: refresh,
      });
      if (res.status === 200) {
        localStorage.removeItem("access");
        localStorage.removeItem("refresh");
        localStorage.removeItem("user");
        navigate("/sign-in");
        toast.success("Logout successful");
      } else {
        console.error("Logout failed:", res.data);
        toast.error("Logout failed. Please try again.");
      }
    } catch (error) {
      console.error("Logout error:", error);
      toast.error("An error occurred during logout. Please try again.");
    }
  };

  const getSomeData = async () => {
    const resp = await axiosInstance.get("/profile/");
    if (resp.status === 200) {
      console.log("Successful");
    }
  };

  return (
    <React.Fragment>
      {/* Box for UserDashboard header feature */}
      <Box
        sx={{
          display: { xs: "flex", md: "none" },
          backgroundColor: theme.palette.mode,
          pt: "25px",
          pl: "25px",
          justifyContent:'space-between'
        }}
      >
        <IconButton onClick={() => navigate({ backToDashboard })}>
          <ArrowBack />
        </IconButton>
        {/* <Link
          noWrap
          sx={{
            flex: 1,
            padding: "10px",
            color: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[900]
                : theme.palette.grey[500],
            fontSize: "1.05rem",
            textDecoration: "none",
            "&:hover": {
              color: (theme) =>
                theme.palette.mode === "light"
                  ? theme.palette.grey[700]
                  : theme.palette.grey[300],
            },
            ml: "65%",
          }}
          href={editLinkHref}
        >
          Edit
        </Link>
        <Button
          type="submit"
          variant="contained"
          sx={{
            mr: 2,
            backgroundColor: "#87CEEB",
            color: "white",
            "&:hover": {
              backgroundColor: (theme) =>
                theme.palette.mode === "light"
                  ? theme.palette.grey[400]
                  : theme.palette.grey[500],
              color: (theme) =>
                theme.palette.mode === "light"
                  ? theme.palette.primary.lightModeHeroTitle
                  : theme.palette.primary.darkModeHeroTitle,
              fontFamily: "Poppins",
              fontWeight: "500",
              fontSize: "16px",
              lineHeight: "24px",
              letterSpacing: "-1%",
            },
          }}
          onClick={handleLogout}
        >
          Sign Out
        </Button> */}

        {/* <Link
              noWrap
              sx={{
                flex: 1,
                padding: "10px",
                color: (theme) =>
                  theme.palette.mode === "light"
                    ? theme.palette.grey[900]
                    : theme.palette.grey[500],
                fontSize: "1.05rem",
                textDecoration: "none",
                "&:hover": {
                  color: (theme) =>
                    theme.palette.mode === "light"
                      ? theme.palette.grey[700]
                      : theme.palette.grey[300],
                },
              }}
              href={backToDashboard}
            >
              <img src="./frontend/dist/assets/logo.png" alt="logo" style={{ width: '80px', height: '50px' }} />
            </Link> */}
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleMenu}
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <Menu
          id="menu-appbar"
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
          <MenuItem onClick={() => navigate("/profile")}>Edit Profile</MenuItem>
          <MenuItem onClick={handleLogout}>Log out</MenuItem>
        </Menu>
      </Box>

      {/* Box for the Arrow back icon */}
      <Box
        sx={{
          backgroundColor: theme.palette.mode,
          display: { xs: "none", md: "flex" },
        }}
      >
        <AppBar
          sx={{ backgroundColor: "background.default", mb: "60px" }}
          className="appspotAppBar"
        >
          <Toolbar className="appspotToolbar">
            {/* <Link
              noWrap
              sx={{
                flex: 1,
                padding: "10px",
                color: (theme) =>
                  theme.palette.mode === "light"
                    ? theme.palette.grey[900]
                    : theme.palette.grey[500],
                fontSize: "1.05rem",
                textDecoration: "none",
                "&:hover": {
                  color: (theme) =>
                    theme.palette.mode === "light"
                      ? theme.palette.grey[700]
                      : theme.palette.grey[300],
                },
              }}
              href={backToDashboard}
            >
              <img src="./frontend/dist/assets/logo.png" alt="logo" style={{ width: '80px', height: '50px' }} />
            </Link>

            <Link
              noWrap
              sx={{
                flex: 1,
                padding: "10px",
                color: (theme) =>
                  theme.palette.mode === "light"
                    ? theme.palette.grey[900]
                    : theme.palette.grey[500],
                fontSize: "1.05rem",
                textDecoration: "none",
                "&:hover": {
                  color: (theme) =>
                    theme.palette.mode === "light"
                      ? theme.palette.grey[700]
                      : theme.palette.grey[300],
                },
                ml: "75%",
              }}
              href={editLinkHref}
            >
              Edit
            </Link>
            <Button
              type="submit"
              variant="contained"
              sx={{
                mr: 2,
                backgroundColor: "#87CEEB",
                color: "white",
                "&:hover": {
                  backgroundColor: (theme) =>
                    theme.palette.mode === "light"
                      ? theme.palette.grey[400]
                      : theme.palette.grey[500],
                  color: (theme) =>
                    theme.palette.mode === "light"
                      ? theme.palette.primary.lightModeHeroTitle
                      : theme.palette.primary.darkModeHeroTitle,
                  fontFamily: "Poppins",
                  fontWeight: "500",
                  fontSize: "16px",
                  lineHeight: "24px",
                  letterSpacing: "-1%",
                },
              }}
              onClick={handleLogout}
            >
              Sign Out
            </Button> */}
            <Link
              noWrap
              sx={{
                flex: 1,
                padding: "10px",
                color: (theme) =>
                  theme.palette.mode === "light"
                    ? theme.palette.grey[900]
                    : theme.palette.grey[500],
                fontSize: "1.05rem",
                textDecoration: "none",
                "&:hover": {
                  color: (theme) =>
                    theme.palette.mode === "light"
                      ? theme.palette.grey[700]
                      : theme.palette.grey[300],
                },
              }}
              href={backToDashboard}
            >
              <img
                src="./frontend/dist/assets/logo.png"
                alt="logo"
                style={{ width: "80px", height: "50px" }}
              />
            </Link>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
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
              <MenuItem onClick={() => navigate({ editLinkHref })}>
                Edit Profile
              </MenuItem>
              <MenuItem onClick={handleLogout}>Log out</MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
        
      </Box>
    </React.Fragment>
  );
}
