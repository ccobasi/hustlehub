import { Box, Stack, Typography } from "@mui/material";

// Data for menu section
const menuSectionData = [
  
  {
    name: "How It Works",

    url: "/about",
  },
];

export default function MenuSection() {
  //Get list function
  const getMenuSectionList = () => (
    <Stack direction="row">
      {menuSectionData.map((item, index) => (
        <Stack key={index}>
          <Typography
            component="a"
            href={item.url}
            sx={{
              color: (theme) =>
                theme.palette.mode === "light"
                  ? theme.palette.primary.lightModeTitleTextColor
                  : theme.palette.primary.darkModeTitleTextColor,
              fontFamily: "Poppins",
              textDecoration: "none",
              fontWeight: "700",
              fontSize: "16px",
              lineHeight: "19.2px",

              marginTop: "10px",
              marginBottom: "5px",

              my: 1,
              mx: 1.5,
              ml:60,
            }}
          >
            {item.name}
          </Typography>
        </Stack>
      ))}
    </Stack>
  );
  // Function End
  return (
    <>
      {/* Box */}
      <Box sx={{ display: { xs: "none", md: "flex" } }}>
        {getMenuSectionList()}
      </Box>
      {/* Box End */}
    </>
  );
}
