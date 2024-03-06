import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import CloseIcon from "@mui/icons-material/Close";
import { InputAdornment } from "@mui/material";





//Second Approach

const SearchBar = ({ setSearchQuery }) => (
  <form>
    <TextField
      id="search-bar"
      
      onInput={(e) => {
        setSearchQuery(e.target.value);
      }}
      label="Choose company"
      variant="outlined"
      placeholder="Search..."
      size="small"
      InputProps={{
        startAdornment: (
          <InputAdornment>
            <IconButton type="submit" aria-label="search">
              <SearchIcon style={{ fill: "blue" }} />
            </IconButton>
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment>
            <IconButton
              
              edge="end"
            >
             <CloseIcon/>
            </IconButton>
          </InputAdornment>
        ),
      }}
      sx={{width:"100%"}}
    />
  </form>
);

//create a function to filter our data. This function
//will return only elements that include our search query.

const filterData = (query, companyData) => {
  if (!query) {
    return companyData;
  } else {
    return companyData.filter((d) => d.toLowerCase().includes(query));
  }
};

// create data array to represent our jobPositionData:
const companyData = [
 "Retail and Wholesale",
 "IT",
 "Banking and Finance",
 "Education",
 "Retail and Wholesale",
 "IT",
 "Banking and Finance",
 "Education",
 "Retail and Wholesale",
 "IT",
 "Banking and Finance",
 "Education",
 "Retail and Wholesale",
 "IT",
 "Banking and Finance",
 "Education",
];

export default function Company() {
  //create our Search functional component:
  const [searchQuery, setSearchQuery] = useState("");
  const dataFiltered = filterData(searchQuery, companyData);
  return (
    <>
      <div
        style={{
          display: "flex",
          alignSelf: "center",
          justifyContent: "center",
          flexDirection: "column",
          padding: 20,
        }}
      >
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <div style={{ padding: 3 }} >
          {dataFiltered.map((d) => (
            <div
            
             
              style={{
                padding: 5,
                justifyContent: "normal",
                fontSize: 20,
                color: "blue",
                margin: 1,
                width: "250px",
                BorderColor: "green",
                borderWidth: "10px",
              }}
              key={d.id}
            >
              {d}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
