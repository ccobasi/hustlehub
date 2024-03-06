import ClientResumeCard from "../../client/containers/ClientResumeCard";
import freelancerResumeData from "../data/freelancerResumeData";
import { Grid } from "@mui/material";

export const EditFreelancerEighthFeature = () => {
  let cardContainer = freelancerResumeData.map((el) => {
    return <ClientResumeCard   key={el.id} {...el} />;
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
  








