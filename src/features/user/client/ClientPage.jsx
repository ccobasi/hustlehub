import { Typography, Link, Stack, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ClientFirstFeature } from "./presentationals/ClientCard";
import ClientSecondFeature from "./presentationals/ProjectContainer";

const ClientPage = () => {
  //Instatiate useNavigate
  let navigate = useNavigate();

  return (
    <>
      {/*First Client Feature*/}
      <ClientFirstFeature />

      {/*First Heading*/}
      <Typography
        variant="h6"
        sx={{
          color: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[600]
              : theme.palette.grey[300],
          pt: "20px",

          ml: "23.5%",
        }}
      >
        My Projects
        <Link
          href="/create-project"
          sx={{
            textDecoration: "none",
            ml: "35%",
            color: "#87CEEB",
          }}
        >
          Create a Project
        </Link>
      </Typography>

      {/*Second Client Feature*/}
      <ClientSecondFeature />

      {/*Second Heading*/}
      <Box sx={{ mt: "5%" }}>
        <Link
          href="/categories"
          sx={{
            textDecoration: "none",
            ml: "67%",
            color: "#87CEEB",
          }}
        >
          View All Project
        </Link>
      </Box>

      {/*Third Heading*/}

      <Stack direction="row">
        <Typography
          variant="h6"
          sx={{
            color: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[600]
                : theme.palette.grey[300],

            ml: "24%",
            mt: "2%",
          }}
        >
          Payment History
        </Typography>

        <Link
          href="/about/question/21334565"
          sx={{
            textDecoration: "none",
            ml: "33%",
            mt: "2%",
            color: "#87CEEB",
          }}
        >
          See all
        </Link>
      </Stack>

      {/*Fourth Heading*/}

      <Stack direction="row" sx={{ mt: "20%" }}>
        <Typography
          variant="h6"
          sx={{
            color: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[600]
                : theme.palette.grey[300],

            ml: "24%",
            mt: "2%",
          }}
        >
          Messages
        </Typography>

        <Link
          href="/about/question/21334565"
          sx={{
            textDecoration: "none",
            ml: "39.5%",
            mt: "2%",
            color: "#87CEEB",
          }}
        >
          See all
        </Link>
      </Stack>
    </>
  );
};

export default ClientPage;
