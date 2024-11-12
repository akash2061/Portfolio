import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  web,
  javascript,
  html,
  css,
  reactjs,
  git,
  ibm2,
  c,
  cpp,
  python,
  archlinux,
  hash,
  pomodoro,
  notebook,
  todo_app,
  game,
  kali_linux,
  bash_script,
  rust_lang,
  go_lang,
  typescript,
  mysql,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "project",
    title: "Project",
  },
  {
    id: "CERTIFICATE",
    title: "Certificate",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Security Tool Developer [CLI]",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies: TTechnology[] = [
  {
    name: "C",
    icon: c,
  },
  {
    name: "C++",
    icon: cpp,
  },
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
    name: "Typescript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Rust",
    icon: rust_lang,
  },
  {
    name: "GoLang",
    icon: go_lang,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Bash",
    icon: bash_script,
  },
  {
    name: "Kali",
    icon: kali_linux,
  },
  {
    name: "archlinux",
    icon: archlinux,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences: TExperience[] = [
  {
    title: "Data Science Intern - IBM SkillBuild",
    companyName: "IBM",
    icon: ibm2,
    iconBg: "#383E56",
    date: "June 2023 - Aug 2023",
    points: [
      "Remote Project - Lung Cancer Analysis Project Team",
      "Skills Developed - Data Analytics and Data Visualization",
      "Skills Developed - Data Fundamentals using Python and Spark Fundamentals with Hadoop",
    ],
  },
];


const projects: TProject[] = [
  {
    name: "Pomodoro-Timer Desktop App",
    description:
      "Pomodoro-Timer is a desktop application built in Rust & Tauri that helps you manage your time effectively. It uses the Pomodoro Technique, a time management method that breaks work into intervals, traditionally 25 minutes in length, separated by short breaks.",
    tags: [
      {
        name: "Rust",
        color: "blue-text-gradient",
      },
      {
        name: "Tauri v2",
        color: "green-text-gradient",
      },
      {
        name: "ReactJS",
        color: "pink-text-gradient",
      },
    ],
    image: pomodoro,
    sourceCodeLink: "https://github.com/akash2061/Pomodoro-Timer-App-Rust",
  },
  {
    name: "NoteBook App",
    description:
      "Notebook is a powerful Electron application built with React and TypeScript, designed to streamline your note-taking experience. With its intuitive interface and robust features, Notebook provides a seamless platform for organizing your thoughts, ideas, and tasks.",
    tags: [
      {
        name: "ElectronJS",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJS",
        color: "green-text-gradient",
      },
      {
        name: "ReactJS",
        color: "pink-text-gradient",
      },
    ],
    image: notebook,
    sourceCodeLink: "https://github.com/akash2061/NoteBook-app",
  },
  {
    name: "Hash Checker",
    description:
      "This project is a simple tool built in Rust for converting a string to its SHA-256 hash and finding the hash of a string using a password list. It utilizes the SHA-256 hashing algorithm to securely hash strings and compares them against a provided list of hashed passwords to find matches.",
    tags: [
      {
        name: "Rust",
        color: "blue-text-gradient",
      },
      {
        name: "Clap: v2.33",
        color: "green-text-gradient",
      },
      {
        name: "Sha2: v0.10.8",
        color: "pink-text-gradient",
      },
    ],
    image: hash,
    sourceCodeLink: "https://github.com/akash2061/RUST-Hash-Checker",
  },
  {
    name: "ToDo-List",
    description:
      "This simple and efficient ToDo list application allows you to manage your tasks directly from the command line interface. A lightweight and high-performance program, it's built in Rust, ensuring robustness and speed. With intuitive commands and minimalistic design, you can easily add, remove, and update tasks with ease.",
    tags: [
      {
        name: "Rust",
        color: "blue-text-gradient",
      },
      {
        name: "Serde: v1.0",
        color: "green-text-gradient",
      },
      {
        name: "Structopt v0.3",
        color: "pink-text-gradient",
      },
      {
        name: "Chrono v0.4",
        color: "blue-text-gradient",
      },
    ],
    image: todo_app,
    sourceCodeLink: "https://github.com/akash2061/RUST-CLI-ToDo-List",
  },
  {
    name: "Command-Line Guessing Game",
    description:
      "A simple Guessing the Number game for Linux Terminals. It serves as an introduction to Rust programming, providing a hands-on experience with its syntax and features.",
    tags: [
      {
        name: "Rust",
        color: "blue-text-gradient",
      },
      {
        name: "Clap: v2.1.0",
        color: "green-text-gradient",
      },
      {
        name: "Rand: v0.8.5",
        color: "pink-text-gradient",
      },
    ],
    image: game,
    sourceCodeLink: "https://github.com/akash2061/RUST-CLI-Game",
  },
];

export { services, technologies, experiences, projects };
