import GreatWork from "./GreatWork";
import greatWorkData from "./greatWorkData";

import { Grid, Typography, Stack, Link, Button } from "@mui/material";

export const HomeGreatWork = () => {
  let updatesContainer = greatWorkData.map((el) => {
    return <GreatWork key={el.id} {...el} />;
  });
  return (
    <>
      {/* Heading for the Great Work Feature*/}
      <Typography
        sx={{
          color: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.primary.lightModeHeroTitle
              : theme.palette.primary.darkModeHeroTitle,

          pt: "20px",
          ml: "10%",

          width: "200px",
          height: "21px",
          fontFamily: "Poppins",
          fontWeight: "600",
          fontSize: "16px",
          lineHeight: "20.8px",
          letterSpacing: "-1%",
          mb: "2%",
        }}
      >
        <b>Find Great Work</b>
      </Typography>

      {/* Heading End*/}

      {/* Heading for the Great Work Projects and See all link*/}
      <Stack direction="row">
        <Typography
          sx={{
            color: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.primary.lightModeHeroTitle
                : theme.palette.primary.darkModeHeroTitle,

            pt: "30px",
            ml: "10%",
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

        <Link
          href="/projects"
          sx={{
            width: "52px",
            height: "21px",
            fontFamily: "Poppins",
            fontWeight: "400",
            fontSize: "12px",
            lineHeight: "20.8px",
            letterSpacing: "-1%",

            textDecoration: "none",
            ml: "10%",
            pt: "27px",
            color: "#95969D",
          }}
        >
          See all
        </Link>
      </Stack>

      {/* Heading and Link End*/}

      {/* Grid for the Great Work Feature*/}

      <Grid
        container
        spacing={4}
        sx={{
          margin: "auto",

          maxWidth: "100%",
          mb: "5%",
        }}
      >
        {updatesContainer}
      </Grid>

      {/* Grid End*/}

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
          ml: "19%",
          mb: "25px",
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
      {/* Button End*/}
    </>
  );
};
