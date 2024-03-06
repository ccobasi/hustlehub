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
      className="text"
      onInput={(e) => {
        setSearchQuery(e.target.value);
      }}
      label="Choose job position"
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

const filterData = (query, jobPositionData) => {
  if (!query) {
    return jobPositionData;
  } else {
    return jobPositionData.filter((d) => d.toLowerCase().includes(query));
  }
};

// create data array to represent our jobPositionData:
const jobPositionData = [
  "Web Developer",
  "Sale Executive",
  "Web Developer",
  "Sale Executive",
  "Web Developer",
  "Sale Executive",
  "Web Developer",
  "Sale Executive",
  "Web Developer",
  "Sale Executive",
  "Web Developer",
  "Sale Executive",
  "Web Developer",
  "Sale Executive",
  "Web Developer",
  "Sale Executive",
];

export default function JobPosition() {
  //create our Search functional component:
  const [searchQuery, setSearchQuery] = useState("");
  const dataFiltered = filterData(searchQuery, jobPositionData);
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
            
              className="text"
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
