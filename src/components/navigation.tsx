"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ThemeToggle } from "./theme-toggle";

// Navigation menu items configuration
const navItems = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

// Fixed navigation bar with smooth scrolling and active section tracking
export function Navigation() {
  const [activeSection, setActiveSection] = useState("");

  // Smooth scroll to section when nav item is clicked
  const scrollToSection = (href: string) => {
    const targetId = href.slice(1); // Remove # from href
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Track which section is currently in view
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.slice(1));
      const scrollPosition = window.scrollY + 100; // Offset for fixed nav

      // Find the section currently in viewport
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-background/80 border-border fixed top-0 right-0 left-0 z-50 border-b backdrop-blur-sm"
    >
      <div className="mx-auto max-w-4xl px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Name - scrolls to top when clicked */}
          <motion.a
            href="#"
            className="text-accent focus-visible:ring-ring/50 rounded text-xl font-semibold transition-all outline-none hover:scale-105 focus-visible:ring-2"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <code>
              <span className="text-gray-500">&lt;</span>Saief
              <span className="text-gray-500">/&gt;</span>
            </code>
          </motion.a>

          <div className="flex items-center space-x-8">
            {/* Desktop navigation menu */}
            <div className="hidden items-center space-x-8 md:flex">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className={`focus-visible:ring-ring/50 relative cursor-pointer rounded-xs text-sm transition-all outline-none hover:translate-y-[-2px] focus-visible:ring-2 ${
                    activeSection === item.href.slice(1)
                      ? "text-accent"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                >
                  {item.name}
                  {/* Active section indicator */}
                  {activeSection === item.href.slice(1) && (
                    <motion.div
                      layoutId="activeSection" // Smooth transition between active items
                      className="bg-accent absolute right-0 -bottom-1 left-0 h-0.5"
                    />
                  )}
                </motion.a>
              ))}
            </div>
            {/* Theme toggle button */}
            <ThemeToggle />
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
