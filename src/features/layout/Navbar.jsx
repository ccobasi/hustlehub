import { Stack, Typography } from "@mui/material";
import { CustomButton } from "../../../app/layout/header/CustomButton";
import Link from "@mui/material/Link";
import './headerfooter.css'
import Logo from '../../../assets/hlogo.png'

const Navbar = () => {
  
  return (
    <>
      <header >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          spacing={1.5}
          padding={1}
        >
        
          
           <nav className="navbar">
      <div className="navbar-container container">
        <input type="checkbox" name="" id="" />
      
        <Link to="/"><img src={Logo} className='logo' alt="logo" /></Link>
        <CustomButton linkTo="/sign-in">Sign In</CustomButton>
      </div>
    </nav>
        </Stack>
      </header>
      <Typography variant="body1"></Typography>
    </>
  );
};

export default Navbar

