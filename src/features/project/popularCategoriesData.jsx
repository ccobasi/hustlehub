// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid } from "@mui/material";
import Categories from "../home/Categories";

export default function PopularCategoriesComponent() {
  const [popularCategories, setPopularCategories] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        const response = await axios.get(`https://ccobasi.pythonanywhere.com/user/${user.id}/projects`);
        if (response.status !== 200) {
          throw new Error('Failed to fetch projects');
        }
        setPopularCategories(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProjectData();
  }, [user.id]);

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
      {popularCategories.map((project) => (
        <Categories key={project.id} {...project} />
      ))}
    </Grid>
  );
}
