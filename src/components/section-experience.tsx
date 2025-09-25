"use client";

import { motion, type Variants } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { experiences, getCurrentRole } from "@/lib/data/experience";

// Props for customizing experience display
interface ExperienceSectionProps {
  showOnlyRecent?: boolean; // Show only current role
  maxExperiences?: number; // Limit number of experiences shown
}

// Professional experience timeline with animations
export function ExperienceSection({
  showOnlyRecent = false,
  maxExperiences,
}: ExperienceSectionProps) {
  // Filter experiences based on props
  const displayExperiences = showOnlyRecent
    ? [getCurrentRole()]
    : maxExperiences
      ? experiences.slice(0, maxExperiences)
      : experiences;

  // Staggered animation for experience items
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  // Slide-in animation from left for timeline items
  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-foreground mb-4 text-3xl font-bold md:text-4xl">
            Experience
          </h2>
          <div className="bg-accent mx-auto h-0.5 w-12"></div>
        </motion.div>

        {/* Timeline container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          {/* Vertical timeline line (desktop only) */}
          <div className="bg-border absolute top-0 bottom-0 left-8 hidden w-0.5 md:block"></div>

          <div className="space-y-12">
            {displayExperiences.map((experience, index) => (
              <motion.div
                key={`${experience.company}-${experience.role}`}
                variants={itemVariants}
                className="relative"
              >
                {/* Timeline dot (desktop only) */}
                <div className="bg-accent border-background absolute left-6 hidden size-4 rounded-full border-4 md:block"></div>

                {/* Experience content */}
                <div className="space-y-4 md:ml-20">
                  {/* Role and duration header */}
                  <div className="space-y-2">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <h3 className="text-foreground text-xl font-semibold">
                        {experience.role}
                      </h3>
                      <Badge variant="outline" className="w-fit text-sm">
                        {experience.duration}
                      </Badge>
                    </div>

                    {/* Company and location */}
                    <div className="text-muted-foreground flex flex-col gap-2 sm:flex-row sm:items-center">
                      <span className="font-medium">{experience.company}</span>
                      <span className="hidden sm:inline">•</span>
                      <span className="text-sm">{experience.location}</span>
                    </div>
                  </div>

                  {/* Key highlights list */}
                  <ul className="text-muted-foreground space-y-2">
                    {experience.highlights.map((highlight, highlightIndex) => (
                      <li
                        key={highlightIndex}
                        className="flex items-start gap-3"
                      >
                        <div className="bg-accent mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full"></div>
                        <span className="leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies used */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {experience.technologies.map((tech) => (
                      <Badge key={tech} variant="skill" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
