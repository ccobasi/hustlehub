import FreelancerEarning from "../containers/Earnings";
import freelancerEarningData from "../data/earning";

import { Grid } from "@mui/material";

export default function FreelancerFourthFeature() {
  let projectContainer = freelancerEarningData.map((el) => {
    return <FreelancerEarning key={el.id} {...el} />;
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
      {projectContainer}
    </Grid>
  );
}
