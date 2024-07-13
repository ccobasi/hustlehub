import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Button, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import Divider from "@mui/material/Divider";
import { WorkspacePremiumOutlined } from "@mui/icons-material";

//Data for freelancer languages
const languages = [
  { id: 0, name: "English" },
  { id: 1, name: "German" },
  { id: 2, name: "Spanish" },
  { id: 3, name: "Mandarin" },
  { id: 4, name: "Italy" },

];//Data End

export default function FreelancerLanguageCard() {
  //Get language function
  const getLanguage = () =>
    languages.map((language, index) => (
      <>
        <Button
          key={index}
          variant="contained"
          sx={{ m: "2%", borderRadius: "20px" }}
        >
          {language.name}
        </Button>
      </>
    ));//Function End

  return (
    <>
    {/* Grid for freelancer languages */}
      <Grid item xs={12} md={12} sx={{ mb: "10px" }}>
        <Card sx={{ display: "flex" }}>
          <CardContent sx={{ flex: 1, overflow: "hidden" }}>
            <Stack direction="row" sx={{ justifyContent: "space-between" }}>
              <WorkspacePremiumOutlined  sx={{ ml: "2%", mr: "-65%" }} />{" "}
              <Typography>Languages</Typography>{" "}
              <BorderColorOutlinedIcon sx={{ mr: "2%" }} />
            </Stack>
            <Divider sx={{ mt: "5%", mb: "5%" }} />

            {getLanguage()}
           
          </CardContent>
        </Card>
      </Grid>
      {/* Grid End */}
    </>
  );
}
