import * as React from "react";
import List from "@mui/material/List";

import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Grid, Container, Link } from "@mui/material";

export default function ProjectContainer({title,imageLabel,sourceSet,company}) {
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
              <Avatar alt={imageLabel} src={sourceSet} />
            </ListItemAvatar>
            <ListItem sx={{ justifyContent: "flex-start" }}>
              <Typography variant="h6" sx={{ mb: "0%",overflow: "hidden", textOverflow: "ellipsis" }}>
                {title}
              </Typography>
            </ListItem>
          </ListItem>
          <ListItem >
            <Typography
              sx={{
                ml: "17%",
                
                width: "100%",
             
                overflow: "hidden", textOverflow: "ellipsis"
            
              }}
            >
              {company} 
            </Typography>
           <ListItem>
           <Link
        href="/categories"
        sx={{
          textDecoration: "none",
          ml: "35%",
          color: "#87CEEB",
          
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
