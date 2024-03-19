// eslint-disable-next-line no-unused-vars
import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { InputAdornment } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { useState } from "react";
import Divider from "@mui/material/Divider";
import ImageAvatars from "./ImageAvatars";
import { useNavigate } from "react-router-dom";

import {
  EmailOutlined,
  AccountCircleOutlined,
  ManageAccountsOutlined,
  VpnKey,
  PhoneAndroidOutlined,
  VisibilityOffOutlined,
  VisibilityOutlined,
} from "@mui/icons-material";

export default function SignUp() {
  //Initialization of useState Hook
  const [psw, setPsw] = useState(false);
  //Handler for user to see pw
  const handleShowPsw = () => setPsw((show) => !show);
  //Handler for user to hide pw
  const handleHidePsw = (e) => {
    e.preventDefault();
  };
  //Handler End
  {
    /**Handle show or hide confirm psw */
  }
  const [confirmPsw, setConfirmPsw] = useState(false);
  const handleShowConfirmPsw = () => setConfirmPsw((show) => !show);
  const handleHideConfirmPsw = (e) => {
    e.preventDefault();
  };
  // Handler End

  //Initialization of useNavigate hook
  let navigate = useNavigate();
  //Handler for the submit event
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
    if(event.target.email.value && event.target.password.value){
      if(!localStorage.getItem('user')){
                localStorage.setItem('user',JSON.stringify([{email:event.target.email.value,passeord:event.target.password.value}]))
                navigate('/client',{state:event.target.email.value })
            }
    }
    
  };
  //Submit Handle End

  return (
    // Container for Sign Up functionality
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          component="h1"
          variant="h5"
          sx={{
            mt: "10%",
            color: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.primary.lightModeHeroTitle
                : theme.palette.primary.darkModeHeroTitle,
            fontFamily: "Poppins",
            fontWeight: "600",
            fontSize: "24px",
            lineHeight: "33.6px",
            letterSpacing: "-1.5%",
          }}
        >
          Registration
        </Typography>
        <Typography
          component="h1"
          variant="body2"
          sx={{
            mt: "3%",
            color: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.primary.lightModeHeroTitle
                : theme.palette.primary.darkModeHeroTitle,
            fontFamily: "Poppins",
            fontWeight: "400",
            fontSize: "14px",
            lineHeight: "22.4px",
            letterSpacing: "-1%",
          }}
        >
          Let&apos;s Register.Apply to jobs!
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          {/**Registration Form Control */}
          <FormControl fullWidth>
            {/**Full Name Textfield */}
            <TextField
              required
              fullWidth
              id="fullName"
              label="Full Name"
              name="fullName"
              placeholder="Enter your full name"
              autoComplete="full-name"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircleOutlined
                      sx={{
                        ml: "-25%",
                        color: "#AFB0B6",
                      }}
                    />
                  </InputAdornment>
                ),
              }}
              sx={{
                color: "#AFB0B6",

                pb: "5%",
                mb: "2%",
                mt: "25%",
              }}
            />
            {/**Email Textfield */}
            <TextField
              required
              fullWidth
              id="email"
              label="E-mail"
              name="email"
              placeholder="Enter your email"
              autoComplete="email"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailOutlined
                      sx={{
                        ml: "-25%",
                        color: "#AFB0B6",
                      }}
                    />
                  </InputAdornment>
                ),
              }}
              sx={{
                color: "#AFB0B6",

                pb: "5%",
                mb: "2%",
              }}
            />
            {/**Mobile Number Textfield */}
            <TextField
              required
              fullWidth
              id="mobileNumber"
              label="Mobile Number"
              name="mobileNumber"
              autoComplete="mobile-number"
              placeholder="Enter your mobile number"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PhoneAndroidOutlined
                      sx={{
                        ml: "-25%",
                        color: "#AFB0B6",
                      }}
                    />
                  </InputAdornment>
                ),
              }}
              sx={{
                color: "#AFB0B6",

                pb: "5%",
                mb: "2%",
              }}
            />
            {/**Choose Role Textfield */}
            <TextField
              required
              fullWidth
              name="role"
              label="Choose Role"
              id="role"
              select
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <ManageAccountsOutlined
                      sx={{
                        ml: "-25%",
                        color: "#AFB0B6",
                      }}
                    />
                  </InputAdornment>
                ),
              }}
              sx={{
                color: "#AFB0B6",

                pb: "5%",
                mb: "2%",
              }}
            >
              <MenuItem value="Business Owner">Client</MenuItem>
              <MenuItem value="Talent">Freelancer</MenuItem>
            </TextField>
            {/**Password Textfield */}
            <TextField
              required
              fullWidth
              name="password"
              label="Password"
              type={psw ? "text" : "password"}
              id="password"
              placeholder="Enter your password"
              autoComplete="new-password"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <VpnKey
                      sx={{
                        ml: "-25%",
                        color: "#AFB0B6",
                      }}
                    />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleShowPsw}
                      onMouseDown={handleHidePsw}
                      edge="end"
                    >
                      {psw ? (
                        <VisibilityOffOutlined
                          sx={{
                            ml: "-25%",
                            color: "#AFB0B6",
                          }}
                        />
                      ) : (
                        <VisibilityOutlined
                          sx={{
                            ml: "-25%",
                            color: "#AFB0B6",
                          }}
                        />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{
                color: "#AFB0B6",

                pb: "5%",
                mb: "2%",
              }}
            />
            {/**Confirm Password Textfield */}
            <TextField
              required
              fullWidth
              name="password"
              label="Confirm Password"
              placeholder="Confirm your password"
              type={confirmPsw ? "text" : "password"}
              id="password"
              autoComplete="new-password"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <VpnKey
                      sx={{
                        ml: "-25%",
                        color: "#AFB0B6",
                      }}
                    />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleShowConfirmPsw}
                      onMouseDown={handleHideConfirmPsw}
                      edge="end"
                    >
                      {confirmPsw ? (
                        <VisibilityOffOutlined
                          sx={{
                            ml: "-25%",
                            color: "#AFB0B6",
                          }}
                        />
                      ) : (
                        <VisibilityOutlined
                          sx={{
                            ml: "-25%",
                            color: "#AFB0B6",
                          }}
                        />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{
                color: "#AFB0B6",

                pb: "5%",
                mb: "2%",
              }}
            ></TextField>
          </FormControl>

          {/**Submit button*/}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 5,
              mb: 7,
              backgroundColor: "#87CEEB",
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
          >
            Register
          </Button>
          {/**Divider */}
          <Divider sx={{ mt: "10%", color: "#AFB0B6" }}>
            Or continue with
          </Divider>
          {/**Image Avatars */}
          <Box className="imgAvatars">
            <ImageAvatars />
          </Box>

          <Grid container justifyContent="center" sx={{ mt: "10%", }}>
            <Grid item>
              <Typography
                sx={{
                  mb: "20%",
                  fontFamily: "Poppins",
                  fontWeight: "400",
                  fontSize: "14px",
                  lineHeight: "17.71px",
                  color: "#AFB0B6",
                  
                }}
              >
                Have an account?{" "}
                <a
                  href="/sign-in"
                  style={{
                    color: "#87CEEB",
                    mb: "20%",
                    textDecoration: "none",
                    fontFamily: "Poppins",
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "17.71px",
                  }}
                >
                  Log in
                </a>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
    //Container End
  );
}
