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
      <Grid item xs={12} md={12} sx={{  backgroundColor: "#D9D9D9",borderRadius:"10px" }}>
        <Card sx={{ display: "flex", boxShadow: 2,ml:"-3%",  mr: "1%",mt:"-3%", mb:"1%" }}>
          <CardContent
            sx={{ flex: 1, overflow: "hidden", backgroundColor: "#87CEEB" }}
            
          >
            <Stack direction="row" sx={{ justifyContent: "space-between" }}>
              <Typography
                variant="body1"
                sx={{
                  color:"#FFFFFF",
                  fontFamily:"Poppins",
                  fontWeight:"600",
                  fontSize:"16px",
                  lineHeight:"20.8px",
                  letterSpacing:"-1%",
                  pb: "20px",
                  pt: "20px",
                }}
               
              >
                {comment}
              </Typography>
              <Typography sx={{ textAlign: "center",
              color:"#FFFFFF",
              fontFamily:"Poppins",
              fontWeight:"600",
              fontSize:"11px",
              lineHeight:"17.6px",
              letterSpacing:"-1%",
               }} component="legend">
                {reviewer}
              </Typography>
            </Stack>
            <Rating name="job-rating" value={rating} sx={{color:"#FFDC5F"}} />
          </CardContent>
        </Card>
      </Grid>
      {/* Grid End */}
    </>
  );
}
