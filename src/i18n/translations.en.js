const en = {
  nav: {
    home: "Home",
    about: "About",
    projects: "Projects",
    resume: "Resume",
    contact: "Contact",
  },

  ui: {
    skipToContent: "Skip to content",
    mainNavigation: "Main",
    siteMenu: "Site menu",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    findMeOnline: "Find me online",
    language: "Language",
    languageShort: "Switch between French and English",
    quickFacts: "Quick facts",
    newTab: "opens in a new tab",
    githubProfile: "GitHub profile",
    viewOnGithub: "View on GitHub",
    onGithub: "on GitHub",
    repository: "repository",
    technologiesUsed: "Technologies used",
    backToTop: "Back to top",
    navigate: "Navigate",
    footerNavigation: "Footer",
    roleTagline: "Full-Stack & Mobile Engineer",
    photoAlt: "full-stack and mobile engineer",
    basedIn: (location) => `Based in ${location}`,
  },

  cv: {
    download: "Download CV",
    frenchLabel: "CV en français",
    englishLabel: "English CV",
    openNewTab: "Open in new tab",
  },

  profile: {
    roles: [
      "Full-Stack & Mobile Engineer",
      "Software Developer",
      "Full Stack Developer",
      "Freelancer",
    ],
    headline:
      "I build modern, practical and user-friendly digital solutions — from database-driven web apps to cross-platform mobile and desktop software.",
    city: "Morocco",
    metaRole: "full-stack and mobile engineer",
    facts: [
      { label: "Based in", value: "Morocco" },
      { label: "Focus", value: "Architecture & APIs" },
      { label: "Education", value: "ENSI Tanger" },
      { label: "Stack", value: "Laravel · Flutter · React" },
    ],
  },

  about: {
    lead:
      "Hello! I'm Abdelhadi Bouzani from Morocco — a passionate Software Developer who enjoys building modern, practical and user-friendly digital solutions, with a strong interest in web and application development.",
    paragraphs: [
      "I'm a Software Engineering student passionate about building modern, efficient and user-friendly web applications. I enjoy turning ideas into real-world digital solutions, solving technical problems and learning through real-world challenges.",
      "I hold a diploma as a Specialized Technician in Digital Development, and I am currently pursuing my studies in Computer Engineering. I have hands-on experience through academic projects and a professional internship where I worked on real-world applications.",
      "I'm proficient in JavaScript, PHP, Java, C++ and SQL — and I enjoy working on both frontend and backend development. My main interests include developing web applications, CRUD systems and database-driven solutions, with a focus on clean design and performance.",
      "Whenever possible, I love building projects with Vue.js, Laravel and Java (JSP / Servlets) to create scalable and maintainable applications.",
      "Outside of coding, I enjoy going to the gym, taking on new challenges, and continuously working on both my professional and personal growth.",
    ],
    interests: ["Web Applications", "CRUD Systems", "Database-Driven Solutions"],
  },

  skills: {
    frontend: "Frontend",
    backend: "Backend",
    mobile: "Mobile & Desktop",
    data: "Databases",
    languages: "Languages",
    tools: "Tools & Workflow",
  },

  projects: {
    "gestion-d-articles":
      "Simple CRUD web application to manage articles built with Spring Boot and Thymeleaf.",
    ecommercephp:
      "E-commerce website built with PHP showcasing product listings and basic shop functionality.",
    "android-calculator":
      "A basic calculator app for Android written in Java with standard arithmetic operations.",
    "quiz-app":
      "Quiz application built for learning and testing basic programming and development concepts.",
    "add-produits-spring":
      "Spring Boot project for adding and managing products, ideal for learning CRUD operations with Spring.",
    boutique:
      "Simple PHP project for a boutique website, demonstrating foundational PHP and web development skills.",
    "clinic-management-system":
      "A simple management system for a clinic, built with modern web technologies.",
  },

  experience: {
    "atlas-nova-solutions": {
      role: "Web Developer",
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
    },
    "onee-water-division": {
      role: "Web Developer",
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
    },
  },

  education: {
    "ensi-tanger": {
      title: "4th Year — Computer Engineering Program",
      duration: "In Progress",
      location: "Morocco",
      description:
        "Computer engineering program, with a focus on software architecture, full-stack development, and software engineering best practices.",
      inProgress: "In progress",
    },
    "ensa-tanger": {
      title: "3rd Year DCA — Computer Engineering",
      duration: "2024 – 2025",
      location: "Morocco",
      description:
        "DCA (Advanced Studies Diploma) in Computer Engineering, with a strong scientific foundation in mathematics, algorithms, and computer science.",
      inProgress: "In progress",
    },
    "istag-meknes": {
      title: "Digital Development — Full-Stack Web Development",
      duration: "2022 – 2024",
      location: "Bab Tizimi, Meknes",
      description:
        "Specialized Technician Diploma in Digital Development, focused on full-stack web development, databases, and programming fundamentals.",
      inProgress: "In progress",
    },
    "lycee-almontalak": {
      title: "Baccalaureate — Physical Sciences",
      duration: "2019 – 2020",
      location: "Meknes, Morocco",
      description:
        "Scientific Baccalaureate with a specialization in Physical Sciences, providing a strong foundation in mathematics and science.",
      inProgress: "In progress",
    },
  },

  meta: {
    defaultTitle: "Abdelhadi Bouzani | Full-Stack & Mobile Engineer",
    homeDescription: (name, city) =>
      `${name} — Full-Stack & Mobile Engineer from ${city}. Building modern web applications, mobile apps and database-driven solutions with Laravel, Flutter and React.`,
    aboutDescription: (name) =>
      `About ${name} — software developer from Morocco focused on web applications, CRUD systems and database-driven solutions with Laravel, PHP, Java and JavaScript.`,
    projectsDescription: (name) =>
      `Projects by ${name} — CRUD web apps, e-commerce platforms and Android utilities built with Spring Boot, PHP, Java and JavaScript.`,
    contactDescription: (name, role, city) =>
      `Contact ${name} — ${role} based in ${city}. Reach me on WhatsApp, LinkedIn or GitHub.`,
    resumeDescription: (name, role, city) =>
      `Résumé of ${name} — ${role} based in ${city}. Download the PDF or read it online.`,
  },

  home: {
    greeting: "Hi, I'm",
    viewProjects: "View projects",
    aboutEyebrow: "About me",
    aboutTitle: "A developer who ships real products",
    readFullStory: "Read the full story",
    languagesLabel: "Languages",
    languagesText: "Proficient in JavaScript, PHP, Java, C++ and SQL.",
    interestsLabel: "Interests",
    roleLabel: "Role",
    roleText: (role, city) => `${role}, based in ${city}.`,
    skillsEyebrow: "Skillset",
    skillsTitleBefore: "Technologies I build",
    skillsTitleAccent: "with",
    skillsSub:
      "A pragmatic stack across frontend, backend, mobile, data and tooling — used on real client and academic projects.",
    projectsEyebrow: "Selected work",
    projectsTitle: "Recent projects",
    projectsSub:
      "A few things I have designed, built and shipped — from Spring Boot CRUD apps to PHP storefronts and Android utilities.",
    allProjects: "All projects",
    contactEyebrow: "Contact",
    contactTitle: "Let's build something together",
    contactText: (city) =>
      `Based in ${city}. The fastest way to reach me is WhatsApp or LinkedIn.`,
    contactCta: "Contact me",
  },

  aboutPage: {
    eyebrow: "About me",
    title: "Know who I am",
    languagesLabel: "Languages",
    frameworksLabel: "Frameworks",
    basedInLabel: "Based in",
    experienceEyebrow: "Experience",
    experienceTitle: "Professional experience",
    experienceSub:
      "Two internships building production software for real businesses.",
    educationEyebrow: "Education",
    educationTitle: "Academic journey",
    educationSub:
      "A continuous path through computer engineering and full-stack web development.",
  },

  projectsPage: {
    title: "Projects",
    eyebrow: "Portfolio",
    titleBefore: "My recent",
    titleAccent: "works",
    sub: (count) =>
      `${count} projects across Java, PHP and JavaScript — from Spring Boot CRUD systems to e-commerce storefronts and Android apps. Every one of them lives on GitHub.`,
    githubCta: "See everything on GitHub",
    sectionEyebrow: "All work",
    sectionTitle: "Built with care",
    sectionSub:
      "Each card links straight to the repository — code, README and setup instructions included.",
  },

  contactPage: {
    title: "Contact",
    eyebrow: "Contact",
    titleBefore: "Let's talk about",
    titleAccent: "your project",
    sub: (city) =>
      `I'm based in ${city} and build web applications, mobile and desktop apps. Pick the channel you prefer.`,
    whatsappCta: "Message me on WhatsApp",
    sectionEyebrow: "Channels",
    sectionTitle: "Where to find me",
    sectionSub:
      "Fastest replies usually come from WhatsApp, but I read everything.",
    ctaEyebrow: "Next step",
    ctaTitle: "Prefer to browse the work first?",
    ctaText:
      "Every project is public on GitHub, with the code and setup notes.",
    ctaProjects: "See the projects",
    ctaAbout: "Read about me",
  },

  contactForm: {
    eyebrow: "Form",
    title: "Write to me directly",
    sub: "Tell me about your project in a few lines. I usually reply within 24 to 48 hours.",
    name: "Name",
    namePlaceholder: "Your name",
    email: "Email",
    emailPlaceholder: "you@example.com",
    subject: "Subject",
    subjectPlaceholder: "Rebuilding a web application",
    message: "Message",
    messagePlaceholder: "Hi, I'd like to talk about…",
    optional: "optional",
    chars: (n) => `${n} characters left`,
    submit: "Send message",
    sending: "Sending…",
    nameRequired: "Please enter your name.",
    emailRequired: "Please enter your email address.",
    emailInvalid: "That email address looks incomplete or invalid.",
    subjectRequired: "Please enter a subject.",
    subjectTooShort: "The subject needs at least 3 characters.",
    messageRequired: "Please write your message.",
    messageTooShort: "Your message needs at least 20 characters.",
    errorTitle: "Sending failed",
    errorGeneric:
      "Something went wrong while sending. Please try again in a moment.",
    errorTimeout: "The request took too long. Check your connection.",
    errorNetwork: "Could not reach the server. Check your network, then retry.",
    errorNotConfigured:
      "The form is not configured yet. Please try again in a moment.",
    noticeNotConfiguredTitle: "Form not configured yet",
    errorRateLimited:
      "Too many attempts from this browser. Please try again later.",
    successTitle: "Message sent",
    successText:
      "Thanks! Your message came through. I'll get back to you shortly.",
    successAnother: "Send another message",
  },

  resumePage: {
    title: "Resume",
    eyebrow: "Résumé",
    heading: "Curriculum vitae",
    sub: (name, role) =>
      `Education, professional experience and technical skills in one document — ${name}, ${role}.`,
    fallback: "Your browser can't display the PDF inline.",
    fallbackLink: "Download the CV instead",
    fallbackHint:
      "If the preview does not load, use the download button above.",
  },

  footer: {
    text:
      "Full-stack & mobile engineer building modern, practical and user-friendly digital solutions — web applications, CRUD systems and database-driven products.",
    navigate: "Navigate",
    findMeOnline: "Find me online",
    rights: (year, name) => `© ${year} ${name}. All rights reserved.`,
    credit: (city) => `Designed & built with React — Based in ${city}`,
  },
};

export default en;
