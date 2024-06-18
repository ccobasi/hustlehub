// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Container, Box, CircularProgress, Typography, Select, MenuItem } from '@mui/material';

const ContractDetails = () => {
  const { id } = useParams();
  const [contract, setContract] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContractDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/contract/contracts/${id}/`);
        if (response.status === 200) {
          setContract(response.data);
        } else {
          setError("Failed to fetch contract details.");
        }
      } catch (error) {
        console.error("Error fetching contract details:", error);
        setError("Failed to fetch contract details.");
      } finally {
        setLoading(false);
      }
    };

    fetchContractDetails();
  }, [id]);

  const handleContractStatusChange = async (status) => {
  try {
    const contractResponse = await axios.get(`http://localhost:8000/contract/contracts/${id}/`);
    const currentContractData = contractResponse.data;

    const updatedData = {
      ...currentContractData,
      status: status
    };

    const response = await axios.put(`http://localhost:8000/contract/contracts/${id}/`, updatedData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    setContract(response.data);
  } catch (error) {
    console.error("Failed to update contract status:", error);

    if (error.response) {
      console.log('Error response data:', error.response.data);
    }
  }
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
        {contract && (
          <>
            <Typography variant="h4" sx={{ fontWeight: "600", mb: 2 }}>
              Contract for {contract.project_title}
            </Typography>
            <Typography variant="h6" sx={{ mb: 1 }}>
              Client: {contract.client_name}
            </Typography>
            <Typography variant="h6" sx={{ mb: 1 }}>
              Freelancer: {contract.freelancer_name}
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              {contract.terms}
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              <strong>Contract Amount:</strong> {contract.contract_amount}
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              <strong>Start Date:</strong> {contract.start_date}
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              <strong>End Date:</strong> {contract.end_date}
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              <strong>Status:</strong> {contract.status}
            </Typography>
            <Select
              value={contract.status}
              onChange={(e) => handleContractStatusChange(e.target.value)}
              sx={{ mt: 1 }}
            >
              <MenuItem value="pending">Pending</MenuItem>
              <MenuItem value="active">Active</MenuItem>
              <MenuItem value="completed">Completed</MenuItem>
            </Select>
          </>
        )}
      </Box>
    </Container>
  );
};

export default ContractDetails;

