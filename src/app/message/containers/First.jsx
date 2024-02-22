import * as React from "react";
import List from "@mui/material/List";

import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Button, Container , Box} from "@mui/material";
import Stack from "@mui/material/Stack";


export default function First(props) {
  return (
    <>
      <Container maxWidth="md" sx={{ mt: 8 }}>
      <List
        sx={{
          width: "100%",
          
          bgcolor: "background.paper",
          textAlign:"center",
          boxShadow: 1,
        }}
      >
         <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              alt={props.imageLabel}
              src={props.sourceSet}
              sx={{}}
            />
           
          </ListItemAvatar>
          <ListItem sx={{justifyContent:"flex-start"}}><Typography>{props.title}</Typography><ListItem sx={{justifyContent:"flex-end"}}>{props.time}</ListItem></ListItem>
         
        </ListItem>
        <ListItem ><Typography sx={{ml:"12%",mr:"4%",width:"75%", whiteSpace:"nowrap", textOverflow:"ellipsis", overflow:"hidden"}}>{props.description}</Typography><Typography><Avatar sx={{height:"30px", width:"30px", font:"icon", backgroundColor:"blue"}}>{props.count}</Avatar></Typography></ListItem>
        

      </List>
      </Container>
    </>
  );
}


