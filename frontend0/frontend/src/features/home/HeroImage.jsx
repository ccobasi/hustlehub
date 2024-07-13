// eslint-disable-next-line no-unused-vars
import React from 'react';
import Hero from './Hero';
import homeHeroData from './homeHeroData';
import Img from "../../assets/banner.jpg"

const HeroImage = () => {
  const heroDataWithBackground = {
    ...homeHeroData,
    backgroundImage: Img,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div>
      <Hero {...heroDataWithBackground} />
    </div>
  );
};

export default HeroImage;
