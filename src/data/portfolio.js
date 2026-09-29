import {
  FaCode,
  FaLaravel,
  FaJava,
  FaPython,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiFlutter,
  SiDart,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiVuedotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiSpring,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiSqlite,
  SiAndroid,
  SiCplusplus,
  SiPhp,
  SiBootstrap,
} from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import photo from "../Assets/AbdelhadiBouzani.png";

export const CV_URL = "/Bouzani%20CV.pdf";

export const profile = {
  name: "Abdelhadi Bouzani",
  initials: "AB",
  location: "Morocco",
  city: "Tangier, Morocco",
  roles: [
    "Full-Stack & Mobile Engineer",
    "Software Developer",
    "Full Stack Developer",
    "Freelancer",
  ],
  headline:
    "I build modern, practical and user-friendly digital solutions — from database-driven web apps to cross-platform mobile and desktop software.",
  stack: ["Laravel", "Flutter", "React", "MySQL"],
  facts: [
    { label: "Based in", value: "Tangier, Morocco" },
    { label: "Focus", value: "Architecture & APIs" },
    { label: "Education", value: "ENSI Tanger" },
    { label: "Stack", value: "Laravel · Flutter · React" },
  ],
  photo,
};

export const socials = [
  {
    label: "GitHub",
    handle: "@AbdelhadiBo",
    href: "https://github.com/AbdelhadiBo",
    icon: AiFillGithub,
    color: "#c084f5",
  },
  {
    label: "LinkedIn",
    handle: "abdelhadi-bouzani",
    href: "https://www.linkedin.com/in/abdelhadi-bouzani-609488254/",
    icon: FaLinkedinIn,
    color: "#38bdf8",
  },
  {
    label: "WhatsApp",
    handle: "+212 632 010 159",
    href: "https://wa.me/+212632010159",
    icon: FaWhatsapp,
    color: "#4ade80",
  },
];

export const about = {
  lead:
    "Hello! I'm Abdelhadi Bouzani from Morocco — a passionate Software Developer who enjoys building modern, practical and user-friendly digital solutions, with a strong interest in web and application development.",
  paragraphs: [
    "I'm a Software Engineering student passionate about building modern, efficient and user-friendly web applications. I enjoy turning ideas into real-world digital solutions, solving technical problems and learning through real-world challenges.",
    "I hold a diploma as a Specialized Technician in Digital Development, and I am currently pursuing my studies in Computer Engineering. I have hands-on experience through academic projects and a professional internship where I worked on real-world applications.",
    "I'm proficient in JavaScript, PHP, Java, C++ and SQL — and I enjoy working on both frontend and backend development. My main interests include developing web applications, CRUD systems and database-driven solutions, with a focus on clean design and performance.",
    "Whenever possible, I love building projects with Vue.js, Laravel and Java (JSP / Servlets) to create scalable and maintainable applications.",
    "Outside of coding, I enjoy going to the gym, taking on new challenges, and continuously working on both my professional and personal growth.",
  ],
  languages: ["JavaScript", "PHP", "Java", "C++", "SQL"],
  frameworks: ["Vue.js", "Laravel", "Java (JSP / Servlets)"],
  interests: [
    "Web Applications",
    "CRUD Systems",
    "Database-Driven Solutions",
  ],
};

export const skills = [
  {
    id: "frontend",
    title: "Frontend",
    icon: SiJavascript,
    items: [
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "React", icon: SiReact },
      { name: "Vue.js", icon: SiVuedotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Bootstrap", icon: SiBootstrap },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    icon: SiNodedotjs,
    items: [
      { name: "Laravel", icon: FaLaravel },
      { name: "PHP", icon: SiPhp },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Java / Spring Boot", icon: SiSpring },
      { name: "Java (JSP / Servlets)", icon: FaJava },
      { name: "REST APIs", icon: FaCode },
    ],
  },
  {
    id: "mobile",
    title: "Mobile & Desktop",
    icon: SiFlutter,
    items: [
      { name: "Flutter", icon: SiFlutter },
      { name: "Dart", icon: SiDart },
      { name: "Android", icon: SiAndroid },
    ],
  },
  {
    id: "data",
    title: "Databases",
    icon: SiMysql,
    items: [
      { name: "MySQL", icon: SiMysql },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "SQLite", icon: SiSqlite },
    ],
  },
  {
    id: "languages",
    title: "Languages",
    icon: FaCode,
    items: [
      { name: "JavaScript", icon: SiJavascript },
      { name: "PHP", icon: SiPhp },
      { name: "Java", icon: FaJava },
      { name: "C++", icon: SiCplusplus },
      { name: "SQL", icon: SiMysql },
    ],
  },
  {
    id: "tools",
    title: "Tools & Workflow",
    icon: FaGitAlt,
    items: [{ name: "Git", icon: FaGitAlt }, { name: "Python", icon: FaPython }],
  },
];

export const projects = [
  {
    id: "gestion-d-articles",
    title: "Gestion-d-Articles",
    description:
      "Simple CRUD web application to manage articles built with Spring Boot and Thymeleaf.",
    tags: ["Spring Boot", "Thymeleaf", "Java", "CRUD"],
    href: "https://github.com/AbdelhadiBo/Gestion-d-Articles---Spring-Boot-Thymeleaf",
  },
  {
    id: "ecommercephp",
    title: "EcommercePHP",
    description:
      "E-commerce website built with PHP showcasing product listings and basic shop functionality.",
    tags: ["PHP", "E-commerce"],
    href: "https://github.com/AbdelhadiBo/EcommercePHP",
  },
  {
    id: "android-calculator",
    title: "android-calculator",
    description:
      "A basic calculator app for Android written in Java with standard arithmetic operations.",
    tags: ["Java", "Android"],
    href: "https://github.com/AbdelhadiBo/android-calculator",
  },
  {
    id: "quiz-app",
    title: "quiz-app",
    description:
      "Quiz application built for learning and testing basic programming and development concepts.",
    tags: ["Quiz", "Learning"],
    href: "https://github.com/AbdelhadiBo/quiz-app",
  },
  {
    id: "add-produits-spring",
    title: "add-produits-spring",
    description:
      "Spring Boot project for adding and managing products, ideal for learning CRUD operations with Spring.",
    tags: ["Spring Boot", "Java", "CRUD"],
    href: "https://github.com/AbdelhadiBo/add-produits-spring",
  },
  {
    id: "boutique",
    title: "boutique",
    description:
      "Simple PHP project for a boutique website, demonstrating foundational PHP and web development skills.",
    tags: ["PHP", "Web"],
    href: "https://github.com/AbdelhadiBo/boutique",
  },
  {
    id: "clinic-management-system",
    title: "Clinique Management System",
    description:
      "A simple management system for a clinic, built with modern web technologies.",
    tags: ["Management System", "Web"],
    href: "https://github.com/AbdelhadiBo/clinic-management-system",
  },
];

export const experience = [
  {
    id: "atlas-nova-solutions",
    role: "Web Developer",
    company: "Atlas Nova Solutions",
    type: "Internship",
    duration: "Jun 2026 – Aug 2026 · 3 mos",
    location: "Remote",
    description:
      "Development of a cross-platform POS (Point of Sale) system for sales and business operations management.",
    highlights: [
      "Built the application with Flutter and Dart for Desktop and Mobile.",
      "Developed the backend with Laravel and integrated REST APIs.",
      "Implemented an Offline-First architecture with SQLite and server synchronization.",
      "Developed modules: sales, purchases, products, categories, inventory, cash registers, promotions, and reports.",
      "Managed cash register sessions and automatic stock updates.",
      "Built Excel data export functionality.",
      "Designed a responsive and modern UI.",
    ],
    tech: [
      { name: "Flutter", icon: SiFlutter },
      { name: "Dart", icon: SiDart },
      { name: "Laravel", icon: FaLaravel },
      { name: "SQLite", icon: SiSqlite },
      { name: "REST API", icon: null },
      { name: "Excel Export", icon: null },
    ],
  },
  {
    id: "onee-water-division",
    role: "Web Developer",
    company: "ONEE — Water Division",
    type: "Internship",
    duration: "Mar 2024 – Apr 2024 · 2 mos",
    location: "Meknes, Morocco · On-site",
    description:
      "Development of a problem management application for internal operations. Participated in the full project lifecycle, including requirements analysis, database design, UI/UX design, and feature implementation.",
    highlights: [
      "Designed and implemented the backend with Laravel (MVC architecture, Eloquent ORM, middleware).",
      "Built a responsive and modern frontend using Tailwind CSS with reusable components.",
      "Designed and managed the MySQL database schema, relationships, and optimized queries.",
      "Implemented user authentication, role-based access control, and problem ticket workflows.",
      "Created dashboards and reporting features for tracking issues and resolutions.",
    ],
    tech: [
      { name: "Laravel", icon: FaLaravel },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "MySQL", icon: SiMysql },
      { name: "PHP", icon: null },
      { name: "JavaScript", icon: null },
    ],
  },
];

export const education = [
  {
    id: "ensi-tanger",
    title: "4th Year — Computer Engineering Program",
    school: "Ecole Nouvelle des Sciences de l'Informatique (ENSI Tanger)",
    duration: "In Progress",
    location: "Tangier, Morocco",
    description:
      "Computer engineering program, with a focus on software architecture, full-stack development, and software engineering best practices.",
    current: true,
  },
  {
    id: "ensa-tanger",
    title: "3rd Year DCA — Computer Engineering",
    school: "ENSA Tanger",
    duration: "2024 – 2025",
    location: "Tangier, Morocco",
    description:
      "DCA (Advanced Studies Diploma) in Computer Engineering, with a strong scientific foundation in mathematics, algorithms, and computer science.",
  },
  {
    id: "istag-meknes",
    title: "Digital Development — Full-Stack Web Development",
    school: "ISTAG-Meknes",
    duration: "2022 – 2024",
    location: "Bab Tizimi, Meknes",
    description:
      "Specialized Technician Diploma in Digital Development, focused on full-stack web development, databases, and programming fundamentals.",
  },
  {
    id: "lycee-almontalak",
    title: "Baccalaureate — Physical Sciences",
    school: "Lycée Almontalak - Meknes",
    duration: "2019 – 2020",
    location: "Meknes, Morocco",
    description:
      "Scientific Baccalaureate with a specialization in Physical Sciences, providing a strong foundation in mathematics and science.",
  },
];

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Resume", to: "/resume" },
  { label: "Contact", to: "/contact" },
];
