import Second from "../containers/Second";
import secondFeatureData from "../data/secondFeature";
import { Grid } from "@mui/material";

export const Notification = () => {
  //Data mapping
  let secondContainer = secondFeatureData.map((el) => {
    return <Second key={el.id} {...el} />;
  });
  //Mapping End
  return (
    // Grid for Notification
    <Grid
      container
      spacing={4}
      sx={{
        margin: "auto",
        alignItems: "end",
        maxWidth: "60%",
      }}
    >
      {secondContainer}
    </Grid>
    // Grid End
  );
};

export default Notification;
