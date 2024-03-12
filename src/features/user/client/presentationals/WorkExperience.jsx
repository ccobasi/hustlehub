import WorkExperienceCard from "../containers/WorkExperienceCard";
import workExperienceData from "../data/workExperienceData";
import { Grid } from "@mui/material";

export const EditClientThirdFeature = () => {
  //Data mapping
  let cardContainer = workExperienceData.map((el) => {
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
