import { useNavigate } from "react-router-dom";
import { HomeHero } from "./presentationals/HomeHero";
import { HomeCategories } from "./presentationals/HomeCategories";
import { HomeTestimonials } from "./presentationals/HomeTestimonials";
import { HomeTalents } from "./presentationals/HomeTalents";
import { WhyBusinessesTurnToHustleHub } from "./presentationals/WhyHustleHub";
import { HomeGreatWork } from "./presentationals/HomeGreatWork";

export default function HomePage() {
  //Instatiate useNavigate
  let navigate = useNavigate();

  return (
    <>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, intial-scale=1" />
        <title>Hustle Hub Home</title>
      </head>

      {/*First Home Feature*/}

      <HomeHero />

      {/*Second Home Feature*/}
      <HomeCategories />

      {/*Third Home Feature*/}
      <HomeTalents />

      <WhyBusinessesTurnToHustleHub />

      {/*FOurth Home Feature*/}
      <HomeTestimonials />
      {/* Fifth Home Feature */}
      <HomeGreatWork />
    </>
  );
}
