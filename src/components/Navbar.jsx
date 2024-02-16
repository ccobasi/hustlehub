import { NavLink } from "react-router-dom";
import Button from '@mui/material/Button';

const Navbar = () => {
  return (
    <>
      <header>
        <NavLink to="/">
          <img src="#" alt="Logo" />
        </NavLink>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/programs">Programes</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
          <Button variant="contained"><NavLink to='/signup'>SignUp</NavLink></Button>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
