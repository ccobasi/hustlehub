import * as React from "react";
import Typography from "@mui/material/Typography";
import { Grid, Stack, Link } from "@mui/material";

export default function FreelancerAnalyticsContainer({
  heading1,
  value1,
  heading2,
  value2,
  heading3,
  value3,
}) {
  return (
    <>
      {/* Grid for freelancer analytics */}
      <Grid item xs={12} md={12} sx={{ mb: "10px" }}>
        <Stack direction="row" sx={{ justifyContent: "space-between" }}>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontWeight: "700",
              fontSize: "16px",
              lineHeight: "20.24px",
              textAlign: "start",

              color: (theme) =>
                theme.palette.mode === "light"
                  ? theme.palette.primary.lightModeHeroTitle
                  : theme.palette.primary.darkModeHeroTitle,
            }}
          >
            {" "}
            &nbsp; &nbsp; &nbsp; &nbsp;{value1}
          </Typography>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontWeight: "700",
              fontSize: "16px",
              lineHeight: "20.24px",
              textAlign: "start",

              color: (theme) =>
                theme.palette.mode === "light"
                  ? theme.palette.primary.lightModeHeroTitle
                  : theme.palette.primary.darkModeHeroTitle,
            }}
          >
            {value2}
          </Typography>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontWeight: "700",
              fontSize: "16px",
              lineHeight: "20.24px",
              textAlign: "start",

              color: (theme) =>
                theme.palette.mode === "light"
                  ? theme.palette.primary.lightModeHeroTitle
                  : theme.palette.primary.darkModeHeroTitle,
            }}
          >
            {value3}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </Typography>
        </Stack>
        <Stack direction="row" sx={{ justifyContent: "space-between" }}>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontWeight: "400",
              fontSize: "12px",
              lineHeight: "19.2px",
              letterSpacing: "-1%",

              color: "#95969D",
            }}
          >
            {" "}
            &nbsp; &nbsp;{heading1}
          </Typography>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontWeight: "400",
              fontSize: "12px",
              lineHeight: "19.2px",
              letterSpacing: "-1%",

              color: "#95969D",
            }}
          >
            &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{heading2}
          </Typography>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontWeight: "400",
              fontSize: "12px",
              lineHeight: "19.2px",
              letterSpacing: "-1%",

              color: "#95969D",
            }}
          >
            {heading3}
          </Typography>
        </Stack>
      </Grid>
      {/* Grid End */}
    </>
  );
}
