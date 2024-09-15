import { useNavigate } from "react-router-dom";
import { HomeCategories } from "./HomeCategories";
import { WhyBusinessesTurnToHustleHub } from "./WhyHustleHubFeature";
import { Container } from "@mui/material";
import { HeroSection } from "./HeroSection";
import TalentCarousel from "../../features/components/TalentCarousel";
import ProjectsCarousel from "../../features/components/ProjectCarousel";
import { Typography } from "@mui/material";
import { Stack } from "@mui/material";
import { Button } from "@mui/material";
import TestimonialsCarousel from "../../features/components/TestimonialsCarousel";

export default function HomePage() {

  let navigate = useNavigate();

  return (
    <>
      <Container component="main" maxWidth="lg">
        <HeroSection />
        <HomeCategories />
        <TalentCarousel />
        <WhyBusinessesTurnToHustleHub />
        <TestimonialsCarousel />
        <Typography
          sx={{
            color: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.primary.lightModeHeroTitle
                : theme.palette.primary.darkModeHeroTitle,
            width: "200px",
            height: "21px",
            fontFamily: "Poppins",
            fontWeight: "600",
            fontSize: "16px",
            lineHeight: "20.8px",
            letterSpacing: "-1%",
            ml: { lg: "10%", md: "10%", sm: "10%", xs: "10%" },
            mb: { lg: "2%", md: "5%", sm: "5%", xs: "5%" },
            pt: { lg: "8%", md: "10%", sm: "20%", xs: "20%" },
          }}
        >
          Find Great Work
        </Typography>


        {/* Heading for the Great Work Projects */}
        <Stack direction="row">
          <Typography
            sx={{
              color: (theme) =>
                theme.palette.mode === "light"
                  ? theme.palette.primary.lightModeHeroTitle
                  : theme.palette.primary.darkModeHeroTitle,
              pt: { lg: "3%", md: "1%", sm: "2%", xs: "4%" },
              ml: { lg: "10%", md: "10%", sm: "10%", xs: "10%" },
              mb: { lg: "2%", md: "5%", sm: "5%", xs: "5%" },
              width: "299px",
              height: "21px",
              fontFamily: "Poppins",
              fontWeight: "400",
              fontSize: "16px",
              lineHeight: "20.8px",
              letterSpacing: "-1%",
            }}
          >
            Featured Projects
          </Typography>
        </Stack>

        <ProjectsCarousel />
        {/* Button for Find Opportunities*/}

        <Button
          onClick={() => navigate("/browse-project")}
          variant="contained"
          sx={{
            backgroundColor: "#87CEEB",
            "&:hover": {
              backgroundColor: (theme) =>
                theme.palette.mode === "light"
                  ? theme.palette.grey[400]
                  : theme.palette.grey[500],
            },
            ml: { lg: "10%", md: "15%", sm: "15%", xs: "10%" },
            mb: { lg: "5%", md: "5%", sm: "5%", xs: "5%" },
            width: "128.59px",
            height: "24px",
            borderRadius: "5px",
            fontFamily: "Poppins",
            fontWeight: "500",
            fontSize: "10px",
            lineHeight: "20px",
            letterSpacing: "-0.5",
          }}
        >
          Find Opportunities
        </Button>
      </Container>
    </>
  );
}
