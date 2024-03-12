import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import {  Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import SchoolOutlined from "@mui/icons-material/SchoolOutlined";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import AddCircleOutline from "@mui/icons-material/AddCircleOutline";




export default function EducationCard({
  title,
  subTitle,
  organization,
  timeframe,
}) {
  return (
    <>
    {/* Grid for client educational card  */}
      <Grid item xs={12} md={12} sx={{ mb: "10px" }}>
        <Card sx={{ display: "flex" }}>
          <CardContent sx={{ flex: 1, overflow: "hidden" }}>
            <Stack direction="row" sx={{ justifyContent: "space-between" }}>
              <SchoolOutlined sx={{ ml: "2%" ,mr:"-65%"}} />
              <Typography sx={{ ml: "" }}>{title}</Typography>{" "}
              <AddCircleOutline sx={{mr:"2%"}} />
            </Stack>
            <Divider sx={{ mt: "5%", mb: "5%" }} />
            <Stack direction="row" sx={{justifyContent:"space-between"}}>
              <Typography
                variant="body2"
                sx={{
                  color: (theme) =>
                    theme.palette.mode === "light"
                      ? theme.palette.grey[600]
                      : theme.palette.grey[300],
                  pb: "20px",
                  pt: "20px",
                  ml: "2%",
                 
                }}
              >
                {subTitle}
              </Typography>

              <BorderColorOutlinedIcon sx={{ mr: "2%" }} />
            </Stack>
            <Typography sx={{ ml: "2%" }}>{organization}</Typography>
            <Typography sx={{ ml: "2%" }}>{timeframe}</Typography>
          </CardContent>
        </Card>
      </Grid>
      {/* Grid End */}
    </>
  );
}
