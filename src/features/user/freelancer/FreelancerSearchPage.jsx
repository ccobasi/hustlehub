import { FmdGood, FmdGoodOutlined, LocationOn, LocationOff, LocationOnOutlined } from "@mui/icons-material";

import { TuneOutlined } from "@mui/icons-material";
import { TuneRounded } from "@mui/icons-material";
import { TuneSharp } from "@mui/icons-material";
import { TuneTwoTone } from "@mui/icons-material";
import { SearchOutlined } from "@mui/icons-material";

import SearchHero from "./SearchHero";
import FreelancerSearchFeature from "./FreelancerSearchPresentation";

import { Typography, Link, Stack, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function FreelancerSearchPage() {
  //Instatiate useNavigate
  let navigate = useNavigate();

  return (
    <>
      {/*First Freelancer Feature*/}
      <SearchHero />

     
      
      {/* Container for the Freelancer search page */}
      <Container component="main" maxWidth="lg">

      <FreelancerSearchFeature/>
     
      </Container>
    </>
  );
}
