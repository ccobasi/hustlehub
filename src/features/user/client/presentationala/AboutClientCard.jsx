import AboutClientCard from "../containers/AboutClientCard";
import aboutClientCardData from "../data/aboutClientData";
import { Grid } from "@mui/material";

export const EditClientSecondFeature = () => {
  let cardContainer = aboutClientCardData.map((el) => {
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
