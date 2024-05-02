// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
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
import axios from "axios"


export default function SignUp() {
  const [formData, setFormData] = useState({
    email: "",
    first_name: "",
    last_name: "",
    password: "",
    password2: "",
    mobile_number: "",
    role: "",
    
  });

  const [error, setError]=useState("")

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const {email, first_name, last_name, role, mobile_number, password, password2 } = formData;

const handleSubmit = (e) => {
  e.preventDefault();
  if (!email || !first_name || !last_name || !role || !mobile_number || !password || !password2) {
    setError("Please fill out all fields");
  } else {
    console.log(formData); 
  }
  console.log(error);
};



  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();

  

  const handleShowPassword = () => {
    setShowPassword((prevShow) => !prevShow);
  };

  const handleShowConfirmPassword = () => {
    setShowConfirmPassword((prevShow) => !prevShow);
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
        <Typography variant="h5" sx={{ mt: "10%" }}>
          Registration
          <p style={{color:"red", padding:"1px"}}>{error ? error : ""}</p>
        </Typography>
        <Typography variant="body2" sx={{ mt: "3%" }}>
          Let&apos;s Register. Apply to jobs!
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <FormControl fullWidth>
            
            <TextField
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              placeholder="Enter your email"
              autoComplete="email"
              value={email}
              onChange={handleChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailOutlined />
                  </InputAdornment>
                ),
              }}
              sx={{ mt: "3%" }}
            />
            <TextField
              required
              fullWidth
              id="first_name"
              label="First Name"
              name="first_name"
              placeholder="Enter your first name"
              autoComplete="first-name"
              value={first_name}
              onChange={handleChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircleOutlined />
                  </InputAdornment>
                ),
              }}
              sx={{ mt: "25%" }}
            />
            <TextField
              required
              fullWidth
              id="last_name"
              label="Last Name"
              name="last_name"
              placeholder="Enter your last name"
              autoComplete="last-name"
              value={last_name}
              onChange={handleChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircleOutlined />
                  </InputAdornment>
                ),
              }}
              sx={{ mt: "25%" }}
            />
            <TextField
              required
              fullWidth
              id="mobile_number"
              label="Mobile Number"
              name="mobile_number"
              placeholder="Enter your mobile number"
              autoComplete="mobile-number"
              value={mobile_number}
              onChange={handleChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PhoneAndroidOutlined />
                  </InputAdornment>
                ),
              }}
              sx={{ mt: "3%" }}
            />
            <TextField
              required
              fullWidth
              name="role"
              label="Choose Role"
              select
              value={role}
              onChange={handleChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <ManageAccountsOutlined />
                  </InputAdornment>
                ),
              }}
              sx={{ mt: "3%" }}
            >
              <MenuItem value="Client">Client</MenuItem>
              <MenuItem value="Freelancer">Freelancer</MenuItem>
            </TextField>
            <TextField
              required
              fullWidth
              id="password"
              label="Password"
              name="password"
              placeholder="Enter your password"
              type={showPassword ? "text" : "password"}
              autoComplete="new-password"
              value={password}
              onChange={handleChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <VpnKey />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleShowPassword} edge="end">
                      {showPassword ? <VisibilityOffOutlined /> : <VisibilityOutlined />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{ mt: "3%" }}
            />
            <TextField
              required
              fullWidth
              id="confirmPassword"
              label="Confirm Password"
              name="password2"
              placeholder="Confirm your password"
              type={showConfirmPassword ? "text" : "password"}
              autoComplete="new-password"
              value={password2}
              onChange={handleChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <VpnKey />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleShowConfirmPassword} edge="end">
                      {showConfirmPassword ? <VisibilityOffOutlined /> : <VisibilityOutlined />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{ mt: "3%" }}
            />
          </FormControl>

          <Button type="submit" fullWidth variant="contained" sx={{ mt: 5 }}>
            Register
          </Button>

          <Divider sx={{ mt: "10%" }}>Or continue with</Divider>

          <Box className="imgAvatars">
            <ImageAvatars />
          </Box>

          <Grid container justifyContent="center" sx={{ mt: "10%" }}>
            <Grid item>
              <Typography sx={{ mb: "20%" }}>
                Have an account?{" "}
                <a href="/sign-in" style={{ color: "#87CEEB", textDecoration: "none" }}>
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


  

