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
import { siRender } from "simple-icons";

// devicon has no Render logo; build one from simple-icons' path + brand hex
// instead of relying on its .svg string, so the color is explicit either way.
const renderIcon = `data:image/svg+xml,${encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#${siRender.hex}"><path d="${siRender.path}"/></svg>`,
)}`;

export const profile = {
  name: "Aryan Gupta",
  role: "Frontend Developer",
  company: "Tricity Services",
  companyStart: "December 2025",
  email: "aryanguptawork26@gmail.com",
  emailUrl:
    "https://mail.google.com/mail/?view=cm&fs=1&to=aryanguptawork26@gmail.com",
  phone: "+91 7367993351",
  githubUrl: "https://github.com/aryan7061",
  githubHandle: "aryan7061",
  linkedinUrl: "https://www.linkedin.com/in/aryan-gupta-2026bvf",
  linkedinHandle: "aryan-gupta-2026bvf",
  resumeUrl: "/Aryan-Gupta-Resume.pdf",
  status: "Open to Frontend Developer roles",
  stackLine: "React.js · TypeScript",
  summary:
    "Developer experienced in building React applications on the frontend and NestJS/GraphQL services on the backend, backed by PostgreSQL and MySQL/MongoDB. Comfortable working across the entire stack — from responsive UIs and Redux state management, to designing GraphQL APIs, structuring relational databases, and enforcing server-side authorization. Has independently built and deployed a production-style full-stack application end to end, and also works professionally alongside backend teams to ship functional web apps.",
};

export const heroLines = [
  "$ whoami",
  "  Aryan Gupta",
  "$ cat role.txt",
  "  Frontend Developer @ Tricity Services",
  "$ echo $STACK",
  '  "React · TypeScript · Redux · GraphQL"',
  "$ cat status.txt",
  "  open_to_work=true",
];

export const facts = [
  { label: "Current employer", value: "Tricity Services", serif: true },
  { label: "Joined", value: "Dec 2025" },
  { label: "Primary framework", value: "React.js" },
  { label: "Education", value: "MCA · BCA" },
];

export const highlights = [
  {
    title: "Production SPAs",
    body: "Responsive single-page applications with Redux state flow and REST API integration, built alongside a backend team.",
  },
  {
    title: "Full-stack delivery",
    body: "Built and deployed HisaabBook end to end — React/TypeScript on a NestJS/GraphQL + PostgreSQL backend, live on Vercel and Render.",
  },
  {
    title: "Complex UI work",
    body: "Drag-and-drop Kanban boards, dashboard analytics, and server-side pagination and filtering.",
  },
  {
    title: "Design to code",
    body: "Figma designs converted into clean, cross-browser production pages with Tailwind CSS and component libraries.",
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
      { name: "Redux Toolkit", icon: reduxIcon }, // no distinct devicon logo — reuses Redux's
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
      { name: "TypeORM", icon: null },
      { name: "PostgreSQL", icon: postgresqlIcon },
      { name: "MongoDB", icon: mongodbIcon },
      { name: "MySQL", icon: mysqlIcon },
    ],
  },
  {
    label: "Tools",
    skills: [
      { name: "Git", icon: gitIcon },
      { name: "GitHub", icon: githubIcon },
      { name: "Figma", icon: figmaIcon },
      { name: "VS Code", icon: vscodeIcon },
      { name: "Vercel", icon: vercelIcon },
      { name: "DevTools", icon: chromeIcon },
      { name: "Render", icon: renderIcon },
    ],
  },
];

export const experience = [
  {
    role: "Front End Developer",
    company: "Tricity Services",
    period: "December 2025 — Present",
    points: [
      "Built responsive web applications and Single Page Applications (SPAs) using React.js and Tailwind CSS.",
      "Managed application state with Redux to ensure smooth data flow across components.",
      "Connected RESTful APIs to fetch, handle JSON data, and render dynamic content from backend services.",
      "Worked with the backend team to connect the frontend UI to SQL databases via APIs.",
      "Used Vite to set up projects and keep build performance optimized.",
      "Cleanly converted Figma designs into cross-browser compatible web pages.",
      "Kept code organized using Git/GitHub and used Chrome DevTools for debugging layouts.",
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
    links: null, // no live demo/repo yet — later phase renders the disabled "links_soon" state
  },
];

export const quote = {
  text: "First, solve the problem. Then, write the code.",
  author: "John Johnson",
};
