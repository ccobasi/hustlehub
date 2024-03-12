import ClientAppreciationCard from "../containers/ClientAppreciation";
import clientAppreciationData from "../data/clientAppreciationData";
import { Grid } from "@mui/material";

export const EditClientSeventhFeature = () => {
  //Data mapping
  let cardContainer = clientAppreciationData.map((el) => {
    return <ClientAppreciationCard  key={el.id} {...el} />;
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
    </Grid>
    // Grid End

    
  );
};
