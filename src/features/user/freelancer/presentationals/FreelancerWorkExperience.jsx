import WorkExperienceCard from "../../client/containers/WorkExperienceCard";
import freelancerWorkExperienceData from "../data/freelancerWorkExperienceData";
import { Grid } from "@mui/material";

export const EditFreelancerThirdFeature = () => {
  let cardContainer = freelancerWorkExperienceData.map((el) => {
    return <WorkExperienceCard key={el.id} {...el} />;
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
