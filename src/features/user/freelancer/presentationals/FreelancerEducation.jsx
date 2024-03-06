
import EducationCard from "../../client/containers/Education";
import freelancerEducationData from "../data/freelancerEducation";

import { Grid } from "@mui/material";

export const EditFreelancerFourthFeature = () => {
  let cardContainer = freelancerEducationData.map((el) => {
    return <EducationCard key={el.id} {...el} />;
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
    </Grid>

    
  );
};
