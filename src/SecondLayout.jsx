import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import SecondHeader from "./app/layout/SecondHeader";

import FooterSection from "./app/layout/FooterSection";



const SecondLayout = () => {
 

 

  return (
    <>
      
    <SecondHeader/>
      <Outlet />
  


<Box sx={{display:{xs:"none", md:"flex"}, bgcolor:"#87CEEB",}}>
<FooterSection />
</Box>
 
    </>
  );
};

export default SecondLayout;
