// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { TextField, Box, Button, Typography, Container } from "@mui/material";
import { AccountCircleOutlined } from "@mui/icons-material";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import {useUserProfile} from "../../../store/UserProfileContext"
// import { useParams } from "react-router-dom";


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



const EditClientPage = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const userId = user ? user.id : null;
  const [clientProfile, setClientProfile] = useState(null);
  const { userProfile, setUserProfile } = useUserProfile();

   const [formData, setFormData] = useState({
    bio: "",
    job_role: "",
    company: "",
    location: "",
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
  const fetchClientProfile = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/user_profile/client-profile/${userId}/`);
      if (response.data) { // Check if data exists before setting formData
        setClientProfile(response.data);
        setFormData({
          ...formData,
          id: response.data.id,
          user: response.data.user,
          bio: response.data.bio || "", 
          job_role: response.data.job_role || "",
          company: response.data.company || "",
          location: response.data.location || "",
          image: null, 
        });
      } else {
        console.log('Data not available');
      }
    } catch (error) {
      console.error(error);
    }
  };

  fetchClientProfile();
}, []);


  const [bioError, setBioError] = useState("");
  const [jobRoleError, setJobRoleError] = useState("");
  const [companyError, setCompanyError] = useState("");
  const [locationError, setLocationError] = useState("");

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
    setClientProfile(response.data);
    toast.success(clientProfile ? "Your profile has been updated successfully." : "Your profile has been created successfully.");
    navigate('/client')
    setFormData({
      bio: "",
      job_role: "",
      company: "",
      location: "",
      id: userId,
      image: null,
    });
  } catch (error) {
    toast.error(clientProfile ? "Failed to update your profile. Please try again later." : "Failed to create your profile. Please try again later.");
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
  const url = clientProfile ? `http://localhost:8000/user_profile/client-profile/${formData.id}/` : `http://localhost:8000/user_profile/client-profile/${userId}/`;

  const response = await axios({
    method: 'put',
    url,
    data: form,
  });


  console.log(response.data);
  return response.data;
};

  return (
    <Container component="main" maxWidth="md">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <AccountCircleOutlined sx={{ ml: 2, fontSize: 56 }} />
        <Typography component="h1" variant="h5">
          Edit Profile
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            label="Email"
            value={clientProfile?.user || ""} 
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
          <ProfilePictureField
            value={formData.image}
            onChange={(value) => handleChange("image", value)} 
          />

          {/* Other fields */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, backgroundColor: "#87CEEB", color: "white" }}
          >
            Update Profile
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default EditClientPage;