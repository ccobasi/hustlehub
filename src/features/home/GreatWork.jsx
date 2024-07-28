import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
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
      <Grid item xs={12} md={6} sx={{ mb: "10px" }}>
        {/* Card for the Feature */}
        <Card
          sx={{
            display: "flex",
            backgroundColor: "#87CEEB",
            borderRadius: "12px",
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
              }}
            >
              <source srcSet={sourceSet} />
              <Stack
                direction="row"
                sx={{
                  ml: { lg: "15%", md: "15%", sm: "15%", xs: "15%" },
                }}
              >
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
                    pt: { lg: "1%", md: "1%", sm: "1%", xs: "1%" },
                    ml: { lg: "5%", md: "5%", sm: "5%", xs: "5%" },
                  }}
                >
                  {jobTitle}
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
                        pb: "10px",
                        ml: "0%",
                      }}
                    >
                      {company}
                    </Typography>
                    {/* Heading for company End */}
                  </Stack>
                </Typography>
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
                  ml: { lg: "12%", md: "12%", sm: "12%", xs: "14%" },
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
                  ml: { lg: "12%", md: "12%", sm: "14%", xs: "14%" },
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
                ml: { lg: "15%", md: "15%", sm: "15%", xs: "15%" },
                mt: { lg: "7%", md: "7%", sm: "7%", xs: "7%" },
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
