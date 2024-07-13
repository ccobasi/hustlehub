import { Typography,Container} from "@mui/material";
import NotificationCardPresentation from "./Notification";

const NotificationPage = () => {
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
         Notification
        </Typography>

  

      {/*First Notification Feature*/}

      <NotificationCardPresentation />
      </Container>
    
    </>
  );
};

export default NotificationPage;
