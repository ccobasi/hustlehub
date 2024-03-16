import Talents from "./Talents";
import homeTalentsData from "./homeTalentsData";
import { Grid, Typography, Link } from "@mui/material";

export const HomeTalents = () => {
  {
    /* Data mapping for the Talent Feature*/
  }
  let thirdContainer = homeTalentsData.map((el) => {
    return <Talents key={el.id} {...el} />;
  });
  {
    /* Mapping End*/
  }
  return (
    <>
      {/* Heading for the Feature*/}
      <Typography
        sx={{
          color: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.primary.lightModeHeroTitle
              : theme.palette.primary.darkModeHeroTitle,

          fontFamily: "Poppins",
          fontWeight: "600",
          fontSize: "16px",
          lineHeight: "20.8px",

          ml: "9%",
          pb: "15px",
          mt: "12%",
        }}
      >
        Find Talent Your Way
      </Typography>
      {/* Heading End*/}

      {/* Grid for the Feature*/}
      <Grid
        container
        spacing={4}
        sx={{
          maxWidth: "100%",
          margin: "auto",
        }}
      >
        {thirdContainer}
      </Grid>
      {/* Grid End*/}

      {/* Link for Freelancer Search Feature*/}
      <Link
        href="/freelancer-search"
        sx={{
          typography: (theme) => theme.typography.categoriesSeeAllLink,
          ml: "67%",
        }}
      >
        Freelancer Search
      </Link>
      {/* Link End*/}
    </>
  );
};
