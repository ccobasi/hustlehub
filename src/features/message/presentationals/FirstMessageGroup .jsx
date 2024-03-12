import First from "../containers/First";
import firstFeatureData from "../data/firstFeature";
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
        maxWidth: "60%",
      }}
    >
      {firstContainer}
    </Grid>
    // Grid End
  );
};

export default FirstMessageGroup;
