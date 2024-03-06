import { Typography, Link, Stack, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { FreelancerFirstFeature } from "./presentationals/FreelancerCard";
import FreelancerSecondFeature from "./presentationals/AnalyticsContainer";
import FreelancerThirdFeature from "./presentationals/ProjectContainer";
import FreelancerFourthFeature from "./presentationals/Earning";
import FreelancerFifthFeature from "./presentationals/ReviewsAndRatings";



export default function FreelancerPage() {
  //Instatiate useNavigate
  let navigate = useNavigate();

  return (
    <>
      {/*First Freelancer Feature*/}
      <FreelancerFirstFeature />

      {/*First Heading*/}
      <Typography
        variant="h6"
        sx={{
          color: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[600]
              : theme.palette.grey[300],
          pt: "20px",

          ml: "23.5%",
          mt: "8%",
        }}
      >
        <b>Analytics</b>
      </Typography>

      {/*Second Freelancer Feature*/}
      <FreelancerSecondFeature />
      {/*Second Heading*/}
      <Stack direction="row">
        <Typography
          variant="h6"
          sx={{
            color: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[600]
                : theme.palette.grey[300],
            mt: "8%",

            ml: "23.5%",
          }}
        >
          <b>My Projects</b>
        </Typography>
        <Link
          href="/categories"
          sx={{
            textDecoration: "none",
            ml: "32%",
            color: "#87CEEB",
            mt: "8%",
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
            color: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[600]
                : theme.palette.grey[300],

            ml: "24%",

            mt: "8%",
          }}
        >
          <b>Earnings</b>
        </Typography>
        <Link
          href="/about/question/21334565"
          sx={{
            textDecoration: "none",
            ml: "36%",
            mt: "8%",
            color: "#87CEEB",
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
            color: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[600]
                : theme.palette.grey[300],

            ml: "24%",
            mr: "9%",
            mt: "2%",
          }}
        >
          <b>Reviews and Ratings</b>
        </Typography>

        <Link
          href="/about/question/21334565"
          sx={{
            textDecoration: "none",
            ml: "10%",
            mt: "2%",
            color: "#87CEEB",
          }}
        >
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; View more
        </Link>
      </Stack>

      <FreelancerFifthFeature />
    </>
  );
}
