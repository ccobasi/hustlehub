// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { Container, Box, Button, Typography } from '@mui/material';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const VerifyEmail = () => {
    const [isVerifying, setIsVerifying] = useState(true);
    const navigate = useNavigate();
    const { token } = useParams();

    useEffect(() => {
        const verifyEmail = async () => {
            try {
                const response = await axios.post("http://localhost:8000/user/verify-email/", { token });
                if (response.status === 200) {
                    navigate("/sign-in");
                    toast.success(response.data.message);
                }
            } catch (error) {
                toast.error(error.response?.data?.error || "Failed to verify email. Please try again later.");
                setIsVerifying(false);
            }
        };
        verifyEmail();
    }, [token, navigate]);

    return (
        <Container component="main" maxWidth="xs">
            <Box sx={{ marginTop: 8, display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Typography variant="body2" sx={{ mt: "3%" }}>
                    {isVerifying ? "Verifying your email..." : "Email verification failed. Please try again."}
                </Typography>
                {!isVerifying && (
                    <Button
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2, backgroundColor: "#87ceeb", color: "white" }}
                        onClick={() => navigate("/sign-up")}
                    >
                        Go to Sign Up
                    </Button>
                )}
            </Box>
        </Container>
    );
};

export default VerifyEmail;
