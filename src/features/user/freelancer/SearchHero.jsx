import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { FreelancerLocationSearchBar } from "../../components/FreelancerLocation";
import { FreelancerSearchBar } from "../../components/FreelancerSearchBar";

import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function SearchHero({
  sourceSet,
  image,
  imageLabel,
  imageText,
}) {
  //Initialization of useState hook
  const [searchQuery, setSearchQuery] = useState("");
  //Handler
  const callFromNavbar = (value) => {
    setSearchQuery(value);
  };
  //Handle End
  //Initialization of useNaviagte hook
  const navigate = useNavigate();
  //Handle for search page
  const searchPage = () => {
    navigate(`/search`);
  };
  //Handle End
  return (
    <>
      {/* Paper to edit client card */}
      <Paper
        sx={{
          position: "relative",
          color: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.background.default
              : theme.palette.grey[300],
          backgroundColor: "#144b70",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundImage: `url(${image})`,
          srcSet: `url(${sourceSet})`,
          alt: `url(${imageText})`,
          boxShadow: 0,
         
         
        }}
      >
        <Grid item>
          <Box
            sx={{
              position: "relative",
              p: { xs: 6, md: 6 },
              pr: { md: 0 },
              
            
              
              
            }}
          >

           </Box>
        </Grid>
        {/* Paper End */}
      </Paper>
    </>
  );
}
