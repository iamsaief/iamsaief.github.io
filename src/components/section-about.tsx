"use client";

import { motion, type Variants } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { skills, skillGroups } from "@/lib/data/skills";
import { personalInfo } from "@/lib/data/personal-info";
import { getTotalYearsExperience } from "@/lib/data/experience";

// Props for customizing the about section display
interface AboutSectionProps {
  showSkillGroups?: boolean; // Toggle between grouped or flat skill display
  maxSkills?: number; // Limit number of skills shown (for compact layouts)
}

// About section with bio, skills, and smooth animations
export function AboutSection({
  showSkillGroups = false,
  maxSkills,
}: AboutSectionProps) {
  // Limit skills if maxSkills is provided
  const displaySkills = maxSkills ? skills.slice(0, maxSkills) : skills;
  // Calculate dynamic years of experience
  const yearsExperience = getTotalYearsExperience();

  // Staggered animation for section elements
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  // Standard slide-up animation for text blocks
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  // Scale animation for skill badges
  const skillVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-16"
        >
          {/* Section header */}
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-foreground mb-4 text-3xl font-bold md:text-4xl">
              About
            </h2>
            <div className="bg-accent mx-auto h-0.5 w-12"></div>
          </motion.div>

          {/* Bio and skills grid */}
          <motion.div
            variants={itemVariants}
            className="grid items-center gap-12 md:grid-cols-2"
          >
            {/* Bio paragraphs with dynamic experience years */}
            <div className="space-y-6">
              {personalInfo.bio.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-muted-foreground text-lg leading-relaxed"
                >
                  {/* Replace placeholder with calculated years */}
                  {index === 0
                    ? paragraph.replace("5+", `${yearsExperience}+`)
                    : paragraph}
                </p>
              ))}
            </div>

            {/* Skills display - grouped or flat layout */}
            <div className="space-y-6">
              <h3 className="text-foreground text-xl font-semibold">
                Skills & Technologies
              </h3>

              {showSkillGroups ? (
                // Grouped skills by category
                <div className="space-y-4">
                  {skillGroups.map((group) => (
                    <div key={group.category} className="space-y-2">
                      <h4 className="text-muted-foreground text-sm font-medium tracking-wide uppercase">
                        {group.category}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {group.skills.map((skill) => (
                          <Badge
                            key={skill}
                            variant="skill"
                            className="px-3 py-1 text-sm transition-all hover:scale-105"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                // Flat skills list with hover animations
                <motion.div
                  variants={containerVariants}
                  className="flex flex-wrap gap-2"
                >
                  {displaySkills.map((skill, index) => (
                    <motion.div key={skill} variants={skillVariants}>
                      <Badge
                        variant="skill"
                        className="px-3 py-1 text-sm transition-all hover:scale-105"
                      >
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
