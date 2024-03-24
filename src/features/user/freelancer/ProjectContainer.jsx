import FreelancerProjectContainer from "./ProjectCard";
import freelancerProjectData from "./freelancerProjectData";
import { Grid } from "@mui/material";

export default function FreelancerThirdFeature   ()  {
  //Data mapping
  let projectContainer = freelancerProjectData.map((el) => {
    return <FreelancerProjectContainer key={el.id} {...el} />;
  });//Mapping End
  return (
    //Grid 
    <Grid
      container
      spacing={4}
      sx={{
        margin: "auto",
        
        maxWidth: "100%",
      }}
    >
      {projectContainer}
    </Grid>//Grid End
  );
};

