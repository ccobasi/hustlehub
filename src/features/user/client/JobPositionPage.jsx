import { Typography, Link, Stack, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import JobPosition from "../../components/JobPosition";

export default function JobPositionPage() {
  //Instatiate useNavigate
  let navigate = useNavigate();

  return (
    <>
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
        Job Position
      </Typography>

      {/*First Client Job Position Feature*/}
      <JobPosition />
      {/*Second Heading*/}

      {/*Third Heading*/}

      {/*Fourth Heading*/}
    </>
  );
}
