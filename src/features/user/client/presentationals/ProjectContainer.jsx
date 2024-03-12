import ProjectContainer from "../containers/ProjectCard";
import clientProjectData from "../data/clientProjectData";
import { Grid } from "@mui/material";

export const ClientSecondFeature  = () => {
  //Data mapping
  let projectContainer = clientProjectData.map((el) => {
    return <ProjectContainer key={el.id} {...el} />;
  });//Mapping End
  return (
    //Grid
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
    </Grid>//Grid End
  );
};

export default ClientSecondFeature ;