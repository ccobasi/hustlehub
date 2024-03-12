
import ClientLanguageCard from "../containers/LanguageCard";

import { Grid } from "@mui/material";

export const EditClientSixthFeature = () => {
 
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
      {<ClientLanguageCard/>}
    </Grid>//Grid End

    
  );
};
