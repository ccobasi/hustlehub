import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./features/components/SignUp";
import SignIn from "./features/components/SignIn";
import ForgetPassword from "./features/components/ForgetPassword";
import RegistrationLayout from "./RegistrationLayout";
import UserLayout from "./UserLayout";
import CssBaseline from "@mui/material/CssBaseline";
import MessagePage from "./features/message/MessagePage";
import NotificationPage from "./features/notification/NotificationPage";
import CategoriesPage from "./features/project/CategoriesPage";
import ProjectsUpdatePage from "./features/project/ProjectsUpdatePage";
import BrowseProjectPage from "./features/project/BrowseProjectsPage";
import { AboutPage } from "./features/about/AboutPage";
import ClientPage from "./features/user/client/ClientPage";
import EditClientPage from "./features/user/client/EditClientPage";
import ClientAnchorTemporaryDrawer from "./features/components/ClientDrawer";
import CreateProjectPage from "./features/user/client/CreateProjectPage";
import CompanyPage from "./features/user/client/CompanyPage";
import DescriptionPage from "./features/user/client/DescriptionPage";
import EmploymentPage from "./features/user/client/EmploymentPage";
import JobPositionPage from "./features/user/client/JobPositionPage";
import LocationPage from "./features/user/client/LocationPage";
import WorkplacePage from "./features/user/client/WorkplacePage";
import ProjectReviewPage from "./features/user/client/ProjectReviewPage";
import FreelancerPage from "./features/user/freelancer/FreelancerPage";
import FreelancerAnchorTemporaryDrawer from "./features/components/FreelancerDrawer";
import EditFreelancerPage from "./features/user/freelancer/EditFreelancerPage";
import "./App.css";

import Layout from "./Layout";
import HomePage from "./features/home/HomePage";

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
            <Route path="/about/question/21334565" element={<AboutPage />} />
            <Route
              path="/client-drawer"
              element={<ClientAnchorTemporaryDrawer />}
            />
            <Route
              path="/freelancer-drawer"
              element={<FreelancerAnchorTemporaryDrawer />}
            />
          </Route>
          <Route path="/" element={<RegistrationLayout />}>
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/forget-password" element={<ForgetPassword />} />
            <Route path="/categories" element={<CategoriesPage />} />
            <Route path="/notification" element={<NotificationPage />} />
            <Route path="/message" element={<MessagePage />} />
            <Route path="/project-update" element={<ProjectsUpdatePage />} />
            <Route path="/browse-project" element={<BrowseProjectPage />} />
          </Route>

          <Route path="/" element={<UserLayout />}>
            <Route path="/client" element={<ClientPage />} />
            <Route path="/edit-client" element={<EditClientPage />} />
            <Route path="/create-project" element={<CreateProjectPage />} />
            <Route path="/company" element={<CompanyPage />} />
            <Route path="/description" element={<DescriptionPage />} />
            <Route path="/employment" element={<EmploymentPage />} />
            <Route path="job-position" element={<JobPositionPage />} />
            <Route path="/location" element={<LocationPage />} />
            <Route path="/workplace" element={<WorkplacePage />} />
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
