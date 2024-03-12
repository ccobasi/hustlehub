import React, { useState, useRef } from "react";
import { TextField, Box, Button } from "@mui/material";


const ValidatedTextField = ({ label, validator, onChange }) => {
  // Initialization of useState hook
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  //Handle for one change event
  const handleChange = e => {
    const newValue = e.target.value;
    const errorMessage = validator(newValue);
    setValue(newValue);
    setError(errorMessage);
    onChange(!errorMessage);
  };
  //Handle End
  return (
    <TextField
      label={label}
      value={value}
      onChange={handleChange}
      error={!!error}
      helperText={error}
    />
  );
};
// Name validators
const nameValidator = value => {
  if (value.length < 3) return "Name must be at least 3 characters long";
  if (value.length > 20) return "Name must be less than 20 characters long";
  if (!/^[a-zA-Z ]+$/.test(value))
    return "Name must contain only letters and spaces";
  return false;
};
//Name End

//Email validator
const emailValidator = value => {
  if (!/^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]+$/.test(value))
    return "Invalid email address";
  return false;
};
//Email End


export default function FormValidation() {
  //Initialization of useRef Hook
  const formValid = useRef({ name: false, email: false });
  //Handler for submit event
  const handleSubmit = e => {
    e.preventDefault();
    if (Object.values(formValid.current).every(isValid => isValid)) {
      alert("Form is valid! Submitting the form...");
    } else {
      alert("Form is invalid! Please check the fields...");
    }
  };
  //Handle End


  return (
    // Box for form validation
    <Box component="form" onSubmit={handleSubmit} noValidate>
      <ValidatedTextField
        label="Name"
        validator={nameValidator}
        onChange={isValid => (formValid.current.name = isValid)}
      />
      <ValidatedTextField
        label="Email"
        validator={emailValidator}
        onChange={isValid => (formValid.current.email = isValid)}
      />
      <Button type="submit" variant="contained">
        Submit
      </Button>
    </Box>
    // Box End
  );
}
