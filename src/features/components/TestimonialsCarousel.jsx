import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Card, CardContent, CardMedia, Rating, Box } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Link from '@mui/material/Link'

const testimonialData = [
    {
        id:0,
        name: "Emily Willis",
    
        jobTitle: "Outstanding Service",
        rating: 5,
        sourceSet:
          "./frontend/dist/assets/emilyWillis.png, ",
        image: "./frontend/dist/assets/emilyWillis.png",
    
        imageLabel: "Emily Willis",
      },
    
      {
        id:1,
        name: "Joy Nelson",
    
        jobTitle: "Outstanding Service",
        rating: 4,
        sourceSet:
        "./frontend/dist/assets/emilyWillis1.png, ",
        image: "./frontend/dist/assets/emilyWillis1.png",
        imageLabel: "Business Analysis",
      },
      {
        id:2,
        name: "Peterson Water",
    
        jobTitle: "Outstanding Service",
        rating: 4,
        sourceSet:
        "./frontend/dist/assets/emilyWillis2.png, ",
        image: "./frontend/dist/assets/emilyWillis2.png",
        imageLabel: "Peterson Water",
      },

      {
        id:3,
        name: "Amanda Snow",
    
        jobTitle: "Outstanding Service",
        rating: 4,
        sourceSet:
        "./frontend/dist/assets/emilyWillis3.png, ",
        image: "./frontend/dist/assets/emilyWillis3.png",
        imageLabel: "Amanda Snow",
      },
  ];


  function Testimonials({
    sourceSet,
    image,
    imageLabel,
    name,
    jobTitle,
    rating,
  }) {
    return (
      <>
           {/* Card */}
           <Grid item xs={6} md={3} sx={{ mb: "10px" }}>
          <Card sx={{ display: "flex",
             //borderRadius: "24px" 
             }}>
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
                <Avatar src={image} alt={imageLabel} srcSet={sourceSet} />
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
            </CardContent>
          </Card>
          </Grid>
      </>
    );
  }
  

  
const  TestimonialsCarousel = () => {
    const [nav1, setNav1] = useState(null);
    const [currentSlide, setCurrentSlide] = useState(0)
    const [slider1, setSlider1] = useState(null);
    useEffect(() => {
      setNav1(slider1);
    }, [slider1]);
  
    const settings = {
      dots: true,
      speed: 2000,
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true,
      autoplay: true,
      onReInit: () => setCurrentSlide(slider1?.innerSlider.state.currentSlide),
      autoplaySpeed: 2000,
      lazyLoad: true,
      asNavFor: ".slider-nav",
      focusOnSelect: true,
 

      responsive: [
        {
          breakpoint: 1024,
          settings: {
           slidesToShow: 2,
          }
        },
        // {
        //     breakpoint: 1000,
        //     settings: {
        //      slidesToShow: 2,
        //     }
        //    },
        {
            //{min:640, max:767}
            //600
          breakpoint:600,
          settings: {
           slidesToShow: 1,
          }
         }
       
         

      ]
    };

    
    return <> 
    <div>
 {/* Heading and Link for the Feature*/}
 <Stack direction="row">
        <Typography
          sx={{
            color: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.primary.lightModeHeroTitle
                : theme.palette.primary.darkModeHeroTitle,
            pb: {lg:'15%',md:"8%",sm:'1%',xs:'1%'},
            ml:{lg:'10%',md:"10%",sm:'10%',xs:'10%'},
            width: "99px",
            height: "21px",
            fontFamily: "Poppins",
            fontWeight: "700",
            fontSize: "16px",
            lineHeight: "40.8px",
            letterSpacing: "5%",
          }}
        >
          Testimonials
        </Typography>

        {/* <Link
          href="/about/question/21334565"
          sx={{
            width: "42px",
            height: "21px",
            fontFamily: "Poppins",
            fontWeight: "400",
            fontSize: "12px",
            lineHeight: "20.8px",
            letterSpacing: "-1%",
            textDecoration: "none",
            pt: {lg:'1%',md:"1%",sm:'1%',xs:'1%'},
            ml:{lg:'70%',md:"70%",sm:'60%',xs:'50%'},
            color: "#95969D",
          }}
        >
          See all
        </Link> */}
      </Stack>
     
    </div>

    <div className="testimonialContent">
     <div className="testimonialContainer">
      <Slider {...settings}
          asNavFor={nav1}
          ref={(slider) => setSlider1(slider)}
      >
        {testimonialData.map((item) => (
          <div  key={item.id}>
            <div className="testimonialBody">
            <Testimonials {...item}/>
            </div>
          </div>
        ))}
      </Slider>
    </div> 
  </div> </>;
  };
  export default TestimonialsCarousel;