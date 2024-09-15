import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { Home } from "@mui/icons-material";
import { Message } from "@mui/icons-material";
import Search from "@mui/icons-material/Search";
import { Dashboard } from "@mui/icons-material";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";

export default function FixedBottomNavigation() {
  // Initialization of useNavigate Hook
  let navigate = useNavigate();
  // Initialization of  useState Hook
  const [value, setValue] = React.useState(0);
  // Initialization of useRef Hook
  const ref = React.useRef(null);

  return (
    <>
      {/* Box  for the modile device fixed bottom navigation feature*/}
      <Box sx={{ pb: 7 }} ref={ref}>
        {/*  Paper for the feature*/}
        <Paper
          sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
          elevation={3}
        >
          {/* Bottom navigation */}
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            sx={{
              backgroundColor: "background.default",

              "&.MuiBottomNavigationAction-root,.MuiButtonBase-root, .Mui-selected,Mui-active, svg":
                {},
            }}
          >
            {/* Group of Bottom navigation Actions */}
            <BottomNavigationAction
              icon={
                <Home
                  sx={{
                    width: "24px",
                    height: "24",
                    top: "14px",
                    left: "56px",
                    color: "#87CEEB",
                  }}
                />
              }
            />

            {/* <BottomNavigationAction
              onClick={() => navigate("/message")}
              icon={
                <Message
                  sx={{
                    color: "#C4C4C4",
                    width: "26px",
                    height: "26",
                    top: "13px",
                    left: "136px",
                  }}
                />
              }
            />

            <BottomNavigationAction
              onClick={() => navigate("/notification")}
              icon={
                <Search
                  sx={{
                    color: "#C4C4C4",
                    width: "21px",
                    height: "20",
                    top: "14px",
                    left: "214px",
                  }}
                />
              }
            /> */}

            {/* <BottomNavigationAction
              onClick={() => navigate("/project-review")}
              icon={
                <Dashboard
                  sx={{
                    color: "#C4C4C4",
                    width: "26px",
                    height: "26",
                    top: "13px",
                    left: "292px",
                  }}
                />
              }
            /> */}
            {/*  End Actions*/}
          </BottomNavigation>
          {/* Bottom Navigation End */}
        </Paper>
        {/*  End Paper*/}
      </Box>
      {/*End  Box  */}
    </>
  );
}
