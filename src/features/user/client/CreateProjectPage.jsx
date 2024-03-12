//
import { Typography, Link } from "@mui/material";
import ClientCreateProject from "../../components/CreateProject"
const CreateProjectPage = () => {
 

  return (
    <>
      {/*First Client Feature*/}
      
      {/*First Heading*/}
      <Typography
        variant="h6"
        sx={{
          color: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[600]
              : theme.palette.grey[300],
         

         textAlign:"center",
         mt:"5%"
        }}
       
      >
        My Projects
       
       
      </Typography>

      <Link
          href="/create-project"
          sx={{
            textDecoration: "none",
            
            color: "#87CEEB",
          }}
        >
          <Typography sx={{textAlign:"end", mr:"5%"}}>Publish</Typography>
        </Link>

      {/*Second Client Feature*/}
     <ClientCreateProject/>
      {/*Second Heading*/}
     

      {/*Third Heading*/}

      


       {/*Fourth Heading*/}

     
      
    </>
  );
};

export default CreateProjectPage;
