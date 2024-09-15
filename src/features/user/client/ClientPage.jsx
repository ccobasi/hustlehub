// eslint-disable-next-line no-unused-vars
import React, {useState,useEffect} from "react";
import { Typography, Link, Stack, Container, Box } from "@mui/material";
import { ClientFirstFeature } from "./Client";
//import ClientSecondFeature from "./ProjectContainer";
import ClientThirdFeature from './ClientThirdFeature';
import Sidebar from "../../components/Sidebar";
import ProjectsGrid from './ProjectsGrid';
import CustomCard from "./CustomCard";


const ClientPage = ({ userId }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  userId = user ? user.id : null;
  
  return (
    <Container component="main" maxWidth="lg">
      <Sidebar/>
      <ClientFirstFeature />
      <div>
        <Typography
          variant="h6"
          sx={{
            fontFamily: 'Poppins',
            fontWeight: '600',
            fontSize: '16px',
            lineHeight: '20.8px',
            textAlign: 'tart',
            color: (theme) =>
              theme.palette.mode === 'light'
               ? theme.palette.primary.lightModeHeroTitle
                : theme.palette.primary.darkModeHeroTitle,
            pt: '20px',
            ml: '21%',
          }}
        >
          My Projects
          <Link
            href="/create-project"
            sx={{
              fontFamily: 'Poppins',
              fontWeight: '400',
              fontSize: '13px',
              lineHeight: '20.8px',
              textDecoration: 'none',
              color: '#87CEEB',
              ml: '40%',
            }}
          >
            Create a Project
          </Link>
        </Typography>
      </div>

<ProjectsGrid/>
      {/* <ClientSecondFeature /> */}

      <Box sx={{ mt: '5%' }}>
        <Link
          // href="/categories"
          sx={{
            textDecoration: 'none',
            ml: '67%',
            color: '#87CEEB',
            fontFamily: 'Poppins',
            fontWeight: '500',
            fontSize: '12px',
            lineHeight: '19.2px',
            letterSpacing: '-1%',
          }}
        >
          
        </Link>
      </Box>

      <ClientThirdFeature userId={userId} />

      <Stack direction="row" sx={{ mt: '1%' }}>
        <Typography
          variant="h6"
          sx={{
            fontFamily: 'Poppins',
            fontWeight: '600',
            fontSize: '16px',
            lineHeight: '20.8px',
            color: (theme) =>
              theme.palette.mode === 'light'
               ? theme.palette.primary.lightModeHeroTitle
                : theme.palette.primary.darkModeHeroTitle,
            ml: '15%',
            mt: '2%',
          }}
        >
          Messages
        </Typography>
        <Link
          // href="/about/question/21334565"
          sx={{
            textDecoration: 'none',
            ml: '39.5%',
            mt: '2%',
            color: '#95969D',
            fontFamily: 'Poppins',
            fontWeight: '400',
            fontSize: '13px',
            lineHeight: '20.8px',
          }}
        >
          See all
        </Link>
        <CustomCard/>
      </Stack>
    </Container>
  );
};

export default ClientPage;
