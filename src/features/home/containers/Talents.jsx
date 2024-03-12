import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Card, CardContent, CardMedia, Rating, Box } from "@mui/material";

export default function Talents({
  sourceSet,
  image,
  imageLabel,
  name,
  jobTitle,
  rating,
}) {
  return (
    <>
      {/* Grid for the Find Talents Feature */}
      <Grid item xs={6} md={4} sx={{ mb: "10px" }}>
        {/* Card for the feature */}
        <Card sx={{ display: "flex" }}>
          {/* Card Content for the feature */}
          <CardContent
            sx={{
              flex: 1,
              overflow: "hidden",

              width: "155px",
              height: "252px",

              borderRadius: "16px",
              boxShadow: "0px 4px 20px -10px #00000005",
            }}
          >
            {/* Card Media  for small devices*/}
            <CardMedia
              component="picture"
              sx={{
                width: "156px",
                height: "70px",
                maxHeight: { xs: 48, md: 167 },
                maxWidth: { xs: 48, md: 250 },
                margin: "auto",
                display: { xs: "flex", md: "none" },
              }}
            >
              <source srcSet={sourceSet} />
              <img src={image} alt={imageLabel} />
            </CardMedia>
            {/* Card Media End */}

            {/* Card media for medium devices */}
            <CardMedia
              component="picture"
              sx={{
                width: "156px",
                height: "70px",
                maxHeight: { xs: 48, md: 167 },
                maxWidth: { xs: 48, md: 250 },
                margin: "auto",
                display: { xs: "none", md: "flex", lg: "none" },
                mr: "5%",
              }}
            >
              <source srcSet={sourceSet} />
              <img src={image} alt={imageLabel} />
            </CardMedia>
            {/* Card Media End */}
            {/* Card media for large devices */}
            <CardMedia
              component="picture"
              sx={{
                width: "156px",
                height: "70px",
                maxHeight: { xs: 48, md: 167 },
                maxWidth: { xs: 48, md: 250 },
                margin: "auto",
                display: { xs: "none", md: "none", lg: "flex" },
                mr: "14%",
              }}
            >
              <source srcSet={sourceSet} />
              <img src={image} alt={imageLabel} />
            </CardMedia>
            {/* Card media End */}

            {/* Name of the talent */}
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
            {/* Name End */}
            {/* Job Title */}
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
            {/* Job title End */}
            {/* Readonly Job Rating  for small devices*/}
            <Rating
              name="job-rating"
              value={rating}
              readOnly
              sx={{
                height: "14.93px",
                border: "1px solid #FFFFFF",
                color: "#FFDC5F",
                mb: "30px",
                mt: "10px",
                justifyContent: "center",
                alignItems: "center",
                display: { xs: "flex", md: "none" },
                ml: "1%",
              }}
            />
            {/* Rating End */}
            {/* Readonly Job Rating  for medium devices*/}

            <Rating
              name="job-rating"
              value={rating}
              readOnly
              sx={{
                height: "14.93px",
                border: "1px solid #FFFFFF",
                color: "#FFDC5F",
                mb: "30px",
                mt: "10px",
                justifyContent: "center",
                alignItems: "center",
                display: { xs: "none", md: "flex" },
                ml: "26%",
              }}
            />
            {/* Rating End */}
          </CardContent>
          {/* Card content End */}
        </Card>
        {/* Card End */}
      </Grid>
      {/* Grid */}
    </>
  );
}
