import React, { useState } from "react";
import { Button, TextField, Box } from "@mui/material";
import { InputAdornment } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import { EmailOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import axiosInstance from "../../utils/axiosInstance"

export const SendCodeToEmail = () => {
  //Instatiate useNavigate
  let navigate = useNavigate();
  const [email, setEmail]=useState("")

  // Handler for the submit event
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(email){
      const res = await axiosInstance.post("/password-reset/", {"email":email});
      if(res.status === 200){
        toast.success("Code sent to your email")

      }
      console.log(res);
      setEmail("")
  }
  
  }
  return (
    <>
      {/* Box for the registration form */}
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 12 }}>
        {/**Registration Form Control */}
        <FormControl fullWidth>
          {/**Email Textfield */}
          <TextField
            required
            fullWidth
            id="email"
            label="E-mail"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            autoComplete="email"
            InputProps={{
              startAdornment: (
                <InputAdornment>
                  <EmailOutlined
                    sx={{
                      ml: "-25%",
                      color:"#AFB0B6"
                     
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
            }}
          />
        </FormControl>
        {/**Submit button*/}
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{
            mt: 12,
            mb: 2,
            bgcolor: "#87CEEB",
            color: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.primary.lightModeHeroTitle
                : theme.palette.primary.darkModeHeroTitle,
            fontFamily: "Poppins",
            fontWeight: "500",
            fontSize: "16px",
            lineHeight: "24px",
            letterSpacing: "-1%",
          }}
        >
          Send code
        </Button>
      </Box>
      {/* Box End */}
    </>
  );
};
