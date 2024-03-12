// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { InputAdornment } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
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

import { useDispatch, useSelector } from 'react-redux';
import { updateField, submitSignupForm } from '../../store/actions/signupActions';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
  const history = useNavigate();
    const dispatch = useDispatch();
  const signUpState = useSelector((state) => state.signUp);

  const handleInputChange = (field, value) => {
    dispatch(updateField(field, value));
  };

  

  

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Dispatch an action to update each form field in the store
    dispatch(updateField('fullName', fullName));
    dispatch(updateField('email', email));
    dispatch(updateField('mobileNumber', mobileNumber));
    dispatch(updateField('role', role));
    dispatch(updateField('password', password));
    dispatch(updateField('confirmPassword', confirmPassword));

    // Dispatch an action to submit the form (you can handle form submission logic in your reducer)
    dispatch(submitSignupForm());

    console.log(submitSignupForm());

    history.push('/client');
  };

  const {
    fullName,
    email,
    mobileNumber,
    role,
    password,
    confirmPassword,
  } = signUpState;

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

  return (
    <Container component="main" maxWidth="xs">
      <Box sx={{ marginTop: 8, display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Typography component="h1" variant="h5" sx={{ mt: "5%" }}>
          <b>Registration</b>
        </Typography>
        <Typography component="h1" variant="body2" sx={{ mt: "3%" }}>
          Let&apos;s Register. Apply to jobs!
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          {/* ... Other code ... */}
          <FormControl fullWidth>
            <TextField
              required
              fullWidth
              id="fullName"
              label="Full Name"
              name="fullName"
              placeholder="Enter your full name"
              autoComplete="full-name"
              value={fullName}
              onChange={(e) => handleInputChange('fullName', e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
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
               value= { email }
                onChange={(e) => handleInputChange('email', e.target.value)}
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
              <TextField
              required
              fullWidth
              id="mobileNumber"
              label="Mobile Number"
              name="mobileNumber"
              autoComplete="mobile-number"
              placeholder="Enter your mobile number"
              value= { mobileNumber }
              onChange={(e) => handleInputChange('mobileNumber', e.target.value)}
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
              value= { role }
               onChange={(e) => handleInputChange('role', e.target.value)}
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
              value= { password }
               onChange={(e) => handleInputChange('password', e.target.value)}
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
              value= { confirmPassword }
               onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
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
      </Box>
      </Box>
    </Container>
  )
  }
