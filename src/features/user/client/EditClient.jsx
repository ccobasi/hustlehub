// import EditClientCard from "./EditClientCard";
// import editClientCardData from "./editClientCardData";

// export const EditClientFirstFeature = () => {
 
//   let cardContainer = editClientCardData.map((el) => {
//     return <EditClientCard key={el.id} {...el} />;
//   }); 
//   return <div>{cardContainer}</div>;
// };
import EditClientCard from "./EditClientCard";
import editClientCardData from "./editClientCardData";

export const EditClientFirstFeature = () => {
  console.log(editClientCardData); // Debugging: Check the structure and values

  let cardContainer = editClientCardData.map((el) => {
    console.log(el); // Debugging: Check each element being mapped
    return <EditClientCard key={el.id} {...el} />;
  });

  return <div>{cardContainer}</div>;
};
