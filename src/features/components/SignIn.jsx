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
import { useNavigate } from "react-router-dom";
import {
  EmailOutlined,
  VpnKey,
  VisibilityOffOutlined,
  VisibilityOutlined,
} from "@mui/icons-material";

export default function SignIn() {
  //Initialization of useState hook
  let navigate = useNavigate();
  const [psw, setPsw] = useState(false);
  //Handler for user to see pw
  const handleShowPsw = () => setPsw((show) => !show);
  //Handler for user to hide pw
  const handleHidePsw = (e) => {
    e.preventDefault();
  };
  //Handler End

  {
    /**Handle submit */
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
    navigate("/client");
  };
  //Submit Handler End

  return (
    // Container Signin
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
            Welcome Back
          </Typography>
          <img
            alt="Waving Hand Emogi"
            src="/assets/wavingHand.png"
            style={{ height: "60px", width: "60px" }}
          />
        </Stack>

        <Typography
          component="h1"
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
                fontFamily: "Poppins",
                fontWeight: "400",
                fontSize: "14px",
                lineHeight: "21px",
                letterSpacing: "-1%",
                pb: "5%",
                mb: "2%",
                mt: "25%",
              }}
            />

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
                  <InputAdornment>
                    <VpnKey
                      sx={{
                        ml: "-25%",
                        color: "#AFB0B6",
                      }}
                    />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment>
                    <IconButton
                      onClick={handleShowPsw}
                      onMouseDown={handleHidePsw}
                      edge="end"
                    >
                      {psw ? (
                        <VisibilityOffOutlined
                          sx={{
                            color: "#AFB0B6",
                          }}
                        />
                      ) : (
                        <VisibilityOutlined />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{
                color: "#AFB0B6",
                fontFamily: "Poppins",
                fontWeight: "400",
                fontSize: "14px",
                lineHeight: "21px",
                letterSpacing: "-1%",
                pb: "5%",
              }}
            />
          </FormControl>

          {/**Submit button*/}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 10,
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
            Log in
          </Button>

          <Grid container justifyContent="center">
            <Grid item>
              <a
                href="/forget-password"
                style={{
                  color: "#87CEEB",
                  mb: "20%",
                  textDecoration: "none",
                  fontFamily: "Poppins",
                  fontWeight: "400",
                  fontSize: "15px",
                  lineHeight: "18.97px",
                }}
              >
                Forget Password ?
              </a>
            </Grid>
          </Grid>

          {/**Divider */}
          <Divider sx={{ mt: "20%", color: "#AFB0B6" }}>
            Or continue with
          </Divider>
          {/**Image Avatars */}
          <Box className="imgAvatars">
            <ImageAvatars />
          </Box>

          <Grid container justifyContent="center" sx={{ mt: "10%" }}>
            <Grid item>
              <Typography
                sx={{
                  mb: "20%",
                  
                  fontFamily: "Poppins",
                  fontWeight: "400",
                  fontSize: "14px",
                  lineHeight: "17.71px",
                  color: "#AFB0B6" }}
              >
                Haven't an account?{" "}
                <a
                  href="/sign-up"
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
                  Register
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
