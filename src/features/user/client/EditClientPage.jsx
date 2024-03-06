import { useNavigate } from "react-router-dom";
import { EditClientFirstFeature } from "./presentationals/EditClientCard";
import { EditClientSecondFeature } from "./presentationals/AboutClientCard";
import { EditClientFifthFeature } from "./presentationals/ClientSkill";
import { EditClientThirdFeature } from "./presentationals/WorkExperience";
import { EditClientFourthFeature } from "./presentationals/Education";
import { EditClientSixthFeature } from "./presentationals/ClientLanguage";
import { EditClientSeventhFeature } from "./presentationals/ClientAppreciation";
import { EditClientEighthFeature } from "./presentationals/ClientResume";

const EditClientPage = () => {
  //Instatiate useNavigate
  let navigate = useNavigate();

  return (
    <>
      {/*First Client Edit Feature*/}
      <EditClientFirstFeature />
      {/*Second Client Edit Feature*/}
      <EditClientSecondFeature />

      {/*Third Client Edit Feature*/}

      <EditClientThirdFeature />

      {/*Fourth Client Edit Feature*/}
      <EditClientFourthFeature />
      {/*Fifth Client Edit Feature*/}
      <EditClientFifthFeature />
      {/*Sixth Client Edit Feature*/}
      <EditClientSixthFeature />
       {/*Seventh Client Edit Feature*/}
       <EditClientSeventhFeature/>
       {/*Eighth Client Edit Feature*/}
       <EditClientEighthFeature/>
    </>
  );
};

export default EditClientPage;
