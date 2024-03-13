import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { IconButton } from "@mui/material";


export default function ImageAvatars() {
  return (
    <>
    
        <Stack direction="row" spacing={4}>
          <IconButton>
            <Avatar alt="Apple Logo" src= "/assets/apple-logo.png" />
          </IconButton>
          <IconButton>
            <Avatar alt="Google Logo" src="/assets/google-logo.png" />
          </IconButton>
          <IconButton>
            <Avatar alt="Facebook Logo" src="/assets/facebook-logo.png" />
          </IconButton>
        </Stack>
      
    </>
  );
}
