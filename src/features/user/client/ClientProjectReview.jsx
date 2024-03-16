import ProjectReviewCard from "./ProjectReviewCard";
import clientProjectReviewData from "./clientProjectReviewData";
import { Button, Grid } from "@mui/material";

export const ClientProjectReviewFirstFeature = () => {
  //Data mapping
  let cardContainer = clientProjectReviewData.map((el) => {
    return <ProjectReviewCard key={el.id} {...el} />;
  });//Mapping End
  return (
    //Grid
    <Grid
      container
      spacing={4}
      sx={{
        margin: "auto",
        alignItems: "center",
        maxWidth: "60%",
      }}
    >
      {cardContainer}

      <Button variant="contained" sx={{ ml: "85%", mt:"5%", }}>
        Finish
      </Button>
    </Grid>//Grid End
  );
};
