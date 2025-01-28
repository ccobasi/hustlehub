// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../../utils/axiosInstance"; // ensure axiosInstance has the correct base URL
import { toast } from "react-toastify";
import { Container, Box, TextField, InputAdornment, IconButton, Button, Typography } from "@mui/material";
import VpnKey from "@mui/icons-material/VpnKey";
import VisibilityOffOutlined from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlined from "@mui/icons-material/VisibilityOutlined";

const ConfirmPasswordReset = () => {
  const navigate = useNavigate();
  const { uid, token } = useParams();
  const [newpassword, setNewPassword] = useState({
    password: "",
    confirmPassword: ""
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleChange = (e) => {
    setNewPassword({ ...newpassword, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (newpassword.password !== newpassword.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    try {
      const response = await axiosInstance.patch(`/password-reset-confirm/${uid}/${token}/`, {
        password: newpassword.password,
        confirmPassword: newpassword.confirmPassword,
        // uidb64: uid,
        // token: token
      });

      if (response.status === 200) {
        toast.success("Password reset successful");
        navigate('/sign-in');
      }
    } catch (error) {
      // toast.error('Failed to reset password');
      // console.error(error);
      if (error.response && error.response.status === 401) {
        toast.error('Session expired, please log in again.');
      } else {
        toast.error('Failed to reset password');
      }
      console.error(error);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box sx={{ marginTop: 8, display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Typography variant="h5">Reset Password</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            required
            fullWidth
            id="password"
            label="Password"
            name="password"
            placeholder="Enter your new password"
            type={showPassword ? "text" : "password"}
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
                  <IconButton onClick={handleShowPassword}>
                    {showPassword ? <VisibilityOffOutlined /> : <VisibilityOutlined />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <TextField
            required
            fullWidth
            id="confirmPassword"
            label="Confirm Password"
            name="confirmPassword"
            placeholder="Confirm your new password"
            type={showConfirmPassword ? "text" : "password"}
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
                  <IconButton onClick={handleShowConfirmPassword}>
                    {showConfirmPassword ? <VisibilityOffOutlined /> : <VisibilityOutlined />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Reset Password
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default ConfirmPasswordReset;
