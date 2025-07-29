
import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  gearXpert,
  project2,
  project3,
  devops,
  financeadvisor,
  crustiq,
  mysql,
  express,
  aws,
  mui,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  bugtriage,
} from '../assets'


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
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "DevOps Engineer",
    icon: backend,
  },
  {
    title: "Software Engineer",
    icon: creator,
  },
  {
    title: "Software Developer",
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "gsap",
    icon: gsap,
  },
  {
    name: "framer",
    icon: framer,
  },

 
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "figma",
    icon: figma,
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
    name: "Material Ui",
    icon: mui,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express Js",
    icon: express,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySql",
    icon: mysql,
  },

  {
    name: "git",
    icon: git,
  },
 

];

const experiences = [
  {
    title: "Web Developer & IT Consultant",
    company_name: "Hamaara",
    icon: "src/assets/hamaara_1.png", // replace with actual icon path
    iconBg: "#E6DEDD",
    date: "Nov 2024 – Apr 2025",
    points: [
      "Built a business-focused website tailored to client needs, implementing responsive design principles and reusable front-end components.",
      "Acted as an IT consultant, advising on digital strategy, tech stack choices, and integration workflows to optimize business operations.",
      "Delivered a user-manageable content structure, ensuring non-technical staff could update and control site elements independently.",
      "Facilitated a smooth development cycle through effective communication with stakeholders and iterative testing.",
    ],
  },
  {
    title: "RF Test Engineer Intern",
    company_name: "UL Solutions",
    icon: "src/assets/Ul logo.png",
    iconBg: "#E6DEDD",
    date: "May 2024 – Aug 2024; May 2025 – Present",
    points: [
      "Programmed and tested Wireless Power Transfer (WPT) devices using Python and C++ scripts to streamline validation workflows and ensure industry compliance.",
      "Debugged and automated lab operations for WLAN and WPT setups, improving testing throughput and operational efficiency.",
      "Interpreted circuit diagrams and collaborated cross-functionally with engineers to troubleshoot system-level issues involving hardware-software interactions.",
      "Created detailed test reports using Excel and Word, integrating clear documentation practices akin to Agile sprints and DevOps reporting standards.",
      "Gained hands-on exposure to automation, scripting, and compliance testing—all foundational to backend development and DevOps environments.",
    ],
  },
  {
    title: "Web Developer Intern",
    company_name: "Sikharas",
    icon: "src/assets/sikharas_logo.png",
    iconBg: "#383E56",
    date: "Nov 2023 – Feb 2024",
    points: [
      "Developed a responsive, modular website using TypeScript, React, and Tailwind CSS, focused on scalability and maintainability.",
      "Engineered dynamic visibility features using boolean flags (e.g., true/false) to allow non-technical users to toggle public content effortlessly.",
      "Ensured easy future edits through clean component design and separation of concerns, improving long-term usability for the client.",
      "Collaborated closely with the end user to translate functional needs into intuitive UI/UX solutions.",
    ],
  },
];




const projects = [
  {
    name: "AI-Powered Personal Finance Advisor",
    description:
      "A comprehensive personal finance management system with AI-driven insights. Features budget tracking, expense categorization, and intelligent financial recommendations. Built with React frontend, Node.js backend, and MongoDB database. Includes real-time data visualization and automated financial advice generation.",
    tags: [
      {
        name: "react",
        color: "orange-text-gradient",
      },
      {
        name: "tailwind",
        color: "white-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "ai-engine",
        color: "orange-text-gradient",
      },
    ],
    image: financeadvisor,
    source_code_link: "https://github.com/sai4464/finance-advisor",
  },
  {
    name: "Smart Sales & Inventory Insights Dashboard",
    description:
      "Business analytics dashboard for local pizzerias with real-time sales tracking and inventory management. Features dynamic data visualizations, AI-powered insights, and automated reporting. Built with React, Node.js, and MongoDB. Includes CSV data processing and mobile-responsive design for shop owners.",
    tags: [
      {
        name: "react",
        color: "orange-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "recharts",
        color: "blue-text-gradient",
      },
      {
        name: "ai-engine",
        color: "orange-text-gradient",
      },
    ],
    image: crustiq,
    source_code_link: "https://github.com/sai4464",
  },
  {
    name: "DevOps Portfolio Monitor",
    description:
      "Full-stack application for tracking GitHub repository metrics and DevOps progress. Features real-time commit activity monitoring, PR statistics, and deployment insights. Built with React frontend and Express.js backend. Integrates with GitHub API for automated data collection and MongoDB for storage.",
    tags: [
      {
        name: "react",
        color: "orange-text-gradient",
      },
      {
        name: "express.js",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "github-api",
        color: "blue-text-gradient",
      },
    ],
    image: devops,
    source_code_link: "https://github.com/sai4464",
  },
  {
    name: "AI Bug Triage System",
    description:
      "Intelligent bug classification and routing system using NLP and machine learning. Features automatic issue categorization, priority prediction, and team assignment. Built with FastAPI backend and transformer-based models. Integrates with GitHub Issues and reduces manual triage effort significantly.",
    tags: [
      {
        name: "fastapi",
        color: "green-text-gradient",
      },
      {
        name: "nlp",
        color: "orange-text-gradient",
      },
      {
        name: "bert",
        color: "blue-text-gradient",
      },
      {
        name: "github-api",
        color: "pink-text-gradient",
      },
    ],
    image: bugtriage,
    source_code_link: "https://github.com/sai4464",
  },
];

export { services, technologies, experiences, projects };
