import AboutUs from "../containers/About";
import secondFeatureData from "../data/secondFeature";

export const SecondFeature = () => {
    //Presentation of the seacond feature
    let secondContainer = <AboutUs {...secondFeatureData}/>
    return(
        secondContainer

    );
    //Presentation End
}



