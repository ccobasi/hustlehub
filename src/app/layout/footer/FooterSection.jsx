import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Box, Stack } from "@mui/material";

export default function FooterSection() {
  return (
    <Box
      component="footer"
      sx={{
        p: 3,
        mt: 9,
        position:"static"
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item  sx={{ alignContent: "center",textAlign:"center", mt: "50px" }}>
           <Stack direction="row" className="footerLink">
           <Link
              href="/blog"
              sx={{
                color: (theme) =>
                  theme.palette.mode === "light"
                    ? theme.palette.grey[600]
                    : theme.palette.grey[100],
                textDecoration: "none",
                "&:hover": {
                  color: (theme) =>
                    theme.palette.mode === "light"
                      ? theme.palette.grey[700]
                      : theme.palette.grey[500],
                },
                
              }}
            >
              Blog &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            </Link>

            <Link
              href="/blog"
              sx={{
                color: (theme) =>
                  theme.palette.mode === "light"
                    ? theme.palette.grey[600]
                    : theme.palette.grey[100],
                textDecoration: "none",
                "&:hover": {
                  color: (theme) =>
                    theme.palette.mode === "light"
                      ? theme.palette.grey[700]
                      : theme.palette.grey[500],
                },
              }}
            >
              Company &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            </Link>

            <Link
              href="/blog"
              sx={{
                color: (theme) =>
                  theme.palette.mode === "light"
                    ? theme.palette.grey[600]
                    : theme.palette.grey[100],
                textDecoration: "none",
                "&:hover": {
                  color: (theme) =>
                    theme.palette.mode === "light"
                      ? theme.palette.grey[700]
                      : theme.palette.grey[500],
                },
              }}
            >
              Contact &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            </Link>

           </Stack>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography
            variant="body2"
            align="center"
            
            sx={{
              color: (theme) =>
                theme.palette.mode === "light"
                  ? theme.palette.grey[600]
                  : theme.palette.grey[100],
            }}
            className="footerCopyright"
          >
            {"Copyright © "}
            {new Date().getFullYear()} Hustle Hub
            {"."}All Rights Reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
