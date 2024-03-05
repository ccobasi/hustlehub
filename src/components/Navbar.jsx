import { Stack, Typography } from "@mui/material";
import { CustomButton } from "./CustomButton";
import Link from "@mui/material/Link";
import './headerfooter.css'
import Logo from '../assets/hlogo.png'

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
        <div className="hamburger-lines">
          <span className="line line1"></span>
          <span className="line line2"></span>
          <span className="line line3"></span>
        </div>
        <ul className="menu-items">
          <li><a href="#">Home</a></li>
          <li>
                      <Link to="/about">About Us</Link>
                    </li>
                    <li>
                      <Link to="#">Blog</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>
                      <CustomButton linkTo="/signup">Sign Up</CustomButton>
                    </li>
        </ul>
        <Link to="/"><img src={Logo} className='logo' alt="logo" /></Link>
      </div>
    </nav>
        </Stack>
      </header>
      <Typography variant="body1"></Typography>
    </>
  );
};

export default Navbar

