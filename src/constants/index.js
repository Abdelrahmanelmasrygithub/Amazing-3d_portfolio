import {
  mobile,
  backend,
  creator,
  web,
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
  crypto,
  fitness,
  Dashboard,
  threejs,
  booking,
  port,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
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
    name: "Fitness App",
    description:
    "Workout website that allows to search gym exercises by targeting a specific body part, show how to do it with GIF illustrations and even fetch different video tutorials from YT.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "api",
        color: "orange-text-gradient",
      },
      {
        name: "material-ui",
        color: "pink-text-gradient",
      },
    ],
    image: fitness,
    source_code_link: "https://github.com/Abdelrahmanelmasrygithub/project_fitness_app",
  },

  {
    name: "Modern 3D Portfolio",
    description:
    "React JS Modern 3D Portfolio using Three.js and React Three Fiber and TailwindCSS and Framer Motion",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Three.js",
        color: "orange-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
    ],
    image: port,
    source_code_link: "https://github.com/Abdelrahmanelmasrygithub/project_fitness_app",
  },


  

  {
    name: "React Admin Dashboard",
    description:
    "This is a React Admin Dashboard built with ReactJS, Syncfusion UI, and Tailwind CSS. It includes theming support, tables, charts, a calendar, and a Kanban board for managing tasks and projects..",
    tags: [
      {
        name: "ReactJS ",
        color: "green-text-gradient",
      },
      {
        name: "Context API",
        color: "blue-text-gradient",
      },
      {
        name: "Syncfusion UI",
        color: "orange-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: Dashboard,
    source_code_link: "https://github.com/Abdelrahmanelmasrygithub/Dashboard",
  },
  {
    name: "Crypto Redux",
    description:
      "Cryptocurrency application that fetches data from a coin ranking API, displays various news articles and shows evolution charts in the reference to the selected token.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "ant-design",
        color: "orange-text-gradient",
      },
    ],
    image: crypto,
    source_code_link: "https://github.com/Abdelrahmanelmasrygithub/cryptoverse",
  },

  {
    name: "Booking ui",
    description:
      "React hotel reservation app UI design using HTML, CSS, and React Calendar.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "html",
        color: "pink-text-gradient",
      },
    ],
    image: booking,
    source_code_link: "https://github.com/Abdelrahmanelmasrygithub/React-Booking-clone-ui",
  },

];

export { services, technologies, experiences, testimonials, projects };
