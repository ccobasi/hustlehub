import { Typography, Link, Stack, Button } from "@mui/material";
import Notification from "./presentationals/Notification";

const NotificationPage = () => {
  return (
    <>
      <Typography
        variant="h5"
        sx={{
          color: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[600]
              : theme.palette.grey[300],
          pt: "20px",

          ml: "28%",
        }}
      >
        <b>Notification</b>
      </Typography>

      {/*First Notification Feature*/}

      <Notification />
    </>
  );
};

export default NotificationPage;
