import * as React from "react";
import Divider from "@mui/material/Divider";
import { useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

// Client data  to create project
const clientCreateProjectData = [
  {
    id: 0,
    title: "Job position*",
    description: "Web Developer",

    url: "/job-position",
  },
  {
    id: 1,
    title: "Type of workplace",
    description: "Remote",
    url: "/workplace",
  },
  { id: 2, title: "Job location", description: "California", url: "/location" },
  {
    id: 3,
    title: "Company",
    description: "Ecommerce Company",
    url: "/company",
  },
  {
    id: 4,
    title: "Employment type",
    description: "Contract",
    url: "/employment",
  },
  {
    id: 5,
    title: "Description",
    description: "Lorem peum dolor sit amat, conisacturtur ud po",
    url: "/description",
  },
];
//Data End

export default function ClientCreateProject() {
  // Initialization of useNavigate Hook
  let navigate = useNavigate();

  // Get list function
  const getList = () =>
    clientCreateProjectData.map((list, index) => (
      <>
        <Grid item xs={12} md={12} sx={{ mb: "10px" }} key={index}>
          <Card sx={{ display: "flex" }}>
            <CardContent sx={{ flex: 1, overflow: "hidden" }}>
              <Stack direction="row" sx={{ justifyContent: "space-between" }}>
                <Typography>{list.title}</Typography>{" "}
                <a href={list.url}>
                  <BorderColorOutlinedIcon sx={{ mr: "2%" }} />
                </a>
              </Stack>
              <Divider sx={{ mt: "5%", mb: "5%" }} />

              {list.description}
            </CardContent>
          </Card>
        </Grid>
      </>
    ));
  // Function End

  return <Container>{getList()}</Container>;
}
