// export default FreelancerContract;
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Typography, Box, List, ListItem, Card, CardContent, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

const FreelancerContract = () => {
  const [contracts, setContracts] = useState([]);
  const [error, setError] = useState(null);
  const user = JSON.parse(localStorage.getItem("user"));
  const userId = user ? user.id : null;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchContracts = async () => {
      try {
        const response = await axios.get(`https://ccobasi.pythonanywhere.com/contract/user/${userId}/contracts/`);
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
      {error && <Typography color="error">Error loading contracts</Typography>}
      <List>
        {contracts.map((contract) => (
          <ListItem key={contract.id} disablePadding>
            <Card
              sx={{
                borderRadius: "20px",
                boxShadow: 2,
                backgroundColor: "#87CEEB",
                width: "100%",
                mb: 2, // Add some margin between cards
              }}
              onClick={() => handleContractClick(contract.id)}
            >
              <CardContent>
                <Stack direction="row" sx={{ justifyContent: "space-between", alignItems: "center" }}>
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
                    {contract.status}
                  </Typography>
                </Stack>
              </CardContent>
            </Card>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default FreelancerContract;
