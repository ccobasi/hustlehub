// import * as React from "react";
// import { styled } from "@mui/material/styles";
// import Card from "@mui/material/Card";
// import CardHeader from "@mui/material/CardHeader";
// import CardContent from "@mui/material/CardContent";
// import CardActions from "@mui/material/CardActions";
// import Collapse from "@mui/material/Collapse";
// import Avatar from "@mui/material/Avatar";
// import IconButton, { IconButtonProps } from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import { blue } from "@mui/material/colors";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import ShareIcon from "@mui/icons-material/Share";
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// import MoreVertIcon from "@mui/icons-material/MoreVert";

// interface ExpandMoreProps extends IconButtonProps {
//   expand: boolean;
// }

// const ExpandMore = styled((props: ExpandMoreProps) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
//   marginLeft: "auto",
//   transition: theme.transitions.create("transform", {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));

// export default function RecipeReviewCard() {
//   const [expanded, setExpanded] = React.useState(false);

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };

//   return (
//     <>
//       <div style={{ margin: "5em", textAlign: "center" }}>
//         <h1>Blog Layout</h1>
//         <h3>Some Kind of Title</h3>
//       </div>

//       <div
//         style={{
//           margin: "0 25%",
//           display: "flex",
//           flexDirection: "row",
//           justifyContent: "center",
//           border: "1px solid #000",
//           padding: "2em",
//         }}
//       >
//         <hr />
//         <Card
//           sx={{ maxWidth: 345 }}
//           style={{ marginRight: "5em" }}
//           variant="outlined"
//         >
//           <CardHeader
//             avatar={
//               <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
//                 B
//               </Avatar>
//             }
//             action={
//               <IconButton aria-label="settings">
//                 <MoreVertIcon />
//               </IconButton>
//             }
//             title="Blog Title"
//             subheader="Blog Subtitle"
//           />
//           <CardContent>
//             <Typography variant="body2" color="text.secondary">
//               Chevrolet is one of the most recognizable and popular car brands
//               in the world. Founded in 1911 by Louis Chevrolet and William C.
//               Durant, the brand has become a symbol of quality and reliability
//             </Typography>
//           </CardContent>
//           <CardActions disableSpacing>
//             <h4>Read More</h4>
//             <ExpandMore
//               expand={expanded}
//               onClick={handleExpandClick}
//               aria-expanded={expanded}
//               aria-label="show more"
//             >
//               <ArrowForwardIcon />
//             </ExpandMore>
//           </CardActions>
//           <Collapse in={expanded} timeout="auto" unmountOnExit>
//             <CardContent>
//               <Typography paragraph>Chevrolet Description</Typography>
//               <Typography paragraph>
//                 Chevrolet is an iconic American automobile brand founded in 1911
//                 by Louis Chevrolet and William C. Durant
//               </Typography>
//               <Typography paragraph>
//                 It is currently the fourth-largest automotive brand in the
//                 United States and is a division of General Motors. Chevrolet has
//                 become one of America’s most iconic brands, producing reliable
//                 and stylish cars, trucks, and SUVs for over a century. Its
//                 models range from the economical Spark to the luxurious
//                 Corvette.
//               </Typography>
//               <Typography paragraph>
//                 Chevrolet is also known for its commitment to safety, providing
//                 advanced features like lane departure warning and front crash
//                 prevention. (Discard any mussels that don&apos;t open.)
//               </Typography>
//             </CardContent>
//           </Collapse>
//         </Card>

//         <Card sx={{ maxWidth: 345 }}>
//           <CardHeader
//             avatar={
//               <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
//                 B
//               </Avatar>
//             }
//             action={
//               <IconButton aria-label="settings">
//                 <MoreVertIcon />
//               </IconButton>
//             }
//             title="Blog Title"
//             subheader="Blog Subtitle"
//           />
//           <CardContent>
//             <Typography variant="body2" color="text.secondary">
//               Chevrolet is one of the most recognizable and popular car brands
//               in the world. Founded in 1911 by Louis Chevrolet and William C.
//               Durant, the brand has become a symbol of quality and reliability
//             </Typography>
//           </CardContent>
//           <CardActions disableSpacing>
//             <h4>Read More</h4>
//             <ExpandMore
//               expand={expanded}
//               onClick={handleExpandClick}
//               aria-expanded={expanded}
//               aria-label="show more"
//             >
//               <ArrowForwardIcon />
//             </ExpandMore>
//           </CardActions>
//           <Collapse in={expanded} timeout="auto" unmountOnExit>
//             <CardContent>
//               <Typography paragraph>Chevrolet Description</Typography>
//               <Typography paragraph>
//                 Chevrolet is an iconic American automobile brand founded in 1911
//                 by Louis Chevrolet and William C. Durant
//               </Typography>
//               <Typography paragraph>
//                 It is currently the fourth-largest automotive brand in the
//                 United States and is a division of General Motors. Chevrolet has
//                 become one of America’s most iconic brands, producing reliable
//                 and stylish cars, trucks, and SUVs for over a century. Its
//                 models range from the economical Spark to the luxurious
//                 Corvette.
//               </Typography>
//               <Typography paragraph>
//                 Chevrolet is also known for its commitment to safety, providing
//                 advanced features like lane departure warning and front crash
//                 prevention. (Discard any mussels that don&apos;t open.)
//               </Typography>
//             </CardContent>
//           </Collapse>
//         </Card>
//       </div>
//     </>
//   );
// }

import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton  from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { blue } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import MoreVertIcon from "@mui/icons-material/MoreVert";

// interface ExpandMoreProps extends IconButtonProps {
//   expand: boolean;
// }

//const ExpandMore = styled((props: ExpandMoreProps) => {

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <div style={{ margin: "5em", textAlign: "center" }}>
        <h1>Blog Layout</h1>
        <h3>Some Kind of Title</h3>
      </div>

      <div
        style={{
          margin: "0 25%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          border: "1px solid #000",
          padding: "2em",
        }}
      >
        <hr />
        <Card
          sx={{ maxWidth: 345 }}
          style={{ marginRight: "5em" }}
          variant="outlined"
        >
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
                B
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="Blog Title"
            subheader="Blog Subtitle"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Chevrolet is one of the most recognizable and popular car brands
              in the world. Founded in 1911 by Louis Chevrolet and William C.
              Durant, the brand has become a symbol of quality and reliability
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <h4>Read More</h4>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ArrowForwardIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Chevrolet Description</Typography>
              <Typography paragraph>
                Chevrolet is an iconic American automobile brand founded in 1911
                by Louis Chevrolet and William C. Durant
              </Typography>
              <Typography paragraph>
                It is currently the fourth-largest automotive brand in the
                United States and is a division of General Motors. Chevrolet has
                become one of America’s most iconic brands, producing reliable
                and stylish cars, trucks, and SUVs for over a century. Its
                models range from the economical Spark to the luxurious
                Corvette.
              </Typography>
              <Typography paragraph>
                Chevrolet is also known for its commitment to safety, providing
                advanced features like lane departure warning and front crash
                prevention. (Discard any mussels that don&apos;t open.)
              </Typography>
            </CardContent>
          </Collapse>
        </Card>

        <Card sx={{ maxWidth: 345 }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
                B
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="Blog Title"
            subheader="Blog Subtitle"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Chevrolet is one of the most recognizable and popular car brands
              in the world. Founded in 1911 by Louis Chevrolet and William C.
              Durant, the brand has become a symbol of quality and reliability
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <h4>Read More</h4>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ArrowForwardIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Chevrolet Description</Typography>
              <Typography paragraph>
                Chevrolet is an iconic American automobile brand founded in 1911
                by Louis Chevrolet and William C. Durant
              </Typography>
              <Typography paragraph>
                It is currently the fourth-largest automotive brand in the
                United States and is a division of General Motors. Chevrolet has
                become one of America’s most iconic brands, producing reliable
                and stylish cars, trucks, and SUVs for over a century. Its
                models range from the economical Spark to the luxurious
                Corvette.
              </Typography>
              <Typography paragraph>
                Chevrolet is also known for its commitment to safety, providing
                advanced features like lane departure warning and front crash
                prevention. (Discard any mussels that don&apos;t open.)
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </div>
    </>
  );
}