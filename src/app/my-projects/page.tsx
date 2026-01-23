"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { projects, Project } from "@/data/myprojects";

const ProjectRow = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative border-b border-border-color/50 group"
    >
      <div className="flex flex-col md:grid md:grid-cols-12 md:items-center py-8 px-4 gap-6 md:gap-4 transition-colors group-hover:bg-foreground/[0.02]">
        {/* Project Name & Year */}
        <div className="md:col-span-4">
          <h2 className="text-2xl md:text-3xl font-sans font-black text-foreground uppercase tracking-tighter">
            {project.name}
          </h2>
          <span className="font-mono text-[10px] text-muted-text uppercase tracking-widest mt-1 block">
            // Ref: {project.id.padStart(3, "0")}
          </span>
        </div>

        {/* Mobile-Only Image Display */}
        <div className="md:hidden w-full overflow-hidden rounded-xl border border-border-color">
          <img
            src={project.image}
            alt={project.name}
            className="w-full aspect-square object-center p-10 object-contain bg-foreground"
          />
        </div>

        {/* Stack */}
        <div className="flex md:col-span-4 flex-wrap gap-2">
          {project.stack.map((s) => (
            <span
              key={s}
              className="text-[10px] font-mono border border-border-color px-2 py-0.5 rounded text-muted-text uppercase"
            >
              {s}
            </span>
          ))}
        </div>

        {/* Description - Visible on Mobile, Hidden on Desktop (optional, fits the "all details" request) */}
        <p className="md:hidden text-muted-text text-sm leading-relaxed font-sans">
          {project.description}
        </p>

        {/* Links */}
        <div className="flex md:col-span-4 justify-start md:justify-end items-center gap-6 pt-4 md:pt-0">
          <a
            href={project.previewUrl}
            target="_blank"
            className="text-xs font-sans font-bold uppercase tracking-widest text-foreground hover:text-accent-purple transition-colors flex items-center gap-2"
          >
            Live Site <span className="md:hidden">↗</span>
          </a>

          {project.repoStatus === "public" ? (
            <a
              href={project.githubUrl}
              className="text-xs font-sans font-bold uppercase tracking-widest text-foreground hover:text-accent-teal transition-colors flex items-center gap-2"
            >
              GitHub <span className="md:hidden">↗</span>
            </a>
          ) : (
            <span className="text-[10px] font-mono text-muted-text/50 uppercase italic">
              Private Repo
            </span>
          )}
        </div>
      </div>

      {/* Floating Image Preview on Hover (Desktop Only) */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: 20 }}
            className="fixed pointer-events-none z-50 hidden md:block" // Changed hidden lg:block to md:block
            style={{
              top: "35%",
              right: "10%",
              width: "450px",
              aspectRatio: "16/9",
            }}
          >
            <div className="w-full aspect-square rounded-2xl overflow-hidden border-2 border-accent-purple/30 shadow-2xl bg-background">
              <img
                src={project.image}
                alt={project.name}
                className="w-full aspect-square object-contain p-10 object-center bg-foreground"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function MyProjectsPage() {
  return (
    <main className="min-h-screen bg-background pt-32 pb-20 px-6 md:px-12 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Navigation Back */}
        <Link href="/" className="group flex items-center gap-2 mb-16 w-fit">
          <span className="text-accent-teal group-hover:-translate-x-1 transition-transform">
            ←
          </span>
          <span className="font-mono text-xs text-muted-text uppercase tracking-widest group-hover:text-foreground transition-colors">
            Return Home
          </span>
        </Link>

        {/* Page Header */}
        <header className="mb-20 relative">
          <h1 className="text-7xl md:text-[10rem] font-sans font-black text-foreground uppercase tracking-[0.1em] leading-none opacity-5 absolute -top-10 -left-4 -z-10 select-none">
            ARCHIVE
          </h1>
          <div className="pt-10">
            <p className="font-mono text-accent-pink text-xs uppercase tracking-[0.5em] mb-4">
              // Full Project Directory
            </p>
            <h2 className="text-4xl md:text-6xl font-sans font-black text-foreground uppercase tracking-tight">
              A comprehensive list of <br />{" "}
              <span className="text-accent-gold italic">
                developed artifacts.
              </span>
            </h2>
          </div>
        </header>

        {/* The List Container */}
        <div className="mt-20 border-t border-border-color">
          {projects.map((project, index) => (
            <ProjectRow key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Footer info */}
        <footer className="mt-20 pt-10 border-t border-border-color/30 flex justify-between items-center font-mono text-[10px] text-muted-text uppercase tracking-widest">
          <span>Total Projects: {projects.length}</span>
          <span>Ref: 2023 — 2026</span>
        </footer>
      </div>
    </main>
  );
}
