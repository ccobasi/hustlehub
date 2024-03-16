import Hero from "./Hero";
import homeHeroData from "./homeHeroData";

export const HomeHero = () => {
       {/* Presentaion for Hero Feature*/ }
    let firstContainer = <Hero {...homeHeroData}/>
    return(
        firstContainer

    );
       {/* Presentation End*/ }
}



