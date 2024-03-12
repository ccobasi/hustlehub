import FreelancerEarning from "../containers/Earnings";
import freelancerEarningData from "../data/earning";

import { Grid } from "@mui/material";

export default function FreelancerFourthFeature() {
  //Data mapping
  let projectContainer = freelancerEarningData.map((el) => {
    return <FreelancerEarning key={el.id} {...el} />;
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
