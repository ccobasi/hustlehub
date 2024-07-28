// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Typography, Box, List, ListItem, ListItemText, Paper } from "@mui/material";
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
    <Box sx={{ p: 3, bgcolor: 'background.default', minHeight: '100vh' }}>
      <Typography variant="h4" sx={{ fontFamily: "Poppins", fontWeight: "600", mb: 3, color: 'text.primary' }}>
        My Contracts
      </Typography>
      {error && <Typography color="error">Error loading contracts</Typography>}
      <Paper elevation={3} sx={{ p: 2 }}>
        <List>
          {contracts.map(contract => (
            <ListItem 
              button 
              key={contract.id} 
              onClick={() => handleContractClick(contract.id)}
              sx={{ mb: 2, borderRadius: 1, '&:hover': { bgcolor: 'action.hover' } }}
            >
              <ListItemText 
                primary={contract.contract_name} 
                secondary={
                  <Typography component="span" variant="body2" sx={{ color: '#87CEEB' }}>
                    Status: {contract.status}
                  </Typography>
                }
                primaryTypographyProps={{ fontFamily: 'Poppins', fontWeight: '500', color: 'text.primary' }}
                secondaryTypographyProps={{ fontFamily: 'Poppins', fontWeight: '400' }}
              />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Box>
  );
};

export default ClientThirdFeature;
