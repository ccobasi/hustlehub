import { Button } from "@mui/material";

export const CustomButton = ({ children }) => {
  const buttonStyle = {
    backgroundColor: "#87ceeb",
   
  };
  return (
    <>
      <Button variant="contained" style={buttonStyle}>{children}</Button>
    </>
  );
};
