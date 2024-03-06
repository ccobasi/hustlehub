import ClientCard from "../containers/ClientCard";
import clientCardData from "../data/clientCard";
import { Grid } from "@mui/material";

export const ClientFirstFeature = () => {
  let cardContainer = clientCardData.map((el) => {
    return <ClientCard key={el.id} {...el} />;
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
