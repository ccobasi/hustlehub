import { Typography, Link, Stack, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { FreelancerFirstFeature } from "./FreelancerCard";
import FreelancerSecondFeature from "./AnalyticsContainer";
import FreelancerThirdFeature from "./ProjectContainer";
import FreelancerFourthFeature from "./Earning";
import FreelancerFifthFeature from "./ReviewsAndRatings";

export default function FreelancerPage() {
  //Instatiate useNavigate
  let navigate = useNavigate();

  return (
    <>
      {/* Container for the Freelancer page */}
      <Container component="main" maxWidth="lg">
        {/*First Freelancer Feature*/}
        <FreelancerFirstFeature />

        {/*First Heading*/}
        <Typography
          variant="h6"
          sx={{
            fontFamily: "Poppins",
            fontWeight: "600",
            fontSize: "16px",
            lineHeight: "20.8px",
            textAlign: "start",

            color: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.primary.lightModeHeroTitle
                : theme.palette.primary.darkModeHeroTitle,

            pt: "20px",

            ml: "4%",
          }}
        >
          Analytics
        </Typography>

        {/*Second Freelancer Feature*/}
        <FreelancerSecondFeature />
        {/*Second Heading*/}
        <Stack direction="row">
          <Typography
            variant="h6"
            sx={{
              fontFamily: "Poppins",
              fontWeight: "600",
              fontSize: "16px",
              lineHeight: "20.8px",
              textAlign: "start",
  
              color: (theme) =>
                theme.palette.mode === "light"
                  ? theme.palette.primary.lightModeHeroTitle
                  : theme.palette.primary.darkModeHeroTitle,
  
              pt: "50px",
  
              ml: "4%",
             
            }}
          >
            My Projects
          </Typography>
          <Link
            href="/categories"
            sx={{
              textDecoration: "none",
              ml: "62%",
              color: "#AFB0B6",
              mt: "6%",

              fontFamily:"Poppins",
              fontWeight:"400",
              fontSize:"13px",
              lineHeight:"20.8px",
              letterSpacing:"-1%"

            }}
          >
            See all
          </Link>
        </Stack>

        {/*Third Freelancer Feature*/}

        <FreelancerThirdFeature />

        {/*Third Heading*/}
        <Stack direction="row">
          <Typography
            variant="h6"
            sx={{
              fontFamily: "Poppins",
              fontWeight: "600",
              fontSize: "16px",
              lineHeight: "20.8px",
              textAlign: "start",
  
              color: (theme) =>
                theme.palette.mode === "light"
                  ? theme.palette.primary.lightModeHeroTitle
                  : theme.palette.primary.darkModeHeroTitle,
  
              pt: "50px",
  
              ml: "4%",
            }}
          >
            Earnings
          </Typography>
          <Link
            href="/about/question/21334565"
            sx={{
              textDecoration: "none",
              ml: "62%",
              color: "#AFB0B6",
              mt: "6%",

              fontFamily:"Poppins",
              fontWeight:"400",
              fontSize:"13px",
              lineHeight:"20.8px",
              letterSpacing:"-1%"
            }}
          >
            See all
          </Link>
        </Stack>

        {/**Freelancer Fourth Feature */}
        <FreelancerFourthFeature />

        {/*Fourth Heading*/}

        <Stack direction="row" sx={{ mt: "20%" }}>
          <Typography
            variant="h6"
            sx={{
              fontFamily: "Poppins",
              fontWeight: "600",
              fontSize: "16px",
              lineHeight: "20.8px",
              textAlign: "start",
  
              color: (theme) =>
                theme.palette.mode === "light"
                  ? theme.palette.primary.lightModeHeroTitle
                  : theme.palette.primary.darkModeHeroTitle,
  
              pt: "50px",
  
              ml: "4%",
            }}
          >
            Reviews and Ratings
          </Typography>

          <Link
            href="/about/question/21334565"
            sx={{
              textDecoration: "none",
              ml: "42%",
              color: "#AFB0B6",
              mt: "6%",

              fontFamily:"Poppins",
              fontWeight:"400",
              fontSize:"13px",
              lineHeight:"20.8px",
              letterSpacing:"-1%"
            }}
          >
           View more
          </Link>
        </Stack>

        <FreelancerFifthFeature />
      </Container>
    </>
  );
}
