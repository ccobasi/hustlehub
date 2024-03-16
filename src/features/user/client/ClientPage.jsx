import { Typography, Link, Stack, Container, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ClientFirstFeature } from "./Client";
import ClientSecondFeature from "./ProjectContainer";

const ClientPage = () => {
  //Instatiate useNavigate
  let navigate = useNavigate();

  return (
    <>
      {/* Container for the Client page */}
      <Container component="main" maxWidth="lg">
        {/*First Client Feature*/}
        <ClientFirstFeature />

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

            ml: "15%",
          }}
        >
          My Projects
          <Link
            href="/create-project"
            sx={{
              fontFamily: "Poppins",
              fontWeight: "400",
              fontSize: "13px",
              lineHeight: "20.8px",

              textDecoration: "none",

              color: "#87CEEB",
              ml: "40%",
            }}
          >
            Create a Project
          </Link>
        </Typography>

        {/*Second Client Feature*/}
        <ClientSecondFeature />

        {/*Second Heading*/}
        <Box sx={{ mt: "5%" }}>
          <Link
            href="/categories"
            sx={{
              textDecoration: "none",
              ml: "67%",
              color: "#87CEEB",
              fontFamily: "Poppins",
              fontWeight: "500",
              fontSize: "12px",
              lineHeight: "19.2px",
              letterSpacing: "-1%",
            }}
          >
            View All Project
          </Link>
        </Box>

        {/*Third Heading*/}

        <Stack direction="row">
          <Typography
            variant="h6"
            sx={{
              fontFamily: "Poppins",
              fontWeight: "600",
              fontSize: "16px",
              lineHeight: "20.8px",
              

              color: (theme) =>
                theme.palette.mode === "light"
                  ? theme.palette.primary.lightModeHeroTitle
                  : theme.palette.primary.darkModeHeroTitle,

              ml: "15%",
              mt: "2%",
            }}
          >
            Payment History
          </Typography>

          <Link
            href="/about/question/21334565"
            sx={{
              textDecoration: "none",
              ml: "33%",
              mt: "2%",
              color: "#95969D",

              fontFamily: "Poppins",
              fontWeight: "400",
              fontSize: "13px",
              lineHeight: "20.8px",
            }}
          >
            See all
          </Link>
        </Stack>

        {/*Fourth Heading*/}

        <Stack direction="row" sx={{ mt: "20%" }}>
          <Typography
            variant="h6"
            sx={{
              fontFamily: "Poppins",
              fontWeight: "600",
              fontSize: "16px",
              lineHeight: "20.8px",
              

              color: (theme) =>
                theme.palette.mode === "light"
                  ? theme.palette.primary.lightModeHeroTitle
                  : theme.palette.primary.darkModeHeroTitle,

              ml: "15%",
              mt: "2%",
            }}
          >
            Messages
          </Typography>

          <Link
            href="/about/question/21334565"
            sx={{
              textDecoration: "none",
              ml: "39.5%",
              mt: "2%",
              color: "#95969D",

              fontFamily: "Poppins",
              fontWeight: "400",
              fontSize: "13px",
              lineHeight: "20.8px",
            }}
          >
            See all
          </Link>
        </Stack>
      </Container>
    </>
  );
};

export default ClientPage;
