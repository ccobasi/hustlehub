import AboutClientCard from "../containers/AboutClientCard";
import aboutClientCardData from "../data/aboutClientData";
import { Grid } from "@mui/material";

export const EditClientSecondFeature = () => {
  // Data mapping
  let cardContainer = aboutClientCardData.map((el) => {
    return <AboutClientCard key={el.id} {...el} />;
  });//mapping End
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
    </Grid>
  // Grid End
    
  );
};
