import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import UserDashboardHeader from "./features/layout/header/UserDashboardHeader";

import FooterSection from "./features/layout/footer/FooterSection";

const UserLayout = () => {
  return (
    <>
      <UserDashboardHeader />
      <Outlet />

      <Box sx={{ display: { xs: "none", md: "flex" }, bgcolor: "#87CEEB" }}>
        <FooterSection />
      </Box>
    </>
  );
};

export default UserLayout;
