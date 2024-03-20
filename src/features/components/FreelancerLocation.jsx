import { Box } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import Search from "@mui/icons-material/Search";
import LocationOn from "@mui/icons-material/LocationOn";

export const FreelancerLocationSearchBar = ({
  queryData,
  searchBox,
  placeholder,
}) => {
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
      <Box sx={{ mt: "2%" }}>
        <LocationOn
          sx={{
            position: "absolute",
            ml: "5.5%",
            color: "#FF9228",
            width: "20.99px",
            height: "29.92px",
            top: "88.54px",
            opacity: "40%",
            display: { xs: "flex", md: "none" },
            
          }}
        />

        <LocationOn
          sx={{
            position: "absolute",
            ml: "5.5%",
            color: "#FF9228",
            width: "20.99px",
            height: "29.92px",
            top: "188.54px",
            opacity: "40%",
            display: { xs: "none", md: "flex" },
          }}
        />

        <input
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={onChangeFunction}
          onClick={searchBox}
          style={{
            borderRadius: "8px",
            height: "40px",
            border: "1px solid #AFB0B6",
            paddingLeft: "29px",
            paddingTop: "3px",
            paddingBottom: "3px",
            width: "90%",
            marginLeft: "5%",

            fontFamily: "Poppins",
            fontWeight: "400",
            fontSize: "15px",
            lineHeight: "22.5px",
            letterSpacing: "-1%",
          }}
        ></input>
      </Box>
      {/* Box End */}
    </>
  );
};