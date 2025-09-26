"use client";

import { motion, type Variants } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import { projects } from "@/lib/data/projects";
import Image from "next/image";
import type { Project } from "@/lib/types";
import Link from "next/link";

// Props for customizing projects display
interface ProjectsSectionProps {
  featuredOnly?: boolean; // Show only featured projects (first 3)
  maxProjects?: number; // Limit number of projects shown
}

// Projects showcase with cards, animations, and filtering
export function ProjectsSection({
  featuredOnly = false,
  maxProjects,
}: ProjectsSectionProps) {
  // Filter projects based on props
  const displayProjects = featuredOnly
    ? projects.slice(0, maxProjects || 3)
    : maxProjects
      ? projects.slice(0, maxProjects)
      : projects;

  // Staggered animation for project cards
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  // Slide-up animation for individual cards
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  // Dynamic styling for project status badges
  const getStatusBadgeClass = (status: Project["status"]) => {
    switch (status) {
      case "Live":
        return "bg-green-500/10 text-green-500 border-green-500/20";
      case "In Progress":
        return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20";
      case "Completed":
        return "bg-blue-500/10 text-blue-500 border-blue-500/20";
      default:
        return "bg-gray-500/10 text-gray-500 border-gray-500/20";
    }
  };

  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-foreground mb-4 text-3xl font-bold md:text-4xl">
            Projects
          </h2>
          <div className="bg-accent mx-auto h-0.5 w-12"></div>
        </motion.div>

        {/* Projects grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-8 md:grid-cols-2"
        >
          {displayProjects.map((project) => (
            <motion.div
              key={project.name}
              variants={cardVariants}
              whileHover={{ y: -8 }} // Lift effect on hover
              transition={{ duration: 0.3 }}
            >
              <Card className="group from-accent/5 to-accent/5 h-full overflow-hidden bg-gradient-to-br pt-0">
                {/* Project image with hover zoom effect */}
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.name}
                    width={1280}
                    height={720}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    unoptimized
                    priority={false}
                  />
                </div>

                <CardHeader>
                  {/* Project title and metadata */}
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{project.name}</CardTitle>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs">
                        {project.year}
                      </Badge>
                      {/* Dynamic status badge with color coding */}
                      <Badge
                        variant="default"
                        className={`text-xs ${getStatusBadgeClass(project.status)}`}
                      >
                        {project.status}
                      </Badge>
                    </div>
                  </div>
                  <CardDescription className="text-sm leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Technology stack badges */}
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <Badge
                        key={tech}
                        variant="skill"
                        className="bg-gray-500/10 text-xs text-gray-500"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Action buttons - GitHub and live demo */}
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" asChild>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Explore More Projects button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 flex items-center justify-center text-center"
        >
          <Button
            asChild
            className="group bg-accent hover:bg-accent/90 text-accent-foreground h-12 rounded-full !px-6 text-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <a
              href="https://iamsaief-reactjs.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore More Projects
              <ExternalLink className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
