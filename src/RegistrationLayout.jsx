import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import RegistrationHeader from "./features/layout/header/RegistrationHeader";

import FooterSection from "./features/layout/footer/FooterSection";

const RegistrationLayout = () => {
  return (
    <>
      <RegistrationHeader />
      <Outlet />

      <Box sx={{ display: { xs: "none", md: "flex" }, bgcolor: "#87CEEB" }}>
        <FooterSection />
      </Box>
    </>
  );
};

export default RegistrationLayout;
