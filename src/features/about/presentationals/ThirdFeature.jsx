import AboutUs from "../containers/About";
import thirdFeatureData from "../data/thirdFeature";

export const ThirdFeature = () => {
    //Presentation of the third feature
    let thirdContainer = <AboutUs {...thirdFeatureData}/>
    return(
        thirdContainer

    );
    //Presentation End
}



