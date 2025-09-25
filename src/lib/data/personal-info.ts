import type { PersonalInfo, SocialLink } from "../types";

// Core personal information for the portfolio
export const personalInfo: PersonalInfo = {
  name: "Saief Al Emon",
  title: "Frontend Engineer",
  tagline:
    "Building Fast, responsive, and accessible user experiences with React, Next.js, and TypeScript",
  email: "saiefalemon@gmail.com",
  github: "https://github.com/iamsaief",
  linkedin: "https://linkedin.com/in/saiefalemon",
  codepen: "https://codepen.io/iamsaief",
  resumeUrl: "/resume.pdf",
  bio: [
    "I design and build fast, responsive, and accessible websites and web apps. With 6+ years of experience working with React.js, Next.js, and WordPress, I've helped ship tools, dashboards, and digital platforms used by millions globally.",
    "I focus on writing clean, maintainable code and building UI that performs well even under pressure. Whether it's a SaaS product, SPA, or a custom WordPress theme/plugin, I know how to make it run smooth and look sharp. ",
  ],
};

// Social media links configuration for contact section
export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: personalInfo.github,
    icon: "Github", // Lucide icon name
  },
  {
    name: "LinkedIn",
    url: personalInfo.linkedin,
    icon: "Linkedin",
  },
  {
    name: "Codepen",
    url: personalInfo.codepen,
    icon: "Codepen",
  },
];
