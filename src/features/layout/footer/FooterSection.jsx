import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Box, Stack } from "@mui/material";

const footerData = [
  {
    title: "Company",
    description: [
      { id: 0, name: "Team", url: "/team" },
      { id: 1, name: "History", url: "/history" },
      { id: 2, name: "Contact us", url: "/contact" },
      { id: 3, name: "Location", url: "/location" },
    ],
  },
  {
    title: "Features",
    description: [
      { id: 0, name: "Cool stuff", url: "/cool-stuff" },
      { id: 1, name: "Random feature", url: "/random-feature" },
      { id: 2, name: "Team feature", url: "/team-feature" },
      { id: 3, name: "Developer stuff", url: "/developer-stuff" },
      { id: 4, name: "Another one", url: "/another-one" },
    ],
  },
  {
    title: "Resources",
    description: [
      { id: 0, name: "Resource", url: "/resource" },
      { id: 1, name: "Resource name", url: "/resource-name" },
      { id: 2, name: "Another resource", url: "/another-resource" },
      { id: 3, name: "Final resource", url: "/final-resource" },
    ],
  },
  {
    title: "Legal",
    description: [
      { id: 0, name: "Privacy policy", url: "/privacy-policy" },
      { id: 1, name: "Terms of use", url: "/terms-of-use" },
    ],
  },
];

function Copyright(props) {
  return (
    // Copyrigh 
    <Typography
      variant="body2"
      align="center"
      {...props}
      sx={{
        color: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.primary.lightModeTitleTextColor
            : theme.palette.primary.darkModeTitleTextColor,
        fontFamily: "Poppins",
        textDecoration: "none",
        fontWeight: "300",
        fontSize: "10px",
        lineHeight: "19.2px",
        marginTop: "5px",
        marginBottom: "5px",
      }}
    >
      {"Copyright © "} {new Date().getFullYear()} Appspot Digital Solutions
      {"."}All Rights Reserved.
    </Typography>
    //End copyright
  );
}

// 

export default function FooterSection() {
  return (
    <>
      {/* Footer */}
      <Container
        maxWidth="md"
        component="footer"
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          mt: 8,
          py: [3, 6],
          backgroundColor: "background.default",
        }}
      >
        <Grid container spacing={4} justifyContent="space-evenly">
          {footerData.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography
                gutterBottom
                sx={{
                  color: (theme) =>
                    theme.palette.mode === "light"
                      ? theme.palette.primary.lightModeTitleTextColor
                      : theme.palette.primary.darkModeTitleTextColor,
                  fontFamily: "Poppins",
                  textDecoration: "none",
                  fontWeight: "700",
                  fontSize: "14px",
                  lineHeight: "19.2px",

                  marginTop: "10px",
                  marginBottom: "5px",
                }}
              >
                {footer.title}
              </Typography>
              <Box>
                {footer.description.map((item, index) => (
                  <Box key={index}>
                    <Link
                      href={item.url}
                      variant="body2"
                      sx={{
                        textDecoration: "none",
                        color: (theme) =>
                          theme.palette.mode === "light"
                            ? theme.palette.primary.lightModeTitleTextColor
                            : theme.palette.primary.darkModeTitleTextColor,
                        fontFamily: "Poppins",
                        fontWeight: "300",
                        fontSize: "10px",
                        lineHeight: "19.2px",
                        marginTop: "5px",
                        marginBottom: "5px",
                      }}
                    >
                      {item.name}
                    </Link>
                  </Box>
                ))}
              </Box>
            </Grid>
          ))}
        </Grid>
        <Copyright sx={{ mt: 5 }} />
      </Container>
      {/* End footer */}
    </>
  );
}
