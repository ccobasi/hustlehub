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
import FormControl from "@mui/material/FormControl";
import { useState } from "react";
import Divider from "@mui/material/Divider";
import ImageAvatars from "./ImageAvatars";
import Stack from "@mui/material/Stack";



import {
   
  EmailOutlined,
 
  VpnKey,
  
  VisibilityOffOutlined,
  VisibilityOutlined,
} from "@mui/icons-material";

export default function SignIn() {
    const [psw, setPsw] = useState(false);
    const handleShowPsw = () => setPsw((show) => !show);
    const handleHidePsw = (e) => {
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
        <Stack direction="row">
        <Typography component="h1" variant="h5" sx={{ mt: "10%" }}>
          <b>Welcome Back</b> 
        </Typography>
        <img alt="Waving Hand Emogi" src="/assets/waving-hand-emoji.png" style={{height:"60px", width:"60px", }}/>
        </Stack>
        
        <Typography component="h1" variant="body2" sx={{ mt: "3%" }}>
          Let's log in.Apply to jobs!
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
         
          {/**Registration Form Control */}
          <FormControl fullWidth>
          
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
             
          </FormControl>

         {/**Submit button*/}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, bgcolor: "#87CEEB" }}
          >
            Log in
          </Button>

          
          <Grid container justifyContent="center">
            <Grid item>
             
                <a href="/forget-password" style={{ color: "#87CEEB", mb:"20%" ,textDecoration:"none"}}>
                  Forget Password ?
                </a>
            
            </Grid>
            
          </Grid>


          {/**Divider */}
          <Divider>Or continue with</Divider>
          {/**Image Avatars */}
              <Box className="imgAvatars">
              <ImageAvatars />
              </Box>
               
              <Grid container justifyContent="center">
            <Grid item>
              <Typography>
                Haven't an account?{" "}
                <a href="/sign-up" style={{ color: "#87CEEB", mb:"20%", textDecoration:"none" }}>
                  Register
                </a>
              </Typography>
            </Grid>
            
          </Grid>
         


         
         
        </Box>
      </Box>
    </Container>
  );
}
