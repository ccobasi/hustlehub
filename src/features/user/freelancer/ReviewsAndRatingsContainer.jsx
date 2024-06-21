// import Typography from "@mui/material/Typography";
// import Grid from "@mui/material/Grid";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import { Rating, Stack } from "@mui/material";

// export default function FreelancerReviewsAndRatings({
//   comment,
//   reviewer,
//   rating,
// }) {
//   return (
//     <>
//     {/* Grid for freelancer reviews and rating */}
//       <Grid item xs={12} md={12} sx={{  backgroundColor: "#D9D9D9",borderRadius:"10px" }}>
//         <Card sx={{ display: "flex", boxShadow: 2,ml:"-3%",  mr: "1%",mt:"-3%", mb:"1%" }}>
//           <CardContent
//             sx={{ flex: 1, overflow: "hidden", backgroundColor: "#87CEEB" }}
            
//           >
//             <Stack direction="row" sx={{ justifyContent: "space-between" }}>
//               <Typography
//                 variant="body1"
//                 sx={{
//                   color:"#FFFFFF",
//                   fontFamily:"Poppins",
//                   fontWeight:"600",
//                   fontSize:"16px",
//                   lineHeight:"20.8px",
//                   letterSpacing:"-1%",
//                   pb: "20px",
//                   pt: "20px",
//                 }}
               
//               >
//                 {comment}
//               </Typography>
//               <Typography sx={{ textAlign: "center",
//               color:"#FFFFFF",
//               fontFamily:"Poppins",
//               fontWeight:"600",
//               fontSize:"11px",
//               lineHeight:"17.6px",
//               letterSpacing:"-1%",
//                }} component="legend">
//                 {reviewer}
//               </Typography>
//             </Stack>
//             <Rating name="job-rating" value={rating} sx={{color:"#FFDC5F"}} />
//           </CardContent>
//         </Card>
//       </Grid>
//       {/* Grid End */}
//     </>
//   );
// }
import React from 'react';
import { Typography, List, ListItem, ListItemText } from '@mui/material';
import { Rating } from '@mui/material';

const FreelancerFifthFeature = ({ reviews, loading, error }) => {
  return (
    <div>
      <Typography variant="h4" sx={{ mt: 8, ml: 2 }}>Reviews</Typography>
      {loading && <Typography>Loading...</Typography>}
      {error && <Typography color="error">{error}</Typography>}
      {reviews.length > 0 ? (
        <List>
          {reviews.map(review => (
            <ListItem key={review.id}>
              <ListItemText 
                primary={`${review.reviewer_name}: ${review.comment}`} 
                secondary={<Rating name="read-only" value={review.rating} readOnly />} 
              />
            </ListItem>
          ))}
        </List>
      ) : (
        <Typography variant="body1" sx={{ mt: 2, ml: 2 }}>No reviews yet</Typography>
      )}
    </div>
  );
};

export default FreelancerFifthFeature;
