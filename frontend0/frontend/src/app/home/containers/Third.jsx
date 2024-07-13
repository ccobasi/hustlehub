import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Rating } from "@mui/material";



export default function Third({sourceSet,image, imageLabel, name, jobTitle, rating}) {
   
  
    return (
      <>
      
        <Grid item xs={6} md={6} sx={{ mb: "10px" }}>
          <Card sx={{ display: "flex", }}>
            <CardContent sx={{ flex: 1, overflow: "hidden" }}>
              <CardMedia
                component="picture"
                sx={{
                  height: "233",
                  width: "350",
                  maxHeight: { xs: 233, md: 167 },
                  maxWidth: { xs: 350, md: 250 },
  
                }}
              >
                <source srcSet={sourceSet} />
                <img src={image} alt={imageLabel} />
              </CardMedia>
  
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
                {name}
              </Typography>
              <Typography sx={{textAlign:"center"}} component="legend">{jobTitle}
              <Rating name="job-rating" value={rating}/>
              </Typography>
            
            </CardContent>
          </Card>
        </Grid>
        
     
      </>
    );
  }
  