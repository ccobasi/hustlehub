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
          // ml: "9%",
          // pb: "15px",
          // mt: "12%",
          pb: { lg: "5%", md: "5%", sm: "5%", xs: "5%" },
          mt: { lg: "0%", md: "5%", sm: "10%", xs: "10%" },
          ml: { lg: "10%", md: "10%", sm: "10%", xs: "10%" },
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
          maxWidth: "100%",
          fontSize: "16px",
          lineHeight: "40.8px",
          // pb: "8px",
          //ml: "9%",
          pb: { lg: "5%", md: "5%", sm: "5%", xs: "5%" },
          ml: { lg: "10%", md: "10%", sm: "10%", xs: "10%" },
          color: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.primary.lightModeHeroTitle
              : theme.palette.primary.darkModeHeroTitle,
          mr: "2%",
        }}
      >
        {description}
      </Typography>
      {/* Description End */}
    </>
  );
}
