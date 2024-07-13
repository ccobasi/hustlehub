import CompaniesCard from "./CompaniesCard";
import IndividualMessageCard from "./IndividualMessageCard";
import messageJsonData from "./message.json";
import { Grid, Box } from "@mui/material";
import freelancerJsonData from "../user/freelancer/freelancer.json";
//import { messageData } from "./util";

import { useState } from "react";

let str = JSON.stringify(messageJsonData);
console.log(str);

//let comp = messageJsonData.
// 
// let comp = str[companies];
// console.log(comp);

const companies = messageJsonData.map((company) =>
  company.companies.map((d) => d)
);
//console.log(companies);

const individual = messageJsonData.map((indiv) =>
  indiv.individual.map((d) => d)
);
//console.log(individual);

const messageData = [...companies, ...individual];

export default function MessagePresentation() {
  //console.log(messageData);

  const [data, setData] = useState(messageJsonData);
  console.log(data);
  console.log(messageJsonData);

  //console.log(freelancerJsonData);
  const [searchText, setSearchText] = useState("");
  // exclude column list from filter
  const excludeColumns = ["id", "sourceSet", "image", "imageLabel"];

  // handle change event of search input
  const handleChange = (value) => {
    setSearchText(value);
    filterData(value);
  };

  // filter records by search text
  const filterData = (value) => {
    const lowercasedValue = value.toLowerCase().trim();

    if (lowercasedValue === "") setData(messageJsonData);
    else {
      const filteredData = messageJsonData.companies.filter((item) => {
        return Object.keys(item).some((key) =>
          excludeColumns.includes(key)
            ? false
            : item[key].toString().toLowerCase().includes(lowercasedValue)
        );
      });
      setData(filteredData);
    }
  };

  // Data mapping
  let companiesContainer = data.map((message) =>
    message.companies.map((data) => {
      return <CompaniesCard key={data.id} {...data} />;
    })
  );

  //   let companies = data.map((company)=> company.companies.map(d)=>{
  //     return <CompaniesCard key={d.id} {...d} />;
  //   })

  //Mapping End

  // Data mapping
  let individualContainer = data.map((message) =>
    message.individual.map((data) => {
      return <IndividualMessageCard key={data.id} {...data} />;
    })
  );
  //Mapping End
  return (
    // Grid

    <>
      {/* Search input */}

      <Box sx={{ position: "relative", mt: "4%", ml: "30%" }}>
        <input
          style={{ marginLeft: 5 }}
          type="text"
          placeholder="Type to search..."
          value={searchText}
          onChange={(e) => handleChange(e.target.value)}
        />
      </Box>

      {/* // Grid */}
      <Grid
        container
        spacing={4}
        sx={{
          margin: "auto",
          alignItems: "end",
          maxWidth: "100%",
        }}
      >
        {companiesContainer}
      </Grid>
      {/* // Grid End */}
      <Grid
        container
        spacing={4}
        sx={{
          margin: "auto",
          alignItems: "end",
          maxWidth: "100%",
        }}
      >
        {individualContainer}
      </Grid>
      {data.length === 0 && <span>No records found to display!</span>}
    </>
  );
}
