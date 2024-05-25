// // eslint-disable-next-line no-unused-vars
// import React from "react";
// import axios from "axios";

// async function fetchProjects() {
//   const response = await axios.get('http://localhost:8000/api/projects'); 
//   if (!response.ok) {
//     throw new Error('Failed to fetch projects');
//   }
//   const data = await response.json();
//   return data;
// }

// export async function getStaticProps() {
//   const projects = await fetchProjects(); // Replace with your fetching function

//   return {
//     props: {
//       projects,
//     },
//   };
// }

// function ProjectList({ projects }) {
//   // ... rest of the code remains the same, using projects data for rendering
// }

// export default ProjectList;


const  popularCategories = [
    {
        id: 1,
      jobTitle: "Writing & Translation",
      sourceSet:
      "/assets/rectangle-114-yQi.png, /assets/rectangle-114-yQ.png, /assets/rectangle-114-zCe.png",
      image: "/assets/rectangle-114-zCe.png",
  
      imageLabel: "Writing & Translation",
    },
  
    {
        id: 2,
      jobTitle: "Programming & Tech",
      sourceSet:
      "/assets/programmingAndTechSm.png, /assets/programmingAndTechLg.png",
      image: "/assets/programmingAndTechSm.png",
  
      imageLabel: "Programming & Tech",
    },
    {
        id: 3,
      jobTitle: "Software Engineer",
      sourceSet:
      "/assets/softwareEngineerSm.png, /assets/softwareEngineerLg.png",
      image: "/assets/softwareEngineerLg.png",
  
  
      imageLabel: "Software Engineer",
    },
  
    {
        id: 4,
      jobTitle: "Business & Finance",
      sourceSet:
      "/assets/businessAndFinanceSm.png, /assets/businessAndFinanceLg.png",
      image: "/assets/businessAndFinanceLg.png",
  
  
      imageLabel: "Business & Finance",
    },
  ];

  export default popularCategories;