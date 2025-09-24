import type { Experience } from "../types";

// Professional experience data - ordered by most recent first
export const experiences: Experience[] = [
  {
    company: "Storex | Unei Digital | CloudTax | Digiflakes | CoderGens",
    role: "Senior Frontend Engineer (Contract)",
    duration: "2022 - Present", // Current role
    location: "Dhaka, Bangladesh",
    highlights: [
      "Developed and optimized robust user-centric interfaces, analytics dashboards, WP themes and plugins",
      "Built reusable UIs and scalable design systems, using Context API and Redux Toolkit, accelerating development time by 40% across SaaS agencies",
      "Led frontend architecture, Improved code quality and system efficiency through proactive refactoring, reducing redundant code by 25%",
    ],
    technologies: [
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "PHP",
      "WordPress",
    ],
  },
  {
    company: "Ollyo",
    role: "Software Engineer",
    duration: "2019 - 2022",
    location: "Dhaka, Bangladesh",
    highlights: [
      "Directed frontend efforts for Tutor LMS (100K+ installs), Qubely, Skillate, and TutorStarter",
      "Helped build WordPress plugins and theme features using React, JavaScript, PHP, ensuring pixel-perfect UI and cross-browser compatibility",
      "Worked with backend teams to build and consume REST APIs. Improving UI consistency and reducing design-related bugs by 30%",
      "Mentored junior devs and improved PR quality through code reviews, and collaborated with 6 backend engineers and QA to meet sprint deadlines",
    ],
    technologies: ["React", "JavaScript", "PHP", "HTML", "SASS/CSS"],
  },
  {
    company: "Clients Project | Hello Academy",
    role: "Frontend Developer",
    duration: "2018 - 2019", // First professional role
    location: "Dhaka, Bangladesh",
    highlights: [
      "Delivered 10+ responsive sites from scratch with HTML/CSS/JS",
      "Helped resolve layout bugs and improve cross-browser performance",
      "Mentored 7 interns on basic UI structure and component logic",
    ],
    technologies: ["HTML", "SASS", "JavaScript", "WordPress"],
  },
];

// Utility functions for experience data

// Get current/most recent role for hero section or summary
export const getCurrentRole = () => experiences[0];

// Calculate total years of experience dynamically
export const getTotalYearsExperience = () => {
  const startYear = 2019; // Year of first professional role
  const currentYear = new Date().getFullYear();
  return currentYear - startYear;
};

// Get unique list of all technologies used across all roles
export const getAllTechnologies = () => {
  const allTech = experiences.flatMap((exp) => exp.technologies);
  return [...new Set(allTech)].sort(); // Remove duplicates and sort alphabetically
};
