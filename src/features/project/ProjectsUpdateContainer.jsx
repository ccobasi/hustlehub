import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { MoreVert } from "@mui/icons-material";
import { Button } from "@mui/material";
import Stack from "@mui/material/Stack";

export default function ProjectsUpdate(props) {
  return (
    <>
      {/* Grid for project update functionality */}
      <Grid item xs={12} md={6} sx={{ mb: "10px" }}>
        <Card sx={{ display: "flex" }}>
          <CardContent
            sx={{
              flex: 1,
              overflow: "hidden",
              width: "255px",
              height: "322px",
            }}
          >
            <CardMedia
              component="picture"
              sx={{
                maxHeight: { xs: 233, md: 167 },
              }}
            >
              <source srcSet={props.sourceSet} />
              <Stack direction="row" sx={{ ml: "15%" }}>
                <img
                  src={props.image}
                  alt={props.imageLabel}
                  style={{ height: "40px", width: "40px" }}
                />
                <MoreVert
                  sx={{ ml: "70%", mt: "3%", height: "20px", width: "20px" }}
                />
              </Stack>
            </CardMedia>

            <Typography
              component="h4"
              variant="h"
              sx={{
                fontFamily: "Poppins",
                fontWeight: "700",
                fontSize: "14px",
                lineHeight: "18.23px",
                textAlign: "start",
                color: (theme) =>
                  theme.palette.mode === "light"
                    ? theme.palette.primary.lightModeHeroTitle
                    : theme.palette.primary.darkModeHeroTitle,
                pb: "20px",
                pt: "20px",
                ml: "12%",
              }}
            >
              {props.jobTitle}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontFamily: "Poppins",
                fontWeight: "400",
                fontSize: "12px",
                lineHeight: "15.62px",
                textAlign: "start",
                color: (theme) =>
                  theme.palette.mode === "light"
                    ? theme.palette.primary.lightModeHeroTitle
                    : theme.palette.primary.darkModeHeroTitle,
                pb: "20px",
                pt: "2px",
                ml: "12%",
              }}
            >
              {props.description}
            </Typography>
           <Stack direction="row" sx={{justifyContent:"space-between"}}>
           <Button
              variant="contained"
              sx={{
                ml: "12%",
                width: "143px",
                height: "32px",
                fontFamily: "Poppins",
                fontWeight: "400",
                fontSize: "12px",
                lineHeight: "15.62px",
                textAlign: "center",
                color: (theme) =>
                  theme.palette.mode === "light"
                    ? theme.palette.primary.lightModeHeroTitle
                    : theme.palette.primary.darkModeHeroTitle,
                    backgroundColor:"#87CEEB"
              }}
            >
              {props.action}
            </Button>
            <Typography
            sx={{
              fontFamily:"Poppins",
              fontWeight:"400",
              fontSize:"10px",
              lineHeight:"13.02px",
              color:"#898989",
              mr:"12%"
            }}>
              {props.time}
            </Typography>
           </Stack>
          </CardContent>
        </Card>
      </Grid>
      {/* Grid End */}
    </>
  );
}
