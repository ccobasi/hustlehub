import ClientAppreciationCard from "../../client/containers/ClientAppreciation";
import freelancerAppreciationData from "../data/freelancerAppreciationData";
import { Grid } from "@mui/material";

export const EditFreelancerSeventhFeature = () => {
  //Data mapping
  let cardContainer = freelancerAppreciationData.map((el) => {
    return <ClientAppreciationCard key={el.id} {...el} />;
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
    </Grid>//Grid
  );
};
