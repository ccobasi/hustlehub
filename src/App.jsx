import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./app/components/SignUp";
import SignIn from "./app/components/SignIn";
import ForgetPassword from "./app/components/ForgetPassword";
import SecondLayout from "./SecondLayout";
import CssBaseline from "@mui/material/CssBaseline";


import "./App.css";

import Layout from "./Layout";
import HomePage from "./app/home/HomePage";
import ClientPage from "./features/user/client/ClientPage"

function App() {
  //Using system preferences to set theme mode.
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/" element={<HomePage />} />
          </Route>
          <Route path="/" element={<SecondLayout />}>
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/forget-password" element={<ForgetPassword />} />
            <Route path="/client" element={<ClientPage />} />
          </Route>

    
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
