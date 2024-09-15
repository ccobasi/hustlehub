import React from 'react';
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Card, CardContent, CardMedia, Rating, Box } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@mui/material';
import homeTalentsData from '../home/homeTalentsData';

export default function Demo() {
    const items = [
        {
            name: 'Aya Bouchiha',
            description: 'Full Stack Web Developer',
        },
        {
            name: 'John Doe',
            description: 'Author',
        },
        {
            name: 'Pitsu Coma',
            description: 'Math Student',
        },
    ];

    return (
        <Carousel animation='slide' style={{maxWidth:"500px", marginRight:"2px"}}>
            {/* {items.map((item, i) => (
                <Item key={i} {...item} />
            ))} */}
            {homeTalentsData.map((data, index)=>(
                <Talents key={index} {...data}/>
            ))}
           
        </Carousel>
    );
}

const Item = ({name,description}) => {
    return (
        <><Paper>
          
                <h2>{name}</h2><p>{description}</p><Button>more info...</Button>
                
        </Paper></>
    );
};

const Talents = ({
    sourceSet,
    image,
    imageLabel,
    name,
    jobTitle,
    rating,
  })=>{
    return (
        <>
         <Paper sx={{ display: "flex", borderRadius: "24px" }}>
            {/* Card for the feature */}
            <Card  sx={{ display: "flex", borderRadius: "24px" }}>
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
                {/* Card Media*/}
                <CardMedia
                  component="picture"
                  sx={{
                    width: "156px",
                    height: "70px",
                    maxHeight: { xs: 48, sm: 50, md: 167, lg: 200 },
                    maxWidth: { xs: 48, sm: 50, md: 167, lg: 200 },
                    ml: { lg: "40%", md: "40%", sm: "40%", xs: "35%" },
                    mb: { lg: "-30%", md: "-25%", sm: "-25%", xs: "-25%" },
                    mt: { lg: "10%", md: "10%", sm: "10%", xs: "25%" },
                  }}
                >
                  <Avatar
                    src={image}
                    alt={imageLabel}
                    srcSet={sourceSet}
                    style={{ height: "48px", width: "48px" }}
                  />
                </CardMedia>
                {/* Card Media End */}
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
                    pb: { lg: "10%", md: "10%", sm: "10%", xs: "10%" },
                    pt: { lg: "-7%", md: "35%", sm: "35%", xs: "35%" },
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
                    justifyContent: "center",
                    alignItems: "center",
                    mt: { lg: "5%", md: "5%", sm: "5%", xs: "10%" },
                    ml: { lg: "30%", md: "27%", sm: "27%", xs: "15%" },
                    mb: { lg: "0%", md: "0%", sm: "5%", xs: "5%" },
                  }}
                />
                {/* Rating End */}
              </CardContent>
              {/* Card content End */}
            </Card>
            {/* Card End */}
          </Paper>
          {/* Grid */}
        </>
      );

}