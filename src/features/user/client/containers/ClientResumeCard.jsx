import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Box, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import SchoolOutlined from "@mui/icons-material/SchoolOutlined";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import AddCircleOutline from "@mui/icons-material/AddCircleOutline";
import HomeRepairServiceOutlined from "@mui/icons-material/HomeRepairServiceOutlined";
import { DeleteOutline } from "@mui/icons-material";
import { PictureAsPdf } from "@mui/icons-material";
import { ConnectWithoutContact } from "@mui/icons-material";

import { ArticleOutlined } from "@mui/icons-material";



export default function ClientResumeCard({
  title,
  subTitle,
  size, createdAt,
}) {
  return (
    <>
      <Grid item xs={12} md={12} sx={{ mb: "10px" }}>
        <Card sx={{ display: "flex" }}>
          <CardContent sx={{ flex: 1, overflow: "hidden" }}>
            <Stack direction="row" sx={{ justifyContent: "space-between" }}>
              <ArticleOutlined sx={{ ml: "2%" ,mr:"-65%"}} />
              <Typography >{title}</Typography>{" "}
              <AddCircleOutline sx={{mr:"2%"}} />
            </Stack>
            <Divider sx={{ mt: "5%", mb: "5%" }} />
            <Stack direction="row" sx={{justifyContent:"space-between"}}>
             
             <PictureAsPdf sx={{color:"red", ml:"2%", mr:"-25%"}}/>
              <Typography
                
                sx={{
                  color: (theme) =>
                    theme.palette.mode === "light"
                      ? theme.palette.grey[600]
                      : theme.palette.grey[300],
                  pb: "2px",
                  ml:"7%"
                 
                
                 
                }}
              >
                {subTitle}
              </Typography>

              < DeleteOutline sx={{ mr: "2%" , color:"red"}} />
            </Stack>
            <Typography variant="body2" sx={{ 
                justifyContent:"start", ml:"30%",  }}>{size} {createdAt}</Typography>
            
          </CardContent>
        </Card>
      </Grid>
    </>
  );
}
