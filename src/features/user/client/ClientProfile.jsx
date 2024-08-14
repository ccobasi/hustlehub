// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import Img from "../../../assets/mask-group-8wG.png";
import axios from "axios";

const ClientProfile = ({ name, jobTitle, image, imageLabel }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const userId = user ? user.id : null;
  const [clientProfile, setClientProfile] = useState(null);
  imageLabel = "Profile Image"
  
  

  axios.interceptors.request.use(
    (config) => {
      const user = JSON.parse(localStorage.getItem("user"));
      const access = JSON.parse(localStorage.getItem("access"));
      if (user && access) {
        config.headers.Authorization = `Bearer ${access}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  useEffect(() => {
    const fetchClientProfile = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/user_profile/user-profile/${userId}/`);
        if (response.data) {
          setClientProfile(response.data);
        } else {
          console.log("Data not available");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchClientProfile();
  }, []);


  return (
    <Card sx={{ maxWidth: "345", mt: 12, ml: "42%" }}>
      {clientProfile?.image && (
      <CardMedia component="img" height="120" /*image={clientProfile?.image}*/ image={Img} alt={imageLabel} />
      )}
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          <h6>Hi, {user && user.names}</h6> {/* Provide the 'name' prop here */}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {/* {clientProfile?.job_role} */}
          {clientProfile ? clientProfile.job_role : jobTitle}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ClientProfile;