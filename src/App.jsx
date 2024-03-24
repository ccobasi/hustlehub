import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./features/components/SignUp";
import SignIn from "./features/components/SignIn";
import ForgetPassword from "./features/components/ForgetPassword";
import ClientPage from "./features/user/client/ClientPage";
import CreateProjectPage from "./features/user/client/CreateProjectPage";
import ProjectReviewPage from "./features/user/client/ProjectReviewPage";
import FreelancerPage from "./features/user/freelancer/FreelancerPage";
import FreelancerAnchorTemporaryDrawer from "./features/components/FreelancerDrawer";
import ClientAnchorTemporaryDrawer  from "./features/components/ClientDrawer";
import EditFreelancerPage from "./features/user/freelancer/EditFreelancerPage";
import FreelancerSearchPage from "./features/user/freelancer/FreelancerSearchPage";
import SecondLayout  from "./SecondLayout";
import AboutPage  from "./features/about/AboutPage" ;
import CategoriesPage from  './features/project/CategoriesPage';
import UserLayout from  "./UserLayout";
import EditClientPage from "./features/user/freelancer/EditFreelancerPage";
import "./App.css";

import Layout from "./Layout";
import HomePage from "./features/home/HomePage";
import { orange } from "@mui/material/colors";

function App() {
  //Using system preferences to set theme mode.
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  //manage the typography of your app here.
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
          primary: {
            main: "#95969D",

            darkModeTitleTextColor: "#FAFAFA",
            lightModeTitleTextColor: "#000000",
            darkFadeBoxColor: "#666666",
            lightFadeBoxColor: "#CCCCCC",
            darkModeHeroTitle: "CFE6E7",
            lightModeHeroTitle: "#0D0D26",
          },
          secondary: {
            main: "#228B22",
          },

          status: {
            danger: orange[500],
          },
        },

        typography: {
          fontFamily: ["Poppins"],

          // use different words for the variants.

          appBar: {
            height: "60px",
            borderRadius: "2px",
          },

          logo: {
            width: "34px",
            height: "34px",
            top: "12px",
            left: "9px",
            color: "#D9D9D9",
          },
          mobileMenuIcon: {
            width: "21px",
            height: "30px",
            top: "4px",
            left: "50px",
            marginLeft: "30px",
            padding: "5.4px, 0px, 5.4px, 0px",
          },
          heroGetStartedButton: {
            width: "92px",
            height: "24px",
            borderRadius: "5px",
            fontFamily: "Poppins",
            fontWeight: "500",

            fontSize: "10px",
            color: "#FFFFFF",

            backgroundColor: "#87CEEB",
          },
          categoriesSeeAllLink: {
            textDecoration: "none",
            ml: "67%",
            color: "#95969D",
            height: "21px",
            fontFamily: "Poppins",
            fontWeight: "400",
            fontSize: "13px",
            lineHeight: "20.8px",
            letterSpacing: "-1%",
          },
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

            <Route
              path="/client-drawer"
              element={<ClientAnchorTemporaryDrawer />}
            />
            <Route
              path="/freelancer-drawer"
              element={<FreelancerAnchorTemporaryDrawer />}
            />
          </Route>
          <Route path="/" element={<SecondLayout />}>
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/forget-password" element={<ForgetPassword />} />
            <Route path="/categories" element={<CategoriesPage />} />
            {/* <Route path="/notification" element={<NotificationPage />} />
            <Route path="/message" element={<MessagePage />} />
            <Route path="/project-update" element={<ProjectsUpdatePage />} />
            <Route path="/browse-project" element={<BrowseProjectPage />} /> */}
            <Route path="/freelancer-search" element={<FreelancerSearchPage/>}/>
          </Route>

          <Route path="/" element={<UserLayout />}>
            <Route path="/client" element={<ClientPage />} />
            <Route path="/edit-client" element={<EditClientPage />} />
            <Route path="/create-project" element={<CreateProjectPage />} />
            
            <Route path="/project-review" element={<ProjectReviewPage />} />
            <Route path="/freelancer" element={<FreelancerPage />} />
            <Route path="/edit-freelancer" element={<EditFreelancerPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
