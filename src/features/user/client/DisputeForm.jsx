// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Typography } from '@mui/material';

const DisputeForm = () => {
  const [reason, setReason] = useState('');
  const [contractId, setContractId] = useState('');
  const [paymentId, setPaymentId] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/dispute/submit/', {
        reason,
        contract_id: contractId,
        payment_id: paymentId,
      });
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Failed to submit dispute.');
    }
  };

  return (
    <div>
      <Typography variant="h4">Submit Dispute</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Reason"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          required
          fullWidth
          multiline
          rows={4}
        />
        <TextField
          label="Contract ID (Optional)"
          value={contractId}
          onChange={(e) => setContractId(e.target.value)}
          fullWidth
        />
        <TextField
          label="Payment ID (Optional)"
          value={paymentId}
          onChange={(e) => setPaymentId(e.target.value)}
          fullWidth
        />
        <Button type="submit" variant="contained" color="primary">
          Submit Dispute
        </Button>
        {message && <Typography variant="body2">{message}</Typography>}
      </form>
    </div>
  );
};

export default DisputeForm;
