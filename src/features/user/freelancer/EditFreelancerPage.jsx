import { useNavigate } from "react-router-dom";
import { EditFreelancerFirstFeature } from "./presentationals/EditFreelancerCard";
import { EditFreelancerSecondFeature } from "./presentationals/AboutFreelancerCard";
import { EditFreelancerFifthFeature } from "./presentationals/FreelancerSkill";
import { EditFreelancerThirdFeature } from "./presentationals/FreelancerWorkExperience";
import { EditFreelancerFourthFeature } from "./presentationals/FreelancerEducation";
import { EditFreelancerSixthFeature } from "./presentationals/FreelancerLanguage";
import { EditFreelancerSeventhFeature } from "./presentationals/FreelancerAppreciation";
import { EditFreelancerEighthFeature } from "./presentationals/FreelancerResume";

export default function EditFreelancerPage  () {
  //Instatiate useNavigate
  let navigate = useNavigate();

  return (
    <>
      {/*First Freelancer Edit Feature*/}
      <EditFreelancerFirstFeature />
      {/*Second Client Edit Feature*/}
      <EditFreelancerSecondFeature />

      {/*Third Freelancer Edit Feature*/}

      <EditFreelancerThirdFeature />

      {/*Fourth Freelancer Edit Feature*/}
      <EditFreelancerFourthFeature />
      {/*Fifth Freelancer Edit Feature*/}
      <EditFreelancerFifthFeature />
      {/*Sixth Freelancer Edit Feature*/}
      <EditFreelancerSixthFeature />
       {/*Seventh Freelancer Edit Feature*/}
       <EditFreelancerSeventhFeature/>
       {/*Eighth Freelancer Edit Feature*/}
       <EditFreelancerEighthFeature/>
    </>
  );
};

 
