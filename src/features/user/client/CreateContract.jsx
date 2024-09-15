// // eslint-disable-next-line no-unused-vars
// import React, { useState } from 'react';
// import {
//   Container,
//   Box,
//   TextField,
//   Button,
//   Typography,
//   CircularProgress
// } from '@mui/material';
// import axios from 'axios';
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";

// const CreateContract = ({ projectId, proposalId, freelancerId, clientId }) => {
//   const [contractAmount, setContractAmount] = useState('');
//   const [startDate, setStartDate] = useState('');
//   const [endDate, setEndDate] = useState('');
//   const [terms, setTerms] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();
//   console.log('Client ID:', clientId);


//   const handleCreateContract = async () => {
//     setLoading(true);
//     setError(null);

//     const contractData = {
//       project: projectId,
//       proposal: proposalId,
//       freelancer: freelancerId,
//       client: clientId,
//       contract_amount: contractAmount,
//       start_date: startDate,
//       end_date: endDate,
//       terms: terms,
//     };

//     try {
//       const response = await axios.post(`http://localhost:8000/contract/contracts/`, contractData, {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });

//       if (response.status === 201) {
//         console.log('Contract created:', response.data);
//         toast.success("Contract created successfully.");
//         navigate('/client');
//       } else {
//         setError('Failed to create contract.');
//       }
//     } catch (error) {
//       console.error('Error creating contract:', error);
//       setError('Failed to create contract.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Container component="main" maxWidth="sm">
//       <Box sx={{ mt: 4, mb: 4 }}>
//         <Typography variant="h4" sx={{ fontWeight: "600", mb: 2 }}>
//           Create Contract
//         </Typography>

//         {error && (
//           <Typography variant="h6" color="error">
//             {error}
//           </Typography>
//         )}

//         <TextField
//           fullWidth
//           label="Contract Amount"
//           type="number"
//           value={contractAmount}
//           onChange={(e) => setContractAmount(e.target.value)}
//           margin="normal"
//           variant="outlined"
//         />

//         <TextField
//           fullWidth
//           label="Start Date"
//           type="date"
//           value={startDate}
//           onChange={(e) => setStartDate(e.target.value)}
//           margin="normal"
//           variant="outlined"
//           InputLabelProps={{
//             shrink: true,
//           }}
//         />

//         <TextField
//           fullWidth
//           label="End Date"
//           type="date"
//           value={endDate}
//           onChange={(e) => setEndDate(e.target.value)}
//           margin="normal"
//           variant="outlined"
//           InputLabelProps={{
//             shrink: true,
//           }}
//         />

//         <TextField
//           fullWidth
//           label="Terms"
//           value={terms}
//           onChange={(e) => setTerms(e.target.value)}
//           margin="normal"
//           variant="outlined"
//           multiline
//           rows={4}
//         />

//         {/* Hidden fields for IDs */}
//         <input type="hidden" name="projectId" value={projectId} />
//         <input type="hidden" name="proposalId" value={proposalId} />
//         <input type="hidden" name="freelancerId" value={freelancerId} />
//         <input type="hidden" name="clientId" value={clientId} />

//         {/* Displaying IDs */}
//         <TextField
//           fullWidth
//           label="Project ID"
//           value={projectId}
//           margin="normal"
//           variant="outlined"
//           InputProps={{
//             readOnly: true,
//           }}
//         />
//         <TextField
//           fullWidth
//           label="Proposal ID"
//           value={proposalId}
//           margin="normal"
//           variant="outlined"
//           InputProps={{
//             readOnly: true,
//           }}
//         />
//         <TextField
//           fullWidth
//           label="Freelancer ID"
//           value={freelancerId}
//           margin="normal"
//           variant="outlined"
//           InputProps={{
//             readOnly: true,
//           }}
//         />
//         <TextField
//           fullWidth
//           label="Client ID"
//           value={clientId}
//           margin="normal"
//           variant="outlined"
//           InputProps={{
//             readOnly: true,
//           }}
//         />

//         <Button
//           fullWidth
//           variant="contained"
//           color="primary"
//           sx={{ mt: 2, backgroundColor: "#87CEEB", color: "white" }}
//           onClick={handleCreateContract}
//           disabled={loading}
//         >
//           {loading ? <CircularProgress size={24} /> : 'Create Contract'}
//         </Button>
//       </Box>
//     </Container>
//   );
// };

// export default CreateContract;
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  CircularProgress
} from '@mui/material';
import axios from 'axios';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const CreateContract = ({ projectId, proposalId, freelancerId, clientId }) => {
  const [contractAmount, setContractAmount] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [terms, setTerms] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  console.log('Client ID:', clientId);

  const checkClientCreditBalance = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/contract/clients/${clientId}/credit-balance`);
      return response.data.credit_balance;
    } catch (error) {
      console.error('Error fetching credit balance:', error);
      toast.error("Error fetching credit balance:", error);
      throw new Error('Failed to check client credit balance.');
    }
  };

  const handleCreateContract = async () => {
    setLoading(true);
    setError(null);

    try {
      // Check client's credit balance before creating the contract
      const creditBalance = await checkClientCreditBalance();

      if (parseFloat(creditBalance) < parseFloat(contractAmount)) {
        setError('Insufficient credit balance to create the contract.');
        toast.error("Insufficient credit balance.");
        setLoading(false);
        return;
      }

      const contractData = {
        project: projectId,
        proposal: proposalId,
        freelancer: freelancerId,
        client: clientId,
        contract_amount: contractAmount,
        start_date: startDate,
        end_date: endDate,
        terms: terms,
      };

      // Create contract after verifying credit balance
      const response = await axios.post(`http://localhost:8000/contract/contracts/`, contractData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 201) {
        console.log('Contract created:', response.data);
        toast.success("Contract created successfully.");
        navigate('/client');
      } else {
        setError('Failed to create contract.');
      }
    } catch (error) {
      console.error('Error creating contract:', error);
      toast.error("Error creating contract.", error);
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
          label="Contract Amount"
          type="number"
          value={contractAmount}
          onChange={(e) => setContractAmount(e.target.value)}
          margin="normal"
          variant="outlined"
        />

        <TextField
          fullWidth
          label="Start Date"
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
        />

        <TextField
          fullWidth
          label="End Date"
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
        />

        <TextField
          fullWidth
          label="Terms"
          value={terms}
          onChange={(e) => setTerms(e.target.value)}
          margin="normal"
          variant="outlined"
          multiline
          rows={4}
        />

        {/* Hidden fields for IDs */}
        <input type="hidden" name="projectId" value={projectId} />
        <input type="hidden" name="proposalId" value={proposalId} />
        <input type="hidden" name="freelancerId" value={freelancerId} />
        <input type="hidden" name="clientId" value={clientId} />

        {/* Displaying IDs */}
        <TextField
          fullWidth
          label="Project ID"
          value={projectId}
          margin="normal"
          variant="outlined"
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          fullWidth
          label="Proposal ID"
          value={proposalId}
          margin="normal"
          variant="outlined"
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          fullWidth
          label="Freelancer ID"
          value={freelancerId}
          margin="normal"
          variant="outlined"
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          fullWidth
          label="Client ID"
          value={clientId}
          margin="normal"
          variant="outlined"
          InputProps={{
            readOnly: true,
          }}
        />

        <Button
          fullWidth
          variant="contained"
          color="primary"
          sx={{ mt: 2, backgroundColor: "#87CEEB", color: "white" }}
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
