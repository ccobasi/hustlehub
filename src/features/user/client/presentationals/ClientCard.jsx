import ClientCard from "../containers/ClientCard";
import clientCardData from "../data/clientCard";
import { Grid } from "@mui/material";

export const ClientFirstFeature = () => {
  // Data mapping
  let cardContainer = clientCardData.map((el) => {
    return <ClientCard key={el.id} {...el} />;
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
