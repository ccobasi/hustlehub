import React, { useState, useRef } from "react";
import { TextField, Box, Button, Container } from "@mui/material";

const ValidatedTextField = ({ label, validator, onChange,rows,placeholder }) => {
  // Initialization of useState hook
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  //Handle for one change event
  const handleChange = (e) => {
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
      autoComplete="off"
      multiline
      rows={rows}
      placeholder={placeholder}
      sx={{ mb: "5%", width: "350px",}}
    />
  );
};
// Job position validators
const jobPositionValidator = (value) => {
  if (value.length < 3) return "Job position must be at least 3 characters long";
  if (value.length > 20) return "Job position must be less than 20 characters long";
  if (!/^[a-zA-Z ]+$/.test(value))
    return "Job position must contain only letters and spaces";
  return false;
};
//Validator End

// Type of workplace validators
const typeOfWorkplaceValidator = (value) => {
  if (value.length < 3) return "Workplace type must be at least 3 characters long";
  if (value.length > 20) return "Workplace type must be less than 20 characters long";
  if (!/^[a-zA-Z ]+$/.test(value))
    return "Workplace type must contain only letters and spaces";
  return false;
};
//Validator End

// Job location validators
const jobLocationValidator = (value) => {
  if (value.length < 3) return "Job location must be at least 3 characters long";
  if (value.length > 20) return "Job location must be less than 20 characters long";
  if (!/^[a-zA-Z ]+$/.test(value))
    return "Job location must contain only letters and spaces";
  return false;
};
//Validator End

// Industry validators
const industryValidator = (value) => {
  if (value.length < 3) return "Industry must be at least 3 characters long";
  if (value.length > 20) return "Industry must be less than 20 characters long";
  if (!/^[a-zA-Z ]+$/.test(value))
    return "Industry must contain only letters and spaces";
  return false;
};
//validator End

// Employment type validators
const employmentTypeValidator = (value) => {
  if (value.length < 3) return "Employment type must be at least 3 characters long";
  if (value.length > 20) return "Employment type must be less than 20 characters long";
  if (!/^[a-zA-Z ]+$/.test(value))
    return "Employment type must contain only letters and spaces";
  return false;
};
//Validator End

// Description validators
const descriptionValidator = (value) => {
  if (value.length < 100) return "Description must be at least 100 characters long";
  if (value.length > 1000) return "Description must be less than 1000 characters long";
  if (!/^[a-zA-Z ]+$/.test(value))
    return "Description must contain only letters and spaces";
  return false;
};
//Validator End

export default function CreateProjectFormValidation() {
  //Initialization of useRef Hook
  const formValid = useRef({
    jobPosition: false,
    typeOfWorkplace: false,
    jobLocation: false,
    industry: false,
    employmentType: false,
    description: false,
  });
  //Handler for submit event
  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(formValid.current).every((isValid) => isValid)) {
      alert("Form is valid! Submitting the form...");
    } else {
      alert("Form is invalid! Please check the fields...");
    }
  };
  //Handle End

  return (
  

    // Container for Sign Up functionality
    <>
      <Container component="main" maxWidth="xs">
      {/*  Box for form validation */}
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <ValidatedTextField
            label="Job Position"
            validator={jobPositionValidator}
            onChange={(isValid) => (formValid.current.jobPosition = isValid)}
            rows={1}
            placeholder="Enter job position"
          />

          <ValidatedTextField
            label="Type of workplace"
            validator={typeOfWorkplaceValidator}
            rows={1}
            placeholder="Enter type of workplace"
            onChange={(isValid) =>
              (formValid.current.typeOfWorkplace = isValid)
            }
          />
          <ValidatedTextField
            label="Job location"
            validator={jobLocationValidator}
            rows={1}
            placeholder="Enter job location"
            onChange={(isValid) => (formValid.current.jobLocation = isValid)}
          />
          <ValidatedTextField
            label="Industry"
            validator={industryValidator}
            rows={1}
            placeholder="Enter industry"
            onChange={(isValid) => (formValid.current.industry = isValid)}
          />
          <ValidatedTextField
            label="Employment type"
            validator={employmentTypeValidator}
            rows={1}
            placeholder="Enter employment type"
            onChange={(isValid) => (formValid.current.employmentType = isValid)}
          />

          <ValidatedTextField
            label="Description"
            validator={descriptionValidator}
            rows={4}
            placeholder="Enter job description"
            onChange={(isValid) => (formValid.current.description = isValid)}
          />
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </Box>
        {/* Box End */}
      </Container>
    </>
  );
}
