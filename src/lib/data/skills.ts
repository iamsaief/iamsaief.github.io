import { type Skill, type SkillGroup, TechCategory } from "../types";

// Flat list of all skills for general display (badges, etc.)
export const skills: Skill[] = [
  "React",
  "Next.js",
  "TypeScript/JavaScript",
  "WordPress",
  "Tailwind CSS",
  "REST APIs",
  "Git",
  "Accessibility",
  "Performance",
  "Testing",
  "CI/CD",
  "Figma",
];

// Skills organized by category for structured display
export const skillGroups: SkillGroup[] = [
  {
    category: TechCategory.FRONTEND,
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "CSS",
      "HTML",
    ],
  },
  {
    category: TechCategory.BACKEND,
    skills: ["Node.js", "GraphQL", "REST APIs", "Express.js"],
  },
  {
    category: TechCategory.DATABASE,
    skills: ["MongoDB", "PostgreSQL", "Prisma", "Supabase"],
  },
  {
    category: TechCategory.TOOLS,
    skills: ["Git", "Docker", "CI/CD", "Testing", "Performance"],
  },
  {
    category: TechCategory.DESIGN,
    skills: ["Figma", "Accessibility", "UI/UX", "Responsive Design"],
  },
];

// Utility functions for filtering skills by category

// Get all skills for a specific technology category
export const getSkillsByCategory = (category: TechCategory) =>
  skillGroups.find((group) => group.category === category)?.skills || [];

// Convenience functions for common skill categories
export const getFrontendSkills = () =>
  getSkillsByCategory(TechCategory.FRONTEND);
export const getBackendSkills = () => getSkillsByCategory(TechCategory.BACKEND);
