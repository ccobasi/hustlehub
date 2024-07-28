import { Typography } from "@mui/material";

export default function AppTitle ()  {
    return (
      <>
        {/*  App title */}
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            display: { xs: "flex", md: "flex" },
            fontSize: "16px",
            flexGrow: 1,
            fontFamily: "Poppins",
            fontWeight: 50,
            letterSpacing: ".05rem",
            color: "#87CEEB",
            textDecoration: "none",
            textAlign: "center",
            marginTop:{md:"10px"},
            marginBottom:{md:"5px"},
            ml:{md:"5%",sm:'10%',xs:'10%'},
            mr:{md:"7%"}

          }}
        >
          Hustling Hub
        </Typography>
        {/*  Title End */}
      </>
    );
  };

