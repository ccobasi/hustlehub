// // // eslint-disable-next-line no-unused-vars
// // import React, { useState, useEffect } from "react";
// // import axios from "axios";
// // import { Grid, Link } from "@mui/material";
// // import ProjectContainer from "./ProjectCard";

// // export default function FreelancerThirdFeature   ()  {
// //   const [firstProject, setFirstProject] = useState(null);
// //   const user = JSON.parse(localStorage.getItem("user"));
// //   const access = JSON.parse(localStorage.getItem("access"));

// //   useEffect(() => {
// //     const fetchProjectData = async () => {
// //       try {
// //         const response = await axios.get(`http://localhost:5173/project/user/${user.id}/projects/`, {
// //           headers: {
// //             Authorization: `Bearer ${access}`,
// //           },
// //         });
// //         if (response.status === 200 && response.data.length > 0) {
// //           setFirstProject(response.data[0]);
// //         }
// //       } catch (error) {
// //         console.error("Failed to fetch projects", error);
// //       }
// //     };

// //     fetchProjectData();
// //   }, [user.id, access]);

// //   return (
    
// //     <Grid
// //       container
// //       spacing={4}
// //       sx={{
// //         margin: "auto",
        
// //         maxWidth: "100%",
// //       }}
// //     >
// //       {firstProject && (
// //         <Grid item xs={12}>
// //           <Link to={`/project-details/${firstProject.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
// //             <ProjectContainer key={firstProject.id} {...firstProject} />
// //           </Link>
// //         </Grid>
// //       )}
// //     </Grid>//Grid End
// //   );
// // }
// // eslint-disable-next-line no-unused-vars
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Grid, Link } from "@mui/material";
// import ProjectContainer from "./ProjectCard";

// export default function FreelancerThirdFeature() {
//   const [projects, setProjects] = useState([]);
//   const user = JSON.parse(localStorage.getItem("user"));
//   const access = JSON.parse(localStorage.getItem("access"));

//   useEffect(() => {
//     const fetchProjectData = async () => {
//       try {
//         const response = await axios.get(`http://localhost:5173/project/user/${user.id}/projects/`, {
//           headers: {
//             Authorization: `Bearer ${access}`,
//           },
//         });
//         if (response.status === 200 && response.data.length > 0) {
//           // Sort projects by date (assuming the response contains a `date` field) and get the most recent 5 projects
//           const sortedProjects = response.data.sort((a, b) => new Date(b.date) - new Date(a.date));
//           setProjects(sortedProjects.slice(0, 5));
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
//         maxWidth: "100%",
//       }}
//     >
//       {projects.length > 0 ? (
//         projects.map((project) => (
//           <Grid item xs={12} sm={6} md={4} key={project.id}>
//             <Link to={`/project-details/${project.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
//               <ProjectContainer {...project} />
//             </Link>
//           </Grid>
//         ))
//       ) : (
//         <Grid item xs={12}>
//           <p>No projects available</p>
//         </Grid>
//       )}
//     </Grid>
//   );
// }

// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid, Link } from "@mui/material";
import ProjectContainer from "./ProjectCard";

export default function FreelancerThirdFeature() {
  const [projects, setProjects] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));
  const access = JSON.parse(localStorage.getItem("access"));

  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        const response = await axios.get(`http://localhost:5173/project/user/${user.id}/projects/`, {
          headers: {
            Authorization: `Bearer ${access}`,
          },
        });

        console.log("API Response Data:", response.data);

        if (response.status === 200) {
          
          const projectData = Array.isArray(response.data) ? response.data : response.data.projects;

          
          if (Array.isArray(projectData) && projectData.length > 0) {
            
            const sortedProjects = projectData.sort((a, b) => new Date(b.date) - new Date(a.date));
            setProjects(sortedProjects.slice(0, 5));
          } else {
           
            console.warn("Project data is not an array or is empty.");
            setProjects([]);
          }
        } else {
          
          console.error(`Failed to fetch projects: ${response.status}`);
          setProjects([]);
        }
      } catch (error) {
        console.error("Failed to fetch projects", error);
        setProjects([]);
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
        maxWidth: "100%",
      }}
    >
      {projects.length > 0 ? (
        projects.map((project) => (
          <Grid item xs={12} sm={6} md={4} key={project.id}>
            <Link to={`/project-details/${project.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <ProjectContainer {...project} />
            </Link>
          </Grid>
        ))
      ) : (
        <Grid item xs={12}>
          <p>No projects available</p>
        </Grid>
      )}
    </Grid>
  );
}
