import { Typography,  Link, Stack, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { FirstFeature } from "./presentationals/FirstFeature";
import { SecondFeature } from "./presentationals/SecondFeature";
import { ThirdFeature } from "./presentationals/ThirdFeature";
import { FourthFeature } from "./presentationals/FourthFeature";


const HomePage = () => {
  //Instatiate useNavigate
  let navigate = useNavigate();

  return (
    <>
      {/*First Home Feature*/}
      <FirstFeature />

      <Typography
        variant="h6"
        sx={{
          color: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[600]
              : theme.palette.grey[300],
          pt: "20px",

          ml: "28%",
        }}
      >
        Categories
      </Typography>

      {/*Second Home Feature*/}
      <SecondFeature />

      <Link
        href="/categories"
        sx={{
          textDecoration: "none",
          ml: "64%",
          color: "#87CEEB",
        }}
      >
        See all
      </Link>

      <Typography
        variant="h6"
        sx={{
          color: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[600]
              : theme.palette.grey[300],
          pt: "20px",

          ml: "28%",
        }}
      >
        Find Talent Your Way
      </Typography>

      {/*Third Home Feature*/}
      <ThirdFeature />

      <Typography
        variant="h6"
        sx={{
          color: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[600]
              : theme.palette.grey[300],
          pt: "20px",

          ml: "28%",
        }}
      >
        Why Businesses Turn To #########
      </Typography>

      <Typography
        variant="body2"
        sx={{
          color: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[600]
              : theme.palette.grey[300],
          pt: "20px",

          ml: "28%",
          mr: "18%",
        }}
      >
        Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.
      </Typography>

      <Stack direction="row">
        <Typography
          variant="h6"
          sx={{
            color: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[600]
                : theme.palette.grey[300],
            pt: "20px",

            ml: "28%",
          }}
        >
          Testimonials
        </Typography>

        <Link
          href="/testimonials"
          sx={{
            textDecoration: "none",
            ml: "39%",
            pt: "27px",
            color: "#87CEEB",
          }}
        >
          See all
        </Link>
      </Stack>
      {/*Fourth Home Feature*/}
      <FourthFeature />

      <Button
        variant="contained"
        onClick={() => navigate("/sign-up")}
        sx={{
          backgroundColor: "#87CEEB",
          "&:hover": {
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[400]
                : theme.palette.grey[500],
          },
          ml: "25%",
          mb: "25px",
        }}
      >
        Sign Up To Like
      </Button>

      <Typography
        variant="h6"
        sx={{
          color: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[600]
              : theme.palette.grey[300],
          pt: "20px",

          ml: "28%",
        }}
      >
        <b>Find Great Work</b>
      </Typography>

      <Stack direction="row">
        <Typography
          variant="h6"
          sx={{
            color: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[600]
                : theme.palette.grey[300],
            pt: "20px",

            ml: "20%",
          }}
        >
          Featured Projects
        </Typography>

        <Link
          href="/projects"
          sx={{
            textDecoration: "none",
            ml: "39%",
            pt: "27px",
            color: "#87CEEB",
          }}
        >
          See all
        </Link>
      </Stack>
      
    
      <Button
        onClick={() => navigate("/opportunities")}
        variant="contained"
        sx={{
          backgroundColor: "#87CEEB",
          "&:hover": {
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[400]
                : theme.palette.grey[500],
          },
          ml: "25%",
          mb: "95px",
        }}
      >
        Find Opportunities
      </Button>
    </>
  );
};

export default HomePage;
