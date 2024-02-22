import First from "../containers/First";
import firstFeatureData from "../data/firstFeature";
import { Grid } from "@mui/material";

export const FirstMessageGroup  = () => {
  let firstContainer = firstFeatureData.map((el) => {
    return <First key={el.id} {...el} />;
  });
  return (
    <Grid
      container
      spacing={4}
      sx={{
        margin: "auto",
        alignItems: "end",
        maxWidth: "60%",
      }}
    >
      {firstContainer}
    </Grid>
  );
};

export default FirstMessageGroup ;