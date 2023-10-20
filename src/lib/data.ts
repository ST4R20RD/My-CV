export const PROJECTS: Array<{
  dateSince: string;
  isFinished: boolean;
  image: string;
  name: string;
  subTitle: string;
  description: string;
  techs: Array<string>;
  github: string;
  live: string;
  warning?: string;
}> = [
  {
    dateSince: "2023-09-25T22:38:12",
    isFinished: false,
    image: "/images/ge-shop.png",
    name: "GE SHOP",
    subTitle: "E-commerce website",
    description:
      "Shop with the best products available today! As a Front End Developer, I'm devoted to creating a user-friendly interface and ensuring a reliable platform through performance optimization. This project is a personal quest for knowledge and skill development, aiming to explore the intricacies of web development and e-commerce. It's all about hands-on learning, experimenting with the latest technologies, and fine-tuning my front-end development skills. Join me as we delve into the world of online shopping, not just as consumers, but as developers eager to grow and master our craft!",
    techs: ["ReactJS", "Typescript", "Tailwind", "Styled-Components", "Axios", "React-router-dom"],
    github: "https://github.com/ST4R20RD/ge-shop",
    live: "https://ge-shop.netlify.app/",
  },
  /* {
    dateSince: "2022-08-26T22:38:12",
    isFinished: false,
    image: "/images/24grind-frontPic.png",
    name: "24Grind",
    subTitle: "Every activity's more fun now with friends",
    description:
      "24Grind is a social self-care app that allows users to create, share, and discover self-care activities such as physical, reading, mental lab, and domestic tasks. Users can create an account, log in, create activities, share them with others, rate, and provide feedback. They can also join or create groups, set reminders, track progress, and connect with others. The app has a simple interface, clean design, easy navigation and includes gamification aspects. Note: The app is still in development so not every functionality is currently available in the app.",
    techs: ["ReactJS", "Typescript", "Tailwind", "Axios", "React-router-dom", "Formik"],
    github: "https://github.com/ST4R20RD/24Grind-frontend",
    live: "https://24grind.netlify.app/",
    warning: "BE not currently working, we are actively working on a fix.",
  }, */
  {
    dateSince: "2022-11-15T16:54:46",
    isFinished: true,
    image: "/images/tesla-clone-frontPic.png",
    name: "Tesla Website Clone",
    subTitle: "Clone of Tesla Website to test my skills",
    description:
      "I have taken on the challenge of creating a responsive clone of the Tesla website to test and showcase my skills as a Front End Developer. This project involves replicating the design, layout, and functionality of the official Tesla website, while also ensuring that it is optimized for use on a wide range of devices, including desktop computers, laptops, tablets, and smartphones. The website is built using the latest Front End Development technologies and best practices to ensure fast loading times, user-friendly navigation, and accessibility to all users. Additionally, The website will include all of the same information and resources that are available on the official Tesla website. It was a great opportunity to test my skills in developing a web-responsive website and my ability to replicate a complex website.",
    techs: ["ReactJS", "ReduxJS", "StyledComponents", "MaterialUI"],
    github: "https://github.com/ST4R20RD/tesla-clone",
    live: "https://tesla-clone-gnestrelado.netlify.app/",
  },
  {
    dateSince: "2022-11-16T17:07:55",
    isFinished: true,
    image: "/images/whatsgood-frontPic.png",
    name: "Whatsapp Clone",
    subTitle: "Clone of Whatsapp App Clone to test my skills",
    description:
      "I have taken on the challenge of creating a responsive web app that replicates the functionality of the popular messaging app, WhatsApp. This project aims to test and showcase my skills in front-end development, specifically in the area of creating responsive web apps. The web app will be designed to work seamlessly on all devices, including desktop computers, laptops, tablets, and smartphones. The user can Log in with Google. The app will include some of the key features of WhatsApp, such as messaging and group chats. It will be built using the latest front-end development technologies and best practices to ensure fast loading times, user-friendly navigation, and accessibility to all users. This project will also be an opportunity for me to demonstrate my ability to replicate a complex app and my understanding of the features and functionalities of the app, and to learn more about firebase.",
    techs: ["ReactJS", "Firebase", "MaterialUI"],
    github: "https://github.com/ST4R20RD/whatsapp-clone",
    live: "https://whatsgood-gnestrelado.netlify.app/",
  },
  {
    dateSince: "2022-04-09T11:20:48",
    isFinished: true,
    image: "/images/nani-frontPic.png",
    name: "Nani",
    subTitle: "All of animes in one place",
    description:
      "Teaming up for our final course project, my colleague and I, both Front End Developers, aim to build a responsive website for anime enthusiasts. It offers the latest anime updates, synopses, trailers, reviews, and social interaction. The site ensures seamless browsing across all devices, prioritizing user-friendliness, speed, and accessibility. We'll also optimize it for search engines to increase visibility. This project showcases our skills in creating a niche-focused, feature-rich anime platform.",
    techs: [
      "ReactJS",
      "SCSS",
      "Axios",
      "React-router-dom",
      "Socket.io",
      "Google-Login",
      "Recaptcha",
    ],
    github: "https://github.com/RaAlMer/Nani-frontend",
    live: "https://nani-app.netlify.app/",
    warning:
      "Not currently working because the service where the BE was allocated turned payed in the last few month, I am working on an alternative",
  },
  /* {
    dateSince: "2021-12-14T17:37:19",
    isFinished: true,
    image: "/images/penalty-frontPic.png",
    name: "Penalty Shootout",
    subTitle: "Simple game for quick fun with friends",
    description:
      "Put your luck to the test with our simple yet exciting Penalty Shootout game. Players take turns attempting to score against the opposing team's goalkeeper, with the pressure of a one-on-one showdown. With easy-to-use controls and a straightforward gameplay, this game is perfect for players of all ages and skill levels. Test your luck and see if you have what it takes to come out on top!",
    techs: ["HTML", "Canvas"],
    github: "https://github.com/ST4R20RD/Penalty-Shootout",
    live: "https://penalty-shootout.netlify.app/",
  },
 */
];
