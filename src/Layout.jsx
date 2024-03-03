import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import ResponsiveNavBar from "./features/layout/header/ResponsiveNavBar";
import FixedBottomNavigation from "./features/layout/footer/FixedBottomNavigation";

import FooterSection from "./features/layout/footer/FooterSection";



const Layout = () => {
 

 

  return (
    <>
      
    <ResponsiveNavBar/>
      <Outlet />
  
<Box sx={{display:{xs:"flex", md:"none"}}}>
<FixedBottomNavigation/>
</Box>

<Box sx={{display:{xs:"none", md:"flex"}, bgcolor:"#87CEEB",}}>
<FooterSection />
</Box>
 
    </>
  );
};

export default Layout;
