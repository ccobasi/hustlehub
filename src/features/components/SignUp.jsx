// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { Divider } from "@mui/material";
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
  console.log("==Sign up  rendering====");

  const [role, setRole] = useState("");
  const onRoleChange = (e) => {
    const value = e.target.value;
    setRole(value);
  };

  let password = "";
  let confirmPassword = "";

  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [errors, setErrors] = useState({});

  const [isRegistered, setIsRegistered] = useState(false);

  const handleSignInWithGoogle = async (response) => {
    const payload = response.credential;
    const server_res = await axios.post(
      "http://localhost:8000/social_account/google/",
      {
        access_token: payload,
      }
    );
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

  //submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(formData);
    let validationErrors = {};

    const email = formData.get("email");
    console.log(!email.trim());
    if (!email.trim()) {
      validationErrors.email = "Email is required";
    } else if (!/^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/.test(email)) {
      validationErrors.email = "Invalid email address";
    } else {
      validationErrors.email = "";
    }

    const first_name = formData.get("first_name");
    console.log(!first_name.trim());

    if (!first_name.trim()) {
      validationErrors.first_name = "First name is required";
    } else if (first_name.length < 3) {
      validationErrors.first_name =
        "First name must be at least 3 characters long";
    } else if (first_name.length > 20) {
      validationErrors.first_name =
        "First name must be less than 20 characters long";
    } else if (!/^[a-zA-Z ]+$/.test(first_name)) {
      validationErrors.first_name =
        "First name must contain only letters and spaces";
    } else {
      validationErrors.first_name = "";
    }

    const last_name = formData.get("last_name");

    if (!last_name.trim()) {
      validationErrors.last_name = "Last name is required";
    } else if (last_name.length < 3) {
      validationErrors.last_name =
        "Last name must be at least 3 characters long";
    } else if (last_name.length > 20) {
      validationErrors.last_name =
        "Last name must be less than 20 characters long";
    } else if (!/^[a-zA-Z ]+$/.test(last_name)) {
      validationErrors.last_name =
        "Last name must contain only letters and spaces";
    } else {
      validationErrors.last_name = "";
    }

    const role = formData.get("role");
    if (!role.trim()) {
      validationErrors.role = "Role is required";
    } else {
      validationErrors.role = "";
    }

    const password = formData.get("password");
    if (!password.trim()) {
      validationErrors.password = "Password is required";
    } else if (password.length < 8) {
      validationErrors.password = "Password must be at least 8 characters long";
    } else if (password.length > 50) {
      validationErrors.password =
        "Password must be less than 50 characters long";
    } else if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password)) {
      validationErrors.password =
        "Password must combine upper and lower case letters, numbers, and special characters, and having a minimum length of at least 8 characters";
    } else {
      validationErrors.password = "";
    }

    const mobile_number = formData.get("mobile_number");
    if (!mobile_number.trim()) {
      validationErrors.mobile_number = "Mobile number is required";
    } else if (!/^[+]+[0-9]+$/.test(mobile_number)) {
      validationErrors.mobile_number = "Mobile number is invalid";
    } else {
      validationErrors.mobile_number = "";
    }

    const password2 = formData.get("password2");
    if (!password2.trim()) {
      validationErrors.password2 = "Confirm password is required";
    } else if (password !== password2) {
      validationErrors.password2 = "Passwords do not match";
    } else {
      validationErrors.password2 = "";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      try {
        const res = await axios.post(
          "http://localhost:8000/user/register/",
          formData
        );
        const response = res.data;

        if (res.status === 201) {
          console.log("User created");
          console.log(response);
          toast.success(
            "Registration successful! Please check your email to verify your account."
          );
          //Clear any previous errors
          setErrors({});
          setIsRegistered(true); // Set state to hide form and show success message
        } else {
          setError("Unexpected error: User registration failed.");
        }
      } catch (error) {
        if (error.response) {
          setError(
            error.response?.data?.error ||
              "Failed to register. Please try again later."
          );
        } else if (error.request) {
          setError("No response from server. Please try again later.");
        } else {
          setError("An unexpected error occurred. Please try again later.");
        }
      }
    }
  };

  //Initialization of useState Hook
  const [showPwVisibility, setPwVisibility] = useState(false);
  const [showConfirmPwVisibility, setConfirmPwVisibility] = useState(false);

  const handleShowPwVisibility = (e) => {
    e.preventDefault();
    let pwTxtField = document.getElementById("password");
    setPwVisibility(true);
    if (pwTxtField.type === "password") {
      pwTxtField.type = "text";
    } else {
      pwTxtField.type = "password";
      setPwVisibility(false);
    }
  };
  const handleHidePwVisibility = (e) => {
    e.preventDefault();
  };

  const handleShowConfirmPwVisibility = (e) => {
    e.preventDefault();
    let confirmPwTxtField = document.getElementById("confirmPassword");
    setConfirmPwVisibility(true);
    if (confirmPwTxtField.type === "password") {
      confirmPwTxtField.type = "text";
    } else {
      confirmPwTxtField.type = "password";
      setConfirmPwVisibility(false);
    }
  };
  const handleHideConfirmPwVisibility = (e) => {
    e.preventDefault();
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
            Please check your email to verify your account. A confirmation link
            has been sent to your email address.
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

  else{
    return (
      <Container component="main" maxWidth="xs">
        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit}
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h5" sx={{ mt: "10%" }}>
            Registration
            <p className="error">{error ? error : ""}</p>
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
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircleOutlined />
                </InputAdornment>
              ),
            }}
            sx={{ mt: "3%" }}
          />
          {errors.email && <span className="error">{errors.email}</span>}
          <TextField
            required
            fullWidth
            id="outlined-adornment-email"
            label="First Name"
            name="first_name"
            autoComplete="first_name"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircleOutlined />
                </InputAdornment>
              ),
            }}
            sx={{ mt: "3%" }}
          />
          {errors.first_name && (
            <span className="error">{errors.first_name}</span>
          )}
          <TextField
            required
            fullWidth
            id="outlined-adornment-email"
            label="Last Name"
            name="last_name"
            autoComplete="last_name"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircleOutlined />
                </InputAdornment>
              ),
            }}
            sx={{ mt: "3%" }}
          />
          {errors.last_name && <span className="error">{errors.last_name}</span>}
          <TextField
            required
            fullWidth
            id="outlined-adornment-mobile_number"
            label="Mobile Number"
            name="mobile_number"
            autoComplete="mobile-number"
            placeholder="+123"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PhoneAndroidOutlined />
                </InputAdornment>
              ),
            }}
            sx={{ mt: "3%" }}
          />
          {errors.mobile_number && (
            <span className="error">{errors.mobile_number}</span>
          )}
          <TextField
            required
            fullWidth
            name="role"
            label="Choose Role"
            select
            value={role}
            onChange={onRoleChange}
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
          {errors.role && <span className="error">{errors.role}</span>}
          <TextField
            required
            fullWidth
            id="password"
            label="Password"
            name="password"
            placeholder="Enter your password"
            type={password ? "text" : "password"}
            autoComplete="new-password"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <VpnKey />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleShowPwVisibility}
                    onMouseDown={handleHidePwVisibility}
                    edge="end"
                  >
                    {showPwVisibility ? (
                      <VisibilityOffOutlined />
                    ) : (
                      <VisibilityOutlined />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{ mt: "3%" }}
          />
          {errors.password && <span className="error">{errors.password}</span>}
          <TextField
            required
            fullWidth
            id="confirmPassword"
            label="Confirm Password"
            name="password2"
            placeholder="Confirm your password"
            type={confirmPassword ? "text" : "password"}
            autoComplete="new-password"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <VpnKey />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleShowConfirmPwVisibility}
                    onMouseDown={handleHideConfirmPwVisibility}
                    edge="end"
                  >
                    {showConfirmPwVisibility ? (
                      <VisibilityOffOutlined />
                    ) : (
                      <VisibilityOutlined />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{ mt: "3%" }}
          />
          {errors.password2 && <span className="error">{errors.password2}</span>}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2, backgroundColor: "#87CEEB", color: "white" }}
          >
            Sign Up
          </Button>
          <Typography sx={{ mt: "10%", color: "#AFB0B6", width: "2px" }}>
            Or
          </Typography>
          <Grid container>
            <Grid item xs>
              <Link
                to="/sign-in"
                variant="body2"
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
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Container>
    );
  }
};

export default React.memo(SignUp);
