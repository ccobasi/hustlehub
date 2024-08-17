// // eslint-disable-next-line no-unused-vars
// import * as React from "react";
// import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
// import Container from "@mui/material/Container";

// import { ForgetPasswordGroupButton } from "./ForgetPasswordGroupButton";


// export default function ForgetPassword() {
//   {
//     /**Handle submit */
//   }
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const data = new FormData(e.currentTarget);
//     console.log({
//       email: data.get("email"),
//       password: data.get("password"),
//     });
//   };
//   // Handle End

//   return (
//     // Conatiner for forget password form
//     <Container component="main" maxWidth="xs">
//       <Box
//         sx={{
//           marginTop: 8,
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//         }}
//       >
//         <Typography
//           component="h1"
//           variant="h5"
//           sx={{
//             mt: "5%",
//             fontFamily: "Poppins",
//             fontWeight: "600",
//             fontSize: "24px",
//             lineHeight: "33.6px",
//             letterSpacing: "-1.5%",
//             color: (theme) =>
//               theme.palette.mode === "light"
//                 ? theme.palette.primary.lightModeHeroTitle
//                 : theme.palette.primary.darkModeHeroTitle,
//           }}
//         >
//           Forget Password
//         </Typography>
//         <Typography
//           component="h1"
//           sx={{
//             mt: "3%",
//             fontFamily: "Poppins",
//             fontWeight: "400",
//             fontSize: "14px",
//             lineHeight: "22.4px",
//             letterSpacing: "-1%",
//             color: (theme) =>
//               theme.palette.mode === "light"
//                 ? theme.palette.primary.lightModeHeroTitle
//                 : theme.palette.primary.darkModeHeroTitle,
//           }}
//         >
//           Select either your email or phone number, we will
//         </Typography>
//         <Typography
//           component="h1"
//           sx={{
//             mt: "3%",
//             fontFamily: "Poppins",
//             fontWeight: "400",
//             fontSize: "14px",
//             lineHeight: "22.4px",
//             letterSpacing: "-1%",
//             color: (theme) =>
//               theme.palette.mode === "light"
//                 ? theme.palette.primary.lightModeHeroTitle
//                 : theme.palette.primary.darkModeHeroTitle,
//           mb:"15%"}}
//         >
//           send you verification code.
//         </Typography>
//         <ForgetPasswordGroupButton />
//       </Box>
//     </Container>
//     // Container End
//   );
// }
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { toast } from "react-toastify";
import axios from "axios";
import { ForgetPasswordGroupButton } from "./ForgetPasswordGroupButton";

export default function ForgetPassword() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email address.");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post("http://localhost:8000/user/password-reset/", { email });
      if (response.status === 200) {
        toast.success("Password reset link has been sent to your email.");
      }
    } catch (error) {
      toast.error(
        error.response?.data?.error || "Failed to send password reset link. Please try again later."
      );
    } finally {
      setLoading(false);
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
        <Typography
          component="h1"
          variant="h5"
          sx={{
            mt: "5%",
            fontFamily: "Poppins",
            fontWeight: "600",
            fontSize: "24px",
            lineHeight: "33.6px",
            letterSpacing: "-1.5%",
          }}
        >
          Forget Password
        </Typography>
        <Typography
          sx={{
            mt: "3%",
            fontFamily: "Poppins",
            fontWeight: "400",
            fontSize: "14px",
            lineHeight: "22.4px",
            letterSpacing: "-1%",
            mb: "15%",
          }}
        >
          Enter your email address, and we will send you a verification code.
        </Typography>
        <form onSubmit={handleSubmit} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, backgroundColor: "#87CEEB", color: "#fff" }}
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Reset Link"}
          </Button>
        
        </form>
      </Box>
    </Container>
  );
}
