import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Rating, Stack } from "@mui/material";
import Avartar from "@mui/material/Avatar";

export default function Testimonials({
  sourceSet,
  image,
  imageLabel,
  name,
  jobTitle,
  rating,
}) {
  return (
    <>
      {/* Grid for the Testimonials Feature */}
      <Grid item xs={6} md={3} sx={{ mb: "10px" }}>
        {/* Card */}
        <Card sx={{ display: "flex", borderRadius: "24px" }}>
          {/* Card content */}
          <CardContent
            sx={{
              flex: 1,
              overflow: "hidden",
              borderRadius: "24px",
            }}
          >
            {/* Card media */}
            <CardMedia
              component="picture"
              sx={{
                width: "156px",
                height: "70px",
                maxHeight: { xs: 48, sm: 50, md: 167, lg: 200 },
                maxWidth: { xs: 48, sm: 50, md: 167, lg: 200 },
                ml: { lg: "40%", md: "40%", sm: "40%", xs: "35%" },
                mb: { lg: "-35%", md: "-35%", sm: "-35%", xs: "-5%" },
              }}
            >
              <Avartar src={image} alt={imageLabel} srcSet={sourceSet} />
            </CardMedia>
            {/* Card Media End */}
            {/* Talent's name, job title and rating  */}
            <Stack direction="column">
              <Typography
                sx={{
                  color: (theme) =>
                    theme.palette.mode === "light"
                      ? theme.palette.primary.lightModeHeroTitle
                      : theme.palette.primary.darkModeHeroTitle,

                  height: "14.93px",
                  fontFamily: "Poppins",
                  fontWeight: "600",
                  fontSize: "14px",
                  lineHeight: "18.2px",
                  letterSpacing: "-1%",
                  pb: { lg: "10%", md: "10%", sm: "6%", xs: "10%" },
                  pt: { lg: "35%", md: "35%", sm: "35%", xs: "35%" },

                  textAlign: "center",
                }}
              >
                {name}
              </Typography>
              <Typography
                sx={{
                  color: (theme) =>
                    theme.palette.mode === "light"
                      ? theme.palette.primary.lightModeHeroTitle
                      : theme.palette.primary.darkModeHeroTitle,
                  textAlign: "center",
                  height: "15.76px",
                  fontFamily: "Poppins",
                  fontWeight: "400",
                  fontSize: "12px",
                  lineHeight: "19.2px",
                  letterSpacing: "-1%",
                }}
                component="legend"
              >
                {jobTitle}
              </Typography>
              <Rating
                name="job-rating"
                value={rating}
                sx={{
                  height: "14.93px",
                  border: "1px solid #FFFFFF",
                  color: "#FFDC5F",
                  textAlign: "match-parent",
                  mt: { lg: "5%", md: "5%", sm: "3%", xs: "3%" },
                  ml: { lg: "20%", md: "20%", sm: "30%", xs: "19%" },
                  mb: { lg: "0%", md: "0%", sm: "0%", xs: "0%" },
                }}
              />
            </Stack>
            {/* Talent's details End */}
          </CardContent>
          {/* Card Content End */}
        </Card>
        {/* Card End */}
      </Grid>
      {/* Grid End */}
    </>
  );
}
