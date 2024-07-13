// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid } from "@mui/material";
import ProjectContainer from "./ProjectCard";

export default function FreelancerThirdFeature   ()  {
  const [firstProject, setFirstProject] = useState(null);
  const user = JSON.parse(localStorage.getItem("user"));
  const access = JSON.parse(localStorage.getItem("access"));

  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/project/user/${user.id}/projects/`, {
          headers: {
            Authorization: `Bearer ${access}`,
          },
        });
        if (response.status === 200 && response.data.length > 0) {
          setFirstProject(response.data[0]);
        }
      } catch (error) {
        console.error("Failed to fetch projects", error);
      }
    };

    fetchProjectData();
  }, [user.id, access]);

  return (
    
    <Grid
      container
      spacing={4}
      sx={{
        margin: "auto",
        
        maxWidth: "100%",
      }}
    >
      {firstProject && (
        <Grid item xs={12}>
          <Link to={`/project-details/${firstProject.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <ProjectContainer key={firstProject.id} {...firstProject} />
          </Link>
        </Grid>
      )}
    </Grid>//Grid End
  );
};

