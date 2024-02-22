import ProjectsUpdate from "../containers/ProjectsUpdate";
import projectsUpdate from "../data/projectsUpdate";
import { Grid } from "@mui/material";

export const Updates = () => {
  let updatesContainer = projectsUpdate.map((el) => {
    return <ProjectsUpdate key={el.id} {...el} />;
  });
  return (
    <Grid
      container
      spacing={4}
      sx={{
        margin: "auto",
        alignItems: "end",
        maxWidth: "70%",
      }}
    >
      {updatesContainer}
    </Grid>
  );
};
