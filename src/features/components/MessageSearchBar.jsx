import { Box } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";

export const MessageSearchBar = ({ queryData, searchBox }) => {
    const [query, setQuery] = useState("");
  
    const onChangeFunction = (e) => setQuery(e.target.value);
  
    useEffect(() => {
      queryData(query);
    }, [query]);

    
  
    return (
      <>
        <Box
          
          sx={{ ml:"27.5%" ,mt:"2%" ,}}
        >
            
            <input
            type="text"
            placeholder="Search"
            value={query}
            onChange={onChangeFunction}
            onClick={searchBox}
            style={{borderRadius:"8px" , paddingLeft:"10px", paddingTop:"3px",paddingBottom:"3px", width:"60%"}}
          >
          </input>
          
          
          
          
          
           
        </Box>
      </>
    );
  };