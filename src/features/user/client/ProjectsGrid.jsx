import  { useState, useEffect } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useNavigate } from "react-router-dom"; 
import Grid  from "@mui/material/Grid";
import Typography from "@mui/material/Typography";



const ProjectsGrid = () => {
const [projects, setProjects] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));
  const access = JSON.parse(localStorage.getItem("access"));
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/project/user/${user.id}/projects/`, {
          headers: {
            Authorization: `Bearer ${access}`,
          },
        });

        if (response.status === 200 && response.data.length > 0) {
          // Get the last five projects
          const lastFiveProjects = response.data.slice(-5);
          setProjects(lastFiveProjects);
        }
      } catch (error) {
        console.error("Failed to fetch projects", error);
      }
    };

    fetchProjectData();
  }, [user.id, access]);

  // Function to handle navigation programmatically
  const handleProjectClick = (projectId) => {
    navigate(`/project-details/${projectId}`);
  };




  
  return (
   
     
      <><Typography
          sx={{
              color: (theme) => theme.palette.mode === "light"
                  ? theme.palette.primary.lightModeHeroTitle
                  : theme.palette.primary.darkModeHeroTitle,
              fontFamily: "Poppins",
              fontWeight: "600",
              fontSize: "16px",
              lineHeight: "20.8px",
              pb: { lg: '1%', md: "1%", sm: '1%', xs: '1%' },
              mt: { lg: '5%', md: "5%", sm: '5%', xs: '5%' },
              ml: { lg: '10%', md: "8%", sm: '10%', xs: '10%' },
          }}
      >
          My Projects
      </Typography><Grid
          container
          spacing={4}
          sx={{
              pb: { lg: '5%', md: "5%", sm: '5%', xs: '5%' },
              mt: { lg: '0%', md: "0%", sm: '10%', xs: '10%' },
              ml: { lg: '-1%', md: "-1%", sm: '3%', xs: '-2%' },
          }}
      >

              {projects.map((project) => (
                  <>
                      <Grid key={project.id} item xs={6} md={4} sx={{ mb: "10px"  }}>

                          <Card key={project.id}
                              onClick={() => handleProjectClick(project.id)}
                              sx={{
                                  cursor: 'pointer',
                                  display: "flex",
                                  backgroundColor: (theme) => theme.palette.mode === "light"
                                      ? theme.palette.grey[50]
                                      : theme.palette.grey[900],
                                  borderRadius: "16px"
                              }}
                          >
                              {/* Card Content for the Feature*/}
                              <CardContent
                                  sx={{
                                      flex: 1,
                                      overflow: "hidden",

                                      width: "155px",
                                      height: "122px",

                                      borderRadius: "16px",
                                      boxShadow: "0px 4px 20px -10px #00000005",
                                  }}
                              >

                                  <Typography
                                      variant="body2"
                                      sx={{
                                          color: (theme) => theme.palette.mode === "light"
                                              ? theme.palette.primary.lightModeHeroTitle
                                              : theme.palette.primary.darkModeHeroTitle,
                                          pb: "20px",
                                          pt: "30px",
                                          fontFamily: "Poppins",
                                          fontWeight: "500",
                                          fontSize: "13px",
                                          textAlign: "center",
                                      }}>
                                      {project.title}
                                  </Typography>

                                  {/* Heading for Job Title */}

                                  <Typography
                                      variant="body2"
                                      sx={{
                                          color: (theme) => theme.palette.mode === "light"
                                              ? theme.palette.primary.lightModeHeroTitle
                                              : theme.palette.primary.darkModeHeroTitle,
                                          pb: "20px",
                                          pt: "30px",
                                          fontFamily: "Poppins",
                                          fontWeight: "500",
                                          fontSize: "13px",
                                          textAlign: "center",
                                      }}
                                  >
                                      {project.description}
                                  </Typography>
                                  <Typography
                                      variant="body2"
                                      sx={{
                                          color: (theme) => theme.palette.mode === "light"
                                              ? theme.palette.primary.lightModeHeroTitle
                                              : theme.palette.primary.darkModeHeroTitle,
                                          pb: "20px",
                                          pt: "30px",
                                          fontFamily: "Poppins",
                                          fontWeight: "500",
                                          fontSize: "13px",
                                          textAlign: "center",
                                      }}
                                  >
                                      Closing Date: {project.closing_date}
                                  </Typography>
                                  <Typography
                                      variant="body2"
                                      sx={{
                                          color: "#87CEEB",
                                          fontFamily: "Poppins",
                                          fontWeight: "500",
                                          fontSize: "12px",
                                          lineHeight: "19.2px",
                                          letterSpacing: "-1%",
                                          textDecoration: "underline",
                                          cursor: 'pointer'
                                      }}
                                      onClick={() => handleProjectClick(project.id)}
                                  >
                                      View Project
                                  </Typography>
                              </CardContent>

                          </Card>

                      </Grid></>
              ))}


          </Grid></>
  
      
    // </>
  );
};


export default ProjectsGrid;