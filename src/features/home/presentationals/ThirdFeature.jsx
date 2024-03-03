import Third from "../containers/Third";
import thirdFeatureData from "../data/thirdFeature";
import { Grid } from "@mui/material";

export const ThirdFeature = () => {
  let thirdContainer = thirdFeatureData.map((el) => {
    return <Third key={el.id} {...el} />;
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
      {thirdContainer}
    </Grid>
  );
};
