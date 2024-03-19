import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Card, CardContent, CardMedia, Stack } from "@mui/material";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import Avatar from "@mui/material/Avatar";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";

export default function EditClientCard({
  sourceSet,
  image,
  imageLabel,
  bgImg,
  imageText,
  name,
  location,
  numberOfFollower,
  numberOfFollowing,
}) {
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
          backgroundImage: `url(${bgImg})`,
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
            <ShareOutlinedIcon
              sx={{ color: "#FFFFFF" }}
              className="clientShareOutlinedIcon"
            />
            <Avatar
              alt={imageLabel}
              src={sourceSet}
              sx={{ height: "50px", width: "50px" }}
            />

            <Typography
              sx={{
                fontFamily: "Poppins",
                fontWeight: "500",
                fontSize: "14px",
                lineHeight: "28px",
                color: (theme) =>
                  theme.palette.mode === "light"
                    ? theme.palette.primary.lightModeHeroTitle
                    : theme.palette.primary.darkModeHeroTitle,

                pt: "20px",
                textAlign: "start",
              }}
            >
              {name}
            </Typography>

            <Typography
              sx={{
                fontFamily: "Poppins",
                fontWeight: "400",
                fontSize: "12px",
                lineHeight: "15.62px",
                color: (theme) =>
                  theme.palette.mode === "light"
                    ? theme.palette.primary.lightModeHeroTitle
                    : theme.palette.primary.darkModeHeroTitle,

                pb: "20px",
                pt: "5px",
                textAlign: "start",
              }}
            >
              {location}
            </Typography>

            <Stack direction="row">
              <Typography
                variant="body2"
                sx={{
                  fontFamily: "Poppins",
                  fontWeight: "700",
                  fontSize: "17px",
                  lineHeight: "18.23px",
                  letterSpacing: "-1%",
                  color: (theme) =>
                    theme.palette.mode === "light"
                      ? theme.palette.primary.lightModeHeroTitle
                      : theme.palette.primary.darkModeHeroTitle,

                  pb: "20px",
                  textAlign: "start",
                }}
              >
                <b>{numberOfFollower}</b> Followers &nbsp; &nbsp; &nbsp; &nbsp;
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  fontFamily: "Poppins",
                  fontWeight: "700",
                  fontSize: "17px",
                  lineHeight: "18.23px",
                  letterSpacing: "-1%",
                  color: (theme) =>
                    theme.palette.mode === "light"
                      ? theme.palette.primary.lightModeHeroTitle
                      : theme.palette.primary.darkModeHeroTitle,

                  pb: "20px",
                }}
              >
                <b>{numberOfFollowing}</b> Following
              </Typography>
            </Stack>
          </Box>
        </Grid>
        {/* Paper End */}
      </Paper>
    </>
  );
}
