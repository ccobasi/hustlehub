import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { InputAdornment } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { ManageAccountsOutlined } from "@mui/icons-material";

export default function Proposal() {
  const location = useLocation();
  const { project } = location.state;
  let navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const [status, setStatus] = useState('pending');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const proposal = {
      project_id: project.id,  // Ensure the project ID is correctly set
      freelancer: user.id,
      proposed_rate: data.get("proposedRate"),
      estimated_days: data.get("estimatedNumOfDays"),
      cover_letter: data.get("coverLetter"),
      status: data.get("status"),
    };

    try {
      await axios.post('http://localhost:8000/proposal/proposals/', proposal, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access")}`,
        },
      });
      navigate("/browse-project");
      toast.success("Proposal submitted successfully");
    } catch (error) {
      console.error('Error submitting proposal:', error);
      toast.error("Failed to submit proposal");
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          component="h1"
          variant="h5"
          sx={{
            mt: "10%",
            color: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.primary.lightModeHeroTitle
                : theme.palette.primary.darkModeHeroTitle,
            fontFamily: "Poppins",
            fontWeight: "600",
            fontSize: "24px",
            lineHeight: "33.6px",
            letterSpacing: "-1.5%",
          }}
        >
          Proposal 
        </Typography>
       
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <FormControl fullWidth>
            <TextField
              required
              fullWidth
              id="projectName"
              label="Name of the Project"
              autoComplete="project-name"
              value={project.title}
              InputProps={{
                    readOnly: true,
                }}
              sx={{
                color: "#AFB0B6",
                pb: "5%",
                mb: "2%",
                mt: "25%",
              }}
            />
            <TextField
              required
              fullWidth
              id="freelancerName"
              label="Name"
              name="freelancerName"
              autoComplete="name"
              value={user.names}
              InputProps={{
                    readOnly: true,
                }}
              sx={{
                color: "#AFB0B6",
                pb: "5%",
                mb: "2%",
              }}
            />
            <TextField
              required
              fullWidth
              id="proposedRate"
              type="number"
              label="Proposed Rate"
              name="proposedRate"
              autoComplete="proposedRate"
              placeholder="Enter proposed rate"
              sx={{
                color: "#AFB0B6",
                pb: "5%",
                mb: "2%",
              }}
            />
            <TextField
              required
              fullWidth
              id="estimatedNumOfDays"
              type="number"
              label="Estimated Number of Days"
              name="estimatedNumOfDays"
              autoComplete="estimatedNumOfDays"
              placeholder="Enter estimated number of days"
              sx={{
                color: "#AFB0B6",
                pb: "5%",
                mb: "2%",
              }}
            />
            <TextField
              required
              fullWidth
              multiline
              rows={7}
              id="coverLetter"
              type="text"
              label="Cover Letter"
              name="coverLetter"
              autoComplete="coverLetter"
              placeholder="Enter cover letter"
              sx={{
                color: "#AFB0B6",
                pb: "5%",
                mb: "2%",
              }}
            />
            <TextField
              required
              fullWidth
              name="status"
              label="Choose Status"
              id="status"
              select
              InputProps={{
                startAdornment: (
                  <InputAdornment>
                    <ManageAccountsOutlined
                      sx={{
                        ml: "-25%",
                        color: "#AFB0B6",
                      }}
                    />
                  </InputAdornment>
                ),
              }}
              value={status} 
              onChange={(event) => setStatus(event.target.value)}
              sx={{
                color: "#AFB0B6",
                pb: "5%",
                mb: "2%",
              }}
            >
              <MenuItem value="pending">Pending</MenuItem>
              <MenuItem value="accepted" disabled>Accepted</MenuItem>
              <MenuItem value="rejected" disabled>Rejected</MenuItem>
            </TextField>
          </FormControl>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 5,
              mb: 7,
              backgroundColor: "#87CEEB",
              "&:hover": {
                backgroundColor: (theme) =>
                  theme.palette.mode === "light"
                    ? theme.palette.grey[400]
                    : theme.palette.grey[500],
                color: (theme) =>
                  theme.palette.mode === "light"
                    ? theme.palette.primary.lightModeHeroTitle
                    : theme.palette.primary.darkModeHeroTitle,
                fontFamily: "Poppins",
                fontWeight: "500",
                fontSize: "16px",
                lineHeight: "24px",
                letterSpacing: "-1%",
              },
            }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
