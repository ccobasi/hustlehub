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

export default function SignUp() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
    role: "",
    password: "",
    confirmPassword: "",
  });
  const [data,setData] = useState([])
   const [email,setEmail] = useState('')
   const [,setSignIn] = useState(false)

  useEffect(()=>{
        setData(JSON.parse(localStorage.getItem('user')))
    },[])


  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleShowPassword = () => {
    setShowPassword((prevShow) => !prevShow);
  };

  const handleShowConfirmPassword = () => {
    setShowConfirmPassword((prevShow) => !prevShow);
  };

  

//   const handleSubmit = (event) => {
//   event.preventDefault();

//   const formData = {
//     email: event.target.email.value,
//     password: event.target.password.value,
//     fullName: event.target.fullName.value 
//   };

//   console.log(formData);

//   if (formData.email && formData.password) {

//     const userData = JSON.parse(localStorage.getItem("user")) || [];

//     if (userData.length === 0) {
   
//       localStorage.setItem(
//         "user",
//         JSON.stringify([{ email: formData.email, password: formData.password, fullName: formData.fullName }])
//       );
//       navigate("/client", { state: formData.fullName }); 
//     } else {
//       for (let val of userData) {
//         if (val.email === formData.email) {
//           alert("User already exists");
//           return;
//         }
//       }

//       localStorage.setItem(
//         "user",
//         JSON.stringify([...userData, { email: formData.email, password: formData.password, fullName: formData.fullName }])
//       );
//       navigate("/client", { state: formData.fullName }); 
//     }
//   }
// };

  const handleSubmit = (event) => {
  event.preventDefault();

  const formData = {
    email: event.target.email.value,
    password: event.target.password.value,
    fullName: event.target.fullName.value,
    role: event.target.role.value, 
  };

  console.log(formData);

  if (formData.email && formData.password && formData.role) {

    const userData = JSON.parse(localStorage.getItem("user")) || [];

    if (userData.length === 0) {
   
      localStorage.setItem(
        "user",
        JSON.stringify([{ email: formData.email, password: formData.password, fullName: formData.fullName, role: formData.role }])
      );
    } else {
      for (let val of userData) {
        if (val.email === formData.email) {
          alert("User already exists");
          return;
        }
      }

      localStorage.setItem(
        "user",
        JSON.stringify([...userData, { email: formData.email, password: formData.password, fullName: formData.fullName, role: formData.role }])
      );
    }

    if (formData.role === "Freelancer") {
      navigate("/freelancer", { state: formData.fullName }); 
    } else {
      navigate("/client", { state: formData.fullName }); 
    }
  }
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
        </Typography>
        <Typography variant="body2" sx={{ mt: "3%" }}>
          Let&apos;s Register. Apply to jobs!
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <FormControl fullWidth>
            <TextField
              required
              fullWidth
              id="fullName"
              label="Full Name"
              name="fullName"
              placeholder="Enter your full name"
              autoComplete="full-name"
              value={formData.fullName}
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
              id="email"
              label="Email"
              name="email"
              placeholder="Enter your email"
              autoComplete="email"
              value={formData.email}
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
              id="mobileNumber"
              label="Mobile Number"
              name="mobileNumber"
              placeholder="Enter your mobile number"
              autoComplete="mobile-number"
              value={formData.mobileNumber}
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
              value={formData.role}
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
              value={formData.password}
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
              name="confirmPassword"
              placeholder="Confirm your password"
              type={showConfirmPassword ? "text" : "password"}
              autoComplete="new-password"
              value={formData.confirmPassword}
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
}
