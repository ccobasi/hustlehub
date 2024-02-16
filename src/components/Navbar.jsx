import { Stack, Typography } from "@mui/material";
import { Button } from "@mui/material/";
import Link from "@mui/material/Link";

const Navbar = () => {
  return (
    <>
      <header>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          spacing={1.5}
        >
          <Link to="/">
            <img src="#" alt="Logo" />
          </Link>
          <nav>
            <Stack direction="row" alignItems="center" spacing={5.5}>
              <ul>
                <Stack direction="row" alignItems="center" spacing={1.5}>
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
              <Button variant="contained" to="/signup">
                SignUp
              </Button>
            </Stack>
          </nav>
        </Stack>
      </header>
      <Typography variant="body1">Some text</Typography>
    </>
  );
};

export default Navbar;
