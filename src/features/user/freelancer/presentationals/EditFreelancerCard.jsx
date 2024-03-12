import EditClientCard from "../../client/containers/EditClientCard";
import editFreelancerCardData from "../data/editFreelancerCard";

export const EditFreelancerFirstFeature = () => {
  //Data mapping
  let cardContainer = editFreelancerCardData.map((el) => {
    return <EditClientCard key={el.id} {...el} />;
  });//mapping End
  return <div>{cardContainer}</div>;
};
