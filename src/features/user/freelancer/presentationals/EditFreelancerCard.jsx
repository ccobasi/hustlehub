import EditClientCard from "../../client/containers/EditClientCard";
import editFreelancerCardData from "../data/editFreelancerCard";

export const EditFreelancerFirstFeature = () => {
  let cardContainer = editFreelancerCardData.map((el) => {
    return <EditClientCard key={el.id} {...el} />;
  });
  return <div>{cardContainer}</div>;
};
