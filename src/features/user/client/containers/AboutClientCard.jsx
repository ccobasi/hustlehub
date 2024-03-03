import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import AccountCircleOutlined from "@mui/icons-material/AccountCircleOutlined";
import Divider from "@mui/material/Divider";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";

export default function AboutClientCard(props) {
  return (
    <>
      <Grid item xs={12} md={12} sx={{ mb: "10px" }}>
        <Card sx={{ display: "flex" }}>
          <CardContent sx={{ flex: 1, overflow: "hidden" }}>
            <Stack direction="row" sx={{justifyContent:"space-between"}}>
              <AccountCircleOutlined sx={{ ml: "2%",mr:"-65%" }} />{" "}
              <Typography >
                {props.title}
              </Typography>
              <BorderColorOutlinedIcon sx={{mr: "2%" }} />
            </Stack>
            <Divider sx={{mt:"5%",mb:"5%"}}/>
            <Typography
              variant="body2"
              sx={{
                color: (theme) =>
                  theme.palette.mode === "light"
                    ? theme.palette.grey[600]
                    : theme.palette.grey[300],
                pb: "20px",
                pt: "20px",
              }}
            >
              {props.description}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
}
