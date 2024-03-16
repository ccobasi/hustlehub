import ProjectsUpdate from "./ProjectsUpdateContainer";
import projectsUpdateData from "./ProjectsUpdateContainer";
import { Grid } from "@mui/material";

export const Updates = () => {
  //Data mapping
  let updatesContainer = projectsUpdateData.map((el) => {
    return <ProjectsUpdate key={el.id} {...el} />;
  });
  //Mapping End
  return (
    // Grid for project update functionality
    <Grid
      container
      spacing={4}
      sx={{
        margin: "auto",
       
        maxWidth: "100%",
      }}
    >
      {updatesContainer}
    </Grid>
    //Grid End
  );
};
