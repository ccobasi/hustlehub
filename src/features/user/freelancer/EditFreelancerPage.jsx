// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import {
  TextField,
  Box,
  Button,
  Stack,
  Typography,
  Container,
} from "@mui/material";
import AccountCircleOutlined from "@mui/icons-material/AccountCircleOutlined";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useUserProfile } from "../../../store/UserProfileContext";

dayjs.extend(utc);
dayjs.extend(timezone);

const today = dayjs();

const CustomDatePicker = ({ width, ml, value, setValue }) => {
  const handleDateChange = (newValue) => {
    const formattedDate = newValue ? newValue.format("YYYY-MM-DD") : "";
    setValue(formattedDate);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer
        components={["DateRangePicker", "DatePicker"]}
        sx={{ m: "1%", width: { width }, ml: { ml } }}
      >
        <DemoItem label="">
          <DatePicker
            disableFuture
            views={["year", "month", "day"]}
            value={value ? dayjs(value) : null}
            onChange={handleDateChange}
          />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
  );
};

const SubTitleText = ({ subtitle }) => {
  return (
    <Typography variant="body2" color="text.secondary">
      {subtitle}
    </Typography>
  );
};

const ValidatedTextField = ({
  validator,
  onChange,
  rows,
  placeholder,
  width,
  ml,
  value,
  error,
}) => {
  const handleChange = (e) => {
    const newValue = e.target.value;
    onChange(newValue);
  };

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
        width: width,
        ml: ml,
      }}
    />
  );
};

const validateField = (value, maxLength) => {
  if (value.length > maxLength) {
    return `Field cannot be longer than ${maxLength} characters.`;
  }
  return "";
};

const validateBio = (value) => validateField(value, 250);
const validateJobRole = (value) => validateField(value, 35);
const validateCompany = (value) => validateField(value, 50);
const validateLocation = (value) => validateField(value, 50);
const validateInstitution = (value) => validateField(value, 250);
const validateCertification = (value) => validateField(value, 250);
const validateSkill = (value) => validateField(value, 250);
const validateLanguage = (value) => validateField(value, 250);

const BioField = ({ bio, onChange, bioError }) => {
  return (
    <ValidatedTextField
      validator={validateBio}
      onChange={onChange}
      rows={5}
      placeholder="Bio"
      width="100%"
      ml={1}
      value={bio}
      error={bioError}
    />
  );
};

const JobRoleField = ({ job_role, onChange, jobRoleError }) => {
  return (
    <ValidatedTextField
      validator={validateJobRole}
      onChange={onChange}
      rows={1}
      placeholder="Job Role"
      width="100%"
      ml={1}
      value={job_role}
      error={jobRoleError}
    />
  );
};

const CompanyField = ({ company, onChange, companyError }) => {
  return (
    <ValidatedTextField
      validator={validateCompany}
      onChange={onChange}
      rows={1}
      placeholder="Company"
      width="100%"
      ml={1}
      value={company}
      error={companyError}
    />
  );
};

const LocationField = ({ location, onChange, locationError }) => {
  return (
    <ValidatedTextField
      validator={validateLocation}
      onChange={onChange}
      rows={1}
      placeholder="Location"
      width="100%"
      ml={1}
      mb={2}
      value={location}
      error={locationError}
    />
  );
};

const ProfilePictureField = ({ value, onChange }) => {
  const handleImageUpload = (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile || !/\.(jpg|jpeg|png)$/i.test(selectedFile.name)) {
      onChange("Invalid file format. Please select a JPG, JPEG, or PNG image.");
      return;
    }
    if (selectedFile.size > 5242880) { // Adjust the file size limit as needed
      onChange("File size exceeds the limit of 5MB.");
      return;
    }
    onChange(selectedFile);
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        onChange={(event) => handleImageUpload(event)}
      />
    </div>
  );
};

const InstitutionField = ({ institution, onChange, institutionError }) => {
  return (
    <ValidatedTextField
      validator={validateInstitution}
      onChange={onChange}
      rows={1}
      placeholder="Highest Institution Attended"
      width="100%"
      ml={1}
      mb={2}
      value={institution}
      error={institutionError}
    />
  );
};

const CertificationField = ({ certification, onChange, certificationError }) => {
  return (
    <ValidatedTextField
      validator={validateCertification}
      onChange={onChange}
      rows={1}
      placeholder="Certificate Obtained"
      width="100%"
      ml={1}
      mb={2}
      value={certification}
      error={certificationError}
    />
  );
};

const SkillField = ({ skill, onChange, skillError }) => {
  return (
    <ValidatedTextField
      validator={validateSkill}
      onChange={onChange}
      rows={1}
      placeholder="Skill"
      width="100%"
      ml={1}
      mb={2}
      value={skill}
      error={skillError}
    />
  );
};

const LanguageField = ({ language, onChange, languageError }) => {
  return (
    <ValidatedTextField
      validator={validateLanguage}
      onChange={onChange}
      rows={1}
      placeholder="Language"
      width="100%"
      ml={1}
      mb={2}
      value={language}
      error={languageError}
    />
  );
};

export default function EditClientPage() {
  let navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const userId = user ? user.id : null;
  const [freelancerProfile, setFreelancerProfile] = useState(null);
  const { userProfile, setUserProfile } = useUserProfile();
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [yearObtained, setYearObtained] = useState("");

  const [formData, setFormData] = useState({
    bio: "",
    job_role: "",
    company: "",
    location: "",
    institution: "",
    certification: "",
    start_date: today.format("YYYY-MM-DD"),
    end_date: today.format("YYYY-MM-DD"),
    skill: "",
    language: "",
    image: null,
    id: userProfile?.id || null,
  });

  axios.interceptors.request.use(
    (config) => {
      const user = JSON.parse(localStorage.getItem('user'));
      const access = JSON.parse(localStorage.getItem('access'));
      if (user && access) {
        config.headers.Authorization = `Bearer ${access}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  useEffect(() => {
    const fetchFreelancerProfile = async () => {
      try {
        const response = await axios.get(`https://ccobasi.pythonanywhere.com/user_profile/user-profile/${userId}/`);
        if (response.data) {
          setFreelancerProfile(response.data);
          setStartDate(response.data.start_date);
          setEndDate(response.data.end_date);
          setYearObtained(response.data.year_obtained);
          setFormData({
            ...formData,
            id: response.data.id || null,
            bio: response.data.bio || "",
            job_role: response.data.job_role || "",
            company: response.data.company || "",
            location: response.data.location || "",
            institution: response.data.institution || "",
            certification: response.data.certification || "",
            skill: response.data.skill || "",
            language: response.data.language || "",
            image: response.data.image,
          });
        }
      } catch (error) {
        console.error("Error fetching freelancer profile:", error);
      }
    };

    if (userId) {
      fetchFreelancerProfile();
    }
  }, [userId]);

  const handleSubmit = async (event) => {
  event.preventDefault();
  const form = new FormData();
  
  // Append form data fields
  for (const key in formData) {
    if (formData[key] !== null && formData[key] !== undefined) {
      form.append(key, formData[key]);
    }
  }

  // Ensure dates are in the correct format
  form.append('start_date', formData.start_date || '');
  form.append('end_date', formData.end_date || '');
  form.append('year_obtained', formData.year_obtained || ''); // Handle null value
  
  // Log the FormData contents
  for (const [key, value] of form.entries()) {
    console.log(`${key}:`, value);
  }

  try {
    const response = await axios.put(
      `https://ccobasi.pythonanywhere.com/user_profile/user-profile/${formData.id}/`,
      form,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    console.log("Response data:", response.data);

    if (response.status === 200) {
      toast.success("Profile updated successfully");
      navigate("/freelancer");
    } else {
      toast.error("Failed to update profile");
    }
  } catch (error) {
    toast.error("An error occurred while updating the profile");
    console.error("Error submitting the form:", error.response ? error.response.data : error.message);
  }
};


  const handleChange = (key, value) => {
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  return (
    <Container>
      <Box sx={{ width: "70%", margin: "auto", mt: 5 }}>
        <form onSubmit={handleSubmit}>
          <Stack spacing={2}>
            <Typography variant="h6" gutterBottom>
              Edit Profile
            </Typography>
            <AccountCircleOutlined sx={{ fontSize: 80, margin: "auto" }} />
            <SubTitleText subtitle="Bio" />
            <BioField
              bio={formData.bio}
              onChange={(value) => handleChange("bio", value)}
              bioError={validateBio(formData.bio)}
            />
            <SubTitleText subtitle="Job Role" />
            <JobRoleField
              job_role={formData.job_role}
              onChange={(value) => handleChange("job_role", value)}
              jobRoleError={validateJobRole(formData.job_role)}
            />
            <SubTitleText subtitle="Company" />
            <CompanyField
              company={formData.company}
              onChange={(value) => handleChange("company", value)}
              companyError={validateCompany(formData.company)}
            />
            <SubTitleText subtitle="Location" />
            <LocationField
              location={formData.location}
              onChange={(value) => handleChange("location", value)}
              locationError={validateLocation(formData.location)}
            />
            <SubTitleText subtitle="Institution Attended" />
            <InstitutionField
              institution={formData.institution}
              onChange={(value) => handleChange("institution", value)}
              institutionError={validateInstitution(formData.institution)}
            />
            <SubTitleText subtitle="Certificate Obtained" />
            <CertificationField
              certification={formData.certification}
              onChange={(value) => handleChange("certification", value)}
              certificationError={validateCertification(formData.certification)}
            />
            <SubTitleText subtitle="Start Date" />
            <CustomDatePicker
              width="100%"
              ml={1}
              value={startDate}
              setValue={(value) => setStartDate(value)}
            />
            <SubTitleText subtitle="End Date" />
            <CustomDatePicker
              width="100%"
              ml={1}
              value={endDate}
              setValue={(value) => setEndDate(value)}
            />
            <SubTitleText subtitle="Year Obtain" />
            <CustomDatePicker
              width="100%"
              ml={1}
              value={yearObtained}
              setValue={(value) => setYearObtained(value)}
            />
            <SubTitleText subtitle="Skills" />
            <SkillField
              skill={formData.skill}
              onChange={(value) => handleChange("skill", value)}
              skillError={validateSkill(formData.skill)}
            />
            <SubTitleText subtitle="Languages" />
            <LanguageField
              language={formData.language}
              onChange={(value) => handleChange("language", value)}
              languageError={validateLanguage(formData.language)}
            />
            <SubTitleText subtitle="Profile Picture" />
            <ProfilePictureField
              value={formData.image}
              onChange={(value) => handleChange("image", value)}
            />
            <Button variant="contained" color="primary" type="submit"
            sx={{
              mb: "1%",
              mt: "12%",
              backgroundColor: "#87CEEB",
              color: "#fff",
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
              Save Changes
            </Button>
          </Stack>
        </form>
      </Box>
    </Container>
  );
}

