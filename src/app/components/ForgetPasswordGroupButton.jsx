import React, { useState } from "react";
import { Button, ButtonGroup, Box } from "@mui/material";
import { SendCodeToEmail } from "./SendCodeToEmail";
import { SendCodeToMobileNumber } from "./SendCodeToMobileNumber";



export const ForgetPasswordGroupButton = ()=>{
    const [showUI, setShowUI] = useState("");

    return(<>
     <ButtonGroup color="inherit"  aria-label="outlined primary button group" sx={{mt:"20%"}}>
          <Button
          variant="contained"
            onClick={() => {
              setShowUI(
               <SendCodeToEmail/>
              );
            }}
          >
            Email
          </Button>
          <Button
           variant="contained"
            onClick={() => {
              setShowUI(<SendCodeToMobileNumber/>);
            }}
          >
            Mobile Number
          </Button>
        
        </ButtonGroup>
        <Box>{showUI}</Box>
    
    </>);
}