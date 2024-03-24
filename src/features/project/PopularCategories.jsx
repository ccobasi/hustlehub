import Categories from "../home/Categories";
import popularCategories from "./popularCategoriesData";
import { Grid } from "@mui/material";

export const PopularCategories = () => {
  // Data mapping
  let popularContainer = popularCategories.map((el) => {
    return <Categories key={el.id} {...el} />;
  });
  //Mapping End
  return (
    // Grid for popular categories functionality
    <Grid
      container
      spacing={4}
      sx={{
        margin: "auto",
        alignItems: "end",
        maxWidth: "100%",
      }}
    >
      {popularContainer}
    </Grid>
    //Grid End
  );
};
