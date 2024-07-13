import React from "react";
import { Button,  TextField, Box } from "@mui/material";
import { InputAdornment } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import {
  EmailOutlined,
 
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export const SendCodeToEmail = () => {

    //Instatiate useNavigate
  let navigate = useNavigate();


  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
    });
    navigate('/');

  };

  
  return (
    <>
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
            placeholder="Enter your email"
            autoComplete="email"
            InputProps={{
              startAdornment: (
                <InputAdornment>
                  <EmailOutlined />
                </InputAdornment>
              ),
            }}
          />
        </FormControl>
        {/**Submit button*/}
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 12, mb: 2, bgcolor: "#87CEEB" }}
        >
          Send code
        </Button>
      </Box>
    </>
  );
};
