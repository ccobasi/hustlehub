import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Button, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import Divider from "@mui/material/Divider";
import AcUnitOutlined from "@mui/icons-material/AcUnitOutlined";
import Link from "@mui/material/Link";

const skills = [
  { id: 0, name: "Leadership" },
  { id: 1, name: "Teamwork" },
  { id: 2, name: "Visioner" },
  { id: 3, name: "Communication" },
  { id: 4, name: "Analytical" },
  { id: 5, name: "Reliable" },
];

export default function ClientSkillCard() {
  const getSkill = () =>
    skills.map((skill, index) => (
      <>
        <Button
          key={index}
          variant="contained"
          sx={{ m: "2%", borderRadius: "20px" }}
        >
          {skill.name}
        </Button>
      </>
    ));

  return (
    <>
      <Grid item xs={12} md={12} sx={{ mb: "10px" }}>
        <Card sx={{ display: "flex" }}>
          <CardContent sx={{ flex: 1, overflow: "hidden" }}>
            <Stack direction="row" sx={{ justifyContent: "space-between" }}>
              <AcUnitOutlined sx={{ ml: "2%", mr: "-73%" }} />{" "}
              <Typography>Skills</Typography>{" "}
              <BorderColorOutlinedIcon sx={{ mr: "2%" }} />
            </Stack>
            <Divider sx={{ mt: "5%", mb: "5%" }} />

            {getSkill()}
            <Typography variant="body" sx={{mr:"2%"}}>+5 more</Typography>
            <Stack direction="column">
            <Link sx={{textDecoration:"none" , borderRadius:"20px", color:"red", textAlign:"center", backgroundColor:"blue"}}>See all</Link>
            </Stack>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
}
