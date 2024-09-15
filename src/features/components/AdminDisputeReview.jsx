// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Typography, TextField } from '@mui/material';

const AdminDisputeReview = ({ disputeId }) => {
  const [dispute, setDispute] = useState(null);
  const [adminNotes, setAdminNotes] = useState('');
  const [status, setStatus] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchDispute = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/disputes/${disputeId}/`);
        setDispute(response.data);
      } catch (error) {
        setMessage('Failed to fetch dispute.');
      }
    };

    fetchDispute();
  }, [disputeId]);

  const handleUpdate = async () => {
    try {
      await axios.post(`http://localhost:8000/dispute/update/${disputeId}/`, {
        status,
        admin_notes: adminNotes,
      });
      setMessage('Dispute updated successfully.');
    } catch (error) {
      setMessage('Failed to update dispute.');
    }
  };

  return dispute ? (
    <div>
      <Typography variant="h5">Dispute Review</Typography>
      <Typography variant="body1">{dispute.reason}</Typography>
      <TextField
        label="Admin Notes"
        value={adminNotes}
        onChange={(e) => setAdminNotes(e.target.value)}
        fullWidth
        multiline
        rows={4}
      />
      <TextField
        label="Status"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        fullWidth
      />
      <Button onClick={handleUpdate} variant="contained" color="primary">
        Update Dispute
      </Button>
      {message && <Typography variant="body2">{message}</Typography>}
    </div>
  ) : (
    <Typography variant="body1">Loading dispute...</Typography>
  );
};

export default AdminDisputeReview;
