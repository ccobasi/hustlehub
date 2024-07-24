// // eslint-disable-next-line no-unused-vars
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import ProjectContainer from "./ProjectCard";
// import { Grid } from "@mui/material";
// import { Link } from "react-router-dom";

// const ClientSecondFeature = () => {
//   const [projects, setProjects] = useState(null);
//   const user = JSON.parse(localStorage.getItem("user"));
//   const access = JSON.parse(localStorage.getItem("access"));

//   useEffect(() => {
//     const fetchProjectData = async () => {
//       try {
//         const response = await axios.get(`http://localhost:8000/project/user/${user.id}/projects/`, {
//           headers: {
//             Authorization: `Bearer ${access}`,
//           },
//         });
//         if (response.status === 200 && response.data.length > 0) {
//           // setprojects(response.data[0]);
//           const firstFiveProjects = response.data.slice(0, 5);
//           setProjects(firstFiveProjects); 

//         }
//       } catch (error) {
//         console.error("Failed to fetch projects", error);
//       }
//     };

//     fetchProjectData();
//   }, [user.id, access]);

//   return (
//     <Grid
//       container
//       spacing={4}
//       sx={{
//         margin: "auto",
//         alignItems: "end",
//         maxWidth: "100%",
//       }}
//     >
//       {projects && (
//         <Grid item xs={12}>
//           <Link to={`/project-details/${projects.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
//             <ProjectContainer key={projects.id} {...projects} />
//           </Link>
//         </Grid>
//       )}
//       {/* {projects && <ProjectContainer key={projects.id} {...projects} />} */}
//     </Grid>
//   );
// };

// export default ClientSecondFeature;
import React, { useState, useEffect } from "react";
import axios from "axios";
import ProjectContainer from "./ProjectCard";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

const ClientSecondFeature = () => {
  const [projects, setProjects] = useState([]);
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
          const firstFiveProjects = response.data.slice(0, 5);
          setProjects(firstFiveProjects);
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
      {projects.map((project) => (
        <Grid item xs={12} key={project.id}>
          <Link to={`/project-details/${project.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <ProjectContainer {...project} />
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default ClientSecondFeature;
