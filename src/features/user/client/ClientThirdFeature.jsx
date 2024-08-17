// ClientThirdFeature.jsx
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Typography, Box, List, ListItem, ListItemText } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ClientThirdFeature = ({ userId }) => {
  const [contracts, setContracts] = useState([]);
  const [error, setError] = useState(null);
  const user = JSON.parse(localStorage.getItem("user"));
  userId = user ? user.id : null;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchContracts = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/contract/users/${userId}/contracts/`);
        console.log(response.data);  
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

  const handleContractClick = (id) => {
    navigate(`/contract/${id}`);
  };


  return (
    <Box>
      <Typography variant="h6" sx={{ fontFamily: "Poppins", fontWeight: "600", fontSize: "16px", lineHeight: "20.8px", textAlign: "start" }}>
        My Contracts
      </Typography>
      {error && <Typography color="error">Error loading contracts</Typography>}
      <List>
        {contracts.map(contract => (
          <ListItem button key={contract.id} onClick={() => handleContractClick(contract.id)}>
            <ListItemText primary={contract.contract_name} secondary={`Status: ${contract.status}`} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ClientThirdFeature;