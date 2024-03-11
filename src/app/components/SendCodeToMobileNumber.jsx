import React from "react";
import { Button,  TextField, Box } from "@mui/material";
import { InputAdornment } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import {
 
  PhoneAndroidOutlined,
 
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export const SendCodeToMobileNumber = () => {
     //Instatiate useNavigate
  let navigate = useNavigate();


  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      mobileNumber: data.get("mobileNumber"),
    });
    navigate('/');
  };
  return (
    <>
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 12 }}>
        {/**Registration Form Control */}
        <FormControl fullWidth>
          {/**Mobile Number Textfield */}
          <TextField
              required
              fullWidth
              id="mobileNumber"
              label="Mobile Number"
              name="mobileNumber"
              autoComplete="mobile-number"
              placeholder="Enter your mobile number"
              InputProps={{
                startAdornment: (
                  <InputAdornment>
                    <PhoneAndroidOutlined />
                  </InputAdornment>
                ),
              }}
              sx={{ pb: "5%" }}
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
