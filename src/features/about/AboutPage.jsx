import { Grid, Box, Typography } from "@mui/material";
import { FirstFeature } from "./presentationals/FirstFeature";
import { SecondFeature } from "./presentationals/SecondFeature";
import { ThirdFeature } from "./presentationals/ThirdFeature";
import { FourthFeature } from "./presentationals/FourthFeature";

export const AboutPage = () => {
  return (
    <>
      <Box>
        <Grid
          container
          spacing={1}
          sx={{
            margin: "auto",
            alignItems: "end",
            maxWidth: "75%",
          }}
        >
          <Typography sx={{ mt: "30%" }}>How It Works</Typography>

          {/**First Feature */}
          <FirstFeature />

          <Typography>User Roles</Typography>

          {/**Second Feature */}
          <SecondFeature />

          {/**Third Feature */}
          <ThirdFeature />

          {/**Fourth Feature */}
          <FourthFeature />
        </Grid>
      </Box>
    </>
  );
};
