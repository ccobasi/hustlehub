import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Card, CardContent, CardMedia, Stack } from "@mui/material";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import Avatar from "@mui/material/Avatar";
import { MobileNavSearch } from "../../layout/ResponsiveNavBar";
import { NavBarSearch } from "../../layout/ResponsiveNavBar";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { LocationCityOutlined } from "@mui/icons-material";

export default function SearchHero({
  sourceSet,
  image,
  imageLabel,
  imageText,
}) {

  //Initialization of useState Hook
  const [searchQuery, setSearchQuery] = useState("");
  //Handler for callFromNavbar
  const callFromNavbar = (value) => {
    setSearchQuery(value);
  };
  //Initialization of useNavigate hook
  const navigate = useNavigate();
  //Handler for searchPage
  const searchPage = () => {
    navigate(`/search`);
  };

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
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
            }}
          >
            <MobileNavSearch   queryData={callFromNavbar}
              searchBox={searchPage}/>
            <NavBarSearch queryData={callFromNavbar} searchBox={searchPage} />

            {/* Location Search for mobile devices */}
            <Box
              sx={{
                display: { xs: "flex", md: "none" },
                width: "118.23px",
                height: "19px",
                mr: "20%",
              }}
            >
              <LocationCityOutlined
                sx={{
                  position: "absolute",
                  ml: "0.2%",
                  color: "#000000",
                  width: "10.99px",
                  height: "9.92px",
                  top: "27.54px",
                  opacity: "40%",
                }}
              />
              <input
                type="text"
                placeholder="Search"
                // value={query}
                // onChange={onChangeFunction}
                // onClick={searchBox}
                style={{
                  borderRadius: "8px",
                  paddingLeft: "10px",
                  paddingTop: "3px",
                  paddingBottom: "3px",
                  border: "1px solid #AAA6B9",
                  fontFamily: "Poppins",
                  fontWeight: "400",
                  lineHeight: "15px",
                  fontSize: "10px",
                  color: "#95969D",
                  backgroundColor: "#F2F2F3",
                }}
              ></input>
            </Box>
          </Box>
        </Grid>
        {/* Paper End */}
      </Paper>
    </>
  );
}
