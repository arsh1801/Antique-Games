// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultCounterCard from "examples/Cards/CounterCards/DefaultCounterCard";

function Featuring() {
  return (
    <MKBox component="section" pt={3} pb={8}>
      <Container>
        <Grid container spacing={3} sx={{ mb: 12 }}>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox
              component="img"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Nintendo_red_logo.svg/1280px-Nintendo_red_logo.svg.png"
              alt="Nintendo"
              width="100%"
              opacity={0.7}
            />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox
              component="img"
              src="https://cdn.cdnlogo.com/logos/u/76/ubisoft.svg"
              alt="Ubisoft"
              width="100%"
              opacity={0.7}
            />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox
              component="img"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Raven_Software-logo.svg/640px-Raven_Software-logo.svg.png"
              alt="netflix"
              width="100%"
              opacity={0.7}
            />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox
              component="img"
              src="https://seeklogo.com/images/E/electronic-arts-old-logo-0CD860F2DF-seeklogo.com.png"
              alt="pinterest"
              width="100%"
              opacity={0.7}
            />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox
              component="img"
              src="data:image/jpeg;base64,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"
              alt="spotify"
              width="100%"
              opacity={0.7}
            />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox
              component="img"
              src="data:image/png;base64,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"
              alt="vodafone"
              width="100%"
              opacity={0.7}
            />
          </Grid>
        </Grid>
        <Grid container justifyContent="center" sx={{ textAlign: "center" }}>
          <Grid item xs={12} md={3}>
            <DefaultCounterCard
              count={7}
              separator=","
              title="Active Games"
              description="The games that you can play currently in the games section"
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <DefaultCounterCard
              count={18}
              separator=","
              suffix="+"
              title="In Future Games"
              description="The games that are going to be add in the future"
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <DefaultCounterCard
              count={24}
              suffix="/7"
              title="Support"
              description="Actively engage team members that finishes on time"
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Featuring;
