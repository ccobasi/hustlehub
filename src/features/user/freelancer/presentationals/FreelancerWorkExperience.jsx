import WorkExperienceCard from "../../client/containers/WorkExperienceCard";
import freelancerWorkExperienceData from "../data/freelancerWorkExperienceData";
import { Grid } from "@mui/material";

export const EditFreelancerThirdFeature = () => {
  //Data mapping
  let cardContainer = freelancerWorkExperienceData.map((el) => {
    return <WorkExperienceCard key={el.id} {...el} />;
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
