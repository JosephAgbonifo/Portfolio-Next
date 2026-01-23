"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Mail,
  ArrowUpRight,
  Github,
  Linkedin,
  Twitter,
  Globe,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: "Archive", href: "/my-projects" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Process", href: "#" }, // Placeholder
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/josephAgbonifo",
      icon: <Linkedin size={16} />,
    },
    {
      name: "GitHub",
      href: "https://www.github.com/josephagbonifo",
      icon: <Github size={16} />,
    },
    {
      name: "Twitter",
      href: "https://www.x.com/hellojoedev",
      icon: <Twitter size={16} />,
    },
    // { name: "Dribbble", href: "#", icon: <Globe size={16} /> }, // Placeholder
  ];

  return (
    <footer className="w-full bg-background pt-32 pb-10 px-6 md:px-12 border-t border-border-color/30">
      <div className="max-w-7xl mx-auto">
        {/* Big CTA Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex flex-col gap-6"
          >
            <h2 className="text-5xl md:text-7xl font-sans font-black text-foreground uppercase tracking-tighter leading-none">
              Have an <br />{" "}
              <span className="text-accent-gold italic">Idea?</span>
            </h2>
            <Link
              href="/contact"
              className="group flex items-center gap-4 w-fit bg-foreground text-background px-8 py-4 rounded-full font-sans font-bold hover:bg-accent-purple transition-all"
            >
              Start a Project{" "}
              <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </motion.div>

          <div className="flex flex-col justify-end md:items-end gap-4">
            <p className="font-mono text-xs text-muted-text uppercase tracking-widest text-left md:text-right max-w-xs">
              // Currently accepting new commissions and technical consultations
              for Q1 2026.
            </p>
            <a
              href="mailto:joseph@example.com"
              className="flex items-center gap-2 text-foreground font-sans font-bold text-xl hover:text-accent-teal transition-colors"
            >
              <Mail size={20} className="text-accent-teal" /> joseph@email.com
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-border-color mb-12" />

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 mb-20">
          {/* Sitemap */}
          <div className="flex flex-col gap-6">
            <span className="font-mono text-[10px] text-muted-text uppercase tracking-widest">
              Navigation
            </span>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-foreground/70 hover:text-accent-teal font-sans text-sm transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Socials */}
          <div className="flex flex-col gap-6">
            <span className="font-mono text-[10px] text-muted-text uppercase tracking-widest">
              Connect
            </span>
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-foreground/70 hover:text-accent-purple font-sans text-sm transition-colors"
              >
                {social.icon} {social.name}
              </a>
            ))}
          </div>

          {/* Placeholders for future accounts */}
          <div className="flex flex-col gap-6">
            <span className="font-mono text-[10px] text-muted-text uppercase tracking-widest">
              Joseph Agbonifo
            </span>
          </div>

          {/* Status/Clock */}
          <div className="col-span-2 flex flex-col justify-end md:items-end gap-2">
            <div className="flex items-center gap-2 text-accent-teal">
              <div className="w-2 h-2 rounded-full bg-accent-teal animate-pulse" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em]">
                Lagos, NG —{" "}
                {new Date().toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-t border-border-color/30 pt-10">
          <p className="font-mono text-[10px] text-muted-text uppercase tracking-widest">
            © {currentYear} Joseph Agbonifo. Built with Next.js & Coffee.
          </p>
          <div className="flex gap-8">
            <span className="font-mono text-[10px] text-muted-text uppercase tracking-widest italic">
              Designed by JA
            </span>
            <span className="font-mono text-[10px] text-muted-text uppercase tracking-widest italic">
              Engineered by JA
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
