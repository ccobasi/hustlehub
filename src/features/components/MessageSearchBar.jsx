import { Box } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";

export const MessageSearchBar = ({ queryData, searchBox }) => {
  // Initialization of the useState hook
  const [query, setQuery] = useState("");
  // Handler for onChange event
  const onChangeFunction = (e) => setQuery(e.target.value);
  //Handler End

  // useEffect hook
  useEffect(() => {
    queryData(query);
  }, [query]);
  //useEffect End

  return (
    <>
      {/* Box for search input*/}
      <Box sx={{ ml: "27.5%", mt: "2%" }}>
        <input
          type="text"
          placeholder="Search"
          value={query}
          onChange={onChangeFunction}
          onClick={searchBox}
          style={{
            borderRadius: "8px",
            paddingLeft: "10px",
            paddingTop: "3px",
            paddingBottom: "3px",
            width: "60%",
          }}
        ></input>
      </Box>
      {/* Box End */}
    </>
  );
};
