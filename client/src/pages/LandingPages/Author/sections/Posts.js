import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React components
import TransparentBlogCard from "examples/Cards/BlogCards/TransparentBlogCard";
import BackgroundBlogCard from "examples/Cards/BlogCards/BackgroundBlogCard";

function Places() {
  return (
    <MKBox component="section" py={2}>
      <Container>
        <Grid container item xs={12} lg={6}>
          <MKTypography variant="h3" mb={6}>
            Check about latest gaming news
          </MKTypography>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image="https://thumbs.dreamstime.com/b/world-technology-science-news-background-connection-digital-wires-circle-dots-map-143218024.jpg"
              title="New Games are going to be released very soon"
              description="Finding the news article. That’s one article you can find out here."
              action={{
                type: "internal",
                color: "info",
                label: "read more",
                route: "https://zeenews.india.com/gaming",
                target: "_blank",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image="https://media.istockphoto.com/id/1200200143/photo/4k-technological-map-background.jpg?b=1&s=170667a&w=0&k=20&c=Vtp8_IpvKaKso2o0Hi5KG00quUrQuXBVq95AxzxxquA="
              title="Public is very happy for this game launch"
              description="Have a look over here on this news, you now can see the news here."
              action={{
                type: "internal",
                route: "https://economictimes.indiatimes.com/topic/gaming",
                color: "info",
                label: "read more",
                target: "_blank",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image="https://c0.wallpaperflare.com/preview/1000/133/257/globalization-global-network-abstract.jpg"
              title="This particular classic game has stolen the heart of the public"
              description="If you’ve excited to see the news, you now can see the news here."
              action={{
                type: "internal",
                route: "https://tech.hindustantimes.com/gaming",
                target: "_blank",
                color: "info",
                label: "read more",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <BackgroundBlogCard
              image="https://i0.wp.com/iotbusinessnews.com/WordPress/wp-content/uploads/cloud-IT.jpg?fit=800%2C360&ssl=1"
              title="Latest Gaming News"
              description="Stop being worrying about latest insights of games, you can see the gaming news right here."
              action={{
                type: "internal",
                route: "https://www.gamesradar.com/",
                target: "_blank",
                label: "read more",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Places;
