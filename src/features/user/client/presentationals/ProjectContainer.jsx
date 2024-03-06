import ProjectContainer from "../containers/ProjectCard";
import clientProjectData from "../data/clientProjectData";
import { Grid } from "@mui/material";

export const ClientSecondFeature  = () => {
  let projectContainer = clientProjectData.map((el) => {
    return <ProjectContainer key={el.id} {...el} />;
  });
  return (
    <Grid
      container
      spacing={4}
      sx={{
        margin: "auto",
        alignItems: "end",
        maxWidth: "60%",
      }}
    >
      {projectContainer}
    </Grid>
  );
};

export default ClientSecondFeature ;