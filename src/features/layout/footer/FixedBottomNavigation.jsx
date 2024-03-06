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
  let navigate = useNavigate();
  const [value, setValue] = React.useState(0);
  const ref = React.useRef(null);

  return (
    <Box sx={{ pb: 7 }} ref={ref}>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          sx={{
            bgcolor: "#87CEEB",
            "&.MuiBottomNavigationAction-root,.MuiButtonBase-root, .Mui-selected,Mui-active, svg":
              { color: "#FFFFFF" },
          }}
        >
          
            <BottomNavigationAction label="Home" icon={<Home />} />
          
         
            <BottomNavigationAction onClick={()=> navigate('/message')} label="Messages" icon={<Message />} />
          
        
            <BottomNavigationAction onClick={()=>navigate('/notification')} label="Search" icon={<Search />} />
          
         
            <BottomNavigationAction label="Dashboard" icon={<Dashboard  onClick={()=> navigate('/project-review')}/>} />
          
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
