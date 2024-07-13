import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Button, Link, Grid } from "@mui/material";

export default function NotificationCardPresentation(props) {
  return (
    <>
      {/* Grid for Notification functionality  */}

      <Grid item xs={12} md={6} sx={{ mb: "10px" }}>
        <List
          sx={{
            width: "100%",
            maxWidth: 360,
            bgcolor: "background.paper",
            boxShadow: 1,
            borderRadius: "16px",
          }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt={props.imageLabel}
                src={props.sourceSet}
                style={{ width: "40px", height: "40px" }}
              />
            </ListItemAvatar>
            <ListItemText
              primary={
                <React.Fragment>
                  <Typography
                    component="h1"
                    variant="h6"
                    sx={{
                      fontFamily: "Poppins",
                      fontWeight: "700",
                      mb:"2%",
                      fontSize: "14px",
                      lineHeight: "18.23px",
                      color: (theme) =>
                        theme.palette.mode === "light"
                          ? theme.palette.primary.lightModeHeroTitle
                          : theme.palette.primary.darkModeHeroTitle,
                    }}
                  >
                    {props.title}
                  </Typography>
                </React.Fragment>
              }
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{
                      display: "inline",
                      fontFamily: "Poppins",
                      
                      fontWeight: "400",
                      fontSize: "13px",
                      lineHeight: "15.62px",
                      color: (theme) =>
                        theme.palette.mode === "light"
                          ? theme.palette.primary.lightModeHeroTitle
                          : theme.palette.primary.darkModeHeroTitle,
                    }}
                    component="span"
                    variant="body2"
                  >
                    {props.description}
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          <ListItemText
            sx={{
              ml: "25%",
              color: "#AAA6B9",
              fontFamily: "Poppins",
              fontWeight: "400",
              fontSize: "9px",
              lineHeight: "14.32",
            }}
          >
            {props.time}{" "}
            <Link
              href="/hello"
              sx={{
                textDecoration:"none",
                ml: "10%",
                fontFamily: "Poppins",
                fontWeight: "400",
                fontSize: "12px",
                lineHeight: "15.62px",
                color: "#FF4B4B",
               
              }}
            >
              Delete
            </Link>
          </ListItemText>
        </List>
      </Grid>
    </>
  );
}
