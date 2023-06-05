import photoDataImage1 from "assets/images/pagesDataImage1.jpg";
import photoDataImage2 from "assets/images/pagesDataImage2.jpg";
import photoDataImage3 from "assets/images/pagesDataImage3.jpeg";
import photoDataImage4 from "assets/images/pagesDataImage4.jpeg";
import photoDataImage5 from "assets/images/pagesDataImage5.jpg";
import photoDataImage6 from "assets/images/pagesDataImage6.png";
import photoDataImage7 from "assets/images/pagesDataImage7.webp";

export default [
  {
    title: "Active Games",
    description:
      "that you can play right now -------------------------------------------------------------------------------->",
    items: [
      {
        image: `${photoDataImage3}`,
        name: "Adventure Island",
        cursor: "pointer",
        route: "/games",
      },
      {
        image: `${photoDataImage5}`,
        name: "Circus",
        cursor: "pointer",
        route: "/games",
      },
      {
        image: `${photoDataImage2}`,
        name: "Contra",
        cursor: "pointer",
        route: "/games",
      },
      {
        image: `${photoDataImage4}`,
        name: "Duck Hunt",
        cursor: "pointer",
        route: "/games",
      },
      {
        image: `${photoDataImage6}`,
        name: "Ice Climber",
        cursor: "pointer",
        route: "/games",
      },
      {
        image: `${photoDataImage7}`,
        name: "Ninja JaJa Maru-kun",
        cursor: "pointer",
        route: "/games",
      },
      {
        image: `${photoDataImage1}`,
        name: "Super Mario Bros",
        cursor: "pointer",
        route: "/games",
      },
    ],
  },
];
