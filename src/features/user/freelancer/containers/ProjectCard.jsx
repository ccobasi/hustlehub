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
              <Avatar alt={imageLabel} src={sourceSet} />
            </ListItemAvatar>
            <ListItem sx={{ justifyContent: "flex-start" }}>
              <Typography variant="h6" sx={{ ml: "0%", mr: "27%" ,overflow: "hidden", textOverflow: "ellipsis" ,}}>
                {title}
              </Typography>
              <Typography sx={{ ml: "30%",overflow: "hidden", textOverflow: "ellipsis" , }}>{location}</Typography>
            </ListItem>
          </ListItem>
          <ListItem>
            <Typography
              variant="body2"
              sx={{
                ml: "10%",
                mr: "15%",
                overflow: "hidden", textOverflow: "ellipsis" ,
              }}
            >
              {company}
            </Typography>
            <Typography variant="body2" sx={{ ml: "38%" ,overflow: "hidden", textOverflow: "ellipsis" ,}}>
              {timeframe}
            </Typography>
          </ListItem>
        </List>
      </Grid>
      {/* Grid End */}
    </>
  );
}
