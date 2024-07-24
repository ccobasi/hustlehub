import { lazy, Suspense } from 'react';
import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import LoadingIndicator from './features/components/LoadingIndicator';
const SignUp = lazy(() => import("./features/components/SignUp"));
const SignIn = lazy(() => import('./features/components/SignIn'));
const VerifyEmail = lazy(() => import('./features/components/VerifyEmail'));
const ForgetPassword = lazy(() => import('./features/components/ForgetPassword'));
const ConfirmPasswordReset = lazy(() => import('./features/components/ConfirmPasswordReset'));
const ClientPage = lazy(() => import('./features/user/client/ClientPage'));
const CreateProjectPage = lazy(() => import('./features/user/client/CreateProjectPage'));
const ProjectReviewPage = lazy(() => import('./features/user/client/ProjectReviewPage'));
const FreelancerPage = lazy(() => import('./features/user/freelancer/FreelancerPage'));
const FreelancerAnchorTemporaryDrawer = lazy(() => import('./features/components/FreelancerDrawer'));
const ClientAnchorTemporaryDrawer = lazy(() => import('./features/components/ClientDrawer'));
const EditFreelancerPage = lazy(() => import('./features/user/freelancer/EditFreelancerPage'));
const FreelancerSearchPage = lazy(() => import('./features/user/freelancer/FreelancerSearchPage'));
const SecondLayout = lazy(() => import('./SecondLayout'));
const AboutPage = lazy(() => import('./features/about/AboutPage'));
const CategoriesPage  = lazy(() => import('./features/project/CategoriesPage'));
const UserLayout = lazy(() => import('./UserLayout'));
const EditClientPage = lazy(() => import('./features/user/client/EditClientPage'));
const ProtectedRoute = lazy(() => import('./features/components/ProtectedRoute'));
const Layout = lazy(() => import('./Layout'));
const HomePage = lazy(() => import('./features/home/HomePage'));
const PageNotFound  = lazy(() => import('./features/components/PageNotFound'));
const BrowseProjectPage = lazy(() => import('./features/project/BrowseProjectsPage'));
const ProjectsUpdatePage  = lazy(() => import('./features/project/ProjectsUpdatePage'));
const Proposal = lazy(() => import('./features/user/freelancer/Proposal'));
const ProjectDetails = lazy(() => import('./features/user/client/ProjectDetails'));
const CreateContract = lazy(() => import('./features/user/client/CreateContract'));
const ContractDetails = lazy(() => import('./features/user/client/ContractDetails'));
const ContractReviews = lazy(() => import('./features/user/client/ContractReviews'));

import "./App.css";
import { orange } from "@mui/material/colors";
import { ToastContainer } from  'react-toastify'
import  'react-toastify/dist/ReactToastify.css'



const ClientPageWithUser = () => {
  const { userId } = useParams();
  console.log('ClientPageWithUser - userId:', userId);
  return <ClientPage userId={userId} />;
};


 
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
        <ToastContainer/>
        <Suspense fallback={<LoadingIndicator/>}>
          <Routes>
          <Route path="/" element={ <Layout /> }>
           
            
            <Route index element={<HomePage /> } />
            <Route path="/" element={<HomePage /> } />
      

            <Route
              path="/client-drawer"
              element={ <ClientAnchorTemporaryDrawer />}
            />
            
            <Route
              path="/freelancer-drawer"
              element={<FreelancerAnchorTemporaryDrawer />
              }
            />
          </Route>
          <Route path="/" element={ <SecondLayout />}>
            <Route path="/sign-up" element={ <SignUp />} />
            {/* <Route path="/sign-out" element={<SignOut />} /> */}
            <Route path="/about" element={<AboutPage />} />
            <Route path="/sign-in" element={ <SignIn />} />
            <Route path="/verify-email/:token" element={ <VerifyEmail />} />
            <Route path="/forget-password" element={<ForgetPassword /> } />
            <Route path="/password-reset-confirm/:uid/token" element={<ConfirmPasswordReset />} />
            <Route path="/categories" element={ <CategoriesPage />} />
            {/* <Route path="/notification" element={<NotificationPage />} />
            <Route path="/message" element={<MessagePage />} /> */}
            <Route path="/project-update" element={<ProjectsUpdatePage />} />
            <Route path="/browse-project" element={ <BrowseProjectPage />} />
            <Route path="/freelancer-search" element={ <FreelancerSearchPage />}/>
            <Route path="/proposal" element={<Proposal />}/>
            <Route path="/project-details/:id" element={<ProjectDetails />} />
            <Route path="/create-contract/" element={ <CreateContract />} />
            <Route path="/client/:userId" element={<ClientPageWithUser />} />
            <Route path="/contract/:id" element={ <ContractDetails />} />
            <Route path="/contract/reviews/:contractId" element={<ContractReviews />} />
          </Route>

          <Route path="/" element={<UserLayout />}>
            <Route path="/client" element={
              <ProtectedRoute>
          
               <ClientPage />
              </ProtectedRoute>} />
            <Route path="/edit-client/" element={
              <ProtectedRoute>
                <EditClientPage />
                
              </ProtectedRoute>} />
            <Route path="/create-project" element={
             <ProtectedRoute>
             <CreateProjectPage />
              </ProtectedRoute>
            } />
            
            <Route path="/project-review" element={
              <ProtectedRoute>
               <ProjectReviewPage />
              </ProtectedRoute>
            } />
            <Route path="/freelancer" element={
              <ProtectedRoute>
                <FreelancerPage />
            
              </ProtectedRoute>} />
            <Route path="/edit-freelancer" element={
              <ProtectedRoute>
                
                <EditFreelancerPage />
              </ProtectedRoute>} />
          </Route>
          <Route path="*" element={ <PageNotFound />}></Route>
        </Routes>

        </Suspense>
        
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
