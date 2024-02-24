import AboutUs from "../containers/About";
import firstFeatureData from "../data/firstFeature";

export const FirstFeature = () => {
    let firstContainer = <AboutUs {...firstFeatureData}/>
    return(
        firstContainer

    );
}



