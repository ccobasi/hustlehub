import { Typography,  Link, Stack, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { FirstFeature } from "./presentationals/FirstFeature";
import { SecondFeature } from "./presentationals/SecondFeature";
import { ThirdFeature } from "./presentationals/ThirdFeature";
import { FourthFeature } from "./presentationals/FourthFeature";
import { FifthFeature } from "./presentationals/FifthFeature";


const HomePage = () => {
  //Instatiate useNavigate
  let navigate = useNavigate();

  return (
    <>
      <div className="main" style={{background:"#fafafd", width: "100%", overflowX: "hidden"}}>
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

          ml: "20%",
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
          fontFamily: "Poppins",
          fontSize: "18px",
          fontWeight: "400",
          lineHeight: "21px",
          letterSpacing: "-0.01em",
          textAlign: "left",
        

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

          ml: "20%",
        }}
      >
        Find Talent Your Way
      </Typography>

      {/*Third Home Feature*/}
      <ThirdFeature />
          <Link
        href="#"
        sx={{
          textDecoration: "none",
          ml: "64%",
          color: "#87CEEB",
          fontFamily: "Poppins",
          fontSize: "18px",
          fontWeight: "400",
          lineHeight: "21px",
          letterSpacing: "-0.01em",
          textAlign: "left",
        

        }}
      >
        Freelancer Search
      </Link>
      <Typography
        variant="h6"
        sx={{
          color: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[600]
              : theme.palette.grey[300],
          pt: "20px",
          
          ml: "20%",
          

fontSize: "18px",
fontWeight: "600",
lineHeight: "21px",
letterSpacing: "-0.01em",
textAlign: "left",



        }}
      >
        
        Why Businesses Turn to Hustle Hub
      </Typography>

      <Typography
        variant="body2"
        sx={{
          color: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[600]
              : theme.palette.grey[300],
          pt: "20px",

          ml: "22%",
          mr: "18%",

          

        }}
      >
        <p>Hustle Hub attracts businesses by offering a solution for project-based work. Key benefits include:

Access to a large and diverse talent pool with various skills.
Ability to scale workforce up or down based on project needs.
Cost savings on recruitment, office space, and benefits by hiring freelancers or part-time workers.
Efficient project management tools for communication and tracking progress.
Rapid scaling of teams to meet deadlines or workload increases.
Quality assurance through worker profiles, portfolios, and ratings.
Global reach to find talent with diverse skills and perspectives.
Ability to find specialists in niche areas to promote innovation.
Overall, Hustle Hub helps businesses build flexible, cost-effective project teams with access to a global pool of skilled workers.</p>
        <p style={{fontFamily: "Poppins",fontSize: "16px",fontWeight: "400",lineHeight: "21px",letterSpacing: "-0.01em",textAlign: "right",color: "#87CEEB",
}}>See all</p>
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

            ml: "22%",
            
fontSize: "18px",
fontWeight: "400",
lineHeight: "21px",
letterSpacing: "-0.01em",
textAlign: "left"

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
          ml: "20%",
          mb: "25px",
          mt: "20px",
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

          ml: "20%",
          

fontSize: "18px",
fontWeight: "600",
lineHeight: "21px",
letterSpacing: "-0.01em",
textAlign: "left"

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
      <FifthFeature/>
    
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
          ml: "20%",
          mb: "95px",
        }}
      >
        Find Opportunities
      </Button>
      </div>
    </>
  );
};

export default HomePage;
