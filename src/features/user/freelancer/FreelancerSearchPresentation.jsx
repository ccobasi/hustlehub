import FreelancerSearch from "./FreelancerSearchCard";
import freelancerJsonData from "./freelancer.json";
import Search from "@mui/icons-material/Search";
import { Grid, Box, Stack } from "@mui/material";
import { useState } from "react";

export default function FreelancerSearchFeature() {
  //Initialize freelancer data and initial state
  const [data, setData] = useState(freelancerJsonData);
  const [searchText, setSearchText] = useState("");
  const [searchLocationText, setSearchLocationText] = useState("");

  //Exclude column list for freelancer search
  const excludeColumns = ["id", "time", "sourceSet", "imageLabel", "image"];

  //Exclude all colums but location
  const allButLocation = [
    "id",
    "company",
    "jobTitle",
    "task",
    "jobType",
    "rank",
    "salary",
    "time",
    "sourceSet",
    "imageLabel",
  ];

  //handle chaange event location search input
  const handleLocationChange = (value) => {
    setSearchLocationText(value);
    filterLocationData(value);
  };

  // handle change event of search input
  const handleChange = (value) => {
    setSearchText(value);
    filterData(value);
  };

  // filter records by location search text
  const filterLocationData = (value) => {
    const lowercasedValue = value.toLowerCase().trim();
    // if (lowercasedValue === "") setData(dataList);
    if (lowercasedValue === "") setData(freelancerJsonData);
    else {
      // const filteredData = dataList.filter((item) => {
      const filteredData = freelancerJsonData.filter((item) => {
        return Object.keys(item).some((key) =>
          allButLocation.includes(key)
            ? false
            : item[key].toString().toLowerCase().includes(lowercasedValue)
        );
      });
      setData(filteredData);
    }
  };

  // filter records by search text
  const filterData = (value) => {
    const lowercasedValue = value.toLowerCase().trim();
    // if (lowercasedValue === "") setData(dataList);
    if (lowercasedValue === "") setData(freelancerJsonData);
    else {
      // const filteredData = dataList.filter((item) => {
      const filteredData = freelancerJsonData.filter((item) => {
        return Object.keys(item).some((key) =>
          excludeColumns.includes(key)
            ? false
            : item[key].toString().toLowerCase().includes(lowercasedValue)
        );
      });
      setData(filteredData);
    }
  };

  //Data mapping
  let freelancerContainer = data.map((el) => {
    return <FreelancerSearch key={el.id} {...el} />;
  }); //Mapping End
  return (
    <>
      <Box></Box>
      {/* //Grid  */}
      <Grid
        container
        spacing={4}
        sx={{
          margin: "auto",

          maxWidth: "100%",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            ml: "3.5%",

            top: "69.54px",

            opacity: "40%",
            display: { xs: "flex", md: "none" },
          }}
        >
         

         
        </Box>

        <Box>
        <Search
            sx={{
              position: "absolute",
              ml: "5.5%",
              color: "#AFB0B6",
              width: "20.99px",
              height: "19.92px",
              top: "115.54px",
              opacity: "40%",
              display: { xs: "none", md: "flex" },
            }}
          />
        </Box>

        <Box
          sx={{
            position: "absolute",
            mt: "-20%",
           
            pt: "1%",
            display: { xs: "flex", md: "none" },
          }}
        >
          <Stack direction="row">
          <input
            type="text"
            value={searchText}
            onChange={(e) => handleChange(e.target.value)}
            style={{
              borderRadius: "8px",
              height: "20px",
              paddingLeft: "29px",
              paddingTop: "3px",
              width: "90%",
              margin: "2%",
              fontFamily: "Poppins",
              fontWeight: "400",
              fontSize: "15px",
              lineHeight: "22.5px",
              letterSpacing: "-1%",
              opacity: "30%",
            }}
          />
          <Search
            sx={{
              color: "#AFB0B6",
              width: "16.99px",
              height: "29.92px",
            }}
          />

          </Stack>
         


        </Box>
        <Box
          sx={{
            position: "absolute",
            mt: "-10%",
            width: "100%",
            pt: "0.002%",
            mb: "2%",
            display: { xs: "flex", md: "none" },
          }}
        >
          <input
            type="text"
            value={searchLocationText}
            onChange={(e) => handleLocationChange(e.target.value)}
            style={{
              borderRadius: "8px",
              height: "20px",
              paddingLeft: "29px",
              paddingTop: "3px",
              paddingBottom: "3px",
              width: "90%",
              margin: "2%",
              fontFamily: "Poppins",
              fontWeight: "400",
              fontSize: "15px",
              lineHeight: "22.5px",
              letterSpacing: "-1%",
              opacity: "30%",
            }}
          />
        </Box>

        {freelancerContainer}

        {data.length === 0 && <span>No records found to display!</span>}
      </Grid>
      {/* //Grid End */}
    </> //Grid End
  );
}
