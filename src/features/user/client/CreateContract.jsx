// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  CircularProgress,
  MenuItem,
  Select
} from '@mui/material';

const CreateContract = () => {
  const { id } = useParams(); // Get project ID from URL
  const [freelancerId, setFreelancerId] = useState('');
  const [rate, setRate] = useState('');
  const [duration, setDuration] = useState('');
  const [details, setDetails] = useState('');
  const [status, setStatus] = useState('pending');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleCreateContract = async () => {
    setLoading(true);
    setError(null);

    const contractData = {
      project: id,
      freelancer: freelancerId,
      rate,
      duration,
      details,
      status,
    };

    try {
      const response = await axios.post(`http://localhost:8000/contracts/`, contractData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 201) {
        // Contract created successfully
        console.log('Contract created:', response.data);
        // Redirect or show success message
      } else {
        setError('Failed to create contract.');
      }
    } catch (error) {
      console.error('Error creating contract:', error);
      setError('Failed to create contract.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container component="main" maxWidth="sm">
      <Box sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: "600", mb: 2 }}>
          Create Contract
        </Typography>

        {error && (
          <Typography variant="h6" color="error">
            {error}
          </Typography>
        )}

        <TextField
          fullWidth
          label="Freelancer ID"
          value={freelancerId}
          onChange={(e) => setFreelancerId(e.target.value)}
          margin="normal"
          variant="outlined"
        />

        <TextField
          fullWidth
          label="Rate"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
          margin="normal"
          variant="outlined"
        />

        <TextField
          fullWidth
          label="Duration (days)"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          margin="normal"
          variant="outlined"
        />

        <TextField
          fullWidth
          label="Details"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          margin="normal"
          variant="outlined"
          multiline
          rows={4}
        />

        <Select
          fullWidth
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          displayEmpty
          margin="normal"
        >
          <MenuItem value="pending">Pending</MenuItem>
          <MenuItem value="active">Active</MenuItem>
          <MenuItem value="completed">Completed</MenuItem>
        </Select>

        <Button
          fullWidth
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
          onClick={handleCreateContract}
          disabled={loading}
        >
          {loading ? <CircularProgress size={24} /> : 'Create Contract'}
        </Button>
      </Box>
    </Container>
  );
};

export default CreateContract;
