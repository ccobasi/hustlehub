import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import CloseIcon from "@mui/icons-material/Close";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";
import HelpCenterOutlinedIcon from "@mui/icons-material/HelpCenterOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import HomeRepairServiceOutlinedIcon from "@mui/icons-material/HomeRepairServiceOutlined";
import { ContentPaste } from "@mui/icons-material";

import { IconButton } from "@mui/material";
import { useState } from "react";
import { AssessmentOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import { ClientFirstFeature } from "../user/client/presentationals/ClientCard";
import Link from "@mui/material/Link";

const freelancerTemporaryLeftDrawerData = [
  {
    name: "Personal Info",
    icon: <InfoOutlinedIcon />,
    url: "/",
  },
  {
    name: "Applications",
    icon: <AssessmentOutlined/>,
    url: "/",
  },
  {
    name: "Proposals",
    icon: <AssignmentTurnedInOutlinedIcon />,
    url: "/",
  },
  {
    name: "Resumes",
    icon: < ContentPaste/>,
    url: "/",
  },
  { name: "Portfolio", icon: <HomeRepairServiceOutlinedIcon />, url: "#Inbox" },
  { name: "Support", icon: <HelpCenterOutlinedIcon />, url: "#Home" },
  { name: "Settings", icon: <SettingsOutlinedIcon />, url: "#Home" },
  {
    name: "Logout",
    icon: <LogoutOutlinedIcon sx={{ color: "red" }} />,
    url: "#Home",
  },
  
];

export default function FreelancerAnchorTemporaryDrawer() {
  let navigate = useNavigate();

  /*
  react useState hook to save the current open/close state of the drawer,
  normally variables dissapear afte the function was executed
  */
  const [open, setState] = useState(true);

  /*
  function that is being called every time the drawer should open or close,
  the keys tab and shift are excluded so the user can focus between
  the elements with the keys
  */
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    //changes the function state according to the value of open
    setState(open);
    navigate("/");
  };

  //Get list function
  const getList = () => (
    <div style={{ width: 250 }}>
      {freelancerTemporaryLeftDrawerData.map((item, index) => (
        <ListItem key={index}>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <a style={{ textDecoration: "none" }} href={item.url}>
            <ListItemText primary={item.name} />{" "}
          </a>
        </ListItem>
      ))}
    </div>
  );

  return (
    <Container>
      {/* The outside of the drawer */}
      <Drawer
        //from which side the drawer slides in
        anchor="left"
        //if open is true --> drawer is shown
        open={open}
        //function that is called when the drawer should close
        onClose={toggleDrawer(false)}
        //function that is called when the drawer should open
        onOpen={toggleDrawer(true)}
      >
        {/* The inside of the drawer */}
        <Box
          sx={{
            p: 2,
            height: 1,
          }}
        >
          {/* 
                when clicking the icon it calls the function toggleDrawer 
                and closes the drawer by setting the variable open to false
                */}
          <Box>
            <IconButton sx={{ mb: 2, ml: "80%" }}>
              <CloseIcon onClick={toggleDrawer(false)} />
            </IconButton>
          </Box>
          {/*Client Card*/}
          <Box sx={{ width: "auto" }}>
            <ClientFirstFeature />
            <Link
              href="/client-profile"
              className="drawerLink"
              sx={{ textDecoration: "none" }}
            >
              View Profile
            </Link>
          </Box>

          <Divider sx={{ mb: 2 }} />

          {getList()}

          <Box sx={{ mt: "20%" }}>
            <Button>
              <WorkspacePremiumOutlinedIcon /> Go Premium
            </Button>
          </Box>
        </Box>
      </Drawer>
    </Container>
  );
}


