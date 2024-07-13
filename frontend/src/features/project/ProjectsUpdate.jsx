// import ProjectsUpdate from "./ProjectsUpdateContainer";
// import projectsUpdateData from "./ProjectsUpdateContainer";
// import { Grid } from "@mui/material";

// export const Updates = () => {
//   //Data mapping
//   let updatesContainer = projectsUpdateData.map((el) => {
//     return <ProjectsUpdate key={el.id} {...el} />;
//   });
//   //Mapping End
//   return (
//     // Grid for project update functionality
//     <Grid
//       container
//       spacing={4}
//       sx={{
//         margin: "auto",
       
//         maxWidth: "100%",
//       }}
//     >
//       {updatesContainer}
//     </Grid>
//     //Grid End
//   );
// };
import ProjectsUpdate from "./ProjectsUpdateContainer";
import projectUpdates from "./ProjectsUpdateContainer"; 
import { Grid } from "@mui/material";

export const Updates = () => {
  
  if (!Array.isArray(projectUpdates)) {
    return <p>No data available to update.</p>;
  }

  const updatesContainer = projectUpdates.map((update) => (
    <ProjectsUpdate
      key={update.id}
      projectId={update.projectId} 
      title={update.title}
      
    />
  ));

  
  return (
    <Grid container spacing={4} sx={{ margin: "auto", maxWidth: "100%" }}>
      {updatesContainer}
    </Grid>
  );
};
