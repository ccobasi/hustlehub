import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { MoreVert } from "@mui/icons-material";
import { Button } from "@mui/material";
import Stack from "@mui/material/Stack";



export default function ProjectsUpdate(props) {
    
    
    
  
    return (
      <>
    
      <Grid item xs={12} md={12} sx={{ mb: "10px" }}>
        <Card sx={{ display: "flex", }}>
          <CardContent sx={{ flex: 1, overflow: "hidden" }}>
            <CardMedia
              component="picture"
              sx={{
                height: "233",
                
                maxHeight: { xs: 233, md: 167 },
                

              }}
            >
              <source srcSet={props.sourceSet} />
              <Stack direction="row" sx={{ml:"15%"}}>
              <img src={props.image} alt={props.imageLabel} />
              <MoreVert sx={{ml:"70%",mt:"3%"}}/>
              </Stack>
             
             
            </CardMedia>
           

            <Typography
              component="h4"
              variant="h"
              sx={{
                color: (theme) =>
                  theme.palette.mode === "light"
                    ? theme.palette.grey[600]
                    : theme.palette.grey[300],
                pb: "20px",
                pt: "20px",
                ml:"12%"
              }}
            >
              {props.jobTitle}
            </Typography>
            <Typography
              
              variant="body2"
              sx={{
                color: (theme) =>
                  theme.palette.mode === "light"
                    ? theme.palette.grey[600]
                    : theme.palette.grey[300],
                pb: "20px",
                pt: "20px",
                ml:"12%"
              }}
            >
              {props.description}
            </Typography>
            <Button variant="contained" sx={{ml:"12%"}}>
              {props.action}
            </Button>
          
          </CardContent>
        </Card>
      </Grid>
      
   
    </>
    );
  }
  