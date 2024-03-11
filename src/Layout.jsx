import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
// import ResponsiveNavBar from "./app/layout/header/ResponsiveNavBar";
import FixedBottomNavigation from "./app/layout/footer/FixedBottomNavigation";
import Navbar from './app/layout/header/Navbar'
import FooterSection from "./app/layout/footer/FooterSection";



const Layout = () => {
 

 

  return (
    <>
      
    {/* <ResponsiveNavBar/> */}
    <Navbar/>
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
