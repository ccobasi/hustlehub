// components/ForgotPasswordForm.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateForgotPasswordField, resetForgotPassword, submitForgotPassword } from '../../store/actions/forgotPasswordActions'; 
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import ForgetPasswordGroupButton from './ForgetPasswordGroupButton';

const ForgotPasswordForm = () => {
  const dispatch = useDispatch();
  const forgotPasswordData = useSelector((state) => state.forgotPassword);

  const handleInputChange = (field, value) => {
    dispatch(updateForgotPasswordField(field, value));
  };

  const handleSubmit = () => {
    // Add logic to handle forgot password submission (e.g., dispatch an API call)
    console.log('Forgot password submitted:', forgotPasswordData);
    dispatch(resetForgotPassword());
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
        <Typography component="h1" variant="h5" sx={{ mt: "5%" }}>
          <b>Forget Password</b>
        </Typography>
        <Typography component="h1" variant="body2" sx={{ mt: "3%" }}>
          Enter your email or phone number, we will
        </Typography>
        <Typography component="h1" variant="body2">
          send you a verification code.
        </Typography>
        {/**Add the form fields here */}
        <TextField
          required
          fullWidth
          id="emailOrPhoneNumber"
          label="Email or Phone Number"
          name="emailOrPhoneNumber"
          placeholder="Enter your email or phone number"
          autoComplete="emailOrPhoneNumber"
          onChange={(e) => handleInputChange('emailOrPhoneNumber', e.target.value)}
          sx={{ pb: "5%", mt: '3%' }}
        />
        {/**Add other form fields as needed */}
        <Button
          type="button"
          fullWidth
          variant="contained"
          onClick={handleSubmit}
          sx={{ mt: 3, mb: 2, bgcolor: "#87CEEB" }}
        >
          Submit
        </Button>
        <ForgetPasswordGroupButton />
      </Box>
    </Container>
  );
};

export default ForgotPasswordForm;
