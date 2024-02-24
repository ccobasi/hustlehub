import AboutUs from "../containers/About";
import secondFeatureData from "../data/secondFeature";

export const SecondFeature = () => {
    let secondContainer = <AboutUs {...secondFeatureData}/>
    return(
        secondContainer

    );
}



