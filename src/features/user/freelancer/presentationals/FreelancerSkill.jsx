import FreelancerSkillCard from "../containers/FreelancerSkillCard";

import { Grid } from "@mui/material";

export const EditFreelancerFifthFeature = () => {
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
      {<FreelancerSkillCard/>}
    </Grid>//Grid End
  );
};
