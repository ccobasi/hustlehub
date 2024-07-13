<<<<<<< HEAD
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { InputAdornment } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { useState } from "react";
import Divider from "@mui/material/Divider";
import ImageAvatars from "./ImageAvatars";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";

import {
   
  EmailOutlined,
  AccountCircleOutlined,
  ManageAccountsOutlined,
  VpnKey,
  PhoneAndroidOutlined,
  VisibilityOffOutlined,
  VisibilityOutlined,
} from "@mui/icons-material";
import { ForgetPasswordGroupButton } from "./ForgetPasswordGroupButton";

export default function ForgetPassword() {
=======
// import * as React from "react";
// import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
// import TextField from "@mui/material/TextField";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
// import Link from "@mui/material/Link";
// import Grid from "@mui/material/Grid";
// import Box from "@mui/material/Box";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
// import Typography from "@mui/material/Typography";
// import Container from "@mui/material/Container";
// import { InputAdornment } from "@mui/material";
// import IconButton from "@mui/material/IconButton";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import { useState } from "react";
// import Divider from "@mui/material/Divider";
// import ImageAvatars from "./ImageAvatars";
// import Select from "@mui/material/Select";
// import InputLabel from "@mui/material/InputLabel";

// import {
   
//   EmailOutlined,
//   AccountCircleOutlined,
//   ManageAccountsOutlined,
//   VpnKey,
//   PhoneAndroidOutlined,
//   VisibilityOffOutlined,
//   VisibilityOutlined,
// } from "@mui/icons-material";
// import { ForgetPasswordGroupButton } from "./ForgetPasswordGroupButton";
// import { useDispatch, useSelector } from 'react-redux';
// import { updateForgotPasswordField, resetForgotPassword, submitForgotPassword } from '../actions/forgotPasswordActions';


// // export default function ForgetPassword() {
>>>>>>> home-page
    

  
 
<<<<<<< HEAD
{/**Handle submit */}
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
        <Typography component="h1" variant="h5" sx={{ mt: "5%" }}>
          <b>Forget Password</b>
        </Typography>
        <Typography component="h1" variant="body2" sx={{ mt: "3%" }}>
          Enter your email or phone number, we will 
        </Typography>
        <Typography component="h1" variant="body2">
        send you verification code.
        </Typography>
        <ForgetPasswordGroupButton/>
      </Box>
    </Container>
  );
}
=======
// // {/**Handle submit */}
// //   const handleSubmit = (event) => {
// //     event.preventDefault();
// //     const data = new FormData(event.currentTarget);
// //     console.log({
// //       email: data.get("email"),
// //       password: data.get("password"),
// //     });
// //   };

// //   return (
// //     <Container component="main" maxWidth="xs">
// //       <Box
// //         sx={{
// //           marginTop: 8,
// //           display: "flex",
// //           flexDirection: "column",
// //           alignItems: "center",
// //         }}
// //       >
// //         <Typography component="h1" variant="h5" sx={{ mt: "5%" }}>
// //           <b>Forget Password</b>
// //         </Typography>
// //         <Typography component="h1" variant="body2" sx={{ mt: "3%" }}>
// //           Enter your email or phone number, we will 
// //         </Typography>
// //         <Typography component="h1" variant="body2">
// //         send you verification code.
// //         </Typography>
// //         <ForgetPasswordGroupButton/>
// //       </Box>
// //     </Container>
// //   );
// // }
// const ForgotPassword = () => {
//   const dispatch = useDispatch();
//   const forgotPasswordData = useSelector((state) => state.forgotPassword);

//   const handleInputChange = (field, value) => {
//     dispatch(updateForgotPasswordField(field, value));
//   };

//   const handleSubmit = () => {
//     // Add logic to handle forgot password submission (e.g., dispatch an API call)
//     console.log('Forgot password submitted:', forgotPasswordData);
//     dispatch(resetForgotPassword());
//   };

//   return (
//     <Container component="main" maxWidth="xs">
//       <Box
//         sx={{
//           marginTop: 8,
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//         }}
//       >
//         <Typography component="h1" variant="h5" sx={{ mt: "5%" }}>
//           <b>Forget Password</b>
//         </Typography>
//         <Typography component="h1" variant="body2" sx={{ mt: "3%" }}>
//           Enter your email or phone number, we will 
//         </Typography>
//         <Typography component="h1" variant="body2">
//         send you verification code.
//         </Typography>
//         <ForgetPasswordGroupButton/>
//       </Box>
//     </Container>
//   );
// };

// export default ForgotPassword;
// components/ForgotPassword.js
// eslint-disable-next-line no-unused-vars
import React from 'react';
import ForgotPasswordForm from './forgotPasswordForm';

const ForgotPassword = () => {
  return (
    <ForgotPasswordForm />
  );
};

export default ForgotPassword;
>>>>>>> home-page
