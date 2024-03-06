
import FreelancerLanguageCard from "../containers/FreelancerLanguage";

import { Grid } from "@mui/material";

export const EditFreelancerSixthFeature = () => {
 
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
      {<FreelancerLanguageCard/>}
    </Grid>

    
  );
};
