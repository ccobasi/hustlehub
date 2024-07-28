// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { Stack, Button, Typography, Box, Container, TextField } from "@mui/material";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function BrowseProjectPage() {
  const [projects, setProjects] = useState([]);
  const [loading, ] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

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
    const fetchProjects = async () => {
      try {
        const response = await axios.get('https://ccobasi.pythonanywhere.com/project/projects');
        setProjects(response.data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredProjects = projects.filter((project) => {
    const category = project.category || ''; 
    return category.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const handleProjectClick = (project) => {
    navigate('/proposal', { state: { project } }); 
    console.log(project);
  };

  return (
    <Container component="main" maxWidth="md">
      <Typography
        component="h1"
        variant="h5"
        sx={{
          mt: 4,
          mb: 4,
          fontFamily: "Poppins",
          fontWeight: "600",
          fontSize: "24px",
          textAlign: "center",
        }}
      >
        Browse Projects
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mb: 4,
        }}
      >
        <form onSubmit={(e) => e.preventDefault()} style={{ width: "100%" }}>
          <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
            <TextField
              label="Search by Category"
              variant="outlined"
              fullWidth
              value={searchQuery}
              onChange={handleSearch}
            />
            <Button
              variant="contained"
              type="button"
              sx={{ mt: 3, mb: 2, backgroundColor: "#87CEEB", color: "white" }}
            >
              Search
            </Button>
          </Stack>
        </form>

        {loading ? (
          <Typography>Loading...</Typography>
        ) : (
          <Box sx={{ width: "100%" }}>
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <Box
                  key={project.id}
                  sx={{
                    p: 2,
                    mb: 2,
                    border: "1px solid #ccc",
                    borderRadius: "8px",
                    backgroundColor: "#f9f9f9",
                  }}
                  onClick={() => handleProjectClick(project)}
                >
                  <Typography variant="h6">{project.title}</Typography>
                  <Typography>{project.description}</Typography>
                  <Typography>Budget: #{project.budget}</Typography>
                  <Typography>Category: {project.category}</Typography>
                  <Typography>Skills Required: {project.skills_required}</Typography>
                  <Typography>Closing Date: {new Date(project.closing_date).toLocaleDateString()}</Typography>
                  <Typography>Status: {project.is_open ? "Open" : "Closed"}</Typography>
                </Box>
              ))
            ) : (
              <Typography>No projects found</Typography>
            )}
          </Box>
        )}
      </Box>
    </Container>
  );
}

export default BrowseProjectPage;
// eslint-disable-next-line no-unused-vars
// import React, { useState, useEffect } from "react";
// import { Stack, Button, Typography, Box, Container, TextField } from "@mui/material";
// import axios from "axios";
// import { useNavigate } from 'react-router-dom';
// import debounce from 'lodash/debounce';

// function BrowseProjectPage() {
//   const [projects, setProjects] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [userPreferences, setUserPreferences] = useState([]);
//   const navigate = useNavigate();

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
//     const fetchProjects = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get('https://ccobasi.pythonanywhere.com/project/projects');
//         setProjects(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching projects:', error);
//         setLoading(false);
//       }
//     };

//     fetchProjects();
//   }, []);

//   useEffect(() => {
//     const storedPreferences = JSON.parse(localStorage.getItem("searchHistory")) || [];
//     setUserPreferences(storedPreferences);
//   }, []);

//   const handleSearch = (event) => {
//     setSearchQuery(event.target.value);
//   };

//   const debouncedHandleSearch = debounce(handleSearch, 300);

//   const filteredProjects = projects.filter((project) => {
//     const category = project.category || '';
//     return category.toLowerCase().includes(searchQuery.toLowerCase());
//   });

//   const handleProjectClick = (project) => {
//     navigate('/proposal', { state: { project } });
//   };

//   const handleSearchSubmit = () => {
//     const newPreferences = [...userPreferences, searchQuery];
//     localStorage.setItem("searchHistory", JSON.stringify(newPreferences));
//     setUserPreferences(newPreferences);
//   };

//   return (
//     <Container component="main" maxWidth="md">
//       <Typography
//         component="h1"
//         variant="h5"
//         sx={{
//           mt: 4,
//           mb: 4,
//           fontFamily: "Poppins",
//           fontWeight: "600",
//           fontSize: "24px",
//           textAlign: "center",
//         }}
//       >
//         Browse Projects
//       </Typography>

//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           mb: 4,
//         }}
//       >
//         <form onSubmit={(e) => { e.preventDefault(); handleSearchSubmit(); }} style={{ width: "100%" }}>
//           <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
//             <TextField
//               label="Search by Category"
//               variant="outlined"
//               fullWidth
//               value={searchQuery}
//               onChange={debouncedHandleSearch}
//             />
//             <Button
//               variant="contained"
//               type="submit"
//               sx={{ mt: 3, mb: 2, backgroundColor: "#87CEEB", color: "white" }}
//             >
//               Search
//             </Button>
//           </Stack>
//         </form>

//         {loading ? (
//           <Typography>Loading...</Typography>
//         ) : (
//           <Box sx={{ width: "100%" }}>
//             {filteredProjects.length > 0 ? (
//               filteredProjects.map((project) => (
//                 <Box
//                   key={project.id}
//                   sx={{
//                     p: 2,
//                     mb: 2,
//                     border: "1px solid #ccc",
//                     borderRadius: "8px",
//                     backgroundColor: "#f9f9f9",
//                   }}
//                   onClick={() => handleProjectClick(project)}
//                 >
//                   <Typography variant="h6">{project.title}</Typography>
//                   <Typography>{project.description}</Typography>
//                   <Typography>Budget: #{project.budget}</Typography>
//                   <Typography>Category: {project.category}</Typography>
//                   <Typography>Skills Required: {project.skills_required}</Typography>
//                   <Typography>Closing Date: {new Date(project.closing_date).toLocaleDateString()}</Typography>
//                   <Typography>Status: {project.is_open ? "Open" : "Closed"}</Typography>
//                 </Box>
//               ))
//             ) : (
//               <Typography>No projects found</Typography>
//             )}
//           </Box>
//         )}
//       </Box>
//     </Container>
//   );
// }

// export default BrowseProjectPage;
