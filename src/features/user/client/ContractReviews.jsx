// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Typography, Box, List, ListItem, ListItemText, Card, CardContent, TextField, Button } from "@mui/material";

// const ContractReviews = ({ contractId }) => {
//   const [reviews, setReviews] = useState([]);
//   const [rating, setRating] = useState('');
//   const [comment, setComment] = useState('');
//   const [error, setError] = useState(null);
//   const user = JSON.parse(localStorage.getItem("user"));

//   useEffect(() => {
//     const fetchReviews = async () => {
//       try {
//         const response = await axios.get(`http://localhost:8000/contract/${contractId}/reviews/`);
//         setReviews(response.data);
//       } catch (error) {
//         console.error("Error fetching reviews: ", error);
//         setError(error);
//       }
//     };

//     fetchReviews();
//   }, [contractId]);

//   const handleReviewSubmit = async () => {
//     try {
//       const response = await axios.post(`http://localhost:8000/contract/reviews/`, {
//         contract: contractId,
//         rating,
//         comment,
//       }, {
//         headers: {
//           'Authorization': `Bearer ${user.token}`
//         }
//       });
//       setReviews([...reviews, response.data]);
//       setRating('');
//       setComment('');
//     } catch (error) {
//       console.error("Error submitting review: ", error);
//       setError(error);
//     }
//   };

//   return (
//     <Box>
//       <Typography variant="h4" sx={{ mt: 8, ml: 2 }}>Reviews</Typography>
//       {/* {error && <Typography color="error">Error loading reviews</Typography>}
//       <List>
//         {reviews.map(review => (
//           <ListItem key={review.id}>
//             <ListItemText primary={`${review.reviewer_name}: ${review.rating}/5`} secondary={review.comment} />
//           </ListItem>
//         ))}
//       </List> */}
//       <Card>
//         <CardContent>
//           <Typography variant="h6">Submit a Review</Typography>
//           <TextField
//             label="Rating"
//             type="number"
//             value={rating}
//             inputProps={{ min: 1, max: 5 }}
//             onChange={(e) => setRating(e.target.value)}
//             fullWidth
//           />
//           <TextField
//             label="Comment"
//             value={comment}
//             onChange={(e) => setComment(e.target.value)}
//             fullWidth
//             multiline
//           />
//           <Button onClick={handleReviewSubmit}>Submit</Button>
//         </CardContent>
//       </Card>
//     </Box>
//   );
// };

// export default ContractReviews;
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";
// import { Typography, Box, List, ListItem, ListItemText, Card, CardContent, TextField, Button } from "@mui/material";

// const ContractReviews = () => {
//   const { contractId } = useParams();
//   const [reviews, setReviews] = useState([]);
//   const [rating, setRating] = useState('');
//   const [comment, setComment] = useState('');
//   const [error, setError] = useState(null);
//   const [submitError, setSubmitError] = useState(null);
//   const user = JSON.parse(localStorage.getItem("user"));

// //   useEffect(() => {
// //     const fetchReviews = async () => {
// //       try {
// //         const response = await axios.get(`http://localhost:8000/contract/${contractId}/reviews/`);
// //         setReviews(response.data);
// //       } catch (error) {
// //         console.error("Error fetching reviews: ", error);
// //         setError("Error fetching reviews");
// //       }
// //     };

// //     fetchReviews();
// //   }, [contractId]);

//   const handleReviewSubmit = async () => {
//     if (rating < 1 || rating > 5) {
//       setSubmitError('Rating must be between 1 and 5');
//       return;
//     }

//     try {
//       const response = await axios.post(`http://localhost:8000/review/contract/reviews/`, {
//         contract: contractId,
//         rating: parseInt(rating),  // Ensure rating is an integer
//         comment,
//       }, {
//         headers: {
//           'Authorization': `Bearer ${user.token}`
//         }
//       });
//       setReviews([...reviews, response.data]);
//       setRating('');
//       setComment('');
//       setSubmitError(null);
//     } catch (error) {
//       console.error("Error submitting review: ", error);
//       setSubmitError('Failed to submit review');
//       setError(error);
//     }
//   };

//   return (
//     <Box>
//       {/* <Typography variant="h4" sx={{ mt: 8, ml: 2 }}>Reviews</Typography>
//       {error && <Typography color="error">{error}</Typography>}
//       {reviews.length > 0 ? (
//         <List>
//           {reviews.map(review => (
//             <ListItem key={review.id}>
//               <ListItemText primary={`${review.reviewer_name}: ${review.rating}/5`} secondary={review.comment} />
//             </ListItem>
//           ))}
//         </List>
//       ) : (
//         <Typography variant="body1" sx={{ mt: 2, ml: 2 }}>No reviews yet</Typography>
//       )} */}
//       <Card sx={{ mt: 4 }}>
//         <CardContent>
//           <Typography variant="h6">Submit a Review</Typography>
//           <TextField
//             label="Rating"
//             type="number"
//             value={rating}
//             inputProps={{ min: 1, max: 5 }}
//             onChange={(e) => setRating(e.target.value)}
//             fullWidth
//           />
//           <TextField
//             label="Comment"
//             value={comment}
//             onChange={(e) => setComment(e.target.value)}
//             fullWidth
//             multiline
//             sx={{ mt: 2 }}
//           />
//           <Button onClick={handleReviewSubmit} sx={{ mt: 2, backgroundColor: "#87ceeb", color: "#fff" }}>Submit</Button>
//           {submitError && (
//             <Typography color="error" sx={{ mt: 2 }}>
//               {submitError}
//             </Typography>
//           )}
//         </CardContent>
//       </Card>
//     </Box>
//   );
// };

// export default ContractReviews;
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Typography, Box, List, ListItem, ListItemText, Card, CardContent, TextField, Button } from "@mui/material";
import Rating from '@mui/material/Rating';

const ContractReviews = () => {
  const { contractId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState('');
  const [comment, setComment] = useState('');
  const [error, setError] = useState(null);
  const [submitError, setSubmitError] = useState(null);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/review/contract/${contractId}/reviews/`);
        setReviews(response.data);
      } catch (error) {
        console.error("Error fetching reviews: ", error);
        setError("Error fetching reviews");
      }
    };

    fetchReviews();
  }, [contractId]);

  const handleReviewSubmit = async () => {
    if (rating < 1 || rating > 5) {
      setSubmitError('Rating must be between 1 and 5');
      return;
    }

    try {
      const response = await axios.post(`http://localhost:8000/review/contract/reviews/`, {
        contract: contractId,
        rating: parseInt(rating),
        comment,
      }, {
        headers: {
          'Authorization': `Bearer ${user.token}`
        }
      });
      setReviews([...reviews, response.data]);
      setRating('');
      setComment('');
      setSubmitError(null);
    } catch (error) {
      console.error("Error submitting review: ", error);
      setSubmitError('Failed to submit review');
      setError(error);
    }
  };

  return (
    <Box>
      <Typography variant="h4" sx={{ mt: 8, ml: 2 }}>Reviews</Typography>
      {error && <Typography color="error">{error}</Typography>}
      {reviews.length > 0 ? (
        <List>
          {reviews.map(review => (
            <ListItem key={review.id}>
              <ListItemText
                primary={
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography>{review.reviewer_name}</Typography>
                    <Rating value={review.rating} readOnly />
                  </Box>
                }
                secondary={review.comment}
              />
            </ListItem>
          ))}
        </List>
      ) : (
        <Typography variant="body1" sx={{ mt: 2, ml: 2 }}>No reviews yet</Typography>
      )}
      <Card sx={{ mt: 4 }}>
        <CardContent>
          <Typography variant="h6">Submit a Review</Typography>
          <TextField
            label="Rating"
            type="number"
            value={rating}
            inputProps={{ min: 1, max: 5 }}
            onChange={(e) => setRating(e.target.value)}
            fullWidth
          />
          <TextField
            label="Comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            fullWidth
            multiline
            sx={{ mt: 2 }}
          />
          <Button onClick={handleReviewSubmit} sx={{ mt: 2, backgroundColor: "#87ceeb", color:"#fff" }}>Submit</Button>
          {submitError && (
            <Typography color="error" sx={{ mt: 2 }}>
              {submitError}
            </Typography>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default ContractReviews;
