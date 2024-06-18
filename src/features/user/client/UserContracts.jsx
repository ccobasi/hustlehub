// // eslint-disable-next-line no-unused-vars
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Typography, Container, CircularProgress, Box, Alert } from "@mui/material";

// const UserContracts = ({ userId }) => {
//   const [contracts, setContracts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   axios.interceptors.request.use(
//     (config) => {
//       const user = JSON.parse(localStorage.getItem("user"));
//       const access = JSON.parse(localStorage.getItem("access"));
//       if (user && access) {
//         config.headers.Authorization = `Bearer ${access}`;
//       }
//       return config;
//     },
//     (error) => Promise.reject(error)
//   );

//   useEffect(() => {
//     const fetchUserContracts = async () => {
//       setLoading(true);
//       setError(null);
//       try {
//         console.log('UserContracts - userId:', userId); 
//         const response = await axios.get(`http://localhost:8000/contract/user/${userId}/contracts/`);
//         setContracts(response.data);
//       } catch (error) {
//         console.error('Error fetching contracts:', error);
//         setError('Failed to fetch contracts.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (userId) {
//       fetchUserContracts();
//     } else {
//       setLoading(false);
//       setError('User ID is not defined.');
//     }
//   }, [userId]);

//   if (loading) {
//     return <CircularProgress />;
//   }

//   if (error) {
//     return <Alert severity="error">{error}</Alert>;
//   }

//   return (
//     <Container>
//       <Typography variant="h6" gutterBottom>
//         User Contracts
//       </Typography>
//       {contracts.length > 0 ? (
//         contracts.map((contract) => (
//           <Box key={contract.id} sx={{ mb: 2 }}>
//             <Typography variant="body1">{contract.projectTitle}</Typography>
//             <Typography variant="body2">{contract.contract_amount}</Typography>
//             <Typography variant="body2">{contract.start_date}</Typography>
//             <Typography variant="body2">{contract.end_date}</Typography>
//           </Box>
//         ))
//       ) : (
//         <Typography>No contracts found for this user.</Typography>
//       )}
//     </Container>
//   );
// };

// export default UserContracts;

// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { Typography, List, ListItem, ListItemText } from "@mui/material";
import axios from "axios";

const UserContracts = ({ userId }) => {
  const [contracts, setContracts] = useState([]);

  useEffect(() => {
    const fetchContracts = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/contract/user/${userId}/contracts/`);
        const data = await response.json();
        setContracts(data.contracts);
      } catch (error) {
        console.error("Error fetching contracts:", error);
      }
    };

    fetchContracts();
  }, [userId]); 

  return (
    <div>
      <Typography variant="h6" sx={{ ml: "15%", mt: "2%" }}>
        My Contracts
      </Typography>
      {contracts.length > 0 ? (
        <List dense sx={{ width: "100%" }}>
          {contracts.map((contract) => (
            <ListItem key={contract.id}>
              <ListItemText
                primary={contract.title}
                secondary={contract.freelancerName}
              />
            </ListItem>
          ))}
        </List>
      ) : (
        <Typography variant="body2" sx={{ ml: "15%" }}>
          No contracts found.
        </Typography>
      )}
    </div>
  );
};

export default UserContracts;
