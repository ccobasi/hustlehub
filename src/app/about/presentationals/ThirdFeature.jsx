import AboutUs from "../containers/About";
import thirdFeatureData from "../data/thirdFeature";

export const ThirdFeature = () => {
    let thirdContainer = <AboutUs {...thirdFeatureData}/>
    return(
        thirdContainer

    );
}



