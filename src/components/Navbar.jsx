import { Stack, Typography } from "@mui/material";
import { CustomButton } from "./CustomButton";
import Link from "@mui/material/Link";
import './headerfooter.css'
import Logo from '../assets/logo.png'
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
          <Link to="/">
            <img src={Logo} width="100" height="40" alt="Logo" />
          </Link>
          <nav>
            <Stack direction="row" alignItems="center" spacing={5.5}>
              <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={6.5}
                  justifyContent="flex-end" 
                >
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/programs">Programes</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </Stack>
              </ul>
              <CustomButton>Signup</CustomButton>
            </Stack>
          </nav>
        </Stack>
      </header>
      <Typography variant="body1"></Typography>
    </>
  );
};

export default Navbar;
