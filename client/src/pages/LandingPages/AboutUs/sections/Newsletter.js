import { useState } from "react";
import axios from "axios";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";

// Images
// import macbook from "assets/images/macbook.png";

function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = { email };
    await axios
      .post("http://localhost:5000/newsletter", data)
      .then((response) => {
        alert("Subscribed successfully!");
        setEmail("");
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
        alert("Error is coming while subscribing. Please try again later.");
      });
  };

  return (
    <MKBox component="form" pt={6} my={6} onSubmit={handleSubmit} role="form">
      <Container>
        <Grid container alignItems="center">
          <Grid item md={6} sx={{ ml: { xs: 0, lg: 3 }, mb: { xs: 12, md: 0 } }}>
            <MKTypography variant="h4">Be the first to see the Gaming News</MKTypography>
            <MKTypography variant="body2" color="text" mb={3}>
              Games are great therapists to get you mind relaxed, so getting in touch with gaming
              news will bring your future a great experience about new released games.
            </MKTypography>
            <Grid container spacing={1}>
              <Grid item xs={8}>
                <MKInput
                  type="email"
                  label="Email Here..."
                  fullWidth
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={4}>
                <MKButton variant="gradient" color="info" type="submit" sx={{ height: "100%" }}>
                  Subscribe
                </MKButton>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={5} sx={{ ml: "auto" }}>
            <MKBox position="relative">
              <MKBox
                component="img"
                src="data:image/png;base64,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"
                alt="macbook"
                width="100%"
              />
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Newsletter;
