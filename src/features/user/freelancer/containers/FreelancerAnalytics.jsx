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
      <Grid item xs={12} md={12} sx={{ mb: "10px" }}>
        <Stack direction="row" sx={{justifyContent:"space-between"}}>
          <Typography> &nbsp; &nbsp;  &nbsp; &nbsp;<b>{value1}</b></Typography>
          <Typography><b>{value2}</b></Typography>
          <Typography ><b>{value3}</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Typography>
        </Stack>
        <Stack direction="row" sx={{justifyContent:"space-between"}}>
          <Typography> &nbsp; &nbsp;{heading1}</Typography>
          <Typography >&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{heading2}</Typography>
          <Typography >{heading3}</Typography>
        </Stack>
      </Grid>
    </>
  );
}
