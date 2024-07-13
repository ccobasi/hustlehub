// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Container, Typography, Box, Button, CircularProgress, MenuItem, Select } from "@mui/material";
import CreateContract from './CreateContract';


const ProjectDetails = () => {
  const { id } = useParams(); 
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedProposal, setSelectedProposal] = useState(null);
  const [showCreateContract, setShowCreateContract] = useState(false);

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
        console.error("Error fetching project details:", error);
        setError("Failed to fetch project details.");
      } finally {
        setLoading(false);
      }
    };

    fetchProjectDetails();
  }, [id]);


 const handleProposalStatusChange = async (proposalId, status) => {
  try {
    const proposalResponse = await axios.get(`http://localhost:8000/proposal/projects/${id}/proposals/${proposalId}/`);
    const proposalData = proposalResponse.data;

    const updatedData = {
      proposed_rate: proposalData.proposed_rate,
      estimated_days: proposalData.estimated_days,
      cover_letter: proposalData.cover_letter,
      status: status
    };

    console.log('Updating proposal with data:', updatedData);

    const response = await axios.put(`http://localhost:8000/proposal/projects/${id}/proposals/${proposalId}/`, updatedData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    console.log('Response from update:', response);

    // Refresh project details after updating proposal status
    const projectResponse = await axios.get(`http://localhost:8000/project/projects/${id}/`);
    setProject(projectResponse.data);
  } catch (error) {
    console.error("Failed to update proposal status:", error);

    // Log the error response for better debugging
    if (error.response) {
      console.log('Error response data:', error.response.data);
    }
  }
};

  const handleCreateContractClick = (proposal) => {
    setSelectedProposal(proposal);
    setShowCreateContract(true);
  };

  if (loading) {
    return (
      <Container component="main" maxWidth="md">
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
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
          Client: {project.client.first_name} {project.client.last_name}
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

        {/* Proposals */}
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
              <Select
                value={proposal.status}
                onChange={(e) => handleProposalStatusChange(proposal.id, e.target.value)}
                sx={{ mt: 1 }}
              >
                <MenuItem value="pending">Pending</MenuItem>
                <MenuItem value="accepted">Accepted</MenuItem>
                <MenuItem value="rejected">Rejected</MenuItem>
              </Select>
              <Typography variant="body2">
                <Button
                onClick={() => handleCreateContractClick(proposal)}
                variant="contained"
                color="primary"
                sx={{ mt: 2, backgroundColor: "#87CEEB", color: "white" }}
              >
                Create Contract
              </Button>
              </Typography>
            </Box>
          ))
        ) : (
          <Typography>No proposals found for this project.</Typography>
        )}
      </Box>
      {showCreateContract && selectedProposal && (
        <CreateContract
          projectId={project.id}
          proposalId={selectedProposal.id}
          freelancerId={selectedProposal.freelancer.id}
          clientId={project.client.id}
        />
      )}
    </Container>
  );
};

export default ProjectDetails;
