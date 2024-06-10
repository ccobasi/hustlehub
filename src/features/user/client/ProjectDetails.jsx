// // eslint-disable-next-line no-unused-vars
// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import { Container, Typography, Box, CircularProgress } from "@mui/material";

// const ProjectDetails = () => {
//   const { id } = useParams(); // Get the project ID from the URL
//   const [project, setProject] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchProjectDetails = async () => {
//       try {
//         const response = await axios.get(`http://localhost:8000/project/projects/${id}/`);
//         if (response.status === 200) {
//           setProject(response.data);
//         } else {
//           setError("Failed to fetch project details.");
//         }
//       } catch (error) {
//         setError("Failed to fetch project details.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProjectDetails();
//   }, [id]);

//   if (loading) {
//     return (
//       <Container component="main" maxWidth="md">
//         <Box
//           sx={{
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             height: "100vh",
//           }}
//         >
//           <CircularProgress />
//         </Box>
//       </Container>
//     );
//   }

//   if (error) {
//     return (
//       <Container component="main" maxWidth="md">
//         <Typography variant="h6" color="error">
//           {error}
//         </Typography>
//       </Container>
//     );
//   }

//   return (
//     <Container component="main" maxWidth="md">
//       <Box sx={{ mt: 4, mb: 4 }}>
//         <Typography variant="h4" sx={{ fontWeight: "600", mb: 2 }}>
//           {project.title}
//         </Typography>
//         <Typography variant="h6" sx={{ mb: 1 }}>
//           Client: {project.client_name}
//         </Typography>
//         <Typography variant="body1" sx={{ mb: 2 }}>
//           {project.description}
//         </Typography>
//         <Typography variant="body2" sx={{ mb: 1 }}>
//           <strong>Budget:</strong> #{project.budget}
//         </Typography>
//         <Typography variant="body2" sx={{ mb: 1 }}>
//           <strong>Category:</strong> {project.category}
//         </Typography>
//         <Typography variant="body2" sx={{ mb: 1 }}>
//           <strong>Skills Required:</strong> {Array.isArray(project.skills_required) ? project.skills_required.join(", ") : project.skills_required}
//         </Typography>
//         <Typography variant="body2" sx={{ mb: 1 }}>
//           <strong>Closing Date:</strong> {new Date(project.closing_date).toLocaleDateString()}
//         </Typography>
//         <Typography variant="body2" sx={{ mb: 1 }}>
//           <strong>Status:</strong> {project.is_open ? "Open" : "Closed"}
//         </Typography>
//       </Box>
//     </Container>
//   );
// };

// export default ProjectDetails;
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Container, Typography, Box, CircularProgress } from "@mui/material";

const ProjectDetails = () => {
  const { id } = useParams(); 
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjectDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/project/projects/${id}/`);
        if (response.status === 200) {
          setProject(response.data);
        } else {
          setError("Failed to fetch project details.");
        }
      } catch (error) {
        setError("Failed to fetch project details.");
      } finally {
        setLoading(false);
      }
    };

    fetchProjectDetails();
  }, [id]);

  if (loading) {
    return (
      <Container component="main" maxWidth="md">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <CircularProgress />
        </Box>
      </Container>
    );
  }

  if (error) {
    return (
      <Container component="main" maxWidth="md">
        <Typography variant="h6" color="error">
          {error}
        </Typography>
      </Container>
    );
  }

  return (
    <Container component="main" maxWidth="md">
      <Box sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: "600", mb: 2 }}>
          {project.title}
        </Typography>
        <Typography variant="h6" sx={{ mb: 1 }}>
          Client: {project.client_name}
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          {project.description}
        </Typography>
        <Typography variant="body2" sx={{ mb: 1 }}>
          <strong>Budget:</strong> #{project.budget}
        </Typography>
        <Typography variant="body2" sx={{ mb: 1 }}>
          <strong>Category:</strong> {project.category}
        </Typography>
        <Typography variant="body2" sx={{ mb: 1 }}>
          <strong>Skills Required:</strong> {Array.isArray(project.skills_required) ? project.skills_required.join(", ") : project.skills_required}
        </Typography>
        <Typography variant="body2" sx={{ mb: 1 }}>
          <strong>Closing Date:</strong> {new Date(project.closing_date).toLocaleDateString()}
        </Typography>
        <Typography variant="body2" sx={{ mb: 1 }}>
          <strong>Status:</strong> {project.is_open ? "Open" : "Closed"}
        </Typography>

        <Typography variant="h5" sx={{ mt: 4, mb: 2 }}>
          Proposals
        </Typography>
        {Array.isArray(project.proposals) && project.proposals.length > 0 ? (
          project.proposals.map((proposal) => (
            <Box key={proposal.id} sx={{ mb: 2, p: 2, border: "1px solid #ccc", borderRadius: "8px", backgroundColor: "#f9f9f9" }}>
              <Typography variant="body2">
                <strong>Freelancer:</strong> {proposal.freelancer.first_name} {proposal.freelancer.last_name}
              </Typography>
              <Typography variant="body2">
                <strong>Proposed Rate:</strong> #{proposal.proposed_rate}
              </Typography>
              <Typography variant="body2">
                <strong>Estimated Days:</strong> {proposal.estimated_days}
              </Typography>
              <Typography variant="body2">
                <strong>Cover Letter:</strong> {proposal.cover_letter}
              </Typography>
              <Typography variant="body2">
                <strong>Status:</strong> {proposal.status}
              </Typography>
            </Box>
          ))
        ) : (
          <Typography>No proposals found for this project.</Typography>
        )}
      </Box>
    </Container>
  );
};

export default ProjectDetails;
