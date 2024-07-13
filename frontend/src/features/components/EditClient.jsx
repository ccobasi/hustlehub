import React, { useState, useRef } from "react";
import {
  TextField,
  Box,
  Button,
  Stack,
  Select,
  Chip,
  MenuItem,
  Typography,
  OutlinedInput,
} from "@mui/material";
import AccountCircleOutlined from "@mui/icons-material/AccountCircleOutlined";
import CancelIcon from "@mui/icons-material/Cancel";
import AcUnitOutlined from "@mui/icons-material/AcUnitOutlined";
import SchoolOutlined from "@mui/icons-material/SchoolOutlined";
import HomeRepairServiceOutlined from "@mui/icons-material/HomeRepairServiceOutlined";
import { WorkspacePremiumOutlined } from "@mui/icons-material";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import { DatePicker } from "@mui/x-date-pickers/DatePicker";

//Data to browse skills
const skills = ["Communication", "Leadership", "Team player"]; //Data End

//Data to browse languages
const languages = ["Igbo", "English", "Hausa", "Yoruba", "German", "Romania"]; //Data End

const today = dayjs();
const yesterday = dayjs().subtract(1, "day");
const tomorrow = dayjs().add(1, "day");

//Custom DatePicker
const CustomDatePicker = () => {
  const [value, setValue] = React.useState([dayjs(""), dayjs("")]);

  console.log(setValue);
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DateRangePicker", "DatePicker"]}>
        <DemoItem label="">
          <DatePicker
            defaultValue={today}
            disableFuture
            views={["year", "month", "day"]}
            value={value}
            onChange={(newValue) => setValue(newValue)}
          />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
  );
};

const ValidatedTextField = ({ validator, onChange, rows, placeholder }) => {
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
      value={value}
      onChange={handleChange}
      error={!!error}
      helperText={error}
      rows={rows}
      placeholder={placeholder}
    />
  );
};

//Customized Title Text
const TitleText = ({ title }) => {
  return <Typography>{title}</Typography>;
}; //Text End

//Customized Subtile text
const SubTitleText = ({ subtitle }) => {
  return <Typography>{subtitle}</Typography>;
}; //Text End

//Customized select
const CustomSelect = ({ name, data }) => {
  const [selectedValue, setSelectedValue] = useState([]);
  return (
    <Select
      name={name}
      style={{ width: "80%" }}
      multiple
      value={selectedValue}
      onChange={(e) => setSelectedValue(e.target.value)}
      input={<OutlinedInput />}
      renderValue={(selected) => (
        <Stack gap={1} direction="row" flexWrap="wrap">
          {selected.map((value) => (
            <Chip
              sx={{
                borderRadius: "97px",
                backgroundColor: "#87CEEB",
                border: "1px",
                gap: "8px",
                p: "8px,20px,8px,20px",
                color: "#95969D",
              }}
              key={value}
              label={value}
              onDelete={() =>
                setSelectedValue(selectedValue.filter((item) => item !== value))
              }
              deleteIcon={
                <CancelIcon onMouseDown={(event) => event.stopPropagation()} />
              }
            />
          ))}
        </Stack>
      )}
    >
      {data.map((d) => (
        <MenuItem
          key={d}
          value={d}
          sx={{
            backgroundColor: "background.Default",
            border: "1px",
            fontFamily: "Poppins",
            fontWeight: "500",
            fontSize: "12px",
            lineHeight: "20.8px",
            letterSpacing: "-1%",
            color: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.primary.lightModeHeroTitle
                : theme.palette.primary.darkModeHeroTitle,
          }}
        >
          {d}
        </MenuItem>
      ))}
    </Select>
  );
};
//Select End

// Bio validators
const bioValidator = (value) => {
  if (value.length < 15) return "Bio must be at least 15 characters long";
  if (value.length > 1000) return "Bio must be less than 1000 characters long";
  if (!/^[a-zA-Z ]+$/.test(value))
    return "Bio must contain only letters and spaces";
  return false;
};
//Bio End

// Role validators
const roleValidator = (value) => {
  if (value.length < 10) return "Role must be at least 10 characters long";
  if (value.length > 50) return "Role must be less than 50 characters long";
  if (!/^[a-zA-Z ]+$/.test(value))
    return "Role must contain only letters and spaces";
  return false;
};
//Role End

// Company validators
const companyValidator = (value) => {
  if (value.length < 10) return "Company must be at least 10 characters long";
  if (value.length > 50) return "Company must be less than 50 characters long";
  if (!/^[a-zA-Z ]+$/.test(value))
    return "Company must contain only letters and spaces";
  return false;
};
//Role End

// university validators
const universityValidator = (value) => {
  if (value.length < 10)
    return "University must be at least 10 characters long";
  if (value.length > 50)
    return "University must be less than 50 characters long";
  if (!/^[a-zA-Z ]+$/.test(value))
    return "University must contain only letters and spaces";
  return false;
};

//courseValidator
const courseValidator = (value) => {
  if (value.length < 5) return "Course must be at least 10 characters long";
  if (value.length > 50) return "Course must be less than 50 characters long";
  if (!/^[a-zA-Z ]+$/.test(value))
    return "Course must contain only letters and spaces";
  return false;
};

export default function FormValidation() {
  //Initialization of useRef Hook
  const formValid = useRef({
    bio: false,
    role: false,
    company: false,
    university: false,
    course: false,
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
    // Box for form validation
    <Box component="form" onSubmit={handleSubmit} noValidate>
      <Box>
        <Stack direction="row">
          <AccountCircleOutlined /> <TitleText title="About me" />{" "}
        </Stack>
        <ValidatedTextField
          validator={bioValidator}
          rows={4}
          onChange={(isValid) => (formValid.current.bio = isValid)}
          placeholder="Enter your bio"
        />
      </Box>

      {/* Box for client work experience */}
      <Box>
        <Stack direction="row">
          <HomeRepairServiceOutlined /> <TitleText title="Work experience" />{" "}
        </Stack>
        <Stack>
          <Stack direction="row">
            <SubTitleText subtitle="Job Role" />{" "}
            <ValidatedTextField
              validator={roleValidator}
              rows={1}
              onChange={(isValid) => (formValid.current.role = isValid)}
              placeholder="Enter your job role"
            />
          </Stack>

          <Stack direction="row">
            <SubTitleText subtitle="Company" />{" "}
            <ValidatedTextField
              validator={companyValidator}
              rows={1}
              onChange={(isValid) => (formValid.current.company = isValid)}
              placeholder="Enter your company"
            />
          </Stack>

          <Stack direction="row">
            <SubTitleText subtitle="Year started" /> <CustomDatePicker />
          </Stack>
          <Stack direction="row">
            <SubTitleText subtitle="Year completed" /> <CustomDatePicker />
          </Stack>
        </Stack>
      </Box>
      {/* Box End */}
      {/* Box for Client Education  */}
      <Box>
        <Stack direction="row">
          <SchoolOutlined /> <TitleText title="Education" />{" "}
        </Stack>
        <Stack>
          <Stack direction="row">
            <SubTitleText subtitle="Name of your university" />
            <ValidatedTextField
              validator={universityValidator}
              rows={1}
              onChange={(isValid) => (formValid.current.university = isValid)}
              placeholder="Enter the name of your university "
            />
          </Stack>

          <Stack direction="row">
            <SubTitleText subtitle="Course of study" />

            <ValidatedTextField
              validator={courseValidator}
              rows={1}
              onChange={(isValid) => (formValid.current.course = isValid)}
              placeholder="Enter your course of study"
            />
          </Stack>

          <Stack direction="row">
            <SubTitleText subtitle="Year started" />

            <CustomDatePicker />
          </Stack>
          <Stack direction="row">
            <SubTitleText subtitle="Year graduated" />

            <CustomDatePicker />
          </Stack>
        </Stack>
      </Box>
      {/* Box End */}
      {/* Box Client Skills */}
      <Box>
        <Stack direction="row">
          <AcUnitOutlined /> <TitleText title="Skills" />
        </Stack>

        <Stack direction="row" justifyContent="space-between">
          <SubTitleText subtitle="Select skill sets" />

          <CustomSelect name="select-skill" data={skills} />
        </Stack>
      </Box>

      {/* Box Client Skills */}
      <Box>
        <Stack direction="row">
          <WorkspacePremiumOutlined /> <TitleText title="Language" />{" "}
        </Stack>
        <Stack direction="row" justifyContent="space-between">
          <SubTitleText subtitle="Select language" />
          <CustomSelect name="select-language" data={languages} />
        </Stack>
      </Box>
      <Button type="submit" variant="contained">
        Submit
      </Button>
    </Box>
    // Box End
  );
}
