// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";

// Images
import bgFront from "assets/images/news-home1.jpeg";
import bgBack from "assets/images/red-design.jpg";

function BuiltByDevelopers() {
  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                icon="touch_app"
                title={
                  <>
                    Know More about
                    <br />
                    Classic Games News
                  </>
                }
                description="Bring your mouse to enter the gaming news world."
              />
              <RotatingCardBack
                image={bgBack}
                title="Tap the button to know more about the latest insights news report."
                description=""
                action={{
                  type: "internal",
                  route: "https://zeenews.india.com/gaming",
                  target: "_blank",
                  label: "Click Here!",
                }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                icon="touch_app"
                title={
                  <>
                    Latest Updates of
                    <br />
                    Nostalgic Games
                  </>
                }
                description="Bring your mouse to enter the gaming news world."
              />
              <RotatingCardBack
                image={bgBack}
                title="Tap the button to know more about the latest insights news report."
                description=""
                action={{
                  type: "internal",
                  route: "/https://tech.hindustantimes.com/gaming",
                  target: "_blank",
                  label: "Click Here!",
                }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                icon="touch_app"
                title={
                  <>
                    Latest Insights about
                    <br />
                    the OG Games
                  </>
                }
                description="Bring your mouse to enter the gaming news world."
              />
              <RotatingCardBack
                image={bgBack}
                title="Tap the button to know more about the latest insights news report."
                description=""
                action={{
                  type: "internal",
                  route: "https://economictimes.indiatimes.com/topic/gaming",
                  target: "_blank",
                  label: "Click Here!",
                }}
              />
            </RotatingCard>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default BuiltByDevelopers;
