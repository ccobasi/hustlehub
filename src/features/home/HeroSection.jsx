import HeroCard from './HeroCard';
import heroData from './heroData';
import { Grid,Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';


export const HeroSection = () => {
  const navigate = useNavigate();
  let secondContainer = heroData.map((el) => {
    return <HeroCard key={el.id} {...el} />;
  });

  const handleClick = () => {
    navigate('/sign-up'); 
  }
  return (
    <>
      {/* Grid for the Categories Feature*/}
      <Grid
        container
        spacing={6}
        sx={{
          margin: "auto",

          maxWidth: "90%",
        }}
      >
        {secondContainer}
      </Grid>
      {/* Grid End*/}
     
       {/* Button for Getting started */}
       <Button
          variant="contained"
          sx={{
            mb: "5%",
            typography: (theme) => theme.typography.heroGetStartedButton,
            "&:hover": {
              backgroundColor: (theme) =>
                theme.palette.mode === "light"
                  ? theme.palette.grey[400]
                  : theme.palette.grey[500],
            },
            ml:"55%",
            mt:"4%"
          
          }}
          onClick={handleClick}
        >
          Get Started
        </Button>
        {/* Button End */}

    </>
  );
};
