import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";


export default function Hero({ title, description, backgroundImage }) {
  return (
    <>
      {/* Paper for the Hero Feature */}
      <Paper
        elevation={0}
        sx={{
          position: "relative",
          color: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.background.default
              : theme.palette.grey[400],
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        {/* Box for background color */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[50]
                : theme.palette.grey[900],
          }}
        />
        {/* Box End */}
        {/* Grid for the feature*/}
        <Grid container sx={{ maxWidth: "100%" }}>
          <Grid item md={12}>
            {/* Inner Grid Box */}
            <Box
              sx={{
                position: "relative",
                p: { xs: 3, md: 6 },
                pr: { md: 0 },
              }}
            >
              {/* Heading for the title */}
              <Typography
                gutterBottom
                sx={{
                  color: (theme) =>
                    theme.palette.mode === "light"
                      ? theme.palette.primary.lightModeHeroTitle
                      : theme.palette.primary.darkModeHeroTitle,

                  fontFamily: "Poppins",
                  fontWeight: "600",
                  fontSize:  { xs: 16, md: 24, lg: 32 },
                  lineHeight: { xs: 1.5, md: 1, lg: 1 },

                  ml: "2%",
                  pb: "5%",
                  mt: "15%",
                }}
              >
                <b><h1>{title}</h1></b>
              </Typography>
              {/* Heading End */}

              {/* Description */}
              <Typography
                paragraph
                sx={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  fontFamily: "Poppins",
                  fontWeight: "100",

                  fontSize: { xs: 14, md: 18, lg: 20 },
                  lineHeight: { xs: 1, md: 1, lg: 1.5 },
                  pb: "8px",
                  ml: "2%",

                  color: (theme) =>
                    theme.palette.mode === "light"
                      ? theme.palette.primary.lightModeHeroTitle
                      : theme.palette.primary.darkModeHeroTitle,
                  //mr: "1%",
                }}
              >
                {description}
              </Typography>
              {/* Description End */}
            </Box>
            {/* Inner Grid Box End */}
          </Grid>
        </Grid>
        {/* Grid End */}

        {/* Button for Getting started */}
        <Button
          href="/sign-up"
          variant="contained"
          sx={{
            ml: "7%",
            mb: "5%",
            typography: (theme) => theme.typography.heroGetStartedButton,
            "&:hover": {
              backgroundColor: (theme) =>
                theme.palette.mode === "light"
                  ? theme.palette.grey[400]
                  : theme.palette.grey[500],
            },
          }}
        >
          Get Started
        </Button>
        {/* Button End */}
      </Paper>
      {/* Paper End*/}
    </>
  );
}
