import Category from "./Category";
import homeCategoriesData from "./homeCategoriesData";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";


export const JobCategories = () => {
  let secondContainer = homeCategoriesData.map((el) => {
    return <Category key={el.id} {...el} />;
  });
  return (
    <>
      {/* Heading for the Categories Feature*/}
      <Typography
        sx={{
          color: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.primary.lightModeHeroTitle
              : theme.palette.primary.darkModeHeroTitle,

          fontFamily: "Poppins",
          fontWeight: "600",
          fontSize: "16px",
          lineHeight: "20.8px",

          ml: "8%",
          pb: "15px",
          mt: "12%",
        }}
      >
        Categories
      </Typography>

      {/* Heading End*/}

      {/* Grid for the Categories Feature*/}
      <Grid
        container
        spacing={4}
        sx={{
          margin: "auto",

          maxWidth: "100%",
        }}
      >
        {secondContainer}
      </Grid>
      {/* Grid End*/}

      {/* Link for all Categories */}
      <Link
        href="/categories"
        sx={{
          typography: (theme) => theme.typography.categoriesSeeAllLink,
          ml: "67%",
        }}
      >
        See all
      </Link>
      {/* Link End*/}
    </>
  );
};
