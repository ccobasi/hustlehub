import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useState } from "react";
import { Grid } from "@mui/material";
import { Container } from "@mui/material";



export default function EmploymentTypeRadioButtons() {
  // Initialization of useState Hook
  const [value, setValue] = React.useState("");
  // Handle for on change event
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  // Handle End

  return (
    <>
    {/* Container for validation */}
      <Container component="main" maxWidth="xs">
        <FormControl>
          <FormLabel id="demo-form-control-label-placement" sx={{textAlign:"center", mt:"2%", mb:"7%"}}>
            Overwrite and choose the type of work according to what you want!
          </FormLabel>
          <RadioGroup
            column
            aria-labelledby="demo-form-control-label-placement"
            name="controlled-radio-buttons-group"
            value={value}
            onChange={handleChange}
            defaultValue="full-time"
          >
            <FormControlLabel
              value="full-time"
              control={<Radio sx={{ ml: "73%" }} />}
              label="Full time"
              labelPlacement="start"
              sx={{ textAlign: "flex-start" }}
            />
            <FormControlLabel
              value="part-time"
              control={<Radio sx={{ ml: "72%" }} />}
              label="Part time"
              labelPlacement="start"
            />
            <FormControlLabel
              value="contract"
              control={<Radio sx={{ ml: "73%" }}/>}
              label="Contract"
              labelPlacement="start"
            />
            <FormControlLabel
              value="temporary"
              control={<Radio  sx={{ ml: "69%" }}/>}
              label="Temporary"
              labelPlacement="start"
            />

            <FormControlLabel
              value="volunteer"
              control={<Radio sx={{ ml: "70%" }}/>}
              label="Volunteer"
              labelPlacement="start"
            />
            <FormControlLabel
              value="apprenticeship"
              control={<Radio  sx={{ ml: "60%" }}/>}
              label="Apprenticeship"
              labelPlacement="start"
            />
          </RadioGroup>
        </FormControl>
      </Container>
      {/* Container End */}
    </>
  );
}
