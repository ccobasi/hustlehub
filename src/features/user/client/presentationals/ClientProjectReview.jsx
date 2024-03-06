import ProjectReviewCard from "../containers/ProjectReviewCard";
import clientProjectReviewData from "../data/clientProjectReview";
import { Button, Grid } from "@mui/material";

export const ClientProjectReviewFirstFeature = () => {
  let cardContainer = clientProjectReviewData.map((el) => {
    return <ProjectReviewCard key={el.id} {...el} />;
  });
  return (
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
    </Grid>
  );
};
