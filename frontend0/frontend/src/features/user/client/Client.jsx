import { Grid } from "@mui/material";
import { useLocation } from "react-router-dom";
import ClientProfile from "./ClientProfile";

export const ClientFirstFeature = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  // const client = JSON.parse(localStorage.getItem("clientProfile"));
  const data = useLocation();
  console.log(data);
  // Data mapping
  // let cardContainer = clientCardData.map((el) => {
  //   return <ClientCard key={el.id} {...el} />;
  // });//Mapping End
  return (
    //Grid
    <Grid
      container
      spacing={4}
      sx={{
        margin: "auto",
        alignItems: "center",
        maxWidth: "100%",
      }}
    >
      <ClientProfile name={user.names} />
      {/* {cardContainer} */}
    </Grid>//Grid End

    
  );
};
