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
          width: "200px",
          height: "21px",
          fontFamily: "Poppins",
          fontWeight: "600",
          fontSize: "16px",
          lineHeight: "20.8px",
          letterSpacing: "-1%",
          ml:{lg:'10%',md:"10%",sm:'10%',xs:'10%'},
          mb: {lg:'2%',md:"5%",sm:'5%',xs:'5%'},
          pt: {lg:'8%',md:"10%",sm:'20%',xs:'20%'},
        }}
      >
        Find Great Work
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
            pt: {lg:'3%',md:"1%",sm:'2%',xs:'4%'},
            ml:{lg:'10%',md:"10%",sm:'10%',xs:'10%'},
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
            pt: {lg:'3%',md:"1%",sm:'2%',xs:'4%'},
            ml:{lg:'40%',md:"40%",sm:'30%',xs:'10%'},
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
          maxWidth: "100%",
          ml:{lg:'0%',md:"0%",sm:'5%',xs:'1%'},
          mb: {lg:'5%',md:"5%",sm:'5%',xs:'5%'},
          pt: {lg:'3%',md:"3%",sm:'10%',xs:'10%'},
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
          ml:{lg:'10%',md:"15%",sm:'15%',xs:'10%'},
          mb: {lg:'5%',md:"5%",sm:'5%',xs:'5%'},
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
