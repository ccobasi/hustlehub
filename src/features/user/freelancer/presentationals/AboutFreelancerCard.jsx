import AboutClientCard from "../../client/containers/AboutClientCard";
import aboutFreelancerCardData from "../data/aboutFreelancerData";
import { Grid } from "@mui/material";

export const EditFreelancerSecondFeature = () => {
  //Data mapping
  let cardContainer = aboutFreelancerCardData.map((el) => {
    return <AboutClientCard key={el.id} {...el} />;
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
