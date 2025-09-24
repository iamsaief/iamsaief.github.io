import type { Project } from "../types";

// Portfolio projects data - update with real project information
export const projects: Project[] = [
  {
    name: "10MS Course Page",
    year: "2025",
    status: "Live",
    description:
      "A modern, responsive course product page built with Next.js 15, featuring beautiful UI components, dark mode support, and seamless API integration with the 10minuteschool platform.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Context API ",
      "API Integration",
    ],
    githubUrl: "https://github.com/iamsaief/10ms-product-page",
    liveUrl: "https://10ms-product-page.vercel.app/",
    image: "/projects-10ms-product-page-min.png",
  },
  {
    name: "ChronoCraft",
    year: "2025",
    status: "Live",
    description:
      "A modern, expressive age calculator app that combines custom React components, advanced date manipulation, and tailored UI/UX to deliver meaningful age insights with personalization & social features",
    techStack: ["React", "Tailwind CSS", "Context API + Reducer"],
    githubUrl:
      "https://github.com/iamsaief/reactjs/tree/main/src/projects/chrono-craft",
    liveUrl: "https://iamsaief-reactjs.vercel.app/projects/chrono-craft",
    image: "/projects-chrono-craft-min.png",
  },
  {
    name: "Elite Shop",
    year: "2025",
    status: "Live",
    description:
      "A sleek e-commerce application with comprehensive shopping cart functionality, built with React, Context API + useReducer for seamless state management and a responsive UI powered by TailwindCSS",
    techStack: ["React", "Tailwind CSS", "Context API + Reducer"],
    githubUrl:
      "https://github.com/iamsaief/reactjs/tree/main/src/projects/elite-shop",
    liveUrl: "https://iamsaief-reactjs.vercel.app/projects/elite-shop",
    image: "/projects-elite-shop-min.png",
  },
  {
    name: "Resume Enhancer",
    year: "2025",
    status: "In Progress",
    description:
      "An intelligent resume enhancement tool that uses AI to improve, optimize, and format resumes for modern job markets and ATS systems.",
    techStack: ["React", "Redux-Toolkit", "Tailwind CSS"],
    githubUrl:
      "https://github.com/iamsaief/reactjs/tree/main/src/projects/resume-enhancer",
    liveUrl: "https://iamsaief-reactjs.vercel.app/projects/resume-enhancer",
    image: "/projects-resume-enhancer-min.png",
  },
];

// Utility functions for filtering and organizing projects

// Filter projects by status (Live, In Progress, Completed)
export const getProjectsByStatus = (status: Project["status"]) =>
  projects.filter((project) => project.status === status);

// Filter projects by technology stack
export const getProjectsByTech = (tech: string) =>
  projects.filter((project) =>
    project.techStack.some((t) => t.toLowerCase().includes(tech.toLowerCase())),
  );

// Get featured projects for homepage/summary views
export const getFeaturedProjects = (count = 3) => projects.slice(0, count);
