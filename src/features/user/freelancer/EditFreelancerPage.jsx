import { useNavigate } from "react-router-dom";
import { EditFreelancerFirstFeature } from "./EditFreelancerCard";


export default function EditFreelancerPage  () {
  //Instatiate useNavigate
  let navigate = useNavigate();

  return (
    <>
      {/*First Freelancer Edit Feature*/}
      <EditFreelancerFirstFeature />
    
    </>
  );
};

 
