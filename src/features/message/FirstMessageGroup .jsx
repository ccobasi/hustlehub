import First from "./First";
import firstFeatureData from "./firstFeature";
import { Grid } from "@mui/material";

export const FirstMessageGroup = () => {
  // Data mapping
  let firstContainer = firstFeatureData.map((el) => {
    return <First key={el.id} {...el} />;
  });
  //Mapping End
  return (
    // Grid
    <Grid
      container
      spacing={4}
      sx={{
        margin: "auto",
        alignItems: "end",
        maxWidth: "100%",
      }}
    >
      {firstContainer}
    </Grid>
    // Grid End
  );
};

export default FirstMessageGroup;
