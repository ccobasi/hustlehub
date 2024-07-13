import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import {Chip ,Button} from "@mui/material";
import Stack from "@mui/material/Stack";


export default function FreelancerSearch({
  jobTitle,
  company,
  location,
  task,
  rank,
  jobType,
  sourceSet,
  time,
  salary,
  imageLabel,
  image
}) {
  return (
    <>
      {/* Grid for the Great Work Feature */}
      <Grid item xs={12} md={6} sx={{ mb: "10px", margin: "auto" }}>
        {/* Card for the Feature */}
        <Card
          sx={{
            display: "flex",

            backgroundColor: "#87CEEB",
          }}
        >
          {/* Card Content for the feature */}
          <CardContent
            sx={{ flex: 1, overflow: "hidden", width: "100%", height: "186px" }}
          >
            {/* Card Media for the feature */}
            <CardMedia
              component="picture"
              sx={{
                height: "70px",

                maxHeight: { xs: 233, md: 167 },
              }}
            >
              <source srcSet={sourceSet} />
              <Stack direction="row" sx={{ ml: "15%" }}>
                <img
                  src={image}
                  alt={imageLabel}
                  style={{
                    width: "46px",
                    height: "46px",
                    borderRadius: "12px",
                  }}
                />
                {/* Card Media End */}
                {/* Heading for the Job title */}
                <Typography
                  sx={{
                    color: "#FFFFFF",
                    fontFamily: "Poppins",
                    fontWeight: "600",
                    fontSize: "16px",
                    lineHeight: "20.8px",
                    letterSpacing: "-1%",

                    pt: "10px",
                    ml: "5%",
                  }}
                >
                  {jobTitle}
                  <Stack direction="column">
                    {/* Heading for company and location */}
                    <Typography
                      sx={{
                        color: "#FFFFFF",
                        fontFamily: "Poppins",
                        fontWeight: "500",
                        fontSize: "14px",
                        lineHeight: "21px",
                        letterSpacing: "-1%",

                        pb: "10px",

                        ml: "0%",
                      }}
                    >
                      {company}
                    </Typography>

                    <Typography
                      sx={{
                        color: "#FFFFFF",
                        fontFamily: "Poppins",
                        fontWeight: "500",
                        fontSize: "14px",
                        lineHeight: "21px",
                        letterSpacing: "-1%",

                        pb: "10px",

                        ml: "0%",
                      }}
                    >
                      {location}
                    </Typography>
                    {/* Heading  End */}
                  </Stack>
                </Typography>
                {/*Heading for job title End  */}
              </Stack>
            </CardMedia>
            {/* Card Media End */}

            {/* Disabled group of buttons */}
            <Stack direction="row" justifyContent="space-between">
             {/* <Chip sx={{width:"100px"}}>{task}</Chip>
             <Chip>{jobType}</Chip>
             <Chip>{rank}</Chip> */}
             <Typography>
             {task}
             </Typography>
             <Typography>
             {jobType}
              </Typography>
              <Typography>
              {rank}
              </Typography>

            </Stack>
            {/* Buttons End */}

            {/* Heading for job type */}
            <Stack direction="row">
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontWeight: "500",
                fontSize: "13px",
                lineHeight: "20.8px",
                letterSpacing: "-1%",
                color: "#FFFFFF",
                width: "169px",
                height: "21px",

                mt: "5%",
                ml: "5%",
              }}
            >
              {time}
            </Typography>
            {/* Heading End */}

            <Typography
              sx={{
                fontFamily: "Poppins",
                fontWeight: "500",
                fontSize: "13px",
                lineHeight: "20.8px",
                letterSpacing: "-1%",
                color: "#FFFFFF",
                width: "169px",
                height: "21px",

                mt: "5%",
                ml: "55%",
              }}
            >
              {salary}
            </Typography>
            {/* Heading End */}
            </Stack>
        

            {/* Card Content End */}
          </CardContent>
          {/* Card End */}
        </Card>
        {/* Grid End */}
      </Grid>
    </>
  );
}
