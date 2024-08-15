import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Button, Box } from "@mui/material";
import Stack from "@mui/material/Stack";

export default function GreatWork({
  jobTitle,
  company,
  topic1,
  topic2,
  rank,
  jobType,
  sourceSet,
  image,
  imageLabel,
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
            borderRadius:"12px"
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
              <Stack direction="row" sx={{ ml: "12%", mt:"4%" }}>
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
                  </Typography>
                  <Stack direction="column">
                    {/* Heading for company */}
                    <Typography
                      sx={{
                        color: "#FFFFFF",
                        fontFamily: "Poppins",
                        fontWeight: "500",
                        fontSize: "14px",
                        lineHeight: "21px",
                        letterSpacing: "-1%",
                        pt: "10px",
                        pb: "10px",
                        ml: "60%",
                      }}
                    >
                      {company}
                    </Typography>
                    {/* Heading for company End */}
                  </Stack>
               
                {/*Heading for job title End  */}
              </Stack>
            </CardMedia>
            {/* Card Media End */}

            {/* Disabled group of buttons */}
            <Stack direction="row">
              <Button
                variant="contained"
                disabled
                sx={{
                  ml: "12%",
                  fontFamily: "Poppins",
                  fontWeight: "400",
                  fontSize: "11px",
                  lineHeight: "17.6px",
                  letterSpacing: "-1%",
                  color: "#FFFFFF",
                  width: "69px",
                  height: "26px",
                  borderRadius: "65px",
                  backgroundColor: "#87CEEB",
                }}
              >
                {topic1}
              </Button>
              <Button
                variant="contained"
                disabled
                sx={{
                  ml: "12%",

                  fontFamily: "Poppins",
                  fontWeight: "400",
                  fontSize: "11px",
                  lineHeight: "17.6px",
                  letterSpacing: "-1%",
                  color: "#FFFFFF",
                  width: "69px",
                  height: "26px",
                  borderRadius: "65px",
                  backgroundColor: "#87CEEB",
                }}
              >
                {topic2}
              </Button>
              <Button
                variant="contained"
                disabled
                sx={{
                  ml: "12%",
                  fontFamily: "Poppins",
                  fontWeight: "400",
                  fontSize: "11px",
                  lineHeight: "17.6px",
                  letterSpacing: "-1%",
                  color: "#FFFFFF",
                  width: "69px",
                  height: "26px",
                  borderRadius: "65px",
                  backgroundColor: "#87CEEB",
                }}
              >
                {rank}
              </Button>
            </Stack>
            {/* Buttons End */}

            {/* Heading for job type */}
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

                mt: "10%",
                ml: "5%",
              }}
            >
              {jobType}
            </Typography>
            {/* Heading End */}

            {/* Card Content End */}
          </CardContent>
          {/* Card End */}
        </Card>
        {/* Grid End */}
      </Grid>
    </>
  );
}
