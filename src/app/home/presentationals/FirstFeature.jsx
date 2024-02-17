import First from "../containers/First";
import firstFeatureData from "../data/firstFeature";

export const FirstFeature = () => {
    let firstContainer = <First {...firstFeatureData}/>
    return(
        firstContainer

    );
}



