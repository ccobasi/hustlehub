
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import { Link, Stack, Typography } from "@mui/material";
import { PopularCategories } from "./presentationals/PopularCategories.jsx";
import { TrendingCategories } from "./presentationals/TrendingCategories.jsx";

const CategoriesPage = () => {
  //Instatiate useNavigate
  let navigate = useNavigate();

  return (
    <>
      {/*First Home Feature*/}
          <Typography
            variant="h6"
            sx={{
              color: (theme) =>
                theme.palette.mode === "light"
                  ? theme.palette.grey[600]
                  : theme.palette.grey[300],
              pt: "35px",

              textAlign: "center",
            }}
          >
            <b>Categories</b>
          </Typography>

          <Stack direction="row">
            <Typography
              variant="body2"
              sx={{
                color: (theme) =>
                  theme.palette.mode === "light"
                    ? theme.palette.grey[600]
                    : theme.palette.grey[300],
                pt: "20px",

                ml: "28%",
              }}
            >
              <b>Popular</b>
            </Typography>

            <Link
              href="/testimonials"
              sx={{
                textDecoration: "none",
                ml: "30%",
                pt: "20px",
                color: "#87CEEB",
              }}
            >
              <Typography variant="body2">
                <b>See all</b>
              </Typography>
            </Link>
          </Stack>

          <PopularCategories />

          <Stack direction="row">
            <Typography
              variant="body2"
              sx={{
                color: (theme) =>
                  theme.palette.mode === "light"
                    ? theme.palette.grey[600]
                    : theme.palette.grey[300],
                pt: "20px",

                ml: "28%",
              }}
            >
              <b>Trending</b>
            </Typography>

            <Link
              href="/testimonials"
              sx={{
                textDecoration: "none",
                ml: "30%",
                pt: "20px",
                color: "#87CEEB",
              }}
            >
              <Typography variant="body2">
                <b>See all</b>
              </Typography>
            </Link>
          </Stack>

         <TrendingCategories/>
      
  
    </>
  );
};

export default CategoriesPage;
