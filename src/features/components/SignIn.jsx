// eslint-disable-next-line no-unused-vars
import {React, useRef, useState, useEffect} from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { InputAdornment } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import FormControl from "@mui/material/FormControl";
import Divider from "@mui/material/Divider";
import ImageAvatars from "./ImageAvatars";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";
import {
  EmailOutlined,
  VpnKey,
  VisibilityOffOutlined,
  VisibilityOutlined,
} from "@mui/icons-material";
import { toast } from "react-toastify";
import axios from "axios";
// import { useDispatch } from "react-redux";
// import { setCredentials } from "../auth/authSlice"
// import { useLoginMutation } from "../auth/authApiSlice";

export default function SignIn() {
  let navigate = useNavigate();
  // const userRef = useRef()
  // const errRef = useRef()
  // const [user, setUser] = useState('')
  // const [pwd, setPwd] = useState('')
  // const [errMsg, setErrMsg] = useState('')
  // const [login, { isLoading}] = useLoginMutation()
  // const dispatch = useDispatch()
  const[loginData, setLoginData]=useState({email:"", password: "", showPassword: false});
  const [error, setError]=useState("");
  const [isLoading, setIsLoading]=useState(false);


  // useEffect(() => {
  //       userRef.current.focus()
  //   }, [])

  //   useEffect(() => {
  //       setErrMsg('')
  //   }, [user, pwd])
  
  const [psw, setPsw] = useState(false);
  const handleShowPsw = () => setPsw((show) => !show);
  const handleHidePsw = (e) => {
    e.preventDefault();
  };

   const handleChange= (e)=>{
    setLoginData({...loginData, [e.target.name]: e.target.value})
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = loginData;

    if (!email || !password) {
      setError("Email and password are required");
      toast.error("Email and password are required");
      return;
    }

    try {
      setIsLoading(true);
      const res = await axios.post("http://localhost:8000/user/sign-in/", loginData);
      const response = res.data;
      setIsLoading(false);

      if (res.status === 200) {
        const user = {
          email: response.email,
          names: response.full_name,
          role: response.role,
          id: response.id,
          access: response.access,
        };
        
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("access", JSON.stringify(response.access_token));
        localStorage.setItem("refresh", JSON.stringify(response.refresh_token));

        if (response.role === "client") {
          navigate("/client");
        } else {
          navigate("/freelancer");
        }
        toast.success("Login successful");
      }
    } catch (error) {
      setIsLoading(false);
      if (error.response && error.response.status === 401) {
        setError("Invalid email or password");
        toast.error("Invalid email or password");
      } else {
        setError("An error occurred. Please try again later.");
        toast.error("An error occurred. Please try again later.");
      }
    }
  };

    return (
    
    // Container Signin
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Stack direction="row">
          <Typography
            component="h1"
            variant="h5"
            sx={{
              mt: "10%",
              color: (theme) =>
                theme.palette.mode === "light"
                  ? theme.palette.primary.lightModeHeroTitle
                  : theme.palette.primary.darkModeHeroTitle,
              fontFamily: "Poppins",
              fontWeight: "600",
              fontSize: "24px",
              lineHeight: "33.6px",
              letterSpacing: "-1.5%",
            }}
          >
            Welcome Back
          </Typography>
          <img
            alt="Waving Hand Emogi"
            src="/assets/loginEmoji.png"
            style={{ height: "34px", width: "34px" , paddingTop:"5px", marginTop:"14px", marginLeft:"10px"}}
          />
        </Stack>

        <Typography
          component="h1"
          sx={{
            mt: "3%",
            color: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.primary.lightModeHeroTitle
                : theme.palette.primary.darkModeHeroTitle,
            fontFamily: "Poppins",
            fontWeight: "400",
            fontSize: "14px",
            lineHeight: "22.4px",
            letterSpacing: "-1%",
          }}
        >
          Let&apos;s log in.Apply to jobs!
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          {/**Registration Form Control */}
          <FormControl fullWidth>
            {/**Email Textfield */}
            <TextField
              required
              fullWidth
              id="email"
              label="E-mail"
              name="email"
              placeholder="Enter your email"
              autoComplete="email"
              value={loginData.email}
              onChange={handleChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailOutlined
                      sx={{
                        ml: "-25%",
                        color: "#AFB0B6",
                      }}
                    />
                  </InputAdornment>
                ),
              }}
              sx={{
                color: "#AFB0B6",
                fontFamily: "Poppins",
                fontWeight: "400",
                fontSize: "14px",
                lineHeight: "21px",
                letterSpacing: "-1%",
                pb: "5%",
                mb: "2%",
                mt: "25%",
              }}
            />

            {/**Password Textfield */}
            <TextField
              required
              fullWidth
              name="password"
              label="Password"
              type={psw ? "text" : "password"}
              id="password"
              placeholder="Enter your password"
              autoComplete="new-password"
              value={loginData.password}
              onChange={handleChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <VpnKey
                      sx={{
                        ml: "-25%",
                        color: "#AFB0B6",
                      }}
                    />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleShowPsw}
                      onMouseDown={handleHidePsw}
                      edge="end"
                    >
                      {psw ? (
                        <VisibilityOffOutlined
                          sx={{
                            color: "#AFB0B6",
                          }}
                        />
                      ) : (
                        <VisibilityOutlined />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{
                color: "#AFB0B6",
                fontFamily: "Poppins",
                fontWeight: "400",
                fontSize: "14px",
                lineHeight: "21px",
                letterSpacing: "-1%",
                pb: "5%",
              }}
            />
          </FormControl>

          {/**Submit button*/}
          {isLoading && (<p>Loading...</p>)}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 10,
              mb: 7,
              backgroundColor: "#87CEEB",
              "&:hover": {
                backgroundColor: (theme) =>
                  theme.palette.mode === "light"
                    ? theme.palette.grey[400]
                    : theme.palette.grey[500],
                color: (theme) =>
                  theme.palette.mode === "light"
                    ? theme.palette.primary.lightModeHeroTitle
                    : theme.palette.primary.darkModeHeroTitle,

                fontFamily: "Poppins",
                fontWeight: "500",
                fontSize: "16px",
                lineHeight: "24px",
                letterSpacing: "-1%",
              },
            }}
          >
            Log in
          </Button>

          <Grid container justifyContent="center">
            <Grid item>
              <a
                href="/forget-password"
                style={{
                  color: "#87CEEB",
                  mb: "20%",
                  textDecoration: "none",
                  fontFamily: "Poppins",
                  fontWeight: "400",
                  fontSize: "15px",
                  lineHeight: "18.97px",
                }}
              >
                Forget Password ?
              </a>
            </Grid>
          </Grid>

          {/**Divider */}
          <Divider sx={{ mt: "20%", color: "#AFB0B6" }}>
            Or continue with
          </Divider>
          {/**Image Avatars */}
          <Box className="imgAvatars">
            <ImageAvatars />
          </Box>

          <Grid container justifyContent="center" sx={{ mt: "10%" }}>
            <Grid item>
              <Typography
                sx={{
                  mb: "20%",
                  
                  fontFamily: "Poppins",
                  fontWeight: "400",
                  fontSize: "14px",
                  lineHeight: "17.71px",
                  color: "#AFB0B6" }}
              >
                Haven&apos;t an account?{" "}
                <a
                  href="/sign-up"
                  style={{
                    color: "#87CEEB",
                    mb: "20%",
                    textDecoration: "none",
                    fontFamily: "Poppins",
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "17.71px",
                  }}
                >
                  Register
                </a>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
    // Container End
  );

  
}




