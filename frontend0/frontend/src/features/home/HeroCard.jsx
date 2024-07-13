import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

export default function HeroCard({
  title,
  subtitle1,
  paragraph1,
  subtitle2,
  paragraph2,
  subtitle3,
  paragraph3,
  cardBg,
  cardBgSourceSet,
}) {
  return (
    <>
      {/* Grid for the Categories Feature*/}
      <Grid item xs={12} md={6} sx={{ mb: "10px" }}>
        {/* Card for the Feature*/}
        <Card
          sx={{
            display: "flex",
            mt: "10%",
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[50]
                : theme.palette.grey[900],
            backgroundImage: `url(${cardBg})`,
            height: "250px",
            width: "457px",
            boxShadow: "0",
            sourceSet: `url(${cardBgSourceSet})`,
          }}
        >
          {/* Card Content for the Feature*/}
          <CardContent
            sx={{
              flex: 1,
              overflow: "hidden",
              width: "155px",
              height: "342px",
            }}
          >
            {/* Heading for Job Title */}

            <Typography
              variant="body2"
              sx={{
                color: (theme) =>
                  theme.palette.mode === "light"
                    ? theme.palette.primary.lightModeHeroTitle
                    : theme.palette.primary.darkModeHeroTitle,
                pb: "5px",
                mt: "-17px",
                fontFamily: "Poppins",
                fontWeight: "700",
                fontSize: "13px",
                textAlign: "center",
              }}
            >
              {title}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: (theme) =>
                  theme.palette.mode === "light"
                    ? theme.palette.primary.lightModeHeroTitle
                    : theme.palette.primary.darkModeHeroTitle,
                pb: "2px",
                pt: "0px",
                fontFamily: "Poppins",
                fontWeight: "600",
                fontSize: "13px",
              }}
            >
              {subtitle1}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: (theme) =>
                  theme.palette.mode === "light"
                    ? theme.palette.primary.lightModeHeroTitle
                    : theme.palette.primary.darkModeHeroTitle,
                pb: "5px",
                pt: "3px",
                fontFamily: "Poppins",
                fontWeight: "500",
                fontSize: "13px",
              }}
            >
              {paragraph1}
            </Typography>
            {/* Heading End */}

            <Typography
              variant="body2"
              sx={{
                color: (theme) =>
                  theme.palette.mode === "light"
                    ? theme.palette.primary.lightModeHeroTitle
                    : theme.palette.primary.darkModeHeroTitle,
                pb: "2px",
                pt: "3px",
                fontFamily: "Poppins",
                fontWeight: "600",
                fontSize: "13px",
              }}
            >
              {subtitle2}
            </Typography>

            <Typography
              variant="body2"
              sx={{
                color: (theme) =>
                  theme.palette.mode === "light"
                    ? theme.palette.primary.lightModeHeroTitle
                    : theme.palette.primary.darkModeHeroTitle,
                pb: "5px",
                pt: "3px",
                fontFamily: "Poppins",
                fontWeight: "500",
                fontSize: "13px",
              }}
            >
              {paragraph2}
            </Typography>

            <Typography
              variant="body2"
              sx={{
                color: (theme) =>
                  theme.palette.mode === "light"
                    ? theme.palette.primary.lightModeHeroTitle
                    : theme.palette.primary.darkModeHeroTitle,
                pb: "2px",
                pt: "0px",
                fontFamily: "Poppins",
                fontWeight: "600",
                fontSize: "13px",
              }}
            >
              {subtitle3}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: (theme) =>
                  theme.palette.mode === "light"
                    ? theme.palette.primary.lightModeHeroTitle
                    : theme.palette.primary.darkModeHeroTitle,
                pb: "2px",
                pt: "3px",
                fontFamily: "Poppins",
                fontWeight: "500",
                fontSize: "13px",
              }}
            >
              {paragraph3}
            </Typography>
          </CardContent>
          {/* Card Content End */}
        </Card>
        {/* Card End */}
      </Grid>
      {/* Grid End */}
    </>
  );
}
