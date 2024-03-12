import FreelancerAnalyticsContainer from "../containers/FreelancerAnalytics";
import freelancerAnalyticsData from "../data/freelancerAnalyticsData";
import { Grid } from "@mui/material";

export default function FreelancerSecondFeature   ()  {
  //Data mapping
  let projectContainer = freelancerAnalyticsData.map((el) => {
    return <FreelancerAnalyticsContainer key={el.id} {...el} />;
  });//Mapping End
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
      {projectContainer}
    </Grid>//Grid End
  );
};

