import React, { useState } from "react";
import {
  OutlinedInput,
  MenuItem,
  Select,
  FormControl,
  Stack,
  Chip,
  Button,
  Typography,
  Box,
  Container,
  Link,
} from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";

//Data to browse loctation
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
//Data End

//Data for job types
const types = ["Any", "Full-Time", "Part-Time"];
//Data End
//Data for employment type
const offices = ["Any", "On-site", "Remote"];
//Data End
//Data for Job roles
const roles = [
  "Front-end developer",
  "Business Analyst",
  "Accountant",
  "Teacher",
]; //Data End

export default function BrowseProjectPage() {
  //Initialization of useState hook
  const [selectedLocation, setSelectedLocation] = useState([]);
  const [selectedType, setSelectedType] = useState([]);
  const [selectedOffice, setSelectedOffice] = useState([]);
  const [selectedRoles, setSelectedRoles] = useState([]);
  //Handler to get Serialized value
  const getSerializedTalentValue = (option) => {
    if (option?.value == null) {
      return "";
    }

    return `${option.value}`;
  }; //Handle End

  //Handle for submit End
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
  }; //handle End

  return (
    // Container for browse project page
    <>
      <Container component="main" maxWidth="xs">
        <Typography
          component="h1"
          variant="h5"
          sx={{
            mt: "-7%",
            mb: "40%",
            fontFamily: "Poppins",
            fontWeight: "600",
            fontSize: "16px",
            lineHeight: "20.8px",
            textAlign: "center",
            color: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.primary.lightModeHeroTitle
                : theme.palette.primary.darkModeHeroTitle,
          }}
        >
          Browse Projects
        </Typography>
        <Box
          sx={{
            marginTop: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <form onSubmit={handleSubmit}>
            <FormControl sx={{ m: 1, width: 350 }}>
              <Stack direction="row" sx={{ justifyContent: "space-between" }}>
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontWeight: "600",
                    fontSize: "16px",
                    lineHeight: "20.8px",
                    letterSpacing: "-1%",
                    color: (theme) =>
                      theme.palette.mode === "light"
                        ? theme.palette.primary.lightModeHeroTitle
                        : theme.palette.primary.darkModeHeroTitle,
                  }}
                >
                  Job Roles
                </Typography>
                <Link
                  href="/hello"
                  sx={{
                    textDecoration: "none",
                    fontFamily: "Poppins",
                    fontWeight: "400",
                    fontSize: "13px",
                    lineHeight: "20.8px",
                    letterSpacing: "-1%",
                    color: "#95969D",
                  }}
                >
                  See all
                </Link>
              </Stack>
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
                  <MenuItem
                    key={role}
                    value={role}
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
                    {role}
                  </MenuItem>
                ))}
              </Select>
              <Stack direction="row" sx={{ justifyContent: "space-between" }}>
                <Typography
                  sx={{
                    mt: "4%",
                    fontFamily: "Poppins",
                    fontWeight: "600",
                    fontSize: "16px",
                    lineHeight: "20.8px",
                    letterSpacing: "-1%",
                    color: (theme) =>
                      theme.palette.mode === "light"
                        ? theme.palette.primary.lightModeHeroTitle
                        : theme.palette.primary.darkModeHeroTitle,
                  }}
                >
                  Select Location
                </Typography>
                <Link
                  href="/hello"
                  sx={{
                    textDecoration: "none",
                    fontFamily: "Poppins",
                    fontWeight: "400",
                    fontSize: "13px",
                    lineHeight: "20.8px",
                    letterSpacing: "-1%",
                    color: "#95969D",
                    mt: "4%",
                  }}
                >
                  See all
                </Link>
              </Stack>

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
                  <MenuItem
                    key={location}
                    value={location}
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
                    {location}
                  </MenuItem>
                ))}
              </Select>
              <Stack direction="row" sx={{ justifyContent: "space-between" }}>
                <Typography
                  sx={{
                    mt: "4%",
                    fontFamily: "Poppins",
                    fontWeight: "600",
                    fontSize: "16px",
                    lineHeight: "20.8px",
                    letterSpacing: "-1%",
                    color: (theme) =>
                      theme.palette.mode === "light"
                        ? theme.palette.primary.lightModeHeroTitle
                        : theme.palette.primary.darkModeHeroTitle,
                  }}
                >
                  Job Type
                </Typography>
                <Link
                  href="/hello"
                  sx={{
                    textDecoration: "none",
                    fontFamily: "Poppins",
                    fontWeight: "400",
                    fontSize: "13px",
                    lineHeight: "20.8px",
                    letterSpacing: "-1%",
                    color: "#95969D",
                    mt: "4%",
                  }}
                >
                  See all
                </Link>
              </Stack>

              <Select
                getSerializedValue={getSerializedTalentValue}
                name="type-select"
                multiple
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
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
                  <MenuItem
                    key={type}
                    value={type}
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
                    {type}
                  </MenuItem>
                ))}
              </Select>

              <Stack direction="row" sx={{ justifyContent: "space-between" }}>
                <Typography
                  sx={{
                    mt: "4%",
                    fontFamily: "Poppins",
                    fontWeight: "600",
                    fontSize: "16px",
                    lineHeight: "20.8px",
                    letterSpacing: "-1%",
                    color: (theme) =>
                      theme.palette.mode === "light"
                        ? theme.palette.primary.lightModeHeroTitle
                        : theme.palette.primary.darkModeHeroTitle,
                  }}
                >
                  Office
                </Typography>
                <Link
                  href="/hello"
                  sx={{
                    textDecoration: "none",
                    fontFamily: "Poppins",
                    fontWeight: "400",
                    fontSize: "13px",
                    lineHeight: "20.8px",
                    letterSpacing: "-1%",
                    color: "#95969D",
                    mt: "4%",
                  }}
                >
                  See all
                </Link>
              </Stack>

              <Select
                sx={{
                  backgroundColor: "background.Default",
                }}
                name="office-select"
                multiple
                value={selectedOffice}
                onChange={(e) => setSelectedOffice(e.target.value)}
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
                  <MenuItem
                    key={office}
                    value={office}
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
                    {office}
                  </MenuItem>
                ))}
              </Select>

              <Button
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
                variant="contained"
                type="submit"
              >
                Browse
              </Button>
            </FormControl>
          </form>
        </Box>
      </Container>
    </>
    // Container End
  );
}
