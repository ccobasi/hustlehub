// eslint-disable-next-line no-unused-vars
import React, { useState, useRef } from "react";
<<<<<<< HEAD
import { TextField, Box, Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ValidatedTextField = ({ name, label, validator, onChange,rows,placeholder }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    onChange({ name, value: newValue, isValid: !validator(newValue) });
  };
  // const handleChange = (e) => {
  //   const newValue = e.target.value;
  //   const errorMessage = validator(newValue);
  //   setValue(newValue);
  //   setError(errorMessage);
  //   onChange({ value: newValue, isValid: !errorMessage });
  // };

  //Handle End
  return (
    <TextField
      label={label}
      value={value}
      onChange={handleChange}
      // error={!!error}
      // helperText={error}
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
=======
import { TextField, Box, Button, Container, Select, MenuItem, FormControl, InputLabel } from "@mui/material";

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
>>>>>>> home-page
  return false;
};
//Validator End

<<<<<<< HEAD
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
=======
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
>>>>>>> home-page
  return false;
};
//Validator End

<<<<<<< HEAD
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
  if (!/^[a-zA-Z\s,.!?-]+$/.test(value))
    return "Description must contain only letters and spaces";
  return false;
=======
// Description validators
const descriptionValidator = (value) => {
  if (value.length < 50) return "Description must be at least 50 characters long";
  if (value.length > 1000) return "Description must be less than 1000 characters long";
  if (!/^[a-zA-Z .,:;]+$/.test(value))
    return "Description must contain only letters and spaces";
  return false;
  
>>>>>>> home-page
};
//Validator End

export default function CreateProjectFormValidation() {
<<<<<<< HEAD
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    jobPosition: { value: "", isValid: false },
    typeOfWorkplace: { value: "", isValid: false },
    jobLocation: { value: "", isValid: false },
    industry: { value: "", isValid: false },
    employmentType: { value: "", isValid: false },
    description: { value: "", isValid: false },
  });


  const handleSubmit = (e) => {
    e.preventDefault();
    const isFormValid = Object.values(formData).every((field) => field.isValid);
    if (isFormValid) {
      localStorage.setItem("formData", JSON.stringify(formData));
      alert("Form data saved to localStorage!");
      navigate("/client");
    } else {
      alert("Form is invalid! Please check the fields...");
    }
    console.log(formData);
  };


  const handleFieldChange = ({ name, value, isValid }) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: { value, isValid },
    }));
  };

  return (
  
=======
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
>>>>>>> home-page
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
<<<<<<< HEAD
          name="jobPosition"
            label="Job Position"
            validator={jobPositionValidator}
            onChange={handleFieldChange}
=======
            label="Job Position"
            validator={jobPositionValidator}
            onChange={(isValid) => (formValid.current.jobPosition = isValid)}
>>>>>>> home-page
            rows={1}
            placeholder="Enter job position"
          />

<<<<<<< HEAD
          <ValidatedTextField
            name="typeOfWorkplace"
            label="Type of workplace"
            validator={typeOfWorkplaceValidator}
            onChange={handleFieldChange}
            rows={1}
            placeholder="Enter type of workplace"
          />
          <ValidatedTextField
            name="jobLocation"
            label="Job location"
            validator={jobLocationValidator}
            onChange={handleFieldChange}
            rows={1}
            placeholder="Enter job location"
            
          />
          <ValidatedTextField
            name="industry"
            label="Industry"
            validator={industryValidator}
            rows={1}
            onChange={handleFieldChange}
            placeholder="Enter industry"
          />
          <ValidatedTextField
            name="employmentType"
            label="Employment type"
            validator={employmentTypeValidator}
            rows={1}
            onChange={handleFieldChange}
            placeholder="Enter employment type"
          />

          <ValidatedTextField
            name="description"
            label="Description"
            validator={descriptionValidator}
            rows={4}
            onChange={handleFieldChange}
            placeholder="Enter job description"
          />
          <Button type="submit" variant="contained">
=======
     

          <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Type of workplace</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    validator={typeOfWorkplaceValidator}
    label="Type of workplace"
    sx={{ width: "90%", mb:  2, ml:2, pl:2 }}
    placeholder="Select job location"
    onChange={(event) => {
      formValid.current.typeOfWorkplace = event.target.value;
      }}
    
  >
    <MenuItem value="remote">Remote</MenuItem>
            <MenuItem value="onsite">Onsite</MenuItem>
            <MenuItem value="hybrid">Hybrid</MenuItem>
  </Select>
</FormControl>

          
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

          <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Employment type</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
     validator={employmentTypeValidator}
    label="Type of workplace"
    sx={{ width: "90%", mb:  2, ml:2, pl:2 }}
    placeholder="Select employment type"
    onChange={(event) => {
      formValid.current.employmentType = event.target.value;
            }}
    
  >
    <MenuItem value="contract">Contract</MenuItem>
            <MenuItem value="full-time">Full-Time</MenuItem>
            <MenuItem value="part-time">Part-Time</MenuItem>
  </Select>
</FormControl>


          <ValidatedTextField
            label="Description"
            validator={descriptionValidator}
            rows={4}
            placeholder="Enter job description"
            onChange={(isValid) => (formValid.current.description = isValid)}
          />
          <Button type="submit" variant="contained" sx={{
            marginBottom: 6,
            

          }}>
>>>>>>> home-page
            Submit
          </Button>
        </Box>
        {/* Box End */}
      </Container>
    </>
  );
}
