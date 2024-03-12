import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Card, CardContent, CardMedia, Stack } from "@mui/material";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import Avatar from "@mui/material/Avatar";
export default function ClientCard({
  sourceSet,
  image,
  imageLabel,
  name,
  jobTitle,
}) {
  return (
    <>
    {/* Grid for client card */}
      <Grid item xs={12} md={12} sx={{ mb: "10px" }}>
        <Card sx={{boxShadow: 0,}}
          
        >
          <CardContent sx={{  display: "flex",
            flexDirection: "column",
            alignItems: "center",  }} >
          <Avatar
              alt={imageLabel}
              src={sourceSet}
              sx={{height:"80px", width:"80px"}}
              
            />
           

            <Typography
              variant="h4"
              sx={{
                color: (theme) =>
                  theme.palette.mode === "light"
                    ? theme.palette.grey[600]
                    : theme.palette.grey[300],
                
                pt: "20px",
                textAlign:"center"
                
              }}
            >
              {name}
            </Typography>
            <Stack direction="row">
             
              <Typography
                variant="body2"
                sx={{
                  color: (theme) =>
                    theme.palette.mode === "light"
                      ? theme.palette.grey[600]
                      : theme.palette.grey[300],
                  pb: "20px",
                  pt: "5px",
                }}
              >
                {jobTitle}
              </Typography>
              <VerifiedOutlinedIcon  className="clientVerifiedIcon"/>
            </Stack>
          </CardContent>
        </Card>
      </Grid>
      {/* Grid End */}
    </>
  );
}