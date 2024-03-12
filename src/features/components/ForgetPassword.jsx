import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import { ForgetPasswordGroupButton } from "./ForgetPasswordGroupButton";

export default function ForgetPassword() {
    

  
 
{/**Handle submit */}
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  // Handle End

  return (
    // Conatiner for forget password form
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
    // Container End
  );
}
