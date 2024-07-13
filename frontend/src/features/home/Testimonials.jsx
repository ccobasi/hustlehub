import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Rating, Box, Stack,  } from "@mui/material";
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
        <Card sx={{ display: "flex",  borderRadius:"24px" }}>
          {/* Card content */}
          <CardContent
            sx={{
              flex: 1,
              overflow: "hidden",
              borderRadius: "24px",
            }}
          >
            {/* Card media for small devices*/}
            <CardMedia
              component="picture"
              sx={{
                width: "156px",
                height: "70px",

                mt: "5px",
                mb: "-55px",
                maxHeight: { xs: 48, md: 167 },
                maxWidth: { xs: 48, md: 250 },
                margin: "auto",
                display: { xs: "flex", md: "none" },
              }}
            >
              <Avartar src={image} alt={imageLabel} srcSet={sourceSet}  />
             
            </CardMedia>
            {/*  Card media End*/}
            {/* Card media for  medium devices*/}
            <CardMedia
              component="picture"
              sx={{
                width: "156px",
                height: "70px",

                mt: "5px",
                mb: "-55px",
                maxHeight: { xs: 48, md: 167 },
                maxWidth: { xs: 48, md: 250 },
                margin: "auto",
                ml: "25%",
                display: { xs: "none", md: "flex" },
              }}
            >
              <Avartar src={image} alt={imageLabel} srcSet={sourceSet}  />
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
                  pb: "20px",
                  pt: "75px",
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
              <Box sx={{ margin: "auto" }}>
                <Rating
                  name="job-rating"
                  value={rating}
                  sx={{
                    height: "14.93px",
                    border: "1px solid #FFFFFF",
                    color: "#FFDC5F",
                    mb: "30px",
                    mt: "10px",
                    textAlign: "match-parent",
                  }}
                />
              </Box>
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
