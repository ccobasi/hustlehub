import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Card, CardContent, CardMedia, Stack } from "@mui/material";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import Avatar from "@mui/material/Avatar";
import { useLocation } from "react-router-dom";

export default function FreelancerCard({
  name,
  jobTitle,
  sourceSet,
  image,
  imageLabel,
}) {
  const data = useLocation();
  console.log(data);
  return (
    <>
    {/* Grid for freelancer card */}
      <Grid item xs={12} md={12} sx={{ mb: "10px" }}>
        <Card sx={{ boxShadow: 0 }}>
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar
              alt={imageLabel}
              sourceSet={sourceSet}
              src={image}
              sx={{ height: "109px", width: "104px" }}
            />

            <Typography
              variant="h4"
              sx={{
                fontFamily: "Poppins",
                fontWeight: "600",
                fontSize: "20px",
                lineHeight: "24px",
                letterSpacing: "-1.5%",
                color: (theme) =>
                  theme.palette.mode === "light"
                    ? theme.palette.primary.lightModeHeroTitle
                    : theme.palette.primary.darkModeHeroTitle,

                pt: "20px",
                textAlign: "center",
              }}
            >
              {data.state}
            </Typography>
            <Stack direction="row">
              <Typography
                variant="body2"
                sx={{
                  fontFamily: "Poppins",
                  fontWeight: "400",
                  fontSize: "12px",
                  lineHeight: "19.2px",

                  color: "#95969D",
                  pb: "20px",
                  pt: "5px",
                }}
              >
                {jobTitle}
              </Typography>
              <VerifiedOutlinedIcon sx={{width:"12px",color:"#5386E4", height:"12px"}} className="clientVerifiedIcon" />
            </Stack>
          </CardContent>
        </Card>
      </Grid>
      {/* Grid End */}
    </>
  );
}
