import EditClientCard from "../containers/EditClientCard";
import editClientCardData from "../data/editClientCard";


export const EditClientFirstFeature = () => {
  let cardContainer = editClientCardData.map((el) => {
    return <EditClientCard key={el.id} {...el} />;
  });
  return (
   
    <div>
      {cardContainer}
    </div>

    
  );
};
