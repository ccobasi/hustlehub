import ClientResumeCard from "../containers/ClientResumeCard";
import clientResumeData from "../data/clientResumeData";
import { Grid } from "@mui/material";

export const EditClientEighthFeature = () => {
  let cardContainer = clientResumeData.map((el) => {
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
  








