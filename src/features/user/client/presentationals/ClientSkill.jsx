
import ClientSkillCard from "../containers/ClientSkillCard";

import { Grid } from "@mui/material";

export const EditClientFifthFeature = () => {
 
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
      {<ClientSkillCard/>}
    </Grid>

    
  );
};
