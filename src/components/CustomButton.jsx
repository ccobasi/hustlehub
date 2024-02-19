import { Button } from "@mui/material";

export const CustomButton = ({ children }) => {
  return (
    <>
      <Button variant="contained">{children}</Button>
    </>
  );
};
