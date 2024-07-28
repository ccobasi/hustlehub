// eslint-disable-next-line no-unused-vars, no-unused-vars
import React, { useEffect, useState } from "react";
import { Typography, Link, Stack, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import FreelancerFirstFeature from "./FreelancerCard";
import FreelancerSecondFeature from "./AnalyticsContainer";
import FreelancerThirdFeature from "./ProjectContainer";
// import FreelancerFourthFeature from "./Earning";
import FreelancerFifthFeature from "./ReviewsAndRatings";
import FreelancerContract from "./FreelancerContract";
import axios from "axios";

function FreelancerPage({ userId }) {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  let navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  userId = user ? user.id : null;
  const jwt_access = localStorage.getItem('access');

  useEffect(() => {
    if (jwt_access === null && !user) {
      navigate("/sign-in");
    }
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`https://ccobasi.pythonanywhere.com/review/freelancer/${userId}/reviews/`);
        setReviews(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [userId]);

  return (
    <>
      {/* Container for the Freelancer page */}
      <Container component="main" maxWidth="lg">
        {/* First Freelancer Feature */}
        <FreelancerFirstFeature />

        {/* First Heading */}
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

        {/* Second Freelancer Feature */}
        <FreelancerSecondFeature />
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
            Jobs
          </Typography>
          <Link
            // href="/categories"
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
          <Link
            href="/browse-project"
            sx={{
              textDecoration: "none",
              ml: "2%",
              color: "#AFB0B6",
              mt: "6%",

              fontFamily:"Poppins",
              fontWeight:"400",
              fontSize:"13px",
              lineHeight:"20.8px",
              letterSpacing:"-1%"

            }}
          >
            Search jobs
          </Link>
        </Stack>

        {/* Second Heading */}
        {/* Third Freelancer Feature */}
        <FreelancerThirdFeature />

        {/* Third Heading */}
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
            Contracts
          </Typography>
          <Link
            // href="/about/question/21334565"
            sx={{
              textDecoration: "none",
              ml: "62%",
              color: "#AFB0B6",
              mt: "6%",
              fontFamily: "Poppins",
              fontWeight: "400",
              fontSize: "13px",
              lineHeight: "20.8px",
              letterSpacing: "-1%",
            }}
          >
          </Link>
        </Stack>

        {/** Freelancer Fourth Feature */}
        {/* <FreelancerFourthFeature /> */}
        <FreelancerContract userId={userId} />
        {/* Fourth Heading */}
        {/* <Stack direction="row" sx={{ mt: "20%" }}>
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
            // href="/about/question/21334565"
            sx={{
              textDecoration: "none",
              ml: "42%",
              color: "#AFB0B6",
              mt: "6%",
              fontFamily: "Poppins",
              fontWeight: "400",
              fontSize: "13px",
              lineHeight: "20.8px",
              letterSpacing: "-1%",
            }}
          >
            View more
          </Link>
        </Stack> */}

        <FreelancerFifthFeature reviews={reviews} loading={loading} error={error} />
      </Container>
    </>
  );
}

export default FreelancerPage;