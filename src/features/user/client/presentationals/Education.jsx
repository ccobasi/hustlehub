import EducationCard from "../containers/Education";
import educationData from "../data/education";
import { Grid } from "@mui/material";

export const EditClientFourthFeature = () => {
  // Data mapping
  let cardContainer = educationData.map((el) => {
    return <EducationCard key={el.id} {...el} />;
  });//Mapping End
  return (
    // Grid 
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
