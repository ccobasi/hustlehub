import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import { AppBar, Box } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.png"

export default function UserDashboardHeader() {
  //Use system preference to set theme mode
  const theme = useTheme();
  //instantiate useNavigate object
  let navigate = useNavigate();
  let isCleint = false;

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
            ml: "85%",
          }}
          href={isCleint ? "/edit-client" : "/edit-freelancer"}
        >
          Edit
        </Link>
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
                ml: "85%",
              }}
              href={isCleint ? "/edit-client" : "/edit-freelancer"}
            >
              Edit
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
      {/* Box End */}
    </React.Fragment>
  );
}
