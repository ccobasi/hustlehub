import FreelancerProjectContainer from "../containers/ProjectCard";
import freelancerProjectData from "../data/freelancerProjectData";
import { Grid } from "@mui/material";

export default function FreelancerThirdFeature   ()  {
  let projectContainer = freelancerProjectData.map((el) => {
    return <FreelancerProjectContainer key={el.id} {...el} />;
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

