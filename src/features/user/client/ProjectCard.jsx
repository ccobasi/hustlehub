// eslint-disable-next-line no-unused-vars
import * as React from "react";
import List from "@mui/material/List";

import ListItem from "@mui/material/ListItem";
// import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
// import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Grid,  Link } from "@mui/material";

export default function ProjectContainer({
  title,
  description,
  closing_date
}) {
  return (
    <>
      {/* Grid for client project */}
      <Grid item xs={12} md={12} sx={{ mb: "10px" }}>
        <List
          sx={{
            width: "100%",

            bgcolor: "background.paper",
            textAlign: "center",
            boxShadow: 1,
          }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              {title}
            </ListItemAvatar>
            <ListItem sx={{ justifyContent: "flex-start" }}>
              <Typography
                variant="h6"
                sx={{
                  ml: "30%",
                  mb: "0%",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  fontFamily: "Poppins",
                  fontWeight: "600",
                  fontSize: "14px",
                  lineHeight: "18.2px",
                  letterSpacing: "-1%",
                  color: (theme) =>
                    theme.palette.mode === "light"
                      ? theme.palette.primary.lightModeHeroTitle
                      : theme.palette.primary.darkModeHeroTitle,
                }}
              >
                {description}
              </Typography>
            </ListItem>
          </ListItem>
          <ListItem>
            <Typography
              sx={{
                ml: "80%",
                mt: "-7%",

                width: "100%",

                overflow: "hidden",
                textOverflow: "ellipsis",
                fontFamily: "Poppins",
                fontWeight: "400",
                fontSize: "13px",
                lineHeight: "20.8px",
                letterSpacing: "-1%",
                color: (theme) =>
                  theme.palette.mode === "light"
                    ? theme.palette.primary.lightModeHeroTitle
                    : theme.palette.primary.darkModeHeroTitle,
              }}
            >
              {closing_date}
            </Typography>
            <ListItem>
              <Link
                href="/categories"
                sx={{
                  textDecoration: "none",
                  mt: "-10%",
                  ml: "35%",
                  color: "#87CEEB",
                  fontFamily: "Poppins",
                  fontWeight: "500",
                  fontSize: "12px",
                  lineHeight: "19.2px",
                  letterSpacing: "-1%",
                }}
              >
                {/* View Project */}
              </Link>
            </ListItem>
          </ListItem>
        </List>
      </Grid>
      {/* Grid End */}
    </>
  );
}
