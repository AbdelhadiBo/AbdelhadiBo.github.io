const fr = {
  nav: {
    home: "Accueil",
    about: "À propos",
    projects: "Projets",
    resume: "CV",
    contact: "Contact",
  },

  ui: {
    skipToContent: "Aller au contenu",
    mainNavigation: "Navigation principale",
    siteMenu: "Menu du site",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    findMeOnline: "Retrouvez-moi en ligne",
    language: "Langue",
    languageShort: "Basculer entre le français et l'anglais",
    quickFacts: "Infos rapides",
    newTab: "ouvre un nouvel onglet",
    githubProfile: "Profil GitHub",
    viewOnGithub: "Voir sur GitHub",
    onGithub: "sur GitHub",
    repository: "dépôt",
    technologiesUsed: "Technologies utilisées",
    backToTop: "Retour en haut",
    navigate: "Naviguer",
    footerNavigation: "Pied de page",
    roleTagline: "Ingénieur Full-Stack & Mobile",
    photoAlt: "ingénieur full-stack et mobile",
    basedIn: (location) => `Basé au ${location}`,
  },

  cv: {
    download: "Télécharger le CV",
    frenchLabel: "CV en français",
    englishLabel: "English CV",
    openNewTab: "Ouvrir dans un nouvel onglet",
  },

  profile: {
    roles: [
      "Ingénieur Full-Stack & Mobile",
      "Développeur Software",
      "Développeur Full Stack",
      "Freelance",
    ],
    headline:
      "Je conçois des solutions numériques modernes, pratiques et ergonomiques — des applications web pilotées par des bases de données jusqu'aux logiciels mobiles et desktop multiplateformes.",
    city: "Maroc",
    metaRole: "ingénieur full-stack et mobile",
    facts: [
      { label: "Basé au", value: "Maroc" },
      { label: "Domaine", value: "Architecture & APIs" },
      { label: "Formation", value: "ENSI Tanger" },
      { label: "Stack", value: "Laravel · Flutter · React" },
    ],
  },

  about: {
    lead:
      "Bonjour ! Je suis Abdelhadi Bouzani, originaire du Maroc — un développeur software passionné par la création de solutions numériques modernes, pratiques et ergonomiques, avec un vif intérêt pour le web et le développement d'applications.",
    paragraphs: [
      "Étudiant en génie logiciel, je suis passionné par la création d'applications web modernes, performantes et ergonomiques. J'aime transformer des idées en solutions numériques concrètes, résoudre des problèmes techniques et apprendre à travers des défis réels.",
      "Je suis titulaire d'un diplôme de Technicien Spécialisé en Développement Digital et je poursuis actuellement mes études en Génie Informatique. Je dispose d'une expérience pratique à travers des projets académiques et un stage professionnel au cours duquel j'ai travaillé sur des applications réelles.",
      "Je maîtrise JavaScript, PHP, Java, C++ et SQL — et j'aime autant travailler sur le front-end que sur le back-end. Mes principaux centres d'intérêt sont le développement d'applications web, les systèmes CRUD et les solutions basées sur des bases de données, avec une attention particulière portée à la qualité du design et aux performances.",
      "Chaque fois que c'est possible, j'aime construire des projets avec Vue.js, Laravel et Java (JSP / Servlets) afin de créer des applications évolutives et maintenables.",
      "En dehors du code, j'aime m'entraîner en salle de sport, relever de nouveaux défis et travailler continuellement à mon développement professionnel et personnel.",
    ],
    interests: ["Applications web", "Systèmes CRUD", "Solutions BDD"],
  },

  skills: {
    frontend: "Frontend",
    backend: "Backend",
    mobile: "Mobile & Desktop",
    data: "Bases de données",
    languages: "Langages",
    tools: "Outils & Méthode",
  },

  projects: {
    "gestion-d-articles":
      "Application web CRUD simple pour gérer des articles, développée avec Spring Boot et Thymeleaf.",
    ecommercephp:
      "Site e-commerce développé en PHP, avec catalogue produits et fonctionnalités de base d'une boutique.",
    "android-calculator":
      "Application de calculatrice basique pour Android, écrite en Java avec les opérations arithmétiques standard.",
    "quiz-app":
      "Application de quiz créée pour l'apprentissage et la vérification des notions de base en programmation et en développement.",
    "add-produits-spring":
      "Projet Spring Boot permettant d'ajouter et de gérer des produits, idéal pour apprendre les opérations CRUD avec Spring.",
    boutique:
      "Projet PHP simple pour un site de boutique, illustrant les bases de PHP et du développement web.",
    "clinic-management-system":
      "Un système de gestion simple pour une clinique, développé avec des technologies web modernes.",
  },

  experience: {
    "atlas-nova-solutions": {
      role: "Développeur Web",
      type: "Stage",
      duration: "juin 2026 – août 2026 · 3 mois",
      location: "À distance",
      description:
        "Développement d'un système de caisse (POS) multiplateforme pour la gestion des ventes et des opérations commerciales.",
      highlights: [
        "Réalisation de l'application avec Flutter et Dart pour Desktop et Mobile.",
        "Développement du back-end avec Laravel et intégration d'API REST.",
        "Mise en place d'une architecture Offline-First avec SQLite et synchronisation serveur.",
        "Développement de modules : ventes, achats, produits, catégories, stock, caisses, promotions et rapports.",
        "Gestion des sessions de caisse et mise à jour automatique du stock.",
        "Fonctionnalité d'export des données au format Excel.",
        "Conception d'une interface moderne et responsive.",
      ],
    },
    "onee-water-division": {
      role: "Développeur Web",
      type: "Stage",
      duration: "mars 2024 – avril 2024 · 2 mois",
      location: "Meknès, Maroc · Sur site",
      description:
        "Développement d'une application de gestion des problèmes pour les opérations internes. Participation à l'ensemble du cycle de vie du projet : analyse des besoins, conception de la base de données, design UI/UX et implémentation des fonctionnalités.",
      highlights: [
        "Conception et implémentation du back-end avec Laravel (architecture MVC, ORM Eloquent, middleware).",
        "Réalisation d'un front-end moderne et responsive avec Tailwind CSS et des composants réutilisables.",
        "Conception et gestion du schéma MySQL, des relations et optimisation des requêtes.",
        "Implémentation de l'authentification, du contrôle d'accès par rôle et du workflow de gestion des tickets.",
        "Création de tableaux de bord et de fonctionnalités de reporting pour le suivi des problèmes et de leur résolution.",
      ],
    },
  },

  education: {
    "ensi-tanger": {
      title: "4ème année — Cycle Génie Informatique",
      duration: "En cours",
      location: "Maroc",
      description:
        "Cursus de génie informatique, axé sur l'architecture logicielle, le développement full-stack et les bonnes pratiques d'ingénierie logicielle.",
      inProgress: "En cours",
    },
    "ensa-tanger": {
      title: "3ème année DCA — Génie Informatique",
      duration: "2024 – 2025",
      location: "Maroc",
      description:
        "DCA (Diplôme d'Études Avancées) en Génie Informatique, avec une solide base scientifique en mathématiques, algorithmes et informatique.",
      inProgress: "En cours",
    },
    "istag-meknes": {
      title: "Développement Digital — Développement Web Full-Stack",
      duration: "2022 – 2024",
      location: "Bab Tizimi, Meknès",
      description:
        "Diplôme de Technicien Spécialisé en Développement Digital, axé sur le développement web full-stack, les bases de données et les fondamentaux de la programmation.",
      inProgress: "En cours",
    },
    "lycee-almontalak": {
      title: "Baccalauréat — Sciences Physiques",
      duration: "2019 – 2020",
      location: "Meknès, Maroc",
      description:
        "Baccalauréat scientifique avec une spécialisation en Sciences Physiques, offrant une base solide en mathématiques et en sciences.",
      inProgress: "En cours",
    },
  },

  meta: {
    defaultTitle: "Abdelhadi Bouzani | Ingénieur Full-Stack & Mobile",
    homeDescription: (name, city) =>
      `${name} — Ingénieur Full-Stack & Mobile depuis ${city}. Développement d'applications web modernes, d'applications mobiles et de solutions basées sur des bases de données avec Laravel, Flutter et React.`,
    aboutDescription: (name) =>
      `À propos de ${name} — développeur software marocain spécialisé dans les applications web, les systèmes CRUD et les solutions basées sur des bases de données avec Laravel, PHP, Java et JavaScript.`,
    projectsDescription: (name) =>
      `Projets de ${name} — applications web CRUD, plateformes e-commerce et utilitaires Android réalisés avec Spring Boot, PHP, Java et JavaScript.`,
    contactDescription: (name, role, city) =>
      `Contactez ${name} — ${role} basé à ${city}. Joignable sur WhatsApp, LinkedIn ou GitHub.`,
    resumeDescription: (name, role, city) =>
      `CV de ${name} — ${role} basé à ${city}. Téléchargez le PDF ou consultez-le en ligne.`,
  },

  home: {
    greeting: "Bonjour, je suis",
    viewProjects: "Voir les projets",
    aboutEyebrow: "À propos de moi",
    aboutTitle: "Un développeur qui livre de vrais produits",
    readFullStory: "Lire l'histoire complète",
    languagesLabel: "Langages",
    languagesText: "Maîtrise de JavaScript, PHP, Java, C++ et SQL.",
    interestsLabel: "Centres d'intérêt",
    roleLabel: "Rôle",
    roleText: (role, city) => `${role}, basé au ${city}.`,
    skillsEyebrow: "Compétences",
    skillsTitleBefore: "Des technologies avec lesquelles je construis",
    skillsTitleAccent: "",
    skillsSub:
      "Une stack pragmatique couvrant le frontend, le backend, le mobile, la data et l'outillage — utilisée sur de vrais projets clients et académiques.",
    projectsEyebrow: "Projets sélectionnés",
    projectsTitle: "Projets récents",
    projectsSub:
      "Quelques choses que j'ai conçues, développées et livrées — des applications CRUD Spring Boot aux boutiques PHP et aux utilitaires Android.",
    allProjects: "Tous les projets",
    contactEyebrow: "Contact",
    contactTitle: "Construisons quelque chose ensemble",
    contactText: (city) =>
      `Basé au ${city}. Le moyen le plus rapide de me joindre est WhatsApp ou LinkedIn.`,
    contactCta: "Me contacter",
  },

  aboutPage: {
    eyebrow: "À propos de moi",
    title: "Découvrez qui je suis",
    languagesLabel: "Langages",
    frameworksLabel: "Frameworks",
    basedInLabel: "Basé au",
    experienceEyebrow: "Expérience",
    experienceTitle: "Expérience professionnelle",
    experienceSub:
      "Deux stages durant lesquels j'ai développé des logiciels de production pour de vraies entreprises.",
    educationEyebrow: "Formation",
    educationTitle: "Parcours académique",
    educationSub:
      "Un parcours continu entre génie informatique et développement web full-stack.",
  },

  projectsPage: {
    title: "Projets",
    eyebrow: "Portfolio",
    titleBefore: "Mes",
    titleAccent: "réalisations",
    sub: (count) =>
      `${count} projets en Java, PHP et JavaScript — des systèmes CRUD Spring Boot aux boutiques e-commerce et aux applications Android. Tous sont sur GitHub.`,
    githubCta: "Tout voir sur GitHub",
    sectionEyebrow: "Tous les projets",
    sectionTitle: "Réalisés avec soin",
    sectionSub:
      "Chaque carte renvoie directement au dépôt — code, README et instructions d'installation inclus.",
  },

  contactPage: {
    title: "Contact",
    eyebrow: "Contact",
    titleBefore: "Parlons de",
    titleAccent: "votre projet",
    sub: (city) =>
      `Je suis basé à ${city} et je développe des applications web, mobiles et desktop. Choisissez le canal qui vous convient.`,
    whatsappCta: "Écrire sur WhatsApp",
    sectionEyebrow: "Canaux",
    sectionTitle: "Où me trouver",
    sectionSub:
      "Les réponses les plus rapides viennent généralement de WhatsApp, mais je lis tout.",
    ctaEyebrow: "Prochaine étape",
    ctaTitle: "Vous préférez d'abord parcourir mes réalisations ?",
    ctaText:
      "Chaque projet est public sur GitHub, avec le code et les instructions d'installation.",
    ctaProjects: "Voir les projets",
    ctaAbout: "À propos de moi",
  },

  contactForm: {
    title: "Écrivez-moi directement",
    sub: "Décrivez votre projet en quelques lignes. Je réponds généralement sous 24 à 48 heures.",
    name: "Nom",
    namePlaceholder: "Votre nom",
    email: "E-mail",
    emailPlaceholder: "vous@exemple.com",
    subject: "Objet",
    subjectPlaceholder: "Refonte d'une application web",
    message: "Message",
    messagePlaceholder: "Bonjour, j'aimerais parler de…",
    optional: "facultatif",
    chars: (n) => `${n} caractères restants`,
    submit: "Envoyer le message",
    sending: "Envoi en cours…",
    nameRequired: "Merci d'indiquer votre nom.",
    emailRequired: "Merci d'indiquer votre e-mail.",
    emailInvalid: "Cet e-mail semble incomplet ou invalide.",
    subjectRequired: "Merci d'indiquer un objet.",
    subjectTooShort: "L'objet doit contenir au moins 3 caractères.",
    messageRequired: "Merci d'écrire votre message.",
    messageTooShort: "Votre message doit contenir au moins 20 caractères.",
    errorTitle: "L'envoi a échoué",
    errorGeneric:
      "Une erreur est survenue pendant l'envoi. Réessayez dans un instant.",
    errorTimeout: "L'envoi a pris trop de temps. Vérifiez votre connexion.",
    errorNetwork: "Connexion impossible. Vérifiez votre réseau, puis réessayez.",
    errorNotConfigured:
      "Le formulaire n'est pas encore configuré. Réessayez dans un instant.",
    noticeNotConfiguredTitle: "Formulaire non configuré",
    errorRateLimited:
      "Trop de tentatives depuis ce navigateur. Réessayez plus tard.",
    successTitle: "Message envoyé",
    successText:
      "Merci ! Votre message est bien arrivé. Je reviens vers vous très vite.",
    successAnother: "Envoyer un autre message",
  },

  resumePage: {
    title: "CV",
    eyebrow: "CV",
    heading: "Curriculum vitae",
    sub: (name, role) =>
      `Formation, expérience professionnelle et compétences techniques réunies dans un seul document — ${name}, ${role}.`,
    fallback: "Votre navigateur ne peut pas afficher le PDF directement.",
    fallbackLink: "Téléchargez plutôt le CV",
    fallbackHint:
      "Si l'aperçu ne se charge pas, utilisez le bouton de téléchargement ci-dessus.",
  },

  footer: {
    text:
      "Ingénieur full-stack et mobile qui conçoit des solutions numériques modernes, pratiques et ergonomiques — applications web, systèmes CRUD et produits fondés sur des bases de données.",
    navigate: "Naviguer",
    findMeOnline: "Retrouvez-moi en ligne",
    rights: (year, name) => `© ${year} ${name}. Tous droits réservés.`,
    credit: (city) => `Conçu & développé avec React — Basé au ${city}`,
  },
};

export default fr;
