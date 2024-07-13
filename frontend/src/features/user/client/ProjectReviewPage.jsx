import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ClientProjectReviewFirstFeature } from "./ClientProjectReview";


export default function ProjectReviewPage() {
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
        Project Review
      </Typography>

      {/*First Client Project Review Feature*/}
 
        <ClientProjectReviewFirstFeature />
      {/*Second Heading*/}

      {/*Third Heading*/}

      {/*Fourth Heading*/}
    </>
  );
}
