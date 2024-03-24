// eslint-disable-next-line no-unused-vars
import * as React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import Img from "../../../assets/mask-group-8wG.png"

const ClientProfile = ({ name, jobTitle, image, imageLabel }) => {
    const data = useLocation();
  console.log(data);
    jobTitle = "Project Manager"
  return (
    <Card sx={{ maxWidth: "345", mt: 12, ml: "42%"}}>
      <CardMedia
        component="img"
        height="120"
        image={Img}
        alt={imageLabel}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {data.state}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {jobTitle}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ClientProfile;
