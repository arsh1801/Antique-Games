import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultReviewCard from "examples/Cards/ReviewCards/DefaultReviewCard";

function Information() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={6}
          justifyContent="center"
          sx={{ mx: "auto", textAlign: "center" }}
        >
          <MKTypography variant="h2">Trusted by over</MKTypography>
          <MKTypography variant="h2" color="info" textGradient mb={2}>
            108+ Users for Experience
          </MKTypography>
          <MKTypography variant="body1" color="text" mb={2}>
            Many people from age group of children, teenagers, adults and senior citizen people love
            Antique Games website main theme of giving nostalgic feeling to them.
          </MKTypography>
        </Grid>
        <Grid container spacing={3} sx={{ mt: 8 }}>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              name="Nick Willever"
              date="1 day ago"
              review="This is an excellent website, the documentation is excellent and helped me get things done more efficiently to play games."
              rating={5}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              color="info"
              name="Shailesh Kushwaha"
              date="1 week ago"
              review="I found a way in this particular website i.e. Antique Games, to refresh all my childhood memories when I used to play all these games !!!"
              rating={5}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              name="Samuel Kamuli"
              date="3 weeks ago"
              review="Great website. All the OG games are available here and are very easy to access and playable to enjoy!"
              rating={5}
            />
          </Grid>
        </Grid>
        <Divider sx={{ my: 6 }} />
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={6} md={4} lg={2}>
            <MKBox
              component="img"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Nintendo_red_logo.svg/1280px-Nintendo_red_logo.svg.png"
              alt="Apple"
              width="100%"
              opacity={0.6}
            />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox
              component="img"
              src="https://cdn.cdnlogo.com/logos/u/76/ubisoft.svg"
              alt="Facebook"
              width="100%"
              opacity={0.6}
            />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox
              component="img"
              src="https://media0.giphy.com/media/QtkQ1zh9XBPlLUl6Xx/giphy.gif?cid=6c09b9521f723nh1r8bz0d4numn9g51uhkkufzzdvsfg6g84&ep=v1_stickers_related&rid=giphy.gif&ct=s"
              alt="Nasa"
              width="100%"
              opacity={0.6}
            />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox
              component="img"
              src="https://seeklogo.com/images/E/electronic-arts-old-logo-0CD860F2DF-seeklogo.com.png"
              alt="Vodafone"
              width="100%"
              opacity={0.6}
            />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox
              component="img"
              src="data:image/jpeg;base64,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"
              alt="DigitalOcean"
              width="100%"
              opacity={0.6}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
