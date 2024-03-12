import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import { Link, Stack, Typography } from "@mui/material";
import { Updates } from "./presentationals/ProjectsUpdate";

const ProjectsUpdatePage = () => {
  //Instatiate useNavigate
  let navigate = useNavigate();

  return (
    <>
      {/*First Projects Update First Feature*/}
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
        <b>Project Updates</b>
      </Typography>

      <Updates />
    </>
  );
};

export default ProjectsUpdatePage;
