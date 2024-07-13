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


import {
   
  EmailOutlined,
  AccountCircleOutlined,
  ManageAccountsOutlined,
  VpnKey,
  PhoneAndroidOutlined,
  VisibilityOffOutlined,
  VisibilityOutlined,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
    const navigate = useNavigate();
    const [psw, setPsw] = useState(false);
    const handleShowPsw = () => setPsw((show) => !show);
    const handleHidePsw = (e) => {
       e.preventDefault();
    };

    {/**Handle show or hide confirm psw */}
    const [confirmPsw, setConfirmPsw] = useState(false);
    const handleShowConfirmPsw = () => setConfirmPsw((show) => !show);
    const handleHideConfirmPsw = (e) => {
       e.preventDefault();
    };
 

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   if (handleSubmit) { 
  //     navigate("/client"); 
  //   }
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     email: data.get("email"),
  //     password: data.get("password"),
  //   });



  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5" sx={{ mt: "5%" }}>
          <b>Registration</b>
        </Typography>
        <Typography component="h1" variant="body2" sx={{ mt: "3%" }}>
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
                  <InputAdornment>
                    <AccountCircleOutlined />
                  </InputAdornment>
                ),
              }}
              sx={{ pb: "5%" }}
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
                  <InputAdornment>
                    <EmailOutlined />
                  </InputAdornment>
                ),
              }}
              sx={{ pb: "5%" }}
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
                  <InputAdornment>
                    <PhoneAndroidOutlined />
                  </InputAdornment>
                ),
              }}
              sx={{ pb: "5%" }}
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
                  <InputAdornment>
                    <ManageAccountsOutlined />
                  </InputAdornment>
                ),
              }}
              sx={{ pb: "5%" }}
            >
              <MenuItem value="Business Owner">Business Owner</MenuItem>
              <MenuItem value="Talent">Talent</MenuItem>
            </TextField>
             {/**Password Textfield */}
            <TextField
              required
              fullWidth
              name="password"
              label="Password"
              type={psw ? 'text' : 'password'}
              id="password"
              placeholder="Enter your password"
              autoComplete="new-password"
              InputProps={{
                startAdornment: (
                  <InputAdornment>
                    <VpnKey />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment>
                    <IconButton  onClick={handleShowPsw}
                        onMouseDown={handleHidePsw}
                        edge="end">
                      {psw ? <VisibilityOffOutlined /> : <VisibilityOutlined />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{ pb: "5%" }}
            />
             {/**Confirm Password Textfield */}
            <TextField
              required
              fullWidth
              name="password"
              label="Confirm Password"
              placeholder="Confirm your password"
              type={confirmPsw ? 'text' : 'password'}
              id="password"
              autoComplete="new-password"
              InputProps={{
                startAdornment: (
                  <InputAdornment>
                    <VpnKey />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment>
                     <IconButton  onClick={handleShowConfirmPsw}
                        onMouseDown={handleHideConfirmPsw}
                        edge="end">
                      {confirmPsw ? <VisibilityOffOutlined /> : <VisibilityOutlined />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            ></TextField>
          </FormControl>

         {/**Submit button*/}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, bgcolor: "#87CEEB" }}
          >
            Register
          </Button>
          {/**Divider */}
          <Divider>Or continue with</Divider>
          {/**Image Avatars */}
              <Box className="imgAvatars">
              <ImageAvatars />
              </Box>
               
              
         


          <Grid container justifyContent="flex-end">
            <Grid item>
              <Typography>
                Have an account?{" "}
                <a href="/sign-in" style={{ color: "#87CEEB", mb:"20%" }}>
                  Log in
                </a>
              </Typography>
            </Grid>
            
          </Grid>
         
         
        </Box>
      </Box>
    </Container>
  );
  };
