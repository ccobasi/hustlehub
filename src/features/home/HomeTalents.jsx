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
          // ml: "9%",
          // pb: "15px",
          // mt: "12%",
          pb: {lg:'2%',md:"2%",sm:'1%',xs:'1%'},
          mt: {lg:'5%',md:"5%",sm:'10%',xs:'10%'},
          ml:{lg:'10%',md:"10%",sm:'10%',xs:'10%'},

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
          // maxWidth: "100%",
          // margin: "auto",
          pb: {lg:'15%',md:"8%",sm:'1%',xs:'1%'},
          mt: {lg:'0%',md:"0%",sm:'5%',xs:'5%'},
          ml:{lg:'-2%',md:"-2%",sm:'2%',xs:'-2%'},

        }}
      >
        {thirdContainer}
      </Grid>
      {/* Grid End*/}

      {/* Link for Freelancer Search Feature*/}

      {/* <Link
        href="/freelancer-search"
        sx={{
          typography: (theme) => theme.typography.categoriesSeeAllLink,
          ml: "67%",
        }}
      >
        Freelancer Search
      </Link> */}


      {/* Link End*/}
    </>
  );
};
