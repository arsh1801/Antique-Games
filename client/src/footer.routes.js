// @mui icons
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";

// Material Kit 2 React components
import MKTypography from "components/MKTypography";

// Images
import Screenshot1 from "assets/images/Screenshot1.png";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "Antique Games",
    image: Screenshot1,
    route: "/",
  },
  socials: [
    {
      icon: <InstagramIcon />,
      link: "https://www.instagram.com/",
    },
    {
      icon: <TwitterIcon />,
      link: "https://twitter.com/",
    },
    {
      icon: <GitHubIcon />,
      link: "https://github.com/",
    },
    {
      icon: <YouTubeIcon />,
      link: "https://www.youtube.com/",
    },
  ],
  menus: [
    {
      name: "company",
      items: [
        { name: "about us", route: "/about-us" },
        { name: "author", route: "/author" },
      ],
    },
    {
      name: "Games",
      items: [
        { name: "Adventure Island", route: "/games" },
        { name: "Circus", route: "/games" },
        { name: "Contra", route: "/games" },
        { name: "Duck Hunt", route: "/games" },
        { name: "Ice Climber", route: "/games" },
        { name: "Ninja JaJa Maru-kun", route: "/games" },
        { name: "Super Mario Bros", route: "/games" },
      ],
    },
    {
      name: "help & support",
      items: [
        { name: "contact us", route: "/contact-us" },
        { name: "Feedback", route: "/feedback" },
      ],
    },
    {
      name: "legal",
      items: [
        { name: "Login", href: "/login" },
        { name: "Sign Up", href: "/signup" },
      ],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      All rights reserved. <b>Copyright</b> &copy; {date} Antique Games by{" "}
      <MKTypography
        component="a"
        href="/"
        target="_blank"
        rel="noreferrer"
        variant="button"
        fontWeight="regular"
      >
        <b>Antique Games Developers</b>
      </MKTypography>
      .
    </MKTypography>
  ),
};
