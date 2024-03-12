import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { IconButton } from "@mui/material";

// Data for the image avatars
const imageAvatarData = [
  {
    id: 0,
    alt: "Apple Logo",
    src: "/assets/apple-logo.png",
  },
  { id: 1, alt: "Google Logo", src: "/assets/google-logo.png" },
  {
    id: 2,
    alt: "Facebook Logo",
    src: "/assets/facebook-logo.png",
  },
];
//Data End

export default function ImageAvatars() {
  //Get function for the avatar images
  const getList = () => (
    <Stack direction="row" spacing={4}>
      {imageAvatarData.map((item, index) => (
        <IconButton key={index}>
          <Avatar alt={item.alt} src={item.src} />
        </IconButton>
      ))}
    </Stack>
  );
  //Function End

  return <>{getList()}</>;
}
