// // // eslint-disable-next-line no-unused-vars
// // import React, { useState, useEffect } from "react";
// // import axios from "axios";
// // import ProjectContainer from "./ProjectCard";
// // import { Grid } from "@mui/material";
// // import { Link } from "react-router-dom";

// // const ClientSecondFeature = () => {
// //   const [firstProject, setFirstProject] = useState(null);
// //   const user = JSON.parse(localStorage.getItem("user"));
// //   const access = JSON.parse(localStorage.getItem("access"));

// //   useEffect(() => {
// //     const fetchProjectData = async () => {
// //       try {
// //         const response = await axios.get(`http://localhost:8000/project/user/${user.id}/projects/`, {
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
// //         alignItems: "end",
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
// //       {/* {firstProject && <ProjectContainer key={firstProject.id} {...firstProject} />} */}
// //     </Grid>
// //   );
// // };

// // export default ClientSecondFeature;

// // eslint-disable-next-line no-unused-vars
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import ProjectContainer from "./ProjectCard";
// import { Grid } from "@mui/material";
// import { Link } from "react-router-dom";

// const ClientSecondFeature = () => {
//   const [projects, setProjects] = useState([]);
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
//           // Get the last five projects
//           const lastFiveProjects = response.data.slice(-5);
//           setProjects(lastFiveProjects);
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
//       {projects.map((project) => (
//         <Grid item xs={12} key={project.id}>
//           <Link to={`/project-details/${project.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
//             <ProjectContainer {...project} />
//           </Link>
//         </Grid>
//       ))}
//     </Grid>
//   );
// };

// export default ClientSecondFeature;
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Link } from "@mui/material";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const ClientSecondFeature = () => {
  const [projects, setProjects] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));
  const access = JSON.parse(localStorage.getItem("access"));
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/project/user/${user.id}/projects/`, {
          headers: {
            Authorization: `Bearer ${access}`,
          },
        });

        if (response.status === 200 && response.data.length > 0) {
          // Get the last five projects
          const lastFiveProjects = response.data.slice(-5);
          setProjects(lastFiveProjects);
        }
      } catch (error) {
        console.error("Failed to fetch projects", error);
      }
    };

    fetchProjectData();
  }, [user.id, access]);

  // Function to handle navigation programmatically
  const handleProjectClick = (projectId) => {
    navigate(`/project-details/${projectId}`);
  };

  return (
    <TableContainer component={Paper} sx={{ margin: "auto", maxWidth: "100%" }}>
      <Table sx={{ minWidth: 650 }} aria-label="projects table">
        <TableHead>
          <TableRow sx={{ backgroundColor: "#87CEEB", color: "white" }}>
            <TableCell align="center">
              <Typography variant="h6" sx={{ color: "white" }}>Title</Typography>
            </TableCell>
            <TableCell align="center">
              <Typography variant="h6" sx={{ color: "white" }}>Description</Typography>
            </TableCell>
            <TableCell align="center">
              <Typography variant="h6" sx={{ color: "white" }}>Closing Date</Typography>
            </TableCell>
            <TableCell align="center">
              <Typography variant="h6" sx={{ color: "white" }}>Link</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {projects.map((project) => (
            <TableRow key={project.id} onClick={() => handleProjectClick(project.id)} sx={{ cursor: 'pointer' }}>
              <TableCell component="th" scope="row" align="center">
                <Typography variant="body1">{project.title}</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="body1" sx={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                  {project.description}
                </Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="body1">{project.closing_date}</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography
                  variant="body1"
                  sx={{
                    color: "#87CEEB",
                    fontFamily: "Poppins",
                    fontWeight: "500",
                    fontSize: "12px",
                    lineHeight: "19.2px",
                    letterSpacing: "-1%",
                    textDecoration: "underline",
                    cursor: 'pointer'
                  }}
                  onClick={() => handleProjectClick(project.id)}
                >
                  View Project
                </Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ClientSecondFeature;
