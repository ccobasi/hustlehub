import Typography from "@mui/material/Typography";

export default function WhyHustleHub({ title, description }) {
  return (
    <>
    {/* Heading for the WhyHustleHub Feature */}
      <Typography
           gutterBottom
          sx={{
            textAlign: "start",
            color: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.primary.lightModeHeroTitle
                : theme.palette.primary.darkModeHeroTitle,

            fontFamily: "Poppins",
            fontWeight: "600",
            fontSize: "16px",
            lineHeight: "20.8px",

            ml: "9%",
            pb: "15px",
            mt: "12%",
          }}
      >
        {title}
      </Typography>
      {/* Heading End */}
      {/* Description */}
      <Typography
        paragraph
                  sx={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    fontFamily: "Poppins",
                    fontWeight: "100",
                    maxWidth:"70%",
                    fontSize: "16px",
                    lineHeight: "40.8px",
                    pb: "8px",
                    ml: "9%",
        
                    color: (theme) =>
                      theme.palette.mode === "light"
                        ? theme.palette.primary.lightModeHeroTitle
                        : theme.palette.primary.darkModeHeroTitle,
                    mr: "1%",
                  }}
      >
        {description}
      </Typography>
      {/* Description End */}
    </>
  );
}

