import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import CloseIcon from "@mui/icons-material/Close";
import { InputAdornment } from "@mui/material";





//Search bar component

const SearchBar = ({ setSearchQuery }) => (
  <form>
    <TextField
      id="search-bar"
      
      onInput={(e) => {
        setSearchQuery(e.target.value);
      }}
      label="Choose job location"
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
//Component End


//function to filter our data. This function
//will return only elements that include our search query.

const filterData = (query, jobLocationData) => {
  if (!query) {
    return jobLocationData;
  } else {
    return jobLocationData.filter((d) => d.toLowerCase().includes(query));
  }
};
//Filter function End

// data to represent our jobPositionData:
const jobLocationData = [
  "Ohanku, Aba, Abia State",
  "Ogba, Ikeja, Lagos State",
  "Ohanku, Aba, Abia State",
  "Ogba, Ikeja, Lagos State",
  "Ohanku, Aba, Abia State",
  "Ogba, Ikeja, Lagos State",
  "Ohanku, Aba, Abia State",
  "Ogba, Ikeja, Lagos State",
  "Ohanku, Aba, Abia State",
  "Ogba, Ikeja, Lagos State",
  "Ohanku, Aba, Abia State",
  "Ogba, Ikeja, Lagos State",
  "Ohanku, Aba, Abia State",
  "Ogba, Ikeja, Lagos State",
  "Ohanku, Aba, Abia State",
  "Ogba, Ikeja, Lagos State",
  "Ohanku, Aba, Abia State",
  "Ogba, Ikeja, Lagos State",
  "Ohanku, Aba, Abia State",
  "Ogba, Ikeja, Lagos State",
];
//Data End

export default function JobLocation() {
  //Initialization of useState hook
  const [searchQuery, setSearchQuery] = useState("");
  //Call site of the filterData function
  const dataFiltered = filterData(searchQuery, jobLocationData);
  //Call End

  return (
    <>
    {/* Div container for the Search bar functionality */}
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
      {/* Div End */}
    </>
  );
}
