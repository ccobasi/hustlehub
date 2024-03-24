import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
<<<<<<< HEAD
import SecondHeader from "./app/layout/SecondHeader";

import FooterSection from "./app/layout/FooterSection";
=======
// import SecondHeader from "./app/layout/header/SecondHeader";
import Navbar from './features/layout/header/Navbar'
import FooterSection from "./app/layout/footer/FooterSection";
>>>>>>> home-page



const SecondLayout = () => {
 

 

  return (
    <>
      
<<<<<<< HEAD
    <SecondHeader/>
=======
    {/* <SecondHeader/> */}
    <Navbar/>
>>>>>>> home-page
      <Outlet />
  


<Box sx={{display:{xs:"none", md:"flex"}, bgcolor:"#87CEEB",}}>
<FooterSection />
</Box>
 
    </>
  );
};

export default SecondLayout;
