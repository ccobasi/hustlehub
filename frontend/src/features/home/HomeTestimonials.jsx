import Testimonials from "./Testimonials";
import homeTestimonialsData from "./homeTestimonialsData";
import { Grid, Typography, Stack, Link, Button } from "@mui/material";

export const HomeTestimonials = () => {
  {
    /* Data mapping for the Testimonial Feature*/
  }
  let fourthContainer = homeTestimonialsData.map((el) => {
    return <Testimonials key={el.id} {...el} />;
  });
  return (
    <>
      {/* Heading and Link for the Feature*/}
      <Stack direction="row">
        <Typography
          sx={{
            color: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.primary.lightModeHeroTitle
                : theme.palette.primary.darkModeHeroTitle,

            pt: "20px",
            ml: "10%",
            width: "99px",
            height: "21px",
            fontFamily: "Poppins",
            fontWeight: "400",
            fontSize: "16px",
            lineHeight: "20.8px",
            letterSpacing: "-1%",
          }}
        >
          Testimonials
        </Typography>

        <Link
          href="/about/question/21334565"
          sx={{
            width: "42px",
            height: "21px",
            fontFamily: "Poppins",
            fontWeight: "400",
            fontSize: "12px",
            lineHeight: "20.8px",
            letterSpacing: "-1%",

            textDecoration: "none",
            ml: "45%",
            pt: "27px",
            color: "#95969D",
          }}
        >
          See all
        </Link>
      </Stack>
      {/* Heading and Link End*/}

      {/* Grid for the Feature*/}
      <Grid
        container
        spacing={4}
        sx={{
          margin: "auto",

          maxWidth: "100%",
          mb: "3%",
        }}
      >
        {fourthContainer}
      </Grid>
      {/* Grid End*/}

      {/* Sign Up Button to hire*/}
      <Button
        variant="contained"
        onClick={() => navigate("/sign-up")}
        sx={{
          backgroundColor: "#87CEEB",
          "&:hover": {
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[400]
                : theme.palette.grey[500],
          },
          ml: "19%",
          mb: "25px",
          width: "108.59px",
          height: "24px",
          borderRadius: "5px",
          fontFamily: "Poppins",
          fontWeight: "500",
          fontSize: "10px",
          lineHeight: "20px",
          letterSpacing: "-0.5",
        }}
      >
        Sign Up To Hire
      </Button>
      {/* Button End*/}
    </>
  );
};
