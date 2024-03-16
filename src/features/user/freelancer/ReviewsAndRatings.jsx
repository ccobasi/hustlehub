import FreelancerReviewsAndRatings from "./ReviewsAndRatingsContainer";
import freelancerReviewAndRatingData from "./reviewsAndRatingsData";

import { Grid } from "@mui/material";

export default function FreelancerFifthFeature() {
  //Data mapping
  let projectContainer = freelancerReviewAndRatingData.map((el) => {
    return <FreelancerReviewsAndRatings key={el.id} {...el} />;
  }); //Mapping End
  return (
    //Grid
    <Grid
      container
      spacing={4}
      sx={{
        margin: "auto",

        maxWidth: "100%",
      }}
    >
      {projectContainer}
    </Grid> //Grid End
  );
}
