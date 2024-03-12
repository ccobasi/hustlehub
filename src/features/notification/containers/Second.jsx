import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Button, Container } from "@mui/material";


export default function Second(props) {
  return (
    <>
    {/* Container for Notification functionality  */}
      <Container maxWidth="md" sx={{ mt: 8 }}>
      <List
        sx={{
          width: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
          boxShadow: 1,
        }}
      >
         <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              alt={props.imageLabel}
              src={props.sourceSet}
            />
          </ListItemAvatar>
          <ListItemText
            primary={
              <React.Fragment>
               <Typography component="h1" variant="h6" sx={{}}>{props.title}</Typography>
            </React.Fragment>
            }
            
           
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  {props.description}
                </Typography>
              </React.Fragment>
            }
          />
         
        </ListItem>
        <ListItemText sx={{ml:"25%"}}>{props.time} <Button variant="contained" sx={{ml:"10%"}}>Delete</Button></ListItemText>
      
      </List>
      </Container>
      {/* Container End */}
    </>
  );
}


