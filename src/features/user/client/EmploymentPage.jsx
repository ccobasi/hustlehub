import { Typography, Link, Stack, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import EmploymentTypeRadioButtons from '../../components/Employment'
export default function EmploymentPage ()  {
  //Instatiate useNavigate
  let navigate = useNavigate();

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
        Choose Employment Type
       
       
      </Typography>

     
      {/*First Client Employment Feature*/}
      <EmploymentTypeRadioButtons/>
    
      {/*Second Heading*/}
     

      {/*Third Heading*/}

      


       {/*Fourth Heading*/}

     
      
    </>
  );
};


