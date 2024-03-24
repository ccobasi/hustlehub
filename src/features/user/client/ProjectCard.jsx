import * as React from "react";
import List from "@mui/material/List";

import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Grid, Container, Link } from "@mui/material";

export default function ProjectContainer({
  title,
  imageLabel,
  sourceSet,
  company,
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
              <Avatar
                alt={imageLabel}
                src={sourceSet}
                style={{ width: "50px", height: "50px" }}
              />
            </ListItemAvatar>
            <ListItem sx={{ justifyContent: "flex-start" }}>
              <Typography
                variant="h6"
                sx={{
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
                {title}
              </Typography>
            </ListItem>
          </ListItem>
          <ListItem>
            <Typography
              sx={{
                ml: "12%",
                mt: "-10%",

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
              {company}
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
                View Project
              </Link>
            </ListItem>
          </ListItem>
        </List>
      </Grid>
      {/* Grid End */}
    </>
  );
}
