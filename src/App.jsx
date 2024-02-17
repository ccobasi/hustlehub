import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";



import './App.css';

import Layout from "./Layout";
import HomePage from "./app/home/HomePage";
import CategoriesPage from "./app/categories/CategoriesPage";

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

          {/* <Route path="/" element={<SecondLayout />}> */}
            {/* <Route path="/categories" element={<CategoriesPage />} />
          </Route> */}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );

}

export default App;
