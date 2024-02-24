import React, { useState } from "react";
import {
  OutlinedInput,
  MenuItem,
  Select,
  FormControl,
  Stack,
  Chip,
  Button,
  Typography,Box,Container
} from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";

const locations = [
  "Abia",
  "Abuja",
  "Akwa Ibom",
  "Lagos",
  "Asaba",
  "Warri",
  "Ikeja",
  "Aba",
  "Ajah",
  "Oshodi",
];

const types = ["Any", "Full-Time", "Part-Time"];

const offices = ["Any", "On-site", "Remote"];

const roles = [
  "Front-end developer",
  "Business Analyst",
  "Accountant",
  "Teacher",
];

export default function BrowseProjectPage() {
  const [selectedLocation, setSelectedLocation] = useState([]);
  const [selectedType, setSelectedType] = useState([]);
  const [selectedOffice, setSelectedOffice] = useState([]);
  const [selectedRoles, setSelectedRoles] = useState([]);

  const getSerializedTalentValue = (option) => {
    if (option?.value == null) {
      return "";
    }

    return `${option.value}`;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    alert(
      ` job role:${formData.get("role-select")}  job location:${formData.get(
        "location-select"
      )} job type:${formData.get("type-select")}  office type:${formData.get(
        "office-select"
      )}`
    );
  };

  return (
    
    <Container component="main" maxWidth="xs">
    
    <Typography component="h1" variant="h5" sx={{mt:"30%"}}><b>Browse Projects</b></Typography>
    <Box
      sx={{
        marginTop: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
    <form onSubmit={handleSubmit}>
      <FormControl sx={{ m: 1, width: 500 }}>
        <Typography sx={{mb:"2%"}}><b>Job Roles</b></Typography>

        <Select
          name="role-select"
          multiple
          value={selectedRoles}
          onChange={(e) => setSelectedRoles(e.target.value)}
          input={<OutlinedInput />}
          renderValue={(selected) => (
            <Stack gap={1} direction="row" flexWrap="wrap">
              {selected.map((value) => (
                <Chip
                sx={{borderRadius:"20px", backgroundColor:"#87CEEB"}}
              
                  key={value}
                  label={value}
                  onDelete={() =>
                    setSelectedRoles(
                      selectedRoles.filter((item) => item !== value)
                    )
                  }
                  deleteIcon={
                    <CancelIcon
                      onMouseDown={(event) => event.stopPropagation()}
                    />
                  }
                />
              ))}
            </Stack>
          )}
        >
          {roles.map((role) => (
            <MenuItem key={role} value={role}>
              {role}
            </MenuItem>
          ))}
        </Select>
        <Typography sx={{mb:"1%",mt:"4%"}}><b>Select Location</b></Typography>

        <Select
          name="location-select"
          multiple
          value={selectedLocation}
          onChange={(e) => setSelectedLocation(e.target.value)}
          input={<OutlinedInput />}
          renderValue={(selected) => (
            <Stack gap={1} direction="row" flexWrap="wrap">
              {selected.map((value) => (
                <Chip
                sx={{borderRadius:"20px", backgroundColor:"#87CEEB"}}
              
                  key={value}
                  label={value}
                  onDelete={() =>
                    setSelectedLocation(
                      selectedLocation.filter((item) => item !== value)
                    )
                  }
                  deleteIcon={
                    <CancelIcon
                      onMouseDown={(event) => event.stopPropagation()}
                    />
                  }
                />
              ))}
            </Stack>
          )}
        >
          {locations.map((location) => (
            <MenuItem key={location} value={location}>
              {location}
            </MenuItem>
          ))}
        </Select>
        <Typography sx={{mb:"1%",mt:"4%"}}><b>Job Type</b></Typography>

        <Select
          getSerializedValue={getSerializedTalentValue}
    
          name="type-select"
          multiple
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
          input={<OutlinedInput />}
          renderValue={(selected) => (
            <Stack gap={1} direction="row" flexWrap="wrap"  >
              {selected.map((value) => (
                <Chip
                sx={{borderRadius:"20px", backgroundColor:"#87CEEB"}}
                  key={value}
                  label={value}
                  onDelete={() =>
                    setSelectedType(
                      selectedType.filter((item) => item !== value)
                    )
                  }
                  deleteIcon={
                    <CancelIcon
                   
                      onMouseDown={(event) => event.stopPropagation()}
                    />
                  }
                />
              ))}
            </Stack>
          )}
        >
          {types.map((type) => (
            <MenuItem key={type} value={type}>
              {type}
            </MenuItem>
          ))}
        </Select>

        <Typography sx={{mb:"1%",mt:"4%"}}><b>Office</b></Typography>

        <Select
          name="office-select"
          multiple
          value={selectedOffice}
          onChange={(e) => setSelectedOffice(e.target.value)}
          input={<OutlinedInput />}
          renderValue={(selected) => (
            <Stack gap={1} direction="row" flexWrap="wrap">
              {selected.map((value) => (
                <Chip
                sx={{borderRadius:"20px", backgroundColor:"#87CEEB"}}
                  key={value}
                  label={value}
                  onDelete={() =>
                    setSelectedOffice(
                      selectedOffice.filter((item) => item !== value)
                    )
                  }
                  deleteIcon={
                    <CancelIcon
                      onMouseDown={(event) => event.stopPropagation()}
                    />
                  }
                />
              ))}
            </Stack>
          )}
        >
          {offices.map((office) => (
            <MenuItem key={office} value={office}>
              {office}
            </MenuItem>
          ))}
        </Select>

        <Button sx={{mb:"1%",mt:"12%", backgroundColor:"#87CEEB",
      "&:hover": {
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[400]
            : theme.palette.grey[500],
      },
      }} variant="contained" type="submit">
          Browse
        </Button>
      </FormControl>
    </form>
    </Box>
    </Container>
  );
}
