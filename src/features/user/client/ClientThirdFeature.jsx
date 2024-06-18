// ClientThirdFeature.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Typography, Box } from "@mui/material";

const ClientThirdFeature = ({ userId }) => {
  const [contracts, setContracts] = useState([]);
  const [error, setError] = useState(null);
  const user = JSON.parse(localStorage.getItem("user"));
  userId = user ? user.id : null;

  useEffect(() => {
    const fetchContracts = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/contract/users/${userId}/contracts/`);
        setContracts(response.data);
      } catch (error) {
        console.error("Error fetching contracts: ", error);
        setError(error);
      }
    };

    if (userId) {
      fetchContracts();
    }
  }, [userId]);

  return (
    <Box>
      <Typography variant="h6" sx={{ fontFamily: "Poppins", fontWeight: "600", fontSize: "16px", lineHeight: "20.8px", textAlign: "start" }}>
        My Contracts
      </Typography>
      {error && <Typography color="error">Error loading contracts</Typography>}
      <ul>
        {contracts.map(contract => (
          <li key={contract.id}>{contract.contract_name}</li>
        ))}
      </ul>
    </Box>
  );
};

export default ClientThirdFeature;
