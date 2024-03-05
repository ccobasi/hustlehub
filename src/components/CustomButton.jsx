// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Button } from "@mui/material";
import { Link } from 'react-router-dom';

export const CustomButton = ({ children, linkTo }) => {
  const buttonStyle = {
    backgroundColor: "#87ceeb",
    width: '7.2rem',
    height: '2.4rem',
    fontWeight: '500',
    lineHeight: '1.6666666667',
    letterSpacing: '-0.05rem',
    color: '#ffffff',
    fontFamily: 'Poppins, \'Source Sans Pro\'',
    whiteSpace: 'nowrap',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 0.4rem 0.4rem rgba(0, 0, 0, 0.25)',
    borderRadius: '0.5rem',
  };
  return (
    <>
    <Link to={linkTo}>
      <Button variant="contained" style={buttonStyle}>{children}</Button>
    </Link>
    </>
  );
};
