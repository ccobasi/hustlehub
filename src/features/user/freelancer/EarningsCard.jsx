import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Card, CardContent, Stack } from "@mui/material";

export default function FreelancerEarning({ projectTitle, earning }) {
  return (
    <>
    {/* Grid for freelancer earning */}
      <Grid item xs={12} md={12} sx={{ mb: "10px" }}>
        <Card
          sx={{
            borderRadius: "20px",
            boxShadow: 2,
            backgroundColor: "#87CEEB",
          }}
        >
          <CardContent>
            <Stack direction="row" sx={{ justifyContent: "space-between" }}>
              <Typography
                variant="h5"
                sx={{
                  color: "#FFFFFF",
                  fontFamily:"Poppins",
                  fontWeight:"600",
                  fontSize:"16px",
                  lineHeight:"20.8px",
                  letterSpacing:"-1%"
                }}
              >
                {projectTitle}
              </Typography>

              <Typography
                variant="h5"
                sx={{
                    ml: "30%",
                    color: "#FFFFFF",
                    fontFamily:"Poppins",
                    fontWeight:"800",
                    fontSize:"20px",
                    lineHeight:"32px",
                    letterSpacing:"-1%"
                }}
              >
                {earning}
              </Typography>
            </Stack>
          </CardContent>
        </Card>
      </Grid>
      {/* Grid End */}
    </>
  );
}
