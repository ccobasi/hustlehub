// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import VpnKey from "@mui/icons-material/VpnKey";
import VisibilityOffOutlined from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlined from "@mui/icons-material/VisibilityOutlined";
import AccountCircleOutlined from "@mui/icons-material/AccountCircleOutlined";
import PhoneAndroidOutlined from "@mui/icons-material/PhoneAndroidOutlined";
import InputAdornment from "@mui/material/InputAdornment";
import ManageAccountsOutlined from "@mui/icons-material/ManageAccountsOutlined";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Link, useNavigate } from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";
import axios from "axios";
import { toast } from "react-toastify";

const SignUp = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    email: "",
    first_name: "",
    last_name: "",
    mobile_number: "",
    role: "",
    password: "",
    password2: "",
  });
  const [isRegistered, setIsRegistered] = useState(false);

  const handleSignInWithGoogle = async (response) => {
    const payload = response.credential;
    const server_res = await axios.post("https://ccobasi.pythonanywhere.com/social_account/google/", {
      access_token: payload,
    });
    console.log(server_res);
    const user = {
      email: server_res.data.email,
      names: server_res.data.full_name,
      role: server_res.data.role,
      id: server_res.data.id,
      access: server_res.data.access,
    };
    if (server_res.status === 200) {
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("access", JSON.stringify(server_res.access_token));
      localStorage.setItem("refresh", JSON.stringify(server_res.refresh_token));
      if (response.role === "client") {
        navigate("/client");
      } else {
        navigate("/freelancer");
      }
      toast.success("login successful");
    }
  };

  useEffect(() => {
    try {
      // eslint-disable-next-line no-undef
      google.accounts.id.initialize({
        client_id: import.meta.env.VITE_CLIENT_ID,
        callback: handleSignInWithGoogle,
      });
      // eslint-disable-next-line no-undef
      google.accounts.id.renderButton(document.getElementById("signInDiv"), {
        theme: "outline",
        size: "large",
        text: "continue_with",
        shape: "circle",
        width: "280",
      });
    } catch (error) {
      console.error(error);
    }
  }, []);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { first_name, last_name, email, mobile_number, role, password, password2 } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !first_name || !last_name || !role || !mobile_number || !password || !password2) {
        setError("Please fill out all fields");
        return;
    }

    if (password !== password2) {
        setError("Passwords do not match");
        return;
    }

    try {
        const res = await axios.post("https://ccobasi.pythonanywhere.com/user/register/", formData);
        const response = res.data;

        if (res.status === 201) {
            console.log("User created");
            console.log(response);
            toast.success("Registration successful! Please check your email to verify your account.");
            setIsRegistered(true); // Set state to hide form and show success message
        } else {
            setError("Unexpected error: User registration failed.");
        }
    } catch (error) {
        if (error.response) {
            setError(error.response?.data?.error || "Failed to register. Please try again later.");
        } else if (error.request) {
            setError("No response from server. Please try again later.");
        } else {
            setError("An unexpected error occurred. Please try again later.");
        }
    }
  };


  if (isRegistered) {
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
          <Typography variant="h5" sx={{ mt: "10%" }}>
            Registration Successful
          </Typography>
          <Typography variant="body2" sx={{ mt: "3%" }}>
            Please check your email to verify your account. A confirmation link has been sent to your email address.
          </Typography>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2, backgroundColor: "#87CEEB", color: "white" }}
            onClick={() => navigate("/sign-in")}
          >
            Go to Sign In
          </Button>
        </Box>
      </Container>
    );
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
        <form onSubmit={handleSubmit}>
          <Typography variant="h5" sx={{ mt: "10%" }}>
            Registration
            <p style={{ color: "red", padding: "1px" }}>{error ? error : ""}</p>
          </Typography>
          <Typography variant="body2" sx={{ mt: "3%" }}>
            Let&apos;s Register. Apply to jobs!
          </Typography>
          <TextField
            required
            fullWidth
            id="outlined-adornment-email"
            label="Email Address"
            name="email"
            autoComplete="email"
            value={email}
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircleOutlined />
                </InputAdornment>
              ),
            }}
            sx={{ mt: "3%" }}
          />
          <TextField
            required
            fullWidth
            id="outlined-adornment-email"
            label="First Name"
            name="first_name"
            autoComplete="first_name"
            value={first_name}
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircleOutlined />
                </InputAdornment>
              ),
            }}
            sx={{ mt: "3%" }}
          />
          <TextField
            required
            fullWidth
            id="outlined-adornment-email"
            label="Last Name"
            name="last_name"
            autoComplete="last_name"
            value={last_name}
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircleOutlined />
                </InputAdornment>
              ),
            }}
            sx={{ mt: "3%" }}
          />
          <TextField
            required
            fullWidth
            id="outlined-adornment-mobile_number"
            label="Mobile Number"
            name="mobile_number"
            autoComplete="mobile-number"
            value={mobile_number}
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PhoneAndroidOutlined />
                </InputAdornment>
              ),
            }}
            sx={{ mt: "3%" }}
          />
          <TextField
            required
            fullWidth
            name="role"
            label="Choose Role"
            select
            value={role}
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <ManageAccountsOutlined />
                </InputAdornment>
              ),
            }}
            sx={{ mt: "3%" }}
          >
            <MenuItem value="client">Client</MenuItem>
            <MenuItem value="freelancer">Freelancer</MenuItem>
          </TextField>
          <TextField
            required
            fullWidth
            id="password"
            label="Password"
            name="password"
            placeholder="Enter your password"
            type={showPassword ? "text" : "password"}
            autoComplete="new-password"
            value={password}
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <VpnKey />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleShowPassword} edge="end">
                    {showPassword ? <VisibilityOffOutlined /> : <VisibilityOutlined />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{ mt: "3%" }}
          />
          <TextField
            required
            fullWidth
            id="confirmPassword"
            label="Confirm Password"
            name="password2"
            placeholder="Confirm your password"
            type={showConfirmPassword ? "text" : "password"}
            autoComplete="new-password"
            value={password2}
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <VpnKey />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleShowConfirmPassword} edge="end">
                    {showConfirmPassword ? <VisibilityOffOutlined /> : <VisibilityOutlined />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{ mt: "3%" }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2, backgroundColor: "#87CEEB", color: "white" }}
          >
            Sign Up
          </Button>
        </form>
        <h3 className="text-option">Or</h3>
        <Grid container>
          <Grid item xs>
            <Link to="/sign-in" variant="body2">
              Already have an account? Sign in
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default SignUp;
