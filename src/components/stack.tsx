"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Cpu,
  Terminal,
  Smartphone,
  Globe,
  Hexagon,
  Database,
  Server,
  Anchor,
  Workflow,
} from "lucide-react";

const TechStack = () => {
  const stack = [
    {
      name: "Rust",
      category: "Systems",
      icon: <Cpu size={20} />,
      accent: "var(--color-accent-gold)",
    },
    {
      name: "Node / Express",
      category: "Backend",
      icon: <Server size={20} />,
      accent: "var(--color-accent-teal)",
    },
    {
      name: "Laravel",
      category: "Fullstack",
      icon: <Anchor size={20} />,
      accent: "var(--color-accent-pink)",
    },
    {
      name: "Solidity",
      category: "Web3",
      icon: <Hexagon size={20} />,
      accent: "var(--color-accent-purple)",
    },
    {
      name: "Python",
      category: "Logic",
      icon: <Terminal size={20} />,
      accent: "var(--color-accent-blue)",
    },
    {
      name: "React Native",
      category: "Mobile",
      icon: <Smartphone size={20} />,
      accent: "var(--color-accent-pink)",
    },
    {
      name: "MongoDB",
      category: "Data",
      icon: <Database size={20} />,
      accent: "var(--color-accent-teal)",
    },
    {
      name: "Next.js",
      category: "Engine",
      icon: <Globe size={20} />,
      accent: "var(--color-accent-purple)",
    },
  ];

  return (
    <section className="w-full bg-background py-32 px-6 md:px-12 border-t border-border-color/30">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-xl">
            <span className="font-mono text-[10px] text-accent-teal uppercase tracking-[0.4em] mb-4 block">
              // Engineering Inventory
            </span>
            <h2 className="text-6xl md:text-8xl font-sans font-black text-foreground uppercase tracking-tighter leading-none">
              Modern <br />
              <span className="text-accent-purple">Toolbox.</span>
            </h2>
          </div>
          <p className="font-sans text-muted-text text-lg max-w-[320px] leading-relaxed border-l-2 border-accent-gold pl-6">
            From low-level systems in Rust to rapid enterprise scaling with
            Laravel and Node.
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stack.map((tech, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group relative p-8 rounded-[2rem] border border-border-color bg-foreground/[0.01] hover:bg-foreground/[0.03] transition-all duration-500"
            >
              <div className="relative z-10">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 border border-border-color bg-background group-hover:scale-110 transition-transform duration-500 shadow-2xl"
                  style={{ color: tech.accent }}
                >
                  {tech.icon}
                </div>

                <span className="font-mono text-[9px] text-muted-text uppercase tracking-[0.2em] mb-2 block">
                  {tech.category}
                </span>

                <h3 className="text-2xl font-sans font-black text-foreground uppercase tracking-tight">
                  {tech.name}
                </h3>

                {/* Animated Power Bar */}
                <div className="mt-8 h-[1px] w-full bg-border-color relative overflow-hidden">
                  <motion.div
                    initial={{ x: "-100%" }}
                    whileInView={{ x: "0%" }}
                    transition={{ duration: 1.5, ease: "circOut" }}
                    className="absolute inset-0"
                    style={{ backgroundColor: tech.accent }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* The "Foundations" Row (PHP, JS, CSS, HTML) */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 py-10 border-y border-border-color/30">
          {[
            { name: "PHP", accent: "var(--color-accent-blue)" },
            { name: "JavaScript", accent: "var(--color-accent-gold)" },
            { name: "CSS / Sass", accent: "var(--color-accent-pink)" },
            { name: "HTML5", accent: "var(--color-accent-teal)" },
          ].map((lang) => (
            <div key={lang.name} className="flex items-center gap-3">
              <div
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: lang.accent }}
              />
              <span className="font-mono text-xs text-muted-text uppercase tracking-widest">
                {lang.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
