import { Stack, Typography } from "@mui/material";
import { CustomButton } from "./CustomButton";
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
          padding={1}
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
              <CustomButton>Signup</CustomButton>
            </Stack>
          </nav>
        </Stack>
      </header>
      <Typography variant="body1">Some text</Typography>
    </>
  );
};

export default Navbar;
