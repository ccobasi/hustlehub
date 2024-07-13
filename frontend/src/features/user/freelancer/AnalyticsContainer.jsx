import FreelancerAnalyticsContainer from "./FreelancerAnalytics";
import freelancerAnalyticsData from "./freelancerAnalyticsData";
import { Grid } from "@mui/material";

export default function FreelancerSecondFeature() {
  //Data mapping
  let projectContainer = freelancerAnalyticsData.map((el) => {
    return <FreelancerAnalyticsContainer key={el.id} {...el} />;
  }); //Mapping End
  return (
    // Grid
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
