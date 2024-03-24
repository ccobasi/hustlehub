import Hero from "./Hero";
import homeHeroData from "./homeHeroData";
import backgroundImageUrl from "../../assets/banner.jpg";

export const HomeHero = () => {
       
    let firstContainer = <Hero {...homeHeroData} backgroundImage={backgroundImageUrl}/>
    return(
        firstContainer

    );
      
}



