// // eslint-disable-next-line no-unused-vars
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Typography, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
// import { useNavigate } from "react-router-dom";

// const FreelancerContract = () => {
//   const [contracts, setContracts] = useState([]);
//   const [error, setError] = useState(null);
//   const user = JSON.parse(localStorage.getItem("user"));
//   const userId = user ? user.id : null;
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchContracts = async () => {
//       try {
//         const response = await axios.get(`http://localhost:5173/contract/user/${userId}/contracts/`);
//         setContracts(response.data);
//       } catch (error) {
//         console.error("Error fetching contracts: ", error);
//         setError(error);
//       }
//     };

//     if (userId) {
//       fetchContracts();
//     }
//   }, [userId]);

//   const handleContractClick = (id) => {
//     navigate(`/contract/${id}`);
//   };

//   return (
//     <Box sx={{ mt: 4 }}>
//       {error && <Typography color="error">Error loading contracts</Typography>}
//       <TableContainer component={Paper} sx={{ boxShadow: 3 }}>
//         <Table sx={{ minWidth: 650 }} aria-label="contracts table">
//           <TableHead>
//             <TableRow>
//               <TableCell align="left">Project Title</TableCell>
//               <TableCell align="center">Contract Amount</TableCell>
//               <TableCell align="center">Status</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {contracts.map((contract) => (
//               <TableRow
//                 key={contract.id}
//                 hover
//                 onClick={() => handleContractClick(contract.id)}
//                 sx={{ cursor: 'pointer' }}
//               >
//                 <TableCell component="th" scope="row" sx={{ fontWeight: 'bold' }}>
//                   {contract.project_title}
//                 </TableCell>
//                 <TableCell align="center">{contract.contract_amount}</TableCell>
//                 <TableCell align="center" sx={{ color: '#87CEEB', fontWeight: 'bold' }}>
//                   {contract.status}
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </Box>
//   );
// };

// export default FreelancerContract;

// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Typography, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
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
        const response = await axios.get(`http://localhost:5173/contract/user/${userId}/contracts/`);
        if (Array.isArray(response.data)) {
          setContracts(response.data);
        } else {
          setContracts([]); // Default to empty array if the response isn't an array
        }
      } catch (error) {
        console.error("Error fetching contracts: ", error);
        setError(error);
        setContracts([]); // Also default to empty array on error
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
    <Box sx={{ mt: 4 }}>
      {error && <Typography color="error">Error loading contracts</Typography>}
      <TableContainer component={Paper} sx={{ boxShadow: 3 }}>
        <Table sx={{ minWidth: 650 }} aria-label="contracts table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Project Title</TableCell>
              <TableCell align="center">Contract Amount</TableCell>
              <TableCell align="center">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {contracts.length > 0 ? contracts.map((contract) => (
              <TableRow
                key={contract.id}
                hover
                onClick={() => handleContractClick(contract.id)}
                sx={{ cursor: 'pointer' }}
              >
                <TableCell component="th" scope="row" sx={{ fontWeight: 'bold' }}>
                  {contract.project_title}
                </TableCell>
                <TableCell align="center">{contract.contract_amount}</TableCell>
                <TableCell align="center" sx={{ color: '#87CEEB', fontWeight: 'bold' }}>
                  {contract.status}
                </TableCell>
              </TableRow>
            )) : (
              <TableRow>
                <TableCell colSpan={3} align="center">No contracts found</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default FreelancerContract;
