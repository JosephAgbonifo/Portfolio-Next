"use client";
import React from "react";
import { motion } from "framer-motion";

const WhatIDo = () => {
  const services = [
    {
      step: "01",
      title: "Interface Architect",
      accent: "var(--color-accent-gold)",
      desc: "Engineering friction-less paths where intuition meets intent. I build digital environments that guide users with invisible logic and effortless precision.",
      tags: ["UX Strategy", "Behavioral Logic", "Prototyping"],
    },
    {
      step: "02",
      title: "Cross-Platform Logic",
      accent: "var(--color-accent-purple)",
      desc: "Transforming high-level concepts into cohesive web and mobile ecosystems. I ensure your product speaks a unified language across every touchpoint.",
      tags: ["Mobile First", "Responsive Systems", "PWA"],
    },
    {
      step: "03",
      title: "Visual Storytelling",
      accent: "var(--color-accent-teal)",
      desc: "Crafting ruthless aesthetic identities that command authority. I develop visual languages that don't just look good—they resonate and convert.",
      tags: ["Brand Identity", "Motion Design", "Typography"],
    },
    {
      step: "04",
      title: "Functional Mastery",
      accent: "var(--color-accent-blue)",
      desc: "Bringing visions to life through clean, performant code. I bridge the gap between design and engineering using modern stacks and technical rigor.",
      tags: ["Next.js", "Fullstack Dev", "Optimization"],
    },
  ];

  return (
    <section className="w-full bg-background py-32 px-6 md:px-12 border-t border-border-color/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-mono text-[10px] text-accent-teal uppercase tracking-[0.4em] mb-6"
            >
              // Core Capabilities
            </motion.p>
            <h2 className="text-6xl md:text-8xl font-sans font-black text-foreground uppercase tracking-tighter leading-[0.85]">
              Logic <span className="text-accent-purple">&</span> <br />
              <span className="italic">Execution.</span>
            </h2>
          </div>
          <div className="max-w-sm">
            <p className="font-sans text-muted-text text-lg leading-snug border-l-2 border-accent-gold pl-6">
              I specialize in the gray area between design and code, where the
              most impactful products are born.
            </p>
          </div>
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border-color rounded-3xl overflow-hidden border border-border-color">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-background p-12 md:p-20 flex flex-col gap-10 group hover:bg-foreground/[0.02] transition-colors"
            >
              <div className="flex justify-between items-center">
                <span className="font-mono text-sm text-accent-teal/60">
                  {service.step}
                </span>
                <div
                  className="h-1 w-12 rounded-full transition-all group-hover:w-24 group-hover:shadow-[0_0_15px_rgba(var(--accent-glow))]"
                  style={{ backgroundColor: service.accent }}
                />
              </div>

              <div>
                <h3 className="text-4xl font-sans font-black text-foreground uppercase tracking-tight mb-6 group-hover:text-accent-gold transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-text font-sans text-xl leading-relaxed max-w-md">
                  {service.desc}
                </p>
              </div>

              <div className="flex flex-wrap gap-3 mt-auto pt-8">
                {service.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-[10px] font-mono border border-border-color px-4 py-1.5 rounded-full text-foreground/70 uppercase tracking-widest group-hover:border-accent-purple/50 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
