import FreelancerCard from "../containers/FreelancerCard";
import freelancerCardData from "../data/freelancerCardData";

import { Grid } from "@mui/material";

export const FreelancerFirstFeature = () => {
  //Data mapping
  let cardContainer = freelancerCardData.map((el) => {
    return <FreelancerCard key={el.id} {...el} />;
  });//mapping End
  return (
    //Grid 
    <Grid
      container
      spacing={4}
      sx={{
        margin: "auto",
        alignItems: "center",
        maxWidth: "60%",
        mt:"5%"
      }}
    >
      {cardContainer}
    </Grid>//Grid End
  );
};
