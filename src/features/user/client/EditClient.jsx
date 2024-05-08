import EditClientCard from "./EditClientCard";
import editClientCardData from "./editClientCardData";

export const EditClientFirstFeature = () => {
 
  let cardContainer = editClientCardData.map((el) => {
    return <EditClientCard key={el.id} {...el} />;
  }); 
  return <div>{cardContainer}</div>;
};
