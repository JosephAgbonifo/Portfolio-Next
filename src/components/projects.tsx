"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { projects } from "@/data/myprojects";

const ProjectCard = ({ project }: { project: (typeof projects)[0] }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative w-full bg-foreground/[0.03] border border-border-color rounded-3xl overflow-hidden hover:border-accent-purple/50 transition-all duration-300 flex flex-col h-fit"
    >
      {/* Image Container */}
      <div className="aspect-video w-full overflow-hidden bg-muted-text/10">
        <motion.img
          src={project.image}
          alt={project.name}
          animate={{
            filter: isHovered ? "grayscale(0%)" : "grayscale(100%)",
            scale: isHovered ? 1.05 : 1,
          }}
          transition={{ duration: 0.4 }}
          className="w-full h-full object-contain object-center hidden md:block"
        />
        {/* Mobile View Image (Static) */}
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-contain object-center md:hidden"
        />
      </div>

      {/* Content Area */}
      <div className="p-6 md:p-8 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1">
            <h3 className="text-2xl font-sans font-black text-foreground uppercase tracking-tight">
              {project.name}
            </h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.stack.map((s) => (
                <span
                  key={s}
                  className="text-[9px] font-mono text-accent-teal border border-accent-teal/20 px-2 py-0.5 rounded uppercase tracking-widest"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
          <motion.div
            animate={{
              rotate: isHovered ? 45 : 0,
              color: isHovered
                ? "var(--color-accent-purple)"
                : "var(--color-muted-text)",
            }}
            className="hidden md:block text-2xl"
          >
            ↗
          </motion.div>
        </div>

        {/* Expandable Details (DESKTOP) */}
        <motion.div
          initial={false}
          animate={{
            height: isHovered ? "auto" : "0px",
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
          className="overflow-hidden hidden md:block"
        >
          <div className="pt-4 mt-4 border-t border-border-color/50">
            <p className="text-muted-text font-sans text-sm leading-relaxed mb-6">
              {project.description}
            </p>

            <div className="flex items-center gap-4 pb-2">
              <a
                href={project.previewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-foreground text-background px-5 py-2 rounded-full font-sans font-bold text-[10px] uppercase tracking-widest hover:bg-accent-teal transition-colors"
              >
                Live Preview
              </a>

              {project.repoStatus === "public" && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-border-color text-foreground px-5 py-2 rounded-full font-sans font-bold text-[10px] uppercase tracking-widest hover:border-accent-pink transition-colors"
                >
                  Source
                </a>
              )}
            </div>
          </div>
        </motion.div>

        {/* Mobile View Details (Always Visible) */}
        <div className="md:hidden mt-4 pt-4 border-t border-border-color">
          <p className="text-muted-text font-sans text-sm leading-relaxed mb-6">
            {project.description}
          </p>
          <div className="flex items-center gap-4">
            <a
              href={project.previewUrl}
              className="bg-foreground text-background px-5 py-2 rounded-full font-sans font-bold text-[10px] uppercase tracking-widest"
            >
              Live Site
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  // Take the first 6 projects for the landing page grid
  const displayedProjects = projects.slice(0, 6);

  return (
    <section
      id="work"
      className="w-full bg-background py-32 px-6 md:px-12 border-t border-border-color/30"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="font-mono text-[10px] text-accent-pink uppercase tracking-[0.4em] mb-4 block">
              // Selected Artifacts
            </span>
            <h2 className="text-6xl md:text-8xl font-sans font-black text-foreground uppercase tracking-tighter leading-none">
              Featured <br />
              <span className="text-accent-purple italic">Work.</span>
            </h2>
          </div>
          <p className="font-sans text-muted-text max-w-[320px] text-lg leading-snug border-l-2 border-accent-gold pl-6">
            Architecting digital products that exist at the intersection of
            decentralization and high-fidelity UX.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {displayedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Archive Link */}
        <div className="mt-24 flex justify-center">
          <Link href="/my-projects">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group flex items-center gap-6 bg-foreground/[0.03] border border-border-color px-12 py-6 rounded-full hover:bg-foreground transition-all duration-500 cursor-pointer"
            >
              <span className="font-sans font-black uppercase tracking-[0.2em] text-sm group-hover:text-background transition-colors">
                Explore Full Archive
              </span>
              <div className="w-10 h-10 rounded-full bg-accent-purple flex items-center justify-center text-white group-hover:bg-accent-teal transition-colors">
                <span className="text-xl">→</span>
              </div>
            </motion.div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
