import { EditFreelancerFirstFeature } from "./EditFreelancerCard";
import { useNavigate } from "react-router-dom";
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
  Container,
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

//Custom DatePicker
const CustomDatePicker = ({ width, ml }) => {
  const [value, setValue] = React.useState([dayjs(""), dayjs("")]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer
        components={["DateRangePicker", "DatePicker"]}
        sx={{ m: "5%", width: { width }, ml: { ml } }}
      >
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

const ValidatedTextField = ({
  validator,
  onChange,
  rows,
  placeholder,
  width,
  ml,
}) => {
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
      multiline
      rows={rows}
      placeholder={placeholder}
      sx={{
        m: "6%",
        width: { width },
        ml: { ml },
        fontFamily: "Poppins",
        fontWeight: "400",
        fontSize: "14px",
        lineHeight: "18.23px",
        color: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.primary.lightModeHeroTitle
            : theme.palette.primary.darkModeHeroTitle,
      }}
    />
  );
};

//Customized Title Text
const TitleText = ({ title }) => {
  return (
    <Typography
      sx={{
        m: "6%",
        fontFamily: "Poppins",
        fontWeight: "700",
        fontSize: "14px",
        lineHeight: "18.23px",
        color: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.primary.lightModeHeroTitle
            : theme.palette.primary.darkModeHeroTitle,
      }}
    >
      {title}
    </Typography>
  );
}; //Text End

//Customized Subtile text
const SubTitleText = ({ subtitle }) => {
  return (
    <Typography
      sx={{
        ml: "8%",
        mt: "8%",
        fontFamily: "Poppins",
        fontWeight: "500",
        fontSize: "12px",
        lineHeight: "22.5px",
        letterSpacing: "-1%",
        color: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.primary.lightModeHeroTitle
            : theme.palette.primary.darkModeHeroTitle,
      }}
    >
      {subtitle}
    </Typography>
  );
}; //Text End

//Customized select
const CustomSelect = ({ name, data }) => {
  const [selectedValue, setSelectedValue] = useState([]);
  return (
    <Select
      name={name}
      sx={{ width: "300px", height: "55px", m: "5%" }}
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

export default function EditClientPage() {
  //Instatiate useNavigate
  let navigate = useNavigate();

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
    <>


      {/*First Client Edit Feature*/}
      <EditFreelancerFirstFeature  />
    
      <Container component="main" maxWidth="xs">
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
          {/**Edit Client Box */}
          <Box>
            <Stack direction="row">
              <AccountCircleOutlined
                sx={{
                  ml: "-11%",
                  mt: "5%",
                  mr: "9%",
                  color: "#87CEEB",
                  width: "28px",
                  height: "28px",
                }}
              />{" "}
              <TitleText title="About me" />{" "}
            </Stack>

            <ValidatedTextField
              validator={bioValidator}
              rows={4}
              onChange={(isValid) => (formValid.current.bio = isValid)}
              placeholder="Enter your bio"
              width="300px"
            />
          </Box>
          <Box>
            {/* Box for client work experience */}

            <Stack direction="row">
              <HomeRepairServiceOutlined
                sx={{
                  m: "8%",
                  mr: "4.5%",
                  color: "#87CEEB",
                  width: "28px",
                  height: "28px",
                }}
              />{" "}
              <TitleText title="Work experience" />{" "}
            </Stack>
            <Stack>
              <Stack direction="row">
                <SubTitleText subtitle="Job Role" />{" "}
                <ValidatedTextField
                  validator={roleValidator}
                  rows={1}
                  onChange={(isValid) => (formValid.current.role = isValid)}
                  placeholder="Enter your job role"
                  width="300px"
                />
              </Stack>

              <Stack direction="row">
                <SubTitleText subtitle="Company" />{" "}
                <ValidatedTextField
                  validator={companyValidator}
                  rows={1}
                  onChange={(isValid) => (formValid.current.company = isValid)}
                  placeholder="Enter your company"
                  width="300px"
                />
              </Stack>

              <Stack direction="row">
                <SubTitleText subtitle="Year started" />{" "}
                <CustomDatePicker width="350px" />
              </Stack>
              <Stack direction="row">
                <SubTitleText subtitle="Year completed" />{" "}
                <CustomDatePicker width="350px" />
              </Stack>
            </Stack>

            {/* Box End */}
          </Box>

          {/* Box for Client Education  */}
          <Box>
            <Stack direction="row">
              <SchoolOutlined
                sx={{
                  m: "6%",
                  ml: "3%",
                  mr: "7%",
                  color: "#87CEEB",
                  width: "28px",
                  height: "28px",
                }}
              />{" "}
              <TitleText title="Education" />{" "}
            </Stack>
            <Stack>
              <Stack direction="row">
                <SubTitleText subtitle="Name of your university" />
                <ValidatedTextField
                  validator={universityValidator}
                  rows={2}
                  onChange={(isValid) =>
                    (formValid.current.university = isValid)
                  }
                  placeholder="Enter the name of your university "
                  width="300px"
                />
              </Stack>

              <Stack direction="row">
                <SubTitleText subtitle="Course of study" />

                <ValidatedTextField
                  validator={courseValidator}
                  rows={2}
                  onChange={(isValid) => (formValid.current.course = isValid)}
                  placeholder="Enter your course of study"
                  width="300px"
                />
              </Stack>

              <Stack direction="row">
                <SubTitleText subtitle="Year started" />

                <CustomDatePicker width="300px" />
              </Stack>
              <Stack direction="row">
                <SubTitleText subtitle="Year graduated" />

                <CustomDatePicker width="300px" />
              </Stack>
            </Stack>
          </Box>
          {/* Box End */}
          {/* Box Client Skills */}
          <Box>
            <Stack direction="row" sx={{ mt: "15%", mb: "10%" }}>
              <AcUnitOutlined
                sx={{
                  m: "6%",
                  mr: "11%",
                  ml: "2%",
                  color: "#87CEEB",
                  width: "28px",
                  height: "28px",
                }}
              />{" "}
              <TitleText title="Skills" />
            </Stack>

            <Stack direction="row">
              <SubTitleText subtitle="Select skill sets" />

              <CustomSelect name="select-skill" data={skills} />
            </Stack>
          </Box>

          {/* Box Freelancer Languages */}

          <Box>
            <Stack direction="row">
              <WorkspacePremiumOutlined
                sx={{
                  m: "6%",
                  ml: "2%",
                  mr: "10%",
                  color: "#87CEEB",
                  width: "28px",
                  height: "28px",
                }}
              />{" "}
              <TitleText title="Language" />{" "}
            </Stack>
            <Stack direction="row" justifyContent="space-between">
              <SubTitleText subtitle="Select language" />
              <CustomSelect name="select-language" data={languages} />
            </Stack>
          </Box>

          <Button
            type="submit"
            variant="contained"
            sx={{
              mb: "1%",
              mt: "12%",
              backgroundColor: "#87CEEB",
              "&:hover": {
                backgroundColor: (theme) =>
                  theme.palette.mode === "light"
                    ? theme.palette.grey[400]
                    : theme.palette.grey[500],
                fontFamily: "Poppins",
                fontWeight: "500",
                fontSize: "16px",
                lineHeight: "24px",
                letterSpacing: "-1%",
                color: "#FFFFFF",
              },
            }}
          >
            Submit
          </Button>
        </Box>
        {/* // Box End */}
      </Container>
    </>
  );
}

