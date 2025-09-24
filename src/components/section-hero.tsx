"use client";

import { motion, type Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Github,
  Linkedin,
  FileText,
  ArrowDown,
  MessageCircle,
} from "lucide-react";
import { personalInfo } from "@/lib/data/personal-info";

/**
 * Hero section - main landing area with name, title, and CTA buttons
 * Features staggered animations and smooth scroll navigation
 */

interface HeroSectionProps {
  showScrollIndicator?: boolean;
  customTagline?: string;
}

export function HeroSection({
  showScrollIndicator = true,
  customTagline,
}: HeroSectionProps) {
  // Animation variants for staggered entrance
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
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

  // Smooth scroll to about section
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Smooth scroll to contact section (for CTA)
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Icon mapping helper
  const getIconComponent = (iconName: string) => {
    const icons = {
      Github,
      Linkedin,
      Mail: FileText, // Using FileText as fallback for Mail
    };
    return icons[iconName as keyof typeof icons] || FileText;
  };

  return (
    <section className="flex min-h-screen items-center justify-center px-6 pt-20">
      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Name and title */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h1 className="text-foreground text-5xl font-bold md:text-7xl">
              {personalInfo.name}
            </h1>
            <h2 className="text-muted-foreground text-xl font-medium md:text-2xl">
              {personalInfo.title}
            </h2>
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-muted-foreground mx-auto max-w-2xl text-lg leading-relaxed md:text-xl"
          >
            {customTagline || personalInfo.tagline}
          </motion.p>

          {/* CTA buttons and social links */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            {/* Primary CTA - Hire Me */}
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
              onClick={scrollToContact}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Hire Me
            </Button>

            {/* Social/portfolio links */}
            <Button size="lg" variant="outline" asChild>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </a>
            </Button>

            <Button size="lg" variant="outline" asChild>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </a>
            </Button>

            {/*  <Button size="lg" variant="outline" asChild>
              <a href={personalInfo.resumeUrl} target="_blank" rel="noopener noreferrer">
                <FileText className="w-5 h-5 mr-2" />
                Resume
              </a>
            </Button> */}
          </motion.div>

          {/* Animated scroll indicator */}
          {showScrollIndicator && (
            <motion.div variants={itemVariants} className="pt-16">
              <motion.button
                onClick={scrollToAbout}
                className="text-muted-foreground hover:text-accent inline-flex cursor-pointer items-center border-none bg-transparent transition-colors"
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                whileHover={{ scale: 1.1 }}
                aria-label="Scroll to about section"
              >
                <ArrowDown className="h-5 w-5" />
              </motion.button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
