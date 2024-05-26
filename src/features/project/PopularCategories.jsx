// import Categories from "../home/Categories";
// import popularCategories from "./popularCategoriesData";
// import PopularCategory from "./popularCategoriesData";
// import { Grid } from "@mui/material";

// export const PopularCategoriesComponent = () => {
//   // Data mapping
//   let popularContainer = popularCategories.map((el) => {
//     return <Categories key={el.id} {...el} />;
//   });
//   //Mapping End
//   return (
//     // Grid for popular categories functionality
//     <Grid
//       container
//       spacing={4}
//       sx={{
//         margin: "auto",
//         alignItems: "end",
//         maxWidth: "100%",
//       }}
//     >
//       {popularContainer}
//     </Grid>
//     //Grid End
//   );
// };
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid } from "@mui/material";
import Categories from "../home/Categories";

const PopularCategoriesComponent = () => {
  const [popularCategories, setPopularCategories] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));

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
  
    const fetchProjectData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/project/user/${user.id}/projects`);
        if (response.status !== 200) {
          throw new Error("Failed to fetch projects");
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
};

export default PopularCategoriesComponent;
