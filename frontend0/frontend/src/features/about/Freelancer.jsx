import AboutUs from "./About";
import freelanceData from "./freelancerData"

export const FreelancerFeature = () => {
    //Presentation of the seacond feature
    let secondContainer = <AboutUs {...freelanceData}/>
    return(
        secondContainer

    );
    //Presentation End
}



