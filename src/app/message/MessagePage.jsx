import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Typography,  Link, Stack, Button } from "@mui/material";
import { FirstMessageGroup  } from "./presentationals/FirstMessageGroup ";
import { SecondMessageGroup  } from "./presentationals/SecondMessageGroup ";
import { MessageSearchBar } from "../components/MessageSearchBar";


const MessagePage = () => {

  const [searchQuery, setSearchQuery] = useState("");
    const callFromNavbar = (value) => {
      setSearchQuery(value);
    };
  
    const navigate = useNavigate();
    const searchPage = () => {
      navigate(`/search`);
    };
  

  return (
    <>
   
    <Typography
        variant="h5"
        sx={{
          color: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[600]
              : theme.palette.grey[300],
          pt: "20px",
          ml: "28%",
          mt:"5%"
        }}
      >
        <b>Messages</b>
      </Typography>

       <MessageSearchBar queryData={callFromNavbar} searchBox={searchPage}/>

      <Typography
        variant="h5"
        sx={{
          color: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[600]
              : theme.palette.grey[300],
          pt: "20px",

          ml: "28%",
        }}
      >
        <b>Companies</b>
      </Typography>

      {/*First Message Feature*/}
      <FirstMessageGroup />

      <Typography
        variant="h5"
        sx={{
          color: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[600]
              : theme.palette.grey[300],
          pt: "20px",

          ml: "28%",
        }}
      >
        <b>Individual Messages</b>
      </Typography>
       {/*Second Message Feature*/}
        <SecondMessageGroup />
    
      
      
      
    </>
  );
};
 
export default MessagePage;