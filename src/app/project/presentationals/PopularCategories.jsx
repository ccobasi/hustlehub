
import Second from "../../home/containers/Second";
import popularCategories from "../data/popularCategories";
import { Grid } from "@mui/material";

export const PopularCategories = () => {
  let popularContainer = popularCategories.map((el) => {
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
      {popularContainer}
    </Grid>
  );
};
