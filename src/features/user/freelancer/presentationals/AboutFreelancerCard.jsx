import AboutClientCard from "../../client/containers/AboutClientCard";
import aboutFreelancerCardData from "../data/aboutFreelancerData";
import { Grid } from "@mui/material";

export const EditFreelancerSecondFeature = () => {
  let cardContainer = aboutFreelancerCardData.map((el) => {
    return <AboutClientCard key={el.id} {...el} />;
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
