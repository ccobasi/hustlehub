// import ProjectContainer from "./ProjectCard";
// import clientProjectData from "./clientProjectData";
// import { Grid } from "@mui/material";

// export const ClientSecondFeature  = () => {
//   //Data mapping
//   let projectContainer = clientProjectData.map((el) => {
//     return <ProjectContainer key={el.id} {...el} />;
//   });//Mapping End
//   return (
//     //Grid
//     <Grid
//       container
//       spacing={4}
//       sx={{
//         margin: "auto",
//         alignItems: "end",
//         maxWidth: "100%",
//       }}
//     >
//       {projectContainer}
//     </Grid>//Grid End
//   );
// };

// export default ClientSecondFeature ;

// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import axios from "axios";
import ProjectContainer from "./ProjectCard";
import { Grid } from "@mui/material";

const ClientSecondFeature = () => {
  const [firstProject, setFirstProject] = useState(null);
  const user = JSON.parse(localStorage.getItem("user"));
  const access = JSON.parse(localStorage.getItem("access"));

  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/project/user/${user.id}/projects/`, {
          headers: {
            Authorization: `Bearer ${access}`,
          },
        });
        if (response.status === 200 && response.data.length > 0) {
          setFirstProject(response.data[0]);
        }
      } catch (error) {
        console.error("Failed to fetch projects", error);
      }
    };

    fetchProjectData();
  }, [user.id, access]);

  return (
    <Grid
      container
      spacing={4}
      sx={{
        margin: "auto",
        alignItems: "end",
        maxWidth: "100%",
      }}
    >
      {firstProject && <ProjectContainer key={firstProject.id} {...firstProject} />}
    </Grid>
  );
};

export default ClientSecondFeature;
