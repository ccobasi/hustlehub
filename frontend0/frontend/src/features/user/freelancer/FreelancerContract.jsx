// ClientThirdFeature.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Typography, Box, List, ListItem, ListItemText, Card, CardContent, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

const FreelancerContract = ({ userId }) => {
  const [contracts, setContracts] = useState([]);
  const [error, setError] = useState(null);
  const user = JSON.parse(localStorage.getItem("user"));
  userId = user ? user.id : null;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchContracts = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/contract/user/${userId}/contracts/`);
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
      {/* <Typography variant="h6" sx={{ fontFamily: "Poppins", fontWeight: "600", fontSize: "16px", lineHeight: "20.8px", textAlign: "start" }}>
        Earnings
      </Typography> */}
      {error && <Typography color="error">Error loading contracts</Typography>}
      <List>
        <Card
          sx={{
            borderRadius: "20px",
            boxShadow: 2,
            backgroundColor: "#87CEEB",
          }}
        >
         <CardContent>
            <Stack direction="row" sx={{ justifyContent: "space-between" }}>
              
        {contracts.map(contract => (
          <ListItem button key={contract.id} onClick={() => handleContractClick(contract.id)}>
            
            <Stack direction="row" sx={{ justifyContent: "space-between", width: "100%" }}>
                  <Typography
                    variant="h5"
                    sx={{
                      color: "#FFFFFF",
                      fontFamily: "Poppins",
                      fontWeight: "600",
                      fontSize: "16px",
                      lineHeight: "20.8px",
                      letterSpacing: "-1%",
                    }}
                  >
                    {contract.project_title}
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{
                      color: "#FFFFFF",
                      fontFamily: "Poppins",
                      fontWeight: "600",
                      fontSize: "16px",
                      lineHeight: "20.8px",
                      letterSpacing: "-1%",
                    }}
                  >
                    #{contract.contract_amount}
                  </Typography>
                </Stack>
          </ListItem>
        ))}
        </Stack>
        </CardContent>
        </Card>
      </List>
    </Box>
  );
};

export default FreelancerContract;
