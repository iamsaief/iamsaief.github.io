"use client";

import { motion } from "framer-motion";
import { Navigation } from "@/components/navigation";
import { AnimatedBackground } from "@/components/animated-background";
import { HeroSection } from "@/components/section-hero";
import { AboutSection } from "@/components/section-about";
import { ExperienceSection } from "@/components/section-experience";
import { ProjectsSection } from "@/components/section-projects";
import { CTASection } from "@/components/section-cta";
import { ContactSection } from "@/components/section-contact";

/**
 * Main portfolio page - single page application layout
 * Renders all sections in order with smooth animations
 */
export default function Home() {
  return (
    <div className="min-h-screen relative">
      {/* Animated particle background */}
      <AnimatedBackground />

      {/* Fixed navigation header */}
      <Navigation />

      {/* Main content with fade-in animation */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10"
      >
        {/* Portfolio sections in order */}
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <CTASection />
        <ContactSection />
      </motion.main>
    </div>
  );
}
