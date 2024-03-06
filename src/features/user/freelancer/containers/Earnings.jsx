import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Card, CardContent, Stack } from "@mui/material";

export default function FreelancerEarning({ projectTitle, earning }) {
  return (
    <>
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
                  color: (theme) =>
                    theme.palette.mode === "light"
                      ? theme.palette.grey[600]
                      : theme.palette.grey[300],
                }}
              >
                {projectTitle}
              </Typography>

              <Typography
                variant="h5"
                sx={{
                  color: (theme) =>
                    theme.palette.mode === "light"
                      ? theme.palette.grey[600]
                      : theme.palette.grey[300],
                  ml: "30%",
                }}
              >
                {earning}
              </Typography>
            </Stack>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
}
