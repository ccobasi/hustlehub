import React, {useState} from 'react'
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircleOutlined from "@mui/icons-material/AccountCircleOutlined";
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

const VerifyEmail = () => {
    const [otp, setOtp]=useState("")
    const navigate=useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(otp){
            const response = await axios.post("https://ccobasi.pythonanywhere.com/user/verify-email/", {'otp':otp})
            if(response.status === 200){
                navigate("/sign-in")
                toast.success(response.data.message)
            }
        }
    }
    return (
        <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >  
         <Typography variant="body2" sx={{ mt: "3%" }}>
           Enter your Otp code:
         </Typography>
        <TextField
          required
          fullWidth
          id="otp"
          label="OTP"
          name="otp"
          autoComplete="otp"
          value={otp}
          onChange={(e)=>setOtp(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircleOutlined />
              </InputAdornment>
            ),
          }}
          sx={{ mt: "10%" }}
        />
                       
                    
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2, backgroundColor: "#87ceeb", 
    color: "white",  }}
          onClick={handleSubmit}
        >
          Send
        </Button>
                </Box>
    </Container>
    )
};

export default VerifyEmail;