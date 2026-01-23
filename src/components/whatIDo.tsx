"use client";
import React from "react";
import { motion } from "framer-motion";

const WhatIDo = () => {
  const services = [
    {
      step: "01",
      title: "Interface Architect",
      accent: "var(--color-accent-gold)",
      tags: ["UX Strategy", "Behavioral Logic"],
    },
    {
      step: "02",
      title: "Cross-Platform Logic",
      accent: "var(--color-accent-purple)",
      tags: ["Mobile First", "Responsive"],
    },
    {
      step: "03",
      title: "Visual Storytelling",
      accent: "var(--color-accent-teal)",
      tags: ["Brand Identity", "Motion"],
    },
    {
      step: "04",
      title: "Functional Mastery",
      accent: "var(--color-accent-blue)",
      tags: ["Next.js", "Optimization"],
    },
  ];

  // Duplicate the array to create a seamless loop
  const marqueeItems = [...services, ...services];

  return (
    <section className="w-full bg-background py-20 overflow-hidden border-t border-border-color/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="font-mono text-[10px] text-accent-teal uppercase tracking-[0.4em]"
        >
          // Capabilities Archive
        </motion.p>
      </div>

      {/* Marquee Container */}
      <div className="relative flex whitespace-nowrap border-y border-border-color/30 bg-foreground/[0.01] py-10">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex gap-8 px-4"
        >
          {marqueeItems.map((service, index) => (
            <div
              key={index}
              className="group flex flex-col gap-4 min-w-[300px] md:min-w-[450px] p-8 rounded-3xl border border-border-color/50 bg-background transition-all hover:border-accent-purple/50"
            >
              <div className="flex justify-between items-center">
                <span className="font-mono text-[10px] text-muted-text">
                  [{service.step}]
                </span>
                <div
                  className="h-1 w-8 rounded-full transition-all group-hover:w-16"
                  style={{ backgroundColor: service.accent }}
                />
              </div>

              <h3 className="text-3xl md:text-4xl font-sans font-black text-foreground uppercase tracking-tighter">
                {service.title}
              </h3>

              <div className="flex gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[9px] font-mono border border-border-color/50 px-3 py-1 rounded-full text-muted-text uppercase tracking-widest"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhatIDo;
