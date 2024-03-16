import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import { Link, Stack, Typography, Container } from "@mui/material";
import { Updates } from "./ProjectsUpdate";

const ProjectsUpdatePage = () => {
  //Instatiate useNavigate
  let navigate = useNavigate();

  return (
    <>
      <Container component="main" maxWidth="lg">
        {/*First Projects Update First Feature*/}
        <Typography
          component="h1"
          variant="h5"
          sx={{
            mt: "-7%",
            mb: "20%",
            fontFamily: "Poppins",
            fontWeight: "600",
            fontSize: "16px",
            lineHeight: "20.8px",
            textAlign: "center",
            color: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.primary.lightModeHeroTitle
                : theme.palette.primary.darkModeHeroTitle,
          }}
        >
          Project Updates
        </Typography>

        <Updates />
      </Container>
    </>
  );
};

export default ProjectsUpdatePage;
