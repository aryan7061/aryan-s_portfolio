import reactIcon from "devicon/icons/react/react-original.svg";
import typescriptIcon from "devicon/icons/typescript/typescript-original.svg";
import javascriptIcon from "devicon/icons/javascript/javascript-original.svg";
import reduxIcon from "devicon/icons/redux/redux-original.svg";
import tailwindIcon from "devicon/icons/tailwindcss/tailwindcss-original.svg";
import html5Icon from "devicon/icons/html5/html5-original.svg";
import css3Icon from "devicon/icons/css3/css3-original.svg";
import viteIcon from "devicon/icons/vitejs/vitejs-original.svg";
import graphqlIcon from "devicon/icons/graphql/graphql-plain.svg";
import jsonIcon from "devicon/icons/json/json-original.svg";
import axiosIcon from "devicon/icons/axios/axios-plain.svg";
import materialUiIcon from "devicon/icons/materialui/materialui-original.svg";
import antDesignIcon from "devicon/icons/antdesign/antdesign-original.svg";
import bootstrapIcon from "devicon/icons/bootstrap/bootstrap-original.svg";
import reactRouterIcon from "devicon/icons/reactrouter/reactrouter-original.svg";
import nodejsIcon from "devicon/icons/nodejs/nodejs-original.svg";
import nestjsIcon from "devicon/icons/nestjs/nestjs-original.svg";
import expressIcon from "devicon/icons/express/express-original.svg";
import postgresqlIcon from "devicon/icons/postgresql/postgresql-original.svg";
import mongodbIcon from "devicon/icons/mongodb/mongodb-original.svg";
import mysqlIcon from "devicon/icons/mysql/mysql-original.svg";
import gitIcon from "devicon/icons/git/git-original.svg";
import githubIcon from "devicon/icons/github/github-original.svg";
import figmaIcon from "devicon/icons/figma/figma-original.svg";
import vscodeIcon from "devicon/icons/vscode/vscode-original.svg";
import vercelIcon from "devicon/icons/vercel/vercel-original.svg";
import chromeIcon from "devicon/icons/chrome/chrome-original.svg";
import typeormIcon from "../assets/icons/typeorm.svg";
import { siRefine, siRender } from "simple-icons";

function simpleIconSrc(icon) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#${icon.hex}"><path d="${icon.path}"/></svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

const renderIcon = simpleIconSrc(siRender);
const refineIcon = simpleIconSrc(siRefine);

export const profile = {
  name: "Aryan Gupta",
  role: "Full Stack Developer",
  email: "aryanguptawork26@gmail.com",
  emailUrl:
    "https://mail.google.com/mail/?view=cm&fs=1&to=aryanguptawork26@gmail.com",
  phone: "+91 7367993351",
  phoneUrl: "tel:+917367993351",
  githubUrl: "https://github.com/aryan7061",
  githubHandle: "aryan7061",
  linkedinUrl: "https://www.linkedin.com/in/aryan-gupta-2026bvf",
  linkedinHandle: "aryan-gupta-2026bvf",
  resumeUrl: "/aryan-gupta-resume.pdf",
  resumeFileName: "Aryan-Gupta-Resume.pdf",
  status: "React · TypeScript · Node.js · NestJS · GraphQL · PostgreSQL",
  introLede:
    "Hi, I'm a full stack developer building responsive, API-driven web applications with React, TypeScript, NodeJS, and PostgreSQL.",
  summary:
    "Full stack developer with experience building responsive applications using React.js, TypeScript, JavaScript, Redux, and REST APIs. I designed, developed, and deployed HisaabBook, a full stack CRM built with React, TypeScript, NestJS, GraphQL, PostgreSQL, and server-side authorization. Experienced in API integration, working with databases, and collaborating with backend teams on API contracts. Currently expanding my full stack skills across MERN and Python.",
};

export const facts = [
  { label: "Current Role", value: "Frontend Developer", serif: true },
  { label: "Experience", value: "Dec 2025 – Present" },
  { label: "Frontend", value: "React.js · TypeScript · JavaScript · Redux" },
  { label: "Backend", value: "Node.js · NestJS · GraphQL · PostgreSQL" },
];

export const highlights = [
  {
    title: "Production SPAs",
    body: "3 single page applications with 25+ reusable components, Redux state management, and 30+ integrated REST API endpoints, built alongside a backend team.",
  },
  {
    title: "Full stack delivery",
    body: "Built and deployed HisaabBook solo using React/TypeScript on a NestJS/GraphQL + PostgreSQL backend with JWT auth and role-based access control, live on Vercel and Render.",
  },
  {
    title: "Complex UI work",
    body: "Drag and drop Kanban boards, dashboard analytics, and server side pagination and filtering.",
  },
  {
    title: "Design to code",
    body: "Figma designs converted into clean, cross browser production pages with Tailwind CSS and component libraries.",
  },
];

export const skillGroups = [
  {
    label: "Frontend",
    skills: [
      { name: "React.js", icon: reactIcon },
      { name: "TypeScript", icon: typescriptIcon },
      { name: "JavaScript", icon: javascriptIcon },
      { name: "Redux", icon: reduxIcon },
      { name: "Redux Toolkit", icon: reduxIcon },
      { name: "Tailwind", icon: tailwindIcon },
      { name: "HTML5", icon: html5Icon },
      { name: "CSS3", icon: css3Icon },
      { name: "Vite", icon: viteIcon },
      { name: "GraphQL", icon: graphqlIcon },
      { name: "RESTful APIs", icon: null },
      { name: "JSON", icon: jsonIcon },
      { name: "Axios", icon: axiosIcon },
      { name: "Material UI", icon: materialUiIcon },
      { name: "Ant Design", icon: antDesignIcon },
      { name: "Refine", icon: refineIcon, invertOnDark: true },
      { name: "Bootstrap", icon: bootstrapIcon },
      { name: "React Router", icon: reactRouterIcon },
    ],
  },
  {
    label: "Backend",
    skills: [
      { name: "Node.js", icon: nodejsIcon },
      { name: "NestJS", icon: nestjsIcon },
      { name: "Express.js", icon: expressIcon },
      { name: "TypeORM", icon: typeormIcon },
      { name: "PostgreSQL", icon: postgresqlIcon },
      { name: "MongoDB", icon: mongodbIcon },
      { name: "MySQL", icon: mysqlIcon },
    ],
  },
  {
    label: "Tools",
    skills: [
      { name: "Git", icon: gitIcon },
      { name: "GitHub", icon: githubIcon, invertOnDark: true },
      { name: "Figma", icon: figmaIcon },
      { name: "VS Code", icon: vscodeIcon },
      { name: "Vercel", icon: vercelIcon, invertOnDark: true },
      { name: "DevTools", icon: chromeIcon },
      { name: "Render", icon: renderIcon, invertOnDark: true },
    ],
  },
];

export const experience = [
  {
    id: "tricity-frontend",
    role: "Front End Developer",
    company: "Tricity Services",
    period: "Dec 2025 – Present",
    points: [
      "Developed 3 single-page applications using React.js and Tailwind CSS, with 25+ reusable components for consistent UI and maintainable code.",
      "Managed shared application state with Redux, coordinating API data and UI state across multiple screens.",
      "Integrated 30+ REST API endpoints using Axios, implementing structured loading, error, and data handling states.",
      "Collaborated with backend developers to define API request/response contracts and connect UI workflows with PostgreSQL- or MySQL-backed services.",
      "Translated Figma designs into cross-browser interfaces with consistent layouts, interactions, and responsive behavior.",
      "Debugged and resolved frontend issues, improving application reliability, usability, and overall user experience.",
      "Contributed to full stack development through API integration, database-backed features, debugging, and application deployment.",
    ],
  },
];
export const projects = [
  {
    index: "01",
    kind: "Full-stack",
    featured: true,
    name: "HisaabBook",
    kicker: "Full-Stack CRM Application",
    description:
      "Built and deployed a full-stack CRM for managing companies, contacts, deals, and tasks, with a React/TypeScript frontend (Refine, Ant Design) and a NestJS/GraphQL backend on PostgreSQL, hosted independently on Vercel and Render.",
    points: [
      "Implemented server-side, role-based data authorization so every user only accesses records they own or created, enforced at the API layer rather than only in the UI.",
      "Built a drag-and-drop Kanban board for task management using dnd-kit, with server-side pagination and filtering per column.",
      "Built dashboard analytics — deal pipeline value, win-rate tracking, and task-stage trends — using GraphQL aggregate queries, with Excel export and multi-currency (INR/USD) support via live exchange rates.",
    ],
    tech: [
      "React",
      "TypeScript",
      "Refine",
      "Ant Design",
      "NestJS",
      "GraphQL",
      "PostgreSQL",
      "TypeORM",
      "Vercel",
      "Render",
    ],
    links: {
      live: "https://hisaab-book-three.vercel.app/",
      frontend: "https://github.com/aryan7061/HisaabBook",
      backend: "https://github.com/aryan7061/HisaabBook-api",
    },
  },
  {
    index: "02",
    kind: "Frontend",
    featured: false,
    name: "Prime Tube",
    kicker: "Video Sharing Platform",
    description:
      "Created a responsive video streaming website using React.js where users can search and watch videos in real time.",
    points: [
      "Set up dynamic client-side routing with React Router DOM for video details, channel profiles, and search results.",
      "Connected to the YouTube API via RapidAPI using Axios to load live data, with proper loading spinners and error handling.",
      "Built a custom dark-themed UI using Material UI and custom CSS with reusable components.",
    ],
    tech: [
      "React.js",
      "React Router DOM",
      "Axios",
      "Material UI",
      "YouTube API (RapidAPI)",
    ],
    links: null,
  },
];

export const quote = {
  text: "First, solve the problem. Then, write the code.",
  author: "John Johnson",
};
