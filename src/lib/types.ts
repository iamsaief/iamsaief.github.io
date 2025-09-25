export interface Project {
  name: string;
  year: string;
  status: ProjectStatus;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
  image: string;
}

/** Work experience data structure */
export interface Experience {
  company: string;
  role: string;
  duration: string;
  location: string;
  highlights: string[];
  technologies: string[];
}

/** Personal information and contact details */
export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  email: string;
  github: string;
  linkedin: string;
  resumeUrl: string;
  codepen: string;
  bio: string[];
}

/** Social media link structure */
export interface SocialLink {
  name: string;
  url: string;
  icon: string; // Lucide icon name
}

/** Project status options */
export type ProjectStatus = "Live" | "In Progress" | "Completed";

/** Individual skill name */
export type Skill = string;

/** Technology categories for skill grouping */
export enum TechCategory {
  FRONTEND = "Frontend",
  BACKEND = "Backend",
  DATABASE = "Database",
  TOOLS = "Tools",
  DESIGN = "Design",
}

/** Grouped skills by category */
export interface SkillGroup {
  category: TechCategory;
  skills: Skill[];
}
