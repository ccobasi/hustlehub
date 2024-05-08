import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import { AppBar, Box } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.png"
import { CustomButton } from "../../app/layout/header/CustomButton";
import axiosInstance from "../../utils/axiosInstance";
import { toast } from "react-toastify";

export default function UserDashboardHeader() {
  const theme = useTheme();
  let navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  let isClient = user.role === "client";
  const editLinkHref = isClient? "/edit-client" : "/edit-freelancer"; 
  const refresh=JSON.parse(localStorage.getItem("refresh"))

  const handleLogout =async ()=>{
    const res=await axiosInstance.post("/logout/", {"refresh_token":refresh})
    if(res.status === 200){
      localStorage.removeItem('access')
      localStorage.removeItem('refresh')
      localStorage.removeItem('user');
      navigate('/sign-in')
      toast.success("logout successful")
    }
  }

  return (
    <React.Fragment>
      {/* Box for UserDashboard header  feature */}
      <Box
        sx={{
          display: { xs: "flex", md: "none" },
          backgroundColor: theme.palette.mode,
          pt: "25px",
          pl: "25px",
        }}
      >
        <IconButton onClick={() => navigate("/")}>
          <ArrowBack />
        </IconButton>
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
            ml: "65%",
          }}
          href={isClient ? "/edit-client" : "/edit-freelancer"}
        >
          Edit
        </Link>
        <CustomButton onClick={handleLogout}>Sign Out</CustomButton>
      </Box>

      {/* Box for the Arrow back icon*/}
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
              href="/"
            >
              <img src={Logo} alt="logo" style={{ width: '80px', height: '50px' }} />
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
            <CustomButton onClick={handleLogout}>Sign Out</CustomButton>
          </Toolbar>
          
        </AppBar>
      </Box>
      {/* Box End */}
    </React.Fragment>
  );
}
