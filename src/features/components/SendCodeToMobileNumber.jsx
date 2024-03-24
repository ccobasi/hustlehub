import React from "react";
import { Button, TextField, Box } from "@mui/material";
import { InputAdornment } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import { PhoneAndroidOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export const SendCodeToMobileNumber = () => {
  //Instatiate useNavigate
  let navigate = useNavigate();
  //Handler for the submit event
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      mobileNumber: data.get("mobileNumber"),
    });
    navigate("/");
  };
  //handler End
  return (
    <>
      {/* Box for the registration form */}
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
                  <PhoneAndroidOutlined
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
