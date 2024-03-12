import FreelancerReviewsAndRatings from "../containers/ReviewsAndRatings";
import freelancerReviewAndRatingData from "../data/reviewsAndRatings";


import { Grid } from "@mui/material";

export default function FreelancerFifthFeature() {
  //Data mapping
  let projectContainer = freelancerReviewAndRatingData.map((el) => {
    return <FreelancerReviewsAndRatings key={el.id} {...el} />;
  });//Mapping End
  return (
    //Grid
    <Grid
      container
      spacing={4}
      sx={{
        margin: "auto",
        alignItems: "end",
        maxWidth: "60%",
      }}
    >
      {projectContainer}
    </Grid>//Grid End
  );
}
