import Fourth from "../containers/Fourth";
import fourthFeatureData from "../data/fourthFeature";
import { Grid } from "@mui/material";

export const FourthFeature = () => {
  let fourthContainer = fourthFeatureData.map((el) => {
    return <Fourth key={el.id} {...el} />;
  });
  return (
    <Grid
      container
      spacing={4}
      sx={{
        margin: "auto",
        alignItems: "end",
        maxWidth: "70%",
      }}
    >
      {fourthContainer}
    </Grid>

    
  );
};
