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

/* ------------------------------------------------------------------
   Language-agnostic data only.
   Translatable copy lives in src/i18n/translations.{fr,en}.js and is
   merged with this structure by src/i18n/content.js.
   Names, company names, technologies, project names and links stay here.
   ------------------------------------------------------------------ */

/**
 * One resume file per language. The active one is picked by the language
 * switcher through `buildContent()` (see src/i18n/content.js), so every
 * download link on the site always points at the matching-language CV.
 *
 * `file` is the name used in `public/`, `url` its percent-encoded path.
 */
export const CV_FILES = {
  fr: { url: "/Abdelhadi%20Bouzani%20CVF.pdf", file: "Abdelhadi Bouzani CVF.pdf" },
  en: { url: "/Abdelhadi%20Bouzani%20CVE.pdf", file: "Abdelhadi Bouzani CVE.pdf" },
};

export const profile = {
  name: "Abdelhadi Bouzani",
  initials: "AB",
  stack: ["Laravel", "Flutter", "React", "MySQL"],
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

export const navLinks = [
  { id: "home", to: "/" },
  { id: "about", to: "/about" },
  { id: "projects", to: "/projects" },
  { id: "resume", to: "/resume" },
  { id: "contact", to: "/contact" },
];

export const aboutTags = {
  languages: ["JavaScript", "PHP", "Java", "C++", "SQL"],
  frameworks: ["Vue.js", "Laravel", "Java (JSP / Servlets)"],
};

export const skills = [
  {
    id: "frontend",
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
    icon: SiFlutter,
    items: [
      { name: "Flutter", icon: SiFlutter },
      { name: "Dart", icon: SiDart },
      { name: "Android", icon: SiAndroid },
    ],
  },
  {
    id: "data",
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
    icon: FaGitAlt,
    items: [{ name: "Git", icon: FaGitAlt }, { name: "Python", icon: FaPython }],
  },
];

export const projects = [
  {
    id: "gestion-d-articles",
    title: "Gestion-d-Articles",
    tags: ["Spring Boot", "Thymeleaf", "Java", "CRUD"],
    href: "https://github.com/AbdelhadiBo/Gestion-d-Articles---Spring-Boot-Thymeleaf",
  },
  {
    id: "ecommercephp",
    title: "EcommercePHP",
    tags: ["PHP", "E-commerce"],
    href: "https://github.com/AbdelhadiBo/EcommercePHP",
  },
  {
    id: "android-calculator",
    title: "android-calculator",
    tags: ["Java", "Android"],
    href: "https://github.com/AbdelhadiBo/android-calculator",
  },
  {
    id: "quiz-app",
    title: "quiz-app",
    tags: ["Quiz", "Learning"],
    href: "https://github.com/AbdelhadiBo/quiz-app",
  },
  {
    id: "add-produits-spring",
    title: "add-produits-spring",
    tags: ["Spring Boot", "Java", "CRUD"],
    href: "https://github.com/AbdelhadiBo/add-produits-spring",
  },
  {
    id: "boutique",
    title: "boutique",
    tags: ["PHP", "Web"],
    href: "https://github.com/AbdelhadiBo/boutique",
  },
  {
    id: "clinic-management-system",
    title: "Clinique Management System",
    tags: ["Management System", "Web"],
    href: "https://github.com/AbdelhadiBo/clinic-management-system",
  },
];

export const experience = [
  {
    id: "atlas-nova-solutions",
    company: "Atlas Nova Solutions",
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
    company: "ONEE — Water Division",
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
    school: "Ecole Nouvelle des Sciences de l'Informatique (ENSI Tanger)",
    current: true,
  },
  {
    id: "ensa-tanger",
    school: "ENSA Tanger",
  },
  {
    id: "istag-meknes",
    school: "ISTAG-Meknes",
  },
  {
    id: "lycee-almontalak",
    school: "Lycée Almontalak - Meknes",
  },
];
