import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";


export default function Categories({title,description, closing_date}) {
  return (
    <>
      {/* Grid for the Categories Feature*/}
      <Grid item xs={6} md={4} sx={{ mb: "10px" }}>
        {/* Card for the Feature*/}
        <Card
          sx={{
            display: "flex",
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[50]
                : theme.palette.grey[900],
                borderRadius:"16px"
          }}
        >
          {/* Card Content for the Feature*/}
          <CardContent
            sx={{
              flex: 1,
              overflow: "hidden",

              width: "155px",
              height: "122px",

              borderRadius: "16px",
              boxShadow: "0px 4px 20px -10px #00000005",
            }}
          >
            {/* Card Media for the Feature*/}
            <CardMedia
              component="picture"
              sx={{
                height: "48px",
                width: "100px",

                borderRadius: "116px",
                maxHeight: { xs: 48, md: 167 },
                maxWidth: { xs: 48, md: 250 },
                margin: "auto",
              }}
            >
              
              {title}
            </CardMedia>
            {/* Card Media End */}

            {/* Heading for Job Title */}

            <Typography
              variant="body2"
              sx={{
                color: (theme) =>
                  theme.palette.mode === "light"
                    ? theme.palette.primary.lightModeHeroTitle
                    : theme.palette.primary.darkModeHeroTitle,
                pb: "20px",
                pt: "30px",
                fontFamily: "Poppins",
                fontWeight: "500",
                fontSize: "13px",
                textAlign: "center",
              }}
            >
              {description}
            </Typography>
            {/* Heading End */}
          </CardContent>
          {/* Card Content End */}
        </Card>
        {/* Card End */}
      </Grid>
      {/* Grid End */}
    </>
  );
}
