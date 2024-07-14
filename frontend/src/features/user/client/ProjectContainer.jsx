// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import axios from "axios";
import ProjectContainer from "./ProjectCard";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

const ClientSecondFeature = () => {
  const [firstProject, setFirstProject] = useState(null);
  const user = JSON.parse(localStorage.getItem("user"));
  const access = JSON.parse(localStorage.getItem("access"));

  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        const response = await axios.get(`https://ccobasi.pythonanywhere.com/project/user/${user.id}/projects/`, {
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
        alignItems: "end",
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
      {/* {firstProject && <ProjectContainer key={firstProject.id} {...firstProject} />} */}
    </Grid>
  );
};

export default ClientSecondFeature;
