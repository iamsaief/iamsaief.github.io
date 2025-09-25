"use client";

import type React from "react";

import { motion, type Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Linkedin, Github, Send, Heart } from "lucide-react";
import { useState } from "react";
import { personalInfo } from "@/lib/data/personal-info";

// Form data structure for contact form
interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

// Contact method configuration for social links
interface ContactMethod {
  name: string;
  value: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
}

// Props for customizing contact section
interface ContactSectionProps {
  showForm?: boolean; // Toggle contact form visibility
  customTitle?: string; // Override default section title
  customDescription?: string; // Override default description
}

// Contact section with form and social links
export function ContactSection({
  showForm = true,
  customTitle = "Get In Touch",
  customDescription = "I\'m always interested in new opportunities and collaborations. Let\'s connect and discuss how we can work together.",
}: ContactSectionProps) {
  // Form state management
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle form submission (placeholder implementation)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // TODO: Implement actual form submission logic
      console.log("Form submitted:", formData);
      // Reset form on success
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Contact methods configuration from personal info
  const contactMethods: ContactMethod[] = [
    {
      name: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      icon: Mail,
      description: personalInfo.email,
    },
    {
      name: "LinkedIn",
      value: personalInfo.linkedin,
      href: personalInfo.linkedin,
      icon: Linkedin,
      description: personalInfo.linkedin.replace("https://", ""),
    },
    {
      name: "GitHub",
      value: personalInfo.github,
      href: personalInfo.github,
      icon: Github,
      description: personalInfo.github.replace("https://", ""),
    },
  ];

  // Staggered animations for contact methods
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

  // Slide-up animation for sections
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
    <section id="contact" className="bg-muted/20 px-6 py-24">
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
            {customTitle}
          </h2>
          <div className="bg-accent mx-auto mb-6 h-0.5 w-12"></div>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            {customDescription}
          </p>
        </motion.div>

        {/* Contact methods and form grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-12 md:grid-cols-2"
        >
          {/* Contact methods list */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <h3 className="text-foreground mb-6 text-xl font-semibold">
                {"Let\'s Connect"}
              </h3>
              <div className="space-y-4">
                {contactMethods.map((method) => {
                  const IconComponent = method.icon;
                  return (
                    <motion.a
                      key={method.name}
                      href={method.href}
                      target={method.name !== "Email" ? "_blank" : undefined}
                      rel={
                        method.name !== "Email"
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="border-border hover:bg-accent/10 group focus-visible:ring-ring/50 flex items-center gap-4 rounded-lg border p-4 transition-all duration-200 outline-none hover:translate-x-2 focus-visible:ring-2"
                      transition={{ duration: 0.2 }}
                    >
                      <div className="bg-accent/10 group-hover:bg-accent/20 flex h-12 w-12 items-center justify-center rounded-lg transition-colors">
                        <IconComponent className="text-accent h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-foreground font-medium">
                          {method.name}
                        </p>
                        <p className="text-muted-foreground text-sm">
                          {method.description}
                        </p>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Contact form (optional) */}
          {showForm && (
            <motion.div variants={itemVariants}>
              <Card className="bg-card/50">
                <CardHeader>
                  <CardTitle>Send a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name input */}
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-foreground block text-sm font-medium"
                      >
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        disabled={isSubmitting}
                      />
                    </div>

                    {/* Email input */}
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-foreground block text-sm font-medium"
                      >
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        required
                        disabled={isSubmitting}
                      />
                    </div>

                    {/* Message textarea */}
                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="text-foreground block text-sm font-medium"
                      >
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project or just say hello!"
                        rows={5}
                        required
                        disabled={isSubmitting}
                      />
                    </div>

                    {/* Submit button */}
                    <Button
                      type="submit"
                      className="bg-accent hover:bg-accent/90 text-accent-foreground w-full"
                      disabled={isSubmitting}
                    >
                      <Send className="mr-2 h-4 w-4" />
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-border mt-20 border-t pt-8 text-center"
        >
          <p className="text-muted-foreground flex items-center justify-center text-sm">
            © {new Date().getFullYear()} • Build with&nbsp;
            <Heart className="size-4" />
            &nbsp;by&nbsp;
            <a
              href={personalInfo.linkedin}
              className="hover:text-accent hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {personalInfo.name}
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
