import { EditFreelancerFirstFeature } from "./EditFreelancerCard";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect} from "react";
import {
  TextField,
  Box,
  Button,
  Stack,
  Typography,
  Container,
} from "@mui/material";
import AccountCircleOutlined from "@mui/icons-material/AccountCircleOutlined";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import axios from "axios";
import { toast } from "react-toastify";
import {useUserProfile} from "../../../store/UserProfileContext"



const today = dayjs();

//Custom DatePicker
const CustomDatePicker = ({ width, ml }) => {
  const [value, setValue] = React.useState([dayjs(""), dayjs("")]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer
        components={["DateRangePicker", "DatePicker"]}
        sx={{ m: "1%", width: { width }, ml: { ml } }}
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

   const [formData, setFormData] = useState({
    bio: "",
    job_role: "",
    company: "",
    location: "",
    institution: "",
    certification: "",
    skill: "",
    language: "",
    image: null,
    id: userProfile?.id || null,
    // id: userId,
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
      const response = await axios.get(`http://localhost:8000/user_profile/user-profile/${userId}/`);
      if (response.data) { // Check if data exists before setting formData
        setFreelancerProfile(response.data);
        setFormData({
          ...formData,
          id: response.data.id,
          user: response.data.user,
          bio: response.data.bio || "", 
          job_role: response.data.job_role || "",
          company: response.data.company || "",
          location: response.data.location || "",
          institution: response.data.institution || "",
          certification: response.data.certification || "",
          skill: response.data.skill || "",
          language: response.data.language || "",
          image: null, 
        });
      } else {
        console.log('Data not available');
      }
    } catch (error) {
      console.error(error);
    }
  };

  fetchFreelancerProfile();
}, []);


  const [bioError, setBioError] = useState("");
  const [jobRoleError, setJobRoleError] = useState("");
  const [companyError, setCompanyError] = useState("");
  const [locationError, setLocationError] = useState("");
  const [institutionError, setInstitutionError] = useState("");
  const [certificationError, setCertificationError] = useState("");
  const [skillError, setSkillError] = useState("");
  const [languageError, setLanguageError] = useState("");

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
    if (name === "bio") {
      setBioError(validateBio(value));
    } else if (name === "job_role") {
      setJobRoleError(validateJobRole(value));
    } else if (name === "company") {
      setCompanyError(validateCompany(value));
    } else if (name === "location") {
      setLocationError(validateLocation(value));
    }else if (name === "institution") {
      setInstitutionError(validateInstitution(value));
    }else if (name === "certification") {
      setCertificationError(validateCertification(value));
    }else if (name === "skill") {
      setSkillError(validateSkill(value));
    }else if (name === "language") {
      setLanguageError(validateLanguage(value));
    }
  };
  
   const handleSubmit = async (e) => {
  e.preventDefault();

  // Validate form data (unchanged)
  if (bioError || jobRoleError || companyError || locationError) {
    toast.error("Please fix the errors before submitting.");
    return;
  }

  if (!formData.id) {
    toast.error("User ID is not set. Please try again later.");
    return;
  }

  try {
    const response = await submitProfile(formData);
    setUserProfile(response.data);
    console.log('user profile');
    setFreelancerProfile(response.data);
    toast.success(freelancerProfile ? "Your profile has been updated successfully." : "Your profile has been created successfully.");
    navigate('/freelancer')
    setFormData({
      bio: "",
      job_role: "",
      company: "",
      location: "",
      institution: "",
      certification: "",
      skill: "",
      language: "",
      id: userId,
      image: null,
    });
  } catch (error) {
    toast.error(freelancerProfile ? "Failed to update your profile. Please try again later." : "Failed to create your profile. Please try again later.");
    console.log(error);
  }
};

const submitProfile = async (formData) => {
  const formDataCopy = { ...formData };

  const form = new FormData();
  for (const key in formDataCopy) {
    if (key !== 'email' && key !== 'id') { 
      form.append(key, formDataCopy[key]);
    }
  }
  console.log('formData.id');
  console.log(formData.id);
  const url = freelancerProfile ? `http://localhost:8000/user_profile/user-profile/${formData.id}/` : `http://localhost:8000/user_profile/user-profile/${userId}/`;


  const response = await axios.put(url, form, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });


  console.log(response.data);
  return response.data;
};

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
              
            </Stack>

            
          </Box>
          <Box>
          <TextField
            label="Email"
            value={freelancerProfile?.user || ""}
            disabled
            fullWidth
            sx={{ mb: 2 }}
          />
          <BioField
            bio={formData.bio}
            onChange={(value) => handleChange("bio", value)}
            bioError={bioError}
          />
          <JobRoleField
            job_role={formData.job_role}
            onChange={(value) => handleChange("job_role", value)}
            jobRoleError={jobRoleError}
          />
          <CompanyField
            company={formData.company}
            onChange={(value) => handleChange("company", value)}
            companyError={companyError}
          />
          <LocationField
            location={formData.location}
            onChange={(value) => handleChange("location", value)}
            locationError={locationError}
          />
          
          </Box>

          {/* Box for Client Education  */}
          <Box>

          <InstitutionField
            institution={formData.institution}
            onChange={(value) => handleChange("institution", value)}
            institutionError={institutionError}
          />
          <CertificationField
            certification={formData.certification}
            onChange={(value) => handleChange("certification", value)}
            certificationError={certificationError}
          />
            
          </Box>
          <Box>
                          <Stack direction="column">
                <SubTitleText subtitle="Year started" />

                <CustomDatePicker width="400px" />
              </Stack>
              <Stack direction="column">
                <SubTitleText subtitle="Year graduated" />

                <CustomDatePicker width="400px" />
              </Stack>
          </Box>
          <Box>
            <SkillField
            skill={formData.skill}
            onChange={(value) => handleChange("skill", value)}
            skillError={skillError}
          />
           <LanguageField
            language={formData.language}
            onChange={(value) => handleChange("language", value)}
            languageError={languageError}
          />
          </Box>

          {/* Box Freelancer Languages */}

          <Box>
           
          <ProfilePictureField
            value={formData.image}
            onChange={(value) => handleChange("image", value)} 
          />
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

