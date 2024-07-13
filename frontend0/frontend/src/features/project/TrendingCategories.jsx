
import Categories from "../home/Categories";
import trendingCategories from "./trendingCategoriesData";
import { Grid } from "@mui/material";

export const TrendingCategories = () => {
  //Data mapping
  let trendingContainer = trendingCategories.map((el) => {
    return <Categories key={el.id} {...el} />;
  });
  //Mapping End
  return (
    // Grid for trending categories
    <Grid
      container
      spacing={4}
      sx={{
        margin: "auto",
        alignItems: "end",
        maxWidth: "100%",
      }}
    >
      {trendingContainer}
    </Grid>
    //Grid End
  );
};
