import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button,  } from "@mui/material";
import Stack from "@mui/material/Stack";


const items = [
  {
    id: 0,
    jobTitle: "Product Design",
    company: "Google",
    topic1: "Design",
    topic2: "UI/UX",
    rank: "Junior",
    jobType: "UI Design Job",
    sourceSet: "./frontend/dist/assets/greatProject.png, ",
    image: "./frontend/dist/assets/greatProject.png",

    imageLabel: "Product Design",
  },

  {
    id: 1,
    jobTitle: "Product Design",
    company: "Google",
    topic1: "Design",
    topic2: "UI/UX",
    rank: "Junior",
    jobType: "UI Design Job",
    sourceSet: "./frontend/dist/assets/greatProject.png, ",
    image: "./frontend/dist/assets/greatProject.png",

    imageLabel: "Product Design",
  },
  {
    id: 2,
    jobTitle: "Product Design",
    company: "Google",
    topic1: "Design",
    topic2: "UI/UX",
    rank: "Junior",
    jobType: "UI Design Job",
    sourceSet: "./frontend/dist/assets/greatProject.png, ",
    image: "./frontend/dist/assets/greatProject.png",

    imageLabel: "Product Design",
  },

  {
    id: 3,
    jobTitle: "Product Design",
    company: "Google",
    topic1: "Design",
    topic2: "UI/UX",
    rank: "Junior",
    jobType: "UI Design Job",
    sourceSet: "./frontend/dist/assets/greatProject.png, ",
    image: "./frontend/dist/assets/greatProject.png",
    imageLabel: "Product Design",
  },
];

export default function ProjectsCarousel() {
  return (
    <Carousel
      animation="slide"
      // sx={
      //   {
      //     borderRadius:"12px"
      //   }
      // }
    >
      {items.map((item, i) => (
        <GreatWork key={i} {...item} />
      ))}
    </Carousel>
  );
}

const GreatWork = ({
  jobTitle,
  company,
  topic1,
  topic2,
  rank,
  jobType,
  sourceSet,
  image,
  imageLabel,
}) => {
  return (
    <>
      {/* Grid for the Great Work Feature */}
      <Paper
        sx={
          {
            //borderRadius:"12px"
          }
        }
      >
        {/* Card for the Feature */}
        <Card
          sx={{
            display: "flex",

            backgroundColor: "#87CEEB",
            //borderRadius:"12px"
          }}
        >
          {/* Card Content for the feature */}
          <CardContent
            sx={{ flex: 1, overflow: "hidden", width: "100%", height: "186px" }}
          >
            {/* Card Media for the feature */}
            <CardMedia
              component="picture"
              sx={{
                height: "70px",
                maxHeight: { xs: 233, md: 167 },
              }}
            >
              <source srcSet={sourceSet} />
              <Stack direction="row" sx={{ ml: "12%", mt: "4%" }}>
                <img
                  src={image}
                  alt={imageLabel}
                  style={{
                    width: "46px",
                    height: "46px",
                    borderRadius: "12px",
                  }}
                />
                {/* Heading for the Job title */}
                <Typography
                  sx={{
                    color: "#FFFFFF",
                    fontFamily: "Poppins",
                    fontWeight: "600",
                    fontSize: "16px",
                    lineHeight: "20.8px",
                    letterSpacing: "-1%",
                    pt: "10px",
                    ml: "5%",
                  }}
                >
                  {jobTitle}
                </Typography>
                <Stack direction="column">
                  <Typography
                    sx={{
                      color: "#FFFFFF",
                      fontFamily: "Poppins",
                      fontWeight: "500",
                      fontSize: "14px",
                      lineHeight: "21px",
                      letterSpacing: "-1%",
                      pt: "10px",
                      pb: "10px",
                      ml: "60%",
                    }}
                  >
                    {company}
                  </Typography>
                </Stack>
              </Stack>
            </CardMedia>
            <Stack direction="row">
              <Button
                variant="contained"
                disabled
                sx={{
                  ml: "12%",
                  fontFamily: "Poppins",
                  fontWeight: "400",
                  fontSize: "11px",
                  lineHeight: "17.6px",
                  letterSpacing: "-1%",
                  color: "#FFFFFF",
                  width: "69px",
                  height: "26px",
                  borderRadius: "65px",
                  backgroundColor: "#87CEEB",
                }}
              >
                {topic1}
              </Button>
              <Button
                variant="contained"
                disabled
                sx={{
                  ml: "12%",
                  fontFamily: "Poppins",
                  fontWeight: "400",
                  fontSize: "11px",
                  lineHeight: "17.6px",
                  letterSpacing: "-1%",
                  color: "#FFFFFF",
                  width: "69px",
                  height: "26px",
                  borderRadius: "65px",
                  backgroundColor: "#87CEEB",
                }}
              >
                {topic2}
              </Button>
              <Button
                variant="contained"
                disabled
                sx={{
                  ml: "12%",
                  fontFamily: "Poppins",
                  fontWeight: "400",
                  fontSize: "11px",
                  lineHeight: "17.6px",
                  letterSpacing: "-1%",
                  color: "#FFFFFF",
                  width: "69px",
                  height: "26px",
                  borderRadius: "65px",
                  backgroundColor: "#87CEEB",
                }}
              >
                {rank}
              </Button>
            </Stack>
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontWeight: "500",
                fontSize: "13px",
                lineHeight: "20.8px",
                letterSpacing: "-1%",
                color: "#FFFFFF",
                width: "169px",
                height: "21px",

                mt: "10%",
                ml: "5%",
              }}
            >
              {jobType}
            </Typography>
          </CardContent>
        </Card>
      </Paper>
    </>
  );
};
