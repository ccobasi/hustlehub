// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Container, Typography, Box, CircularProgress } from "@mui/material";

const ProjectDetails = () => {
  const { id } = useParams(); // Get the project ID from the URL
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
      <Box sx={{ mt: 14, mb: 4 }}>
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
      </Box>
    </Container>
  );
};

export default ProjectDetails;
