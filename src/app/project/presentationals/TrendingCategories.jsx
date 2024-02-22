import  Second from "../../home/containers/Second";
import trendingCategories from "../data/trendingCategories";
import { Grid } from "@mui/material";

export const TrendingCategories = () => {
  let trendingContainer = trendingCategories.map((el) => {
    return <Second key={el.id} {...el} />;
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
      {trendingContainer}
    </Grid>
  );
};
