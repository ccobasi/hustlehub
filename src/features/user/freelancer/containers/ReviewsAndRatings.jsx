import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Rating, Stack } from "@mui/material";

export default function FreelancerReviewsAndRatings({
  comment,
  reviewer,
  rating,
}) {
  return (
    <>
    {/* Grid for freelancer reviews and rating */}
      <Grid item xs={12} md={12} sx={{  backgroundColor: "grey" }}>
        <Card sx={{ display: "flex", boxShadow: 2, mb: "7%", mr: "6%" }}>
          <CardContent
            sx={{ flex: 1, overflow: "hidden", backgroundColor: "#87CEEB" }}
            
          >
            <Stack direction="row" sx={{ justifyContent: "space-between" }}>
              <Typography
                variant="body1"
                sx={{
                  color: (theme) =>
                    theme.palette.mode === "light"
                      ? theme.palette.grey[600]
                      : theme.palette.grey[300],
                  pb: "20px",
                  pt: "20px",
                }}
               
              >
                {comment}
              </Typography>
              <Typography sx={{ textAlign: "center" }} component="legend">
                {reviewer}
              </Typography>
            </Stack>
            <Rating name="job-rating" value={rating} />
          </CardContent>
        </Card>
      </Grid>
      {/* Grid End */}
    </>
  );
}
