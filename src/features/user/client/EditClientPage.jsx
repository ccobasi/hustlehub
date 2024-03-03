import { useNavigate } from "react-router-dom";
import { EditClientFirstFeature } from "./presentationala/EditClientCard";
import { EditClientSecondFeature } from "./presentationala/AboutClientCard";
import { EditClientFifthFeature } from "./presentationala/ClientSkill";
import { EditClientThirdFeature } from "./presentationala/WorkExperience";
import { EditClientFourthFeature } from "./presentationala/Education";
import { EditClientSixthFeature } from "./presentationala/ClientLanguage";
import { EditClientSeventhFeature } from "./presentationala/ClientAppreciation";
import { EditClientEighthFeature } from "./presentationala/ClientResume";

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
