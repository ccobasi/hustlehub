//
import { Typography, Link } from "@mui/material";

import ClientCreateProject from "../../components/CreateProject";
import CreateProjectFormValidation from "../../components/CreateProject";

const CreateProjectPage = () => {
<<<<<<< HEAD
=======
 
>>>>>>> home-page

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
          mt: "10%",
        }}
      >
        Create a Project
      </Typography>

      <Link
        href="/create-project"
        sx={{
          textDecoration: "none",

          color: "#87CEEB",
        }}
      >
        
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
