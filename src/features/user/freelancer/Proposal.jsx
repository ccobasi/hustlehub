// eslint-disable-next-line no-unused-vars
import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { InputAdornment } from "@mui/material";

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
// import { useState } from "react";

import { useNavigate } from "react-router-dom";

import {
  
  ManageAccountsOutlined,
 
} from "@mui/icons-material";

export default function Proposal() {

  

  //Initialization of useNavigate hook
  let navigate = useNavigate();
  //Handler for the submit event
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
    navigate("/freelancer-search");
  };
  //Submit Handle End

  return (
    // Container for Sign Up functionality
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
            mt: "10%",
            color: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.primary.lightModeHeroTitle
                : theme.palette.primary.darkModeHeroTitle,
            fontFamily: "Poppins",
            fontWeight: "600",
            fontSize: "24px",
            lineHeight: "33.6px",
            letterSpacing: "-1.5%",
          }}
        >
          Proposal
        </Typography>
       
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          {/**Registration Form Control */}
          <FormControl fullWidth>
            {/**Prject Name Textfield */}
            <TextField
              required
              fullWidth
              id="projectName"
              label="Name of the Project"
              name="projectName"
              placeholder="Enter the name of the project."
              autoComplete="project-name"
              
              sx={{
                color: "#AFB0B6",

                pb: "5%",
                mb: "2%",
                mt: "25%",
              }}
            />
            {/**Freelancer Name Textfield */}
            <TextField
              required
              fullWidth
              id="freelancerName"
              label="Name"
              name="freelancerName"
              placeholder="Enter your name"
              autoComplete="name"
              
              sx={{
                color: "#AFB0B6",

                pb: "5%",
                mb: "2%",
              }}
            />
            {/**Proposed Rate Textfield */}
            <TextField
              required
              fullWidth
              
              id="proposedRate"
              type="number"
              label="Proposed Rate"
              name="proposedRate"
              autoComplete="proposedRate"
              placeholder="Enter proposed rate"

              sx={{
                color: "#AFB0B6",

                pb: "5%",
                mb: "2%",
              }}
            />
             {/**Estimated Days Textfield */}
             <TextField
              required
              fullWidth
              
              id="estimatedNumOfDays"
              type="number"
              label="Estimated Number of Days"
              name="estimatedNumOfDays"
              autoComplete="estimatedNumOfDays"
              placeholder="Enter estimated number of days"

              sx={{
                color: "#AFB0B6",

                pb: "5%",
                mb: "2%",
              }}
            />
                   {/**Cover letter Textfield */}
                   <TextField
              required
              fullWidth
              multiline
              rows={7}
              id="coverLetter"
              type="text"
              label="Cover Letter"
              name="coverLetter"
              autoComplete="coverLetter"
              placeholder="Enter cover letter"

              sx={{
                color: "#AFB0B6",

                pb: "5%",
                mb: "2%",
              }}
            />
            
            {/**Status Textfield */}
            <TextField
              required
              fullWidth
              name="status"
              label="Choose Status"
              id="status"
              select
              InputProps={{
                startAdornment: (
                  <InputAdornment>
                    <ManageAccountsOutlined
                      sx={{
                        ml: "-25%",
                        color: "#AFB0B6",
                      }}
                    />
                  </InputAdornment>
                ),
              }}
              sx={{
                color: "#AFB0B6",

                pb: "5%",
                mb: "2%",
              }}
            >
               <MenuItem value="pending">Pending</MenuItem>
              <MenuItem value="accepted">Accepted</MenuItem>
              <MenuItem value="rejected">Rejected</MenuItem>
            </TextField>
          
          </FormControl>

          {/**Submit button*/}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 5,
              mb: 7,
              backgroundColor: "#87CEEB",
              "&:hover": {
                backgroundColor: (theme) =>
                  theme.palette.mode === "light"
                    ? theme.palette.grey[400]
                    : theme.palette.grey[500],
                color: (theme) =>
                  theme.palette.mode === "light"
                    ? theme.palette.primary.lightModeHeroTitle
                    : theme.palette.primary.darkModeHeroTitle,

                fontFamily: "Poppins",
                fontWeight: "500",
                fontSize: "16px",
                lineHeight: "24px",
                letterSpacing: "-1%",
              },
            }}
          >
            Submit
          </Button>
         

         
        </Box>
      </Box>
    </Container>
    //Container End
  );
}
