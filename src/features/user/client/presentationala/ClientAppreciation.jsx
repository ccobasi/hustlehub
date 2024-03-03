import ClientAppreciationCard from "../containers/ClientAppreciation";
import clientAppreciationData from "../data/clientAppreciationData";
import { Grid } from "@mui/material";

export const EditClientSeventhFeature = () => {
  let cardContainer = clientAppreciationData.map((el) => {
    return <ClientAppreciationCard  key={el.id} {...el} />;
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
