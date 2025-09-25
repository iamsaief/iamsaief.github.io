"use client";

import { motion, type Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Briefcase, ArrowRight, Star } from "lucide-react";
import { personalInfo } from "@/lib/data/personal-info";

// Props for customizing the CTA section
interface CTASectionProps {
  showAvailabilityBadge?: boolean; // Show green "available" indicator
  customTitle?: string; // Override default title
  customDescription?: string; // Override default description
}

// Call-to-action section for freelance/contract work
export function CTASection({
  showAvailabilityBadge = true,
  customTitle = "Ready to Work Together?",
  customDescription = "I\'m open to freelance projects and full-time work. Let\'s discuss how I can help bring your ideas to life.",
}: CTASectionProps) {
  // Smooth scroll to contact section
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Staggered animation for CTA elements
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

  // Slide-up animation for individual elements
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

  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Main CTA card with gradient background */}
          <Card className="border-accent/10 from-accent/5 to-accent/5 relative overflow-hidden bg-gradient-to-br">
            <CardContent className="p-12 text-center">
              {/* Availability indicator */}
              {showAvailabilityBadge && (
                <motion.div variants={itemVariants} className="mb-6">
                  <div className="inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-sm font-medium text-green-600 dark:text-green-400">
                    <div className="h-2 w-2 animate-pulse rounded-full bg-green-500"></div>
                    Available for new projects
                  </div>
                </motion.div>
              )}

              {/* Main heading and description */}
              <motion.div variants={itemVariants} className="mb-8 space-y-4">
                <h2 className="text-foreground text-3xl font-bold md:text-4xl">
                  {customTitle}
                </h2>
                <p className="text-muted-foreground mx-auto max-w-2xl text-lg leading-relaxed">
                  {customDescription}
                </p>
              </motion.div>

              {/* Service types grid */}
              <motion.div
                variants={itemVariants}
                className="mb-8 grid gap-6 md:grid-cols-2"
              >
                <div className="bg-background/20 border-border/50 flex items-center gap-3 rounded-lg border p-4">
                  <div className="bg-accent/10 flex h-10 w-10 items-center justify-center rounded-lg">
                    <Briefcase className="text-accent h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <p className="text-foreground font-medium">
                      Full-time or Contract
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Long-term partnerships
                    </p>
                  </div>
                </div>

                <div className="bg-background/20 border-border/50 flex items-center gap-3 rounded-lg border p-4">
                  <div className="bg-accent/10 flex h-10 w-10 items-center justify-center rounded-lg">
                    <Star className="text-accent h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <p className="text-foreground font-medium">
                      Freelance Projects
                    </p>
                    <p className="text-muted-foreground text-sm">
                      One-time engagements
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Action buttons */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col items-center justify-center gap-4 sm:flex-row"
              >
                {/* Primary CTA - scroll to contact form */}
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground group"
                  onClick={scrollToContact}
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  {"Let\'s Discuss Your Project"}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>

                {/* Secondary CTA - direct email */}
                <Button size="lg" variant="outline" asChild>
                  <a
                    href={`mailto:${personalInfo.email}?subject=Freelance Inquiry`}
                    className="group"
                  >
                    Quick Email
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
