import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Typography, Box, Card, CardContent, TextField, Button } from "@mui/material";
import Rating from '@mui/material/Rating';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ContractReviews = () => {
  const { contractId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState('');
  const [comment, setComment] = useState('');
  const [error, setError] = useState(null);
  const [submitError, setSubmitError] = useState(null);
  const user = JSON.parse(localStorage.getItem("user"));
  let navigate = useNavigate();

  const handleReviewSubmit = async () => {
    if (rating < 1 || rating > 5) {
      setSubmitError('Rating must be between 1 and 5');
      return;
    }

    const reviewData = {
      contract: contractId,
      rating: parseInt(rating),
      comment,
    };

    console.log("Submitting review with data: ", reviewData);

    try {
      const response = await axios.post(`https://ccobasi.pythonanywhere.com/review/contract/reviews/`, reviewData, {
        headers: {
          'Authorization': `Bearer ${user.token}`
        }
      });
      setReviews([...reviews, response.data]);
      toast.success("Your review has been created successfully.");
      navigate('/client')
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
