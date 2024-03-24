import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Button, Container } from "@mui/material";

export default function IndividualMessageCard({
  title,
  description,
  time,
  count,
  sourceSet,
  image,
  imageLabel,
}) {
  return (
    <>
      {/* Container */}
      <Container maxWidth="md" sx={{ mt: 8 }}>
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
                tyle={{ width: "40px", height: "40px" }}
              />
            </ListItemAvatar>
            <ListItem sx={{ justifyContent: "flex-start" }}>
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontWeight: "500",
                  fontSize: "15px",
                  lineHeight: "22.5px",
                  letterSpacing: "-1%",
                  color: (theme) =>
                    theme.palette.mode === "light"
                      ? theme.palette.primary.lightModeHeroTitle
                      : theme.palette.primary.darkModeHeroTitle,
                }}
              >
                {title}
              </Typography>
              <ListItem
                sx={{
                  justifyContent: "flex-end",
                  fontFamily: "Poppins",
                  fontWeight: "500",
                  fontSize: "11px",
                  lineHeight: "17.6px",
                  letterSpacing: "-1%",
                  color: (theme) =>
                    theme.palette.mode === "light"
                      ? theme.palette.primary.lightModeHeroTitle
                      : theme.palette.primary.darkModeHeroTitle,
                }}
              >
                {time}
              </ListItem>
            </ListItem>
          </ListItem>
          <ListItem>
            <Typography
              sx={{
                ml: "12%",
                mr: "4%",
                width: "75%",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                overflow: "hidden",

                fontFamily: "Poppins",
                fontWeight: "400",
                fontSize: "14px",
                lineHeight: "22.5px",
                letterSpacing: "-1%",
                color: (theme) =>
                  theme.palette.mode === "light"
                    ? theme.palette.primary.lightModeHeroTitle
                    : theme.palette.primary.darkModeHeroTitle,
              }}
            >
              {description}
            </Typography>
            <Typography>
              <Avatar
                sx={{
                  height: "16px",
                  width: "20px",
                  font: "icon",
                  backgroundColor: "#5386E4",

                  fontFamily: "Poppins",
                  fontWeight: "500",
                  fontSize: "10px",
                  lineHeight: "16px",
                  letterSpacing: "-1%",
                  color: (theme) =>
                    theme.palette.mode === "light"
                      ? theme.palette.primary.lightModeHeroTitle
                      : theme.palette.primary.darkModeHeroTitle,
                }}
              >
                {count}
              </Avatar>
            </Typography>
          </ListItem>
        </List>
      </Container>
      {/* Container End */}
    </>
  );
}
