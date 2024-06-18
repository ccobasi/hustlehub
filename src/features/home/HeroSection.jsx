import HeroCard from './HeroCard';
import heroData from './heroData';
import { Grid } from "@mui/material";

export const HeroSection = () => {
  let secondContainer = heroData.map((el) => {
    return <HeroCard key={el.id} {...el} />;
  });
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
    </>
  );
};
