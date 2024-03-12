import EditClientCard from "../containers/EditClientCard";
import editClientCardData from "../data/editClientCard";

export const EditClientFirstFeature = () => {
  //Data mapping
  let cardContainer = editClientCardData.map((el) => {
    return <EditClientCard key={el.id} {...el} />;
  }); //Mapping End
  return <div>{cardContainer}</div>;
};
