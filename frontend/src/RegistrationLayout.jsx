import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import RegistrationHeader from "./features/layout/RegistrationHeader";

import FooterSection from "./features/layout/FooterSection";

const RegistrationLayout = () => {
  return (
    <>
      {/* Call site for the registration header */}
      <RegistrationHeader />
      {/* Outlet for registration Layout */}
      <Outlet />
      {/* Box for the footer of medium and large devices */}
      <Box sx={{ display: { xs: "none", md: "flex" }, backgroundColor: "background.default", }}>
        <FooterSection />
      </Box>
    </>
  );
};

export default RegistrationLayout;
