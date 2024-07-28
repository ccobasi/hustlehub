// // eslint-disable-next-line no-unused-vars
// import React, { useState, useEffect } from "react";
// import { Card, CardContent, CardMedia, Typography } from "@mui/material";
// import Img from "../../../assets/mask-group-8wG.png";
// import axios from "axios";

// const ClientProfile = ({ name, jobTitle, image, imageLabel }) => {
//   const user = JSON.parse(localStorage.getItem("user"));
//   const userId = user ? user.id : null;
//   const [clientProfile, setClientProfile] = useState(null);
//   imageLabel = "Profile Image"
  
  

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
//     const fetchClientProfile = async () => {
//       try {
//         const response = await axios.get(`https://ccobasi.pythonanywhere.com/user_profile/user-profile/${userId}/`);
//         if (response.data) {
//           setClientProfile(response.data);
//         } else {
//           console.log("Data not available");
//         }
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchClientProfile();
//   }, []);


//   return (
//     <Card sx={{ maxWidth: "345", mt: 12, ml: "42%" }}>
//       {clientProfile?.image && (
//       <CardMedia component="img" height="120" /*image={clientProfile?.image}*/ image={Img} alt={imageLabel} />
//       )}
//       <CardContent>
//         <Typography gutterBottom variant="h6" component="div">
//           <h6>Hi, {user && user.names}</h6> {/* Provide the 'name' prop here */}
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           {/* {clientProfile?.job_role} */}
//           {clientProfile ? clientProfile.job_role : jobTitle}
//         </Typography>
//       </CardContent>
//     </Card>
//   );
// };

// export default ClientProfile;
import React, { useState, useEffect } from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import axios from "axios";

// Assuming `Img` is a placeholder image in case clientProfile image is not available
import Img from "../../../assets/mask-group-8wG.png";

const ClientProfile = ({ name, jobTitle, imageLabel }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const userId = user ? user.id : null;
  const [clientProfile, setClientProfile] = useState(null);
  imageLabel = imageLabel || "Profile Image"; // Fallback to "Profile Image" if not provided

  axios.interceptors.request.use(
    (config) => {
      const access = JSON.parse(localStorage.getItem("access"));
      if (access) {
        config.headers.Authorization = `Bearer ${access}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  useEffect(() => {
    const fetchClientProfile = async () => {
      try {
        const response = await axios.get(`https://ccobasi.pythonanywhere.com/user_profile/user-profile/${userId}/`);
        setClientProfile(response.data);
      } catch (error) {
        console.error("Error fetching client profile:", error);
      }
    };

    if (userId) {
      fetchClientProfile();
    }
  }, [userId]);

  // Handle image URL
  const imageUrl = clientProfile && clientProfile.image ? `https://ccobasi.pythonanywhere.com${clientProfile.image}` : Img;

  return (
    <Card sx={{ maxWidth: "345px", mt: 12, ml: "42%" }}>
      <CardMedia
        component="img"
        height="120"
        image={imageUrl}
        alt={imageLabel}
        sx={{borderRadius:50, maxWidth: "130px"}}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          <h6>Hi, {user && user.names}</h6> {/* Provide the 'name' prop here */}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {clientProfile ? clientProfile.job_role : jobTitle}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ClientProfile;
