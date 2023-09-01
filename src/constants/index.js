import {
  mobile,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  tripguide,
  threejs,
  rowan,
  visa,
  asrc,
  unity,
  jenkins,
  unreal,
  aws,
  firebase,
  spotify2,
  metroid,
  game,
  front,
  back,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Game Developer",
    icon: game,
  },
  {
    title: "Frontend Developer",
    icon: front,
  },
  {
    title: "Backend Developer",
    icon: back,
  },
  {
    title: "Mobile Developer",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "firebase",
    icon: firebase,
  },
  {
    name: "aws",
    icon: aws,
  },
  {
    name: "unity",
    icon: unity,
  },
  {
    name: "unreal",
    icon: unreal,
  },
];

const experiences = [
  {
    title: "Web Developer - Internship",
    company_name: "Rowan University",
    icon: rowan,
    iconBg: "#383E56",
    date: "September 2018 - May 2022",
    points: [
      "Developed and maintaining web services using Canvas and AWS.",
      "Collaborated with cross-functional teams including writers, professors, and other developers to create high-quality pages.",
      "Implemented a unique design and ensuring up to date news, announcements, and awards were posted",
    ],
  },
  {
    title: "Systems Engineer",
    company_name: "Visa",
    icon: visa,
    iconBg: "#E6DEDD",
    date: "May 2022 - Aug 2022",
    points: [
      "Worked and monitored health of clusters and servers using Apache Kafka.",
      "Coordinated with a global team with different time zones to report any findings during their time examining the clusters.",
      "Participated in big data reviews and reported any findings to the director to examine server performance and health.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "ASRC Federal",
    icon: asrc,
    iconBg: "#383E56",
    date: "Jan 2023 - Present",
    points: [
      "Coordinated projects with multiple product managers and worked on government contracted projects.",
      "Worked primarily with C++ and Java and used the terminal to traverse through directories using Linux and utilized Coverity Scan.",
      "Utilized multiple version control toolsand Jenkins to deploy builds and merge with master branches using a CI/CD pipeline.",
      "Participated in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Spotify 2",
    description:
      "Web-based application based off the Spotify platform that allows users to search, recommend, and chat about the their favorite genres of music. With fully integrated profiles and login sytems that allow you express your music taste freely.",
    tags: [
      {
        name: "django",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: spotify2,
    source_code_link: "https://github.com/JayssonS/SeniorProject",
  },
  {
    name: "Derived",
    description:
      "A metroid-vania style 2D platformer that takes the player on a journey of figuring out whether every upgrade is worth the repercussions that it inflicts on the overworld.",
    tags: [
      {
        name: "unity",
        color: "blue-text-gradient",
      },
      {
        name: "C#",
        color: "green-text-gradient",
      },
      {
        name: "gamedevelopment",
        color: "pink-text-gradient",
      },
    ],
    image: metroid,
    source_code_link: "https://jaysson.itch.io/",
  },
];

export { services, technologies, experiences, testimonials, projects };
