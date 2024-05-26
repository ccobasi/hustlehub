// import { useNavigate } from "react-router-dom";

import { Link, Stack, Typography, Container, Box } from "@mui/material";
import PopularCategoriesComponent  from "./PopularCategories.jsx";
import { TrendingCategories } from "./TrendingCategories.jsx";

const CategoriesPage = () => {
  //Instatiate useNavigate
  // let navigate = useNavigate();

  return (
    <>
      <Container component="main" maxWidth="lg">
        <Box>
          {/*First Home Feature*/}
          <Typography
            component="h1"
            variant="h5"
            sx={{
              mt: "-7%",
              mb: "40%",
              fontFamily: "Poppins",
              fontWeight: "600",
              fontSize: "16px",
              lineHeight: "20.8px",
              textAlign: "center",
              color: (theme) =>
                theme.palette.mode === "light"
                  ? theme.palette.primary.lightModeHeroTitle
                  : theme.palette.primary.darkModeHeroTitle,
            }}
          >
            Categories
          </Typography>

          <Stack direction="row" sx={{ justifyContent: "space-between" }}>
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontWeight: "600",
                fontSize: "16px",
                lineHeight: "20.8px",
                letterSpacing: "-1%",
                color: (theme) =>
                  theme.palette.mode === "light"
                    ? theme.palette.primary.lightModeHeroTitle
                    : theme.palette.primary.darkModeHeroTitle,
              }}
            >
              Active
            </Typography>
            <Link
              href="/hello"
              sx={{
                textDecoration: "none",
                fontFamily: "Poppins",
                fontWeight: "400",
                fontSize: "13px",
                lineHeight: "20.8px",
                letterSpacing: "-1%",
                color: "#95969D",
              }}
            >
              See all
            </Link>
          </Stack>

          <PopularCategoriesComponent />

          <Stack direction="row" sx={{ justifyContent: "space-between" }}>
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontWeight: "600",
                fontSize: "16px",
                lineHeight: "20.8px",
                mt: "12%",
                letterSpacing: "-1%",
                color: (theme) =>
                  theme.palette.mode === "light"
                    ? theme.palette.primary.lightModeHeroTitle
                    : theme.palette.primary.darkModeHeroTitle,
              }}
            >
              Completed
            </Typography>
            <Link
              href="/hello"
              sx={{
                textDecoration: "none",
                fontFamily: "Poppins",
                mt: "12%",
                fontWeight: "400",
                fontSize: "13px",
                lineHeight: "20.8px",
                letterSpacing: "-1%",
                color: "#95969D",
              }}
            >
              See all
            </Link>
          </Stack>

          <TrendingCategories />
        </Box>
      </Container>
    </>
  );
};

export default CategoriesPage;
