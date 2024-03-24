import NotificationCard from "./NotificationCard";
import notificationFeatureData from "./notificationFeatureData";
import { Grid } from "@mui/material";

export const Notification = () => {
  //Data mapping
  let notificationContainer = notificationFeatureData.map((el) => {
    return <NotificationCard key={el.id} {...el} />;
  });
  //Mapping End
  return (
    // Grid for Notification
    <Grid
      container
      spacing={4}
      sx={{
        margin: "auto",

        maxWidth: "100%",
      }}
    >
      {notificationContainer}
    </Grid>
    // Grid End
  );
};

export default Notification;
