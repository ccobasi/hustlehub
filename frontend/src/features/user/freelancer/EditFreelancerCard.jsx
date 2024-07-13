import EditClientCard from "../client/EditClientCard";
import editFreelancerCardData from "./editFreelancerCardData";

export const EditFreelancerFirstFeature = () => {
  //Data mapping
  let cardContainer = editFreelancerCardData.map((el) => {
    return <EditClientCard key={el.id} {...el} />;
  });//mapping End
  return <div>{cardContainer}</div>;
};
