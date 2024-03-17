import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Typography, Link, Stack, Button } from "@mui/material";
import { FirstMessageGroup } from "./FirstMessageGroup ";
import { SecondMessageGroup } from "./SecondMessageGroup ";
import { MessageSearchBar } from "../components/MessageSearchBar";
import Container from "@mui/material/Container";

const MessagePage = () => {
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
      <Container component="main" maxWidth="lg">
        <Typography
          component="h1"
          variant="h5"
          sx={{
            mt: "-4%",
            mb: "10%",
            fontFamily: "Poppins",
            fontWeight: "600",
            fontSize: "16px",
            lineHeight: "20.8px",
            textAlign: "center",

            color: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.primary.lightModeHeroTitle
                : theme.palette.primary.darkModeHeroTitle,
          }}
        >
          Messages
        </Typography>

        <MessageSearchBar queryData={callFromNavbar} searchBox={searchPage} placeholder="Search a chat or message"/>

        <Typography
          variant="h5"
          sx={{
            color: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.primary.lightModeHeroTitle
                : theme.palette.primary.darkModeHeroTitle,

            pt: "50px",
            textAlign: "start",
            ml: "4%",
            fontFamily: "Poppins",
            fontWeight: "600",
            fontSize: "14px",
            lineHeight: "18.2px",
            letterSpacing: "-1%",
          }}
        >
          <b>Companies</b>
        </Typography>

        {/*First Message Feature*/}
        <FirstMessageGroup />

        <Typography
          variant="h5"
          sx={{
            color: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.primary.lightModeHeroTitle
                : theme.palette.primary.darkModeHeroTitle,

            pt: "50px",
            textAlign: "start",
            ml: "4%",
            fontFamily: "Poppins",
            fontWeight: "600",
            fontSize: "14px",
            lineHeight: "18.2px",
            letterSpacing: "-1%",
          }}
        >
          <b>Individual Messages</b>
        </Typography>
        {/*Second Message Feature*/}
        <SecondMessageGroup />
      </Container>
    </>
  );
};

export default MessagePage;
