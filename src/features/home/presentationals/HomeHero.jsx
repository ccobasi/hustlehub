import Hero from "../containers/Hero";
import homeHeroData from "../data/homeHeroData";

export const HomeHero = () => {
       {/* Presentaion for Hero Feature*/ }
    let firstContainer = <Hero {...homeHeroData}/>
    return(
        firstContainer

    );
       {/* Presentation End*/ }
}



