import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

export default function AboutUs({ subtitle1, description1, subtitle2, description2, subtitle3, description3 }) {
  return (
    // Paper for the about us page container
    <Paper
      sx={{
        position: "relative",
        color: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.background.default
            : theme.palette.grey[300],

        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        mt: "3%",
        mb: "3%",
      }}
    >
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
      <Grid container>
        <Grid item md={12}>
          <Box
            sx={{
              position: "relative",
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
            }}
          >
            <Typography
              component="h1"
              variant="h4"
              gutterBottom
              sx={{
                fontFamily: "Poppins",
                fontWeight: "600",
                fontSize: "14px",
                lineHeight: "20.8px",
               
                color: (theme) =>
                  theme.palette.mode === "light"
                    ? theme.palette.primary.lightModeHeroTitle
                    : theme.palette.primary.darkModeHeroTitle,
              }}
            >
              {subtitle1}
            </Typography>
            <Typography
              variant="h5"
              paragraph
              sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                textAlign: "initial",
                fontFamily: "Poppins",
                fontWeight: "300",
                fontSize: "14px",
                lineHeight: "20.8px",
                color: (theme) =>
                  theme.palette.mode === "light"
                    ? theme.palette.primary.lightModeHeroTitle
                    : theme.palette.primary.darkModeHeroTitle,
              }}
            >
              {description1}
            </Typography>
              <Typography
              component="h1"
              variant="h4"
              gutterBottom
              sx={{
                fontFamily: "Poppins",
                fontWeight: "600",
                fontSize: "14px",
                lineHeight: "20.8px",
               
                color: (theme) =>
                  theme.palette.mode === "light"
                    ? theme.palette.primary.lightModeHeroTitle
                    : theme.palette.primary.darkModeHeroTitle,
              }}
            >
              {subtitle2}
            </Typography>
            <Typography
              variant="h5"
              paragraph
              sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                textAlign: "initial",
                fontFamily: "Poppins",
                fontWeight: "300",
                fontSize: "14px",
                lineHeight: "20.8px",
                color: (theme) =>
                  theme.palette.mode === "light"
                    ? theme.palette.primary.lightModeHeroTitle
                    : theme.palette.primary.darkModeHeroTitle,
              }}
            >
              {description2}
            </Typography>
              <Typography
              component="h1"
              variant="h4"
              gutterBottom
              sx={{
                fontFamily: "Poppins",
                fontWeight: "600",
                fontSize: "14px",
                lineHeight: "20.8px",
               
                color: (theme) =>
                  theme.palette.mode === "light"
                    ? theme.palette.primary.lightModeHeroTitle
                    : theme.palette.primary.darkModeHeroTitle,
              }}
            >
              {subtitle3}
            </Typography>
            <Typography
              variant="h5"
              paragraph
              sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                textAlign: "initial",
                fontFamily: "Poppins",
                fontWeight: "300",
                fontSize: "14px",
                lineHeight: "20.8px",
                color: (theme) =>
                  theme.palette.mode === "light"
                    ? theme.palette.primary.lightModeHeroTitle
                    : theme.palette.primary.darkModeHeroTitle,
              }}
            >
              {description3}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Paper>
    //Paper End
  );
}
