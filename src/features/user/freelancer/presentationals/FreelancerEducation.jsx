
import EducationCard from "../../client/containers/Education";
import freelancerEducationData from "../data/freelancerEducation";

import { Grid } from "@mui/material";

export const EditFreelancerFourthFeature = () => {
  //Data mapping
  let cardContainer = freelancerEducationData.map((el) => {
    return <EducationCard key={el.id} {...el} />;
  });//Mapping End
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
      {cardContainer}
    </Grid>//Grid End

    
  );
};
