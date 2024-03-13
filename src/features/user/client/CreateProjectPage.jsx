//
import { Typography, Link, Stack, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ClientCreateProject from "../../components/CreateProject";
import CreateProjectFormValidation from "../../components/CreateProject";

const CreateProjectPage = () => {
  //Instatiate useNavigate
  let navigate = useNavigate();

  return (
    <>
      {/*First Client Feature*/}

      {/*First Heading*/}
      <Typography
        variant="h6"
        sx={{
          color: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[600]
              : theme.palette.grey[300],

          textAlign: "center",
          mt: "5%",
        }}
      >
        My Projects
      </Typography>

      <Link
        href="/create-project"
        sx={{
          textDecoration: "none",

          color: "#87CEEB",
        }}
      >
        <Typography sx={{ textAlign: "end", mr: "5%" }}>Publish</Typography>
      </Link>

      {/*Second Client Feature*/}
      {/* <ClientCreateProject /> */}
      <CreateProjectFormValidation/>
      {/*Second Heading*/}

      {/*Third Heading*/}

      {/*Fourth Heading*/}
    </>
  );
};

export default CreateProjectPage;
