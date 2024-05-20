// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import VpnKey from "@mui/icons-material/VpnKey";
import VisibilityOffOutlined from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlined from "@mui/icons-material/VisibilityOutlined";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios"
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../../utils/axiosInstance";


const ConfirmPasswordReset = () => {
  const navigate = useNavigate();
  const [newpassword, setNewPassword] = useState({
    password: "",
    confirmPassword: ""
  });
  const [uid, token] = useParams();
  

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleChange=(e)=>{
    setNewPassword({...newpassword,[e.target.name]:e.target.value})
  }

  const data={
    "password":newpassword.password,
    "confirmPassword":newpassword.confirmPassword,
    "uidb64":uid,
    "token":token
  }

  const handleSubmit = async (e) => {
  e.preventDefault();
  
   if (newPassword !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }
  const response = await axiosInstance.patch('/user/set-new-password/', data)
  const result = response.data
  if(result.status === 200){
    navigate('/sign-in')
    toast.success("Password Reset Successfully")
  }

}

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
      <form onSubmit={handleSubmit}>
      <Typography variant="h5" sx={{ mt: "10%" }}>
           Reset Password
         </Typography>
         <Typography variant="body2" sx={{ mt: "3%" }}>
           Let&apos;s Register. Apply to jobs!
         </Typography>
        
          <TextField
              required
              fullWidth
              id="password"
              label="Password"
              name="password"
              placeholder="Enter your password"
              type={showPassword ? "text" : "password"}
              autoComplete="new-password"
              value={newpassword.password}
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
              value={newpassword.confirmPassword}
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
        
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          sx={{ mt: 3, mb: 2, backgroundColor: "#87CEEB", color: "white" }}
        >
          Sign Up
        </Button>
        </form>
        
         
      </Box>
    </Container>
  );
};

export default ConfirmPasswordReset;

  

