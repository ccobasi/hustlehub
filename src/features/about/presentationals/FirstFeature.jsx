import AboutUs from "../containers/About";
import firstFeatureData from "../data/firstFeature";

export const FirstFeature = () => {
    //Presentaion of the first feature 
    let firstContainer = <AboutUs {...firstFeatureData}/>
    return(
        firstContainer

    );
    //Presentaion End
}



