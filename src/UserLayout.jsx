import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import UserDashboardHeader from "./features/layout/header/UserDashboardHeader";

import FooterSection from "./features/layout/footer/FooterSection";

const UserLayout = () => {
  return (
    <>
      {/* Call site for the user dashboard header */}
      <UserDashboardHeader />
      {/* Outlet for the layout of user dashboard header */}
      <Outlet />
      {/* Box for footer of medium and large devices  */}
      <Box sx={{ display: { xs: "none", md: "flex" }, backgroundColor: "background.default", }}>
        <FooterSection />
      </Box>
    </>
  );
};

export default UserLayout;
