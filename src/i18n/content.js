import {
  aboutTags,
  CV_FILES,
  education,
  experience,
  navLinks,
  profile,
  projects,
  skills,
} from "../data/portfolio";
import { DEFAULT_LANG } from "./languages";
import en from "./translations.en";
import fr from "./translations.fr";

const dictionaries = { en, fr };

/**
 * Merges the language-agnostic structure (icons, links, names, technologies)
 * with the translated copy for the active language.
 */
export default function buildContent(lang) {
  const t = dictionaries[lang] || dictionaries[DEFAULT_LANG];

  return {
    t,
    cv: CV_FILES[lang] || CV_FILES[DEFAULT_LANG],
    profile: {
      ...profile,
      roles: t.profile.roles,
      headline: t.profile.headline,
      city: t.profile.city,
      metaRole: t.profile.metaRole,
      facts: t.profile.facts,
    },
    navLinks: navLinks.map((link) => ({ ...link, label: t.nav[link.id] })),
    about: {
      lead: t.about.lead,
      paragraphs: t.about.paragraphs,
      interests: t.about.interests,
      languages: aboutTags.languages,
      frameworks: aboutTags.frameworks,
    },
    skills: skills.map((group) => ({ ...group, title: t.skills[group.id] })),
    projects: projects.map((project) => ({
      ...project,
      description: t.projects[project.id],
    })),
    experience: experience.map((job) => ({ ...job, ...t.experience[job.id] })),
    education: education.map((item) => ({ ...item, ...t.education[item.id] })),
  };
}
