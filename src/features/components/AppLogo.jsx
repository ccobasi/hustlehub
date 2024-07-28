import { Box, Avatar } from "@mui/material";

export default function AppLogo({ src, alt }) {
  return (
    <>
      {/* Box for App logo */}
      <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "flex" } }}>
        <Avatar
          src={src}
          alt={alt}
          sx={{
            position: "fixed",
            typography: (theme) => theme.typography.logo,
          }}
        />
      </Box>
      {/* Box End */}
    </>
  );
}
