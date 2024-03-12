import React, { useState, useRef } from "react";
import { TextField, Box, Button } from "@mui/material";
import Container from "@mui/material/Container";


const ValidatedTextField = ({ label, validator, onChange }) => {
  //Initialization of useState hooks
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  // Handler for change
  const handleChange = (e) => {
    const newValue = e.target.value;
    const errorMessage = validator(newValue);
    setValue(newValue);
    setError(errorMessage);
    onChange(!errorMessage);
  };
  // Handle End

  return (
    <TextField
      label={label}
      value={value}
      onChange={handleChange}
      error={!!error}
      helperText={error}
      multiline
      rows={18}
      placeholder="Please enter job description"

    />
  );
};
// Description validator
const descriptionValidator = (value) => {
  if (value.length < 100)
    return "Job description must be at least 100 characters long";
  if (value.length > 1000)
    return "Job description must be less than or equal 1000 characters long";
  if (!/^[a-zA-Z ]+$/.test(value))
    return "Job description must contain only letters and spaces";
  return false;
};
  // Validator End

// Job Validation
export default function JobDescriptionTextFields() {
  const formValid = useRef({ description: false });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(formValid.current).every((isValid) => isValid)) {
      alert("Form is valid! Submitting the form...");
    } else {
      alert("Form is invalid! Please check the fields...");
    }
  };
  // Validation End

  return (
    <>
    {/* Contaier for the validation */}
      <Container component="main" maxWidth="xs">
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            "& .MuiTextField-root": { m: 1, width: "47ch" }, 
          }}
          noValidate
          autoComplete="off"
        >
          <Box sx={{}}>
            <ValidatedTextField
              label="Job description"
              validator={descriptionValidator}
              onChange={(isValid) => (formValid.current.description = isValid)}
            />
          </Box>

          <Button type="submit" variant="contained" sx={{ml:"2%",mt:"4%"}}>
            Submit
          </Button>
        </Box>
      </Container>
      {/* Container End */}
    </>
  );
}
