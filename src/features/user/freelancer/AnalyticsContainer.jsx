// eslint-disable-next-line no-unused-vars
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import FreelancerAnalyticsContainer from "./FreelancerAnalytics";
// import { Grid, CircularProgress, Box, Typography } from "@mui/material";

// export default function FreelancerSecondFeature() {
//   const [analyticsData, setAnalyticsData] = useState({});
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const user = JSON.parse(localStorage.getItem("user"));
//   const userId = user ? user.id : null;

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const proposalsResponse = await axios.get(`https://ccobasi.pythonanywhere.com/proposal/user/${userId}/count/`);
//         const contractsResponse = await axios.get(`https://ccobasi.pythonanywhere.com/contract/user/${userId}/count/`);

//         setAnalyticsData({
//           proposals: proposalsResponse.data.count,
//           contractsCompleted: contractsResponse.data.completed,
//           contractsActive: contractsResponse.data.active,
//           contractsPending: contractsResponse.data.pending,
//         });

//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching analytics data: ", error);
//         setError(error);
//         setLoading(false);
//       }
//     };

//     if (userId) {
//       fetchData();
//     }
//   }, [userId]);

//   if (loading) {
//     return (
//       <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
//         <CircularProgress />
//       </Box>
//     );
//   }

//   if (error) {
//     return <Typography color="error">Error loading analytics data</Typography>;
//   }

//   return (
//     <Grid container spacing={4} sx={{ margin: 'auto', maxWidth: '100%' }}>
//       <Grid item xs={12} sm={6}>
//         <FreelancerAnalyticsContainer
//           title="Proposals Submitted"
//           count={analyticsData.proposals}
//         />
//       </Grid>
//       <Grid item xs={12} sm={6}>
//         <FreelancerAnalyticsContainer
//           title="Contracts Completed"
//           count={analyticsData.contractsCompleted}
//         />
//       </Grid>
//       <Grid item xs={12} sm={6}>
//         <FreelancerAnalyticsContainer
//           title="Contracts Active"
//           count={analyticsData.contractsActive}
//         />
//       </Grid>
//       <Grid item xs={12} sm={6}>
//         <FreelancerAnalyticsContainer
//           title="Contracts Pending"
//           count={analyticsData.contractsPending}
//         />
//       </Grid>
//     </Grid>
//   );
// }
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import axios from "axios";
import FreelancerAnalyticsContainer from "./FreelancerAnalytics";
import { Grid, CircularProgress, Box, Typography } from "@mui/material";

export default function FreelancerSecondFeature() {
  const [analyticsData, setAnalyticsData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const user = JSON.parse(localStorage.getItem("user"));
  const userId = user ? user.id : null;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const proposalsResponse = await axios.get(`https://ccobasi.pythonanywhere.com/proposal/user/${userId}/count/`);
        const contractsResponse = await axios.get(`https://ccobasi.pythonanywhere.com/contract/user/${userId}/count/`);

        setAnalyticsData({
          proposals: proposalsResponse.data.count,
          contractsCompleted: contractsResponse.data.completed,
          contractsActive: contractsResponse.data.active,
          contractsPending: contractsResponse.data.pending,
        });

        setLoading(false);
      } catch (error) {
        console.error("Error fetching analytics data: ", error);
        setError(error);
        setLoading(false);
      }
    };

    if (userId) {
      fetchData();
    }
  }, [userId]);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return <Typography color="error">Error loading analytics data</Typography>;
  }

  return (
    <Grid container spacing={4} sx={{ margin: 'auto', maxWidth: '100%' }}>
      <Grid item xs={12} sm={6}>
        <FreelancerAnalyticsContainer
          title="Proposals Submitted"
          count={analyticsData.proposals}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <FreelancerAnalyticsContainer
          title="Contracts Completed"
          count={analyticsData.contractsCompleted}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <FreelancerAnalyticsContainer
          title="Contracts Active"
          count={analyticsData.contractsActive}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <FreelancerAnalyticsContainer
          title="Contracts Pending"
          count={analyticsData.contractsPending}
        />
      </Grid>
    </Grid>
  );
}
