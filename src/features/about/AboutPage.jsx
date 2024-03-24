import { Container, Typography } from "@mui/material";

import { AboutAppFeature } from "./AboutApp";
import { FreelancerFeature } from "./Freelancer";
import { ClientFeature } from "./Client";
import { JoinAsFreelancerFeature } from "./JoinAsFreelancer";
import { JionAsClientFeature } from "./JoinAsClient";

const CustomeTypography = ({ title }) => {
  return (
    <Typography
      sx={{
        fontFamily: "Poppins",
        fontWeight: "600",
        fontSize: "16px",
        lineHeight: "20.8px",
        color: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.primary.lightModeHeroTitle
            : theme.palette.primary.darkModeHeroTitle,
        ml: "3%",
        mb:"-3%"
        
      }}
    >
      {title}
    </Typography>
  );
};

export const AboutPage = () => {
  return (
    <>
      {/* Container for the AboutUs page */}
      <Container component="main" maxWidth="lg">
        <Typography
          sx={{
            mt: "-4%",
            mb: "10%",
            fontFamily: "Poppins",
            fontWeight: "600",
            fontSize: "16px",
            lineHeight: "20.8px",
            color: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.primary.lightModeHeroTitle
                : theme.palette.primary.darkModeHeroTitle,
            ml: "40%",
          }}
        >
          How It Work
        </Typography>

        <CustomeTypography title=" About App" />

        {/**First Feature */}
        <AboutAppFeature />

        <CustomeTypography title="User Roles" />

        {/**Second Feature */}
        <FreelancerFeature />

        {/**Third Feature */}
        <ClientFeature />

        {/**Fourth Feature */}
        <CustomeTypography title="Join As a Freelancer" />

        <JoinAsFreelancerFeature />
        <CustomeTypography title="Join As a Client" />

        <JionAsClientFeature />
      </Container>

      {/* Container End */}
    </>
  );
};
export default CustomeTypography;