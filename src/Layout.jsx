import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import ResponsiveNavBar from "./features/layout/ResponsiveNavBar";
import FixedBottomNavigation from "./features/layout/FixedBottomNavigation";

import FooterSection from "./features/layout/FooterSection";

const Layout = () => {
  return (
    <>
      
    {/* <ResponsiveNavBar/> */}

      {/* Call site for Responsive nav bar  */}
      <ResponsiveNavBar />
      {/* Layout outlet */}
      <Outlet />
      {/* Box for mobile fixed bottom naviagation */}
      <Box sx={{ display: { xs: "flex", md: "none" } }}>
        <FixedBottomNavigation />
      </Box>
      {/* Box for medium and large devices footer */}
      <Box sx={{ display: { xs: "none", md: "flex" }, backgroundColor: "background.default", }}>
        <FooterSection />
      </Box>
    </>
  );
};

export default Layout;
