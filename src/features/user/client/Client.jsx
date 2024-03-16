import ClientCard from "./ClientCard";
import clientCardData from "./clientCardData";
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
        maxWidth: "100%",
      }}
    >
      {cardContainer}
    </Grid>//Grid End

    
  );
};
