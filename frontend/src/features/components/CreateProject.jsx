// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import {
  TextField,
  Box,
  Button,
  Container,
  Typography,
  FormControlLabel,
  Checkbox,
  Stack
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import MenuItem from "@mui/material/MenuItem";
import InputAdornment from "@mui/material/InputAdornment";
import ManageAccountsOutlined from "@mui/icons-material/ManageAccountsOutlined";
import utc from 'dayjs/plugin/utc'; 
import timezone from 'dayjs/plugin/timezone'; 

dayjs.extend(utc); 
dayjs.extend(timezone); 

const today = dayjs().tz("UTC"); 

// Custom DatePicker
const CustomDatePicker = ({ value, onChange }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        defaultValue={today}
        disablePast
        value={value}
        onChange={onChange}
        textField={(params) => <TextField {...params} />} 
      />

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

const IsOpenField = ({ isOpen, onChange }) => {
  const handleChange = (e) => {
    onChange(e.target.checked);
  };

  return (
    <div style={{ alignSelf: "flex-start" }}>
      <FormControlLabel
        control={
          <Checkbox
            checked={isOpen}
            onChange={handleChange}
            color="primary"
          />
        }
        label="Is Open"
      />
    </div>
  );
};

export default function CreateProjectFormValidation() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    clientId: user?.id || "",
    title: "",
    description: "",
    budget: "",
    category: "",
    skillsRequired: "",
    closingDate: today,
    isOpen: false,
  });

  const categories = [
    { id: 1, name:"accounting & finance" },
    { id: 2, name:"administrative & customer support"},
    { id: 3, name:"agriculture"},
    { id: 4, name:"art & design"},
    { id: 5, name:"business & management"},
    { id: 6, name:"cleaning services"},
    { id: 7, name:"computer & it"},
    { id: 8, name:"education"},
    { id: 9, name:"engineering & architecture"},  
    { id: 10,name:"food & hospitality"},
    { id: 11,name:"healthcare"},
    { id: 12,name:"human resources"},
    { id: 13,name:"marketing & content creation"},
    { id: 14,name:"media & entertainment"},
    { id: 15,name:"other"},
  ];

  const { clientId, title, description, budget, category, skillsRequired, closingDate, isOpen } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


const handleDateChange = (date) => {
  if (date) {
    const formattedDate = date.format("YYYY-MM-DD");
    setFormData({ ...formData, closingDate: formattedDate });
  }
};


  const handleIsOpenChange = (isOpen) => {
    setFormData((prevData) => ({ ...prevData, isOpen }));
  };

  axios.interceptors.request.use(
    (config) => {
      const user = JSON.parse(localStorage.getItem("user"));
      const access = JSON.parse(localStorage.getItem("access"));
      if (user && access) {
        config.headers.Authorization = `Bearer ${access}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!clientId || !title || !description || !budget || !category || !skillsRequired || !closingDate || !isOpen) {
      setError("Please fill out all fields");
    } else {
      const formData = {
        client: clientId,
        title: title,
        description: description,
        budget: budget,
        category: category,
        skillsRequired: skillsRequired,
        closing_date: closingDate,  // Use snake_case for the field name
        is_open: isOpen,            // Similarly, use snake_case if required by backend
      };
      console.log("Form data:", formData);
      try {
        const response = await axios.post("http://localhost:8000/project/projects/", formData);
        const res = response.data || {};
        console.log(res);
        navigate("/client");
        toast.success("Project created successfully");
      } catch (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log('Error', error.message);
        }
        console.log(error.config);
        toast.error("Failed to register. Please try again later.");
      }
    }
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ marginTop: 8, display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Typography component="h1" variant="h5">
          Create a new project
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            id="client"
            label="Client"
            name="client"
            value={user?.id || ""}
            disabled
            fullWidth
            sx={{ mb: 2 }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="title"
            label="Title"
            name="title"
            value={title}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            multiline
            rows={4}
            id="description"
            label="Description"
            name="description"
            value={description}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="budget"
            label="Budget"
            value={budget}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="category"
            label="Category"
            value={category}
            select
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <ManageAccountsOutlined />
                </InputAdornment>
              ),
            }}
            sx={{ mt: "3%" }}
          >
            {categories.map((cat) => (
              <MenuItem key={cat.id} value={cat.name}>
                {cat.name}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            margin="normal"
            required
            fullWidth
            name="skillsRequired"
            label="Skills Required"
            value={skillsRequired}
            onChange={handleChange}
          />
          <Stack direction="column">
            <SubTitleText subtitle="Closing Date" />
            <CustomDatePicker value={dayjs(closingDate)} onChange={handleDateChange} />
          </Stack>
          <IsOpenField isOpen={isOpen} onChange={handleIsOpenChange} />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, backgroundColor: "#87CEEB", color: "white" }}
          >
            Create Project
          </Button>
        </Box>
        {error && <SubTitleText subtitle={error} />}
      </Box>
    </Container>
  );
}
