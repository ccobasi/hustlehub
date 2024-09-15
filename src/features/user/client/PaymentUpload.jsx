// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import axios from 'axios';
import { Button, TextField, Card, CardContent } from '@mui/material';

const PaymentUpload = () => {
    const [amount, setAmount] = useState('');
    const [paymentClip, setPaymentClip] = useState(null);
    const [message, setMessage] = useState('');

    const handleFileChange = (e) => {
        setPaymentClip(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('amount', amount);
        formData.append('payment_clip', paymentClip);

        try {
            const response = await axios.post('http://localhost:8000/payment/upload/', formData);
            setMessage(response.data.message);
        } catch (error) {
            setMessage('Error uploading payment');
        }
    };

    return (
        <Card style={{ background: 'linear-gradient(to right, #CFECF7, #fff)' }}>
            <CardContent>
                <form onSubmit={handleSubmit}>
                    <TextField 
                        label="Amount" 
                        variant="outlined" 
                        value={amount} 
                        onChange={(e) => setAmount(e.target.value)} 
                        fullWidth
                        margin="normal"
                    />
                    <input 
                        type="file" 
                        onChange={handleFileChange}
                        accept="image/png, image/jpeg" 
                        required
                    />
                    <Button type="submit" variant="contained" color="primary" style={{ marginTop: '20px' }}>
                        Upload Payment Clip
                    </Button>
                    {message && <p>{message}</p>}
                </form>
            </CardContent>
        </Card>
    );
};

export default PaymentUpload;
