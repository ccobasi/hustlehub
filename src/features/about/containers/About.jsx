import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";



export default function  AboutUs({title,description}) {
 
  return (
    <Paper
      
      sx={{
        position: "relative",
        color: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.background.default
            : theme.palette.grey[300],
       
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        mt:"3%",
        mb:"3%"
       
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[50]
            : theme.palette.grey[900],
        }}
      />
      <Grid container>
        <Grid item md={6}>
          <Box
            sx={{
              position: "relative",
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
             

            }}
          >
            <Typography
              component="h1"
              variant="h4"
              gutterBottom
              sx={{color: (theme) =>
                theme.palette.mode === "light"
                  ? theme.palette.grey[600]
                  : theme.palette.grey[300],
                 fontSize:"0.875rem",ml:"25%",pb:"15px"}}            >
              {title}
            </Typography>
            <Typography
              variant="h5"
              paragraph
              sx={{ overflow: "hidden", textOverflow: "ellipsis" , fontFamily: "IBM Plex Sans, sans-serif",ml:"25%", textAlign:"initial",
              color: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[600]
                : theme.palette.grey[300],
               
              }}
          
          
            >
              {description}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}
