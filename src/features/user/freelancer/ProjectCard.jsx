import * as React from "react";
import List from "@mui/material/List";

import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Grid, Stack, Link } from "@mui/material";

export default function FreelancerProjectContainer({
  company,
  title,
  imageLabel,
  sourceSet,
  location,
  timeframe,
}) {
  return (
    <>
    {/* Grid for freelancer projects */}
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
              <Avatar alt={imageLabel} src={sourceSet}  style={{ width: "50px", height: "50px" }}/>
            </ListItemAvatar>
            <ListItem sx={{ justifyContent: "flex-start" }}>
              <Typography variant="h6" sx={{
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
                }}>
                {title}
              </Typography>
              <Typography 
              sx={{
                mb: "0%",
                overflow: "hidden",
                textOverflow: "ellipsis",
                fontFamily: "Poppins",
                fontWeight: "500",
                fontSize: "12px",
                lineHeight: "19.2px",
                letterSpacing: "-1%",
                ml:"46%",
                color: (theme) =>
                  theme.palette.mode === "light"
                    ? theme.palette.primary.lightModeHeroTitle
                    : theme.palette.primary.darkModeHeroTitle,
              }}>{location}</Typography>
            </ListItem>
          </ListItem>
          <ListItem>
            <Typography
              variant="body2"
              sx={{
                ml: "12%",
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
              {company}
            </Typography>
            <Typography variant="body2"  sx={{
                ml: "12%",
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
              }}>
              {timeframe}
            </Typography>
          </ListItem>
        </List>
      </Grid>
      {/* Grid End */}
    </>
  );
}
