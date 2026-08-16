export const profile = {
  name: "Aryan Gupta",
  role: "Frontend Developer",
  company: "Tricity Services",
  companyStart: "December 2025",
  email: "aryanguptawork26@gmail.com",
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

const DEV = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/";

export const skillGroups = [
  {
    label: "Frontend",
    skills: [
      { name: "React.js", icon: `${DEV}react/react-original.svg` },
      { name: "TypeScript", icon: `${DEV}typescript/typescript-original.svg` },
      { name: "JavaScript", icon: `${DEV}javascript/javascript-original.svg` },
      { name: "Redux", icon: `${DEV}redux/redux-original.svg` },
      { name: "Redux Toolkit", icon: `${DEV}redux/redux-original.svg` }, // no distinct devicon logo — reuses Redux's
      { name: "Tailwind", icon: `${DEV}tailwindcss/tailwindcss-original.svg` },
      { name: "HTML5", icon: `${DEV}html5/html5-original.svg` },
      { name: "CSS3", icon: `${DEV}css3/css3-original.svg` },
      { name: "Vite", icon: `${DEV}vitejs/vitejs-original.svg` },
      { name: "GraphQL", icon: `${DEV}graphql/graphql-plain.svg` },
      { name: "RESTful APIs", icon: null },
      { name: "JSON", icon: `${DEV}json/json-original.svg` },
      { name: "Axios", icon: `${DEV}axios/axios-plain.svg` },
      { name: "Material UI", icon: `${DEV}materialui/materialui-original.svg` },
      { name: "Ant Design", icon: `${DEV}antdesign/antdesign-original.svg` },
      { name: "Bootstrap", icon: `${DEV}bootstrap/bootstrap-original.svg` },
      {
        name: "React Router",
        icon: `${DEV}reactrouter/reactrouter-original.svg`,
      },
    ],
  },
  {
    label: "Backend",
    skills: [
      { name: "Node.js", icon: `${DEV}nodejs/nodejs-original.svg` },
      { name: "NestJS", icon: `${DEV}nestjs/nestjs-original.svg` },
      { name: "Express.js", icon: `${DEV}express/express-original.svg` },
      { name: "TypeORM", icon: null },
      { name: "PostgreSQL", icon: `${DEV}postgresql/postgresql-original.svg` },
      { name: "MongoDB", icon: `${DEV}mongodb/mongodb-original.svg` },
      { name: "MySQL", icon: `${DEV}mysql/mysql-original.svg` },
    ],
  },
  {
    label: "Tools",
    skills: [
      { name: "Git", icon: `${DEV}git/git-original.svg` },
      { name: "GitHub", icon: `${DEV}github/github-original.svg` },
      { name: "Figma", icon: `${DEV}figma/figma-original.svg` },
      { name: "VS Code", icon: `${DEV}vscode/vscode-original.svg` },
      { name: "Vercel", icon: `${DEV}vercel/vercel-original.svg` },
      { name: "DevTools", icon: `${DEV}chrome/chrome-original.svg` },
      { name: "Render", icon: null },
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
