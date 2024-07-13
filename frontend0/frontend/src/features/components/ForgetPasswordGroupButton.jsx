import React, { useState } from "react";
import { Button, ButtonGroup, Box } from "@mui/material";
import { SendCodeToEmail } from "./SendCodeToEmail";
import { SendCodeToMobileNumber } from "./SendCodeToMobileNumber";

export const ForgetPasswordGroupButton = () => {
  // Initialization of useState Hook
  const [showUI, setShowUI] = useState("");

  return (
    <>
      {/* Group of buttons  */}
      <ButtonGroup
        color="inherit"
        aria-label="outlined primary button group"
        sx={{ mt: "20%" }}
      >
        <Button
          variant="contained"
          onClick={() => {
            setShowUI(<SendCodeToEmail />);
          }}
          sx={{
            borderRadius: "16px",
            color: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.primary.lightModeHeroTitle
                : theme.palette.primary.darkModeHeroTitle,
          }}
        >
          Email
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            setShowUI(<SendCodeToMobileNumber />);
          }}
          sx={{
            borderRadius: "16px",
            color: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.primary.lightModeHeroTitle
                : theme.palette.primary.darkModeHeroTitle,
          }}
        >
          Mobile Number
        </Button>
      </ButtonGroup>
      {/* Buttons End */}
      <Box>{showUI}</Box>
    </>
  );
};
