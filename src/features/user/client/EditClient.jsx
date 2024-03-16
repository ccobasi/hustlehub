import EditClientCard from "./EditClientCard";
import editClientCardData from "./editClientCardData";

export const EditClientFirstFeature = () => {
  //Data mapping
  let cardContainer = editClientCardData.map((el) => {
    return <EditClientCard key={el.id} {...el} />;
  }); //Mapping End
  return <div>{cardContainer}</div>;
};
