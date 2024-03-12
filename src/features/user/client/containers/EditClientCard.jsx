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
            <ShareOutlinedIcon className="clientShareOutlinedIcon" />
            <Avatar
              alt={imageLabel}
              src={sourceSet}
              sx={{ height: "80px", width: "80px" }}
            />

            <Typography
              variant="h4"
              sx={{
                color: (theme) =>
                  theme.palette.mode === "light"
                    ? theme.palette.grey[600]
                    : theme.palette.grey[300],

                pt: "20px",
                textAlign: "start",
              }}
            >
              {name}
            </Typography>

            <Typography
              variant="body2"
              sx={{
                color: (theme) =>
                  theme.palette.mode === "light"
                    ? theme.palette.grey[600]
                    : theme.palette.grey[300],
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
                  color: (theme) =>
                    theme.palette.mode === "light"
                      ? theme.palette.grey[600]
                      : theme.palette.grey[300],
                  pb: "20px",
                  textAlign: "start",
                }}
              >
                {numberOfFollower} Followers &nbsp; &nbsp; &nbsp; &nbsp;
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  color: (theme) =>
                    theme.palette.mode === "light"
                      ? theme.palette.grey[600]
                      : theme.palette.grey[300],
                  pb: "20px",
                }}
              >
                {numberOfFollowing} Following
              </Typography>
            </Stack>
          </Box>
        </Grid>
        {/* Paper End */}
      </Paper>
    </>
  );
}
