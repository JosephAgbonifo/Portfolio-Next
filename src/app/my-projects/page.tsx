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
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative border-b border-border-color/50 group"
    >
      <div className="grid grid-cols-12 items-center py-8 px-4 gap-4 transition-colors group-hover:bg-foreground/[0.02]">
        {/* Project Name & Year */}
        <div className="col-span-6 md:col-span-4">
          <h2 className="text-xl md:text-3xl font-sans font-black text-foreground uppercase tracking-tighter">
            {project.name}
          </h2>
          <span className="font-mono text-[10px] text-muted-text uppercase tracking-widest mt-1 block">
            // Ref: {project.id.padStart(3, "0")}
          </span>
        </div>

        {/* Stack (Hidden on very small screens) */}
        <div className="hidden md:flex col-span-4 flex-wrap gap-2">
          {project.stack.map((s) => (
            <span
              key={s}
              className="text-[10px] font-mono border border-border-color px-2 py-0.5 rounded text-muted-text uppercase"
            >
              {s}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="col-span-6 md:col-span-4 flex justify-end items-center gap-6">
          <a
            href={project.previewUrl}
            target="_blank"
            className="text-xs font-sans font-bold uppercase tracking-widest text-foreground hover:text-accent-purple transition-colors"
          >
            Live Site
          </a>

          {project.repoStatus === "public" ? (
            <a
              href={project.githubUrl}
              className="text-xs font-sans font-bold uppercase tracking-widest text-foreground hover:text-accent-teal transition-colors"
            >
              GitHub
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
            className="fixed pointer-events-none z-50 hidden lg:block"
            style={{
              top: "30%",
              right: "15%",
              width: "400px",
              aspectRatio: "16/9",
            }}
          >
            <div className="w-full h-full rounded-2xl overflow-hidden border-2 border-accent-purple/30 shadow-2xl bg-background">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover"
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
    <main className="min-h-screen bg-background pt-32 pb-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Navigation Back */}
        <Link href="/" className="group flex items-center gap-2 mb-16">
          <span className="text-accent-teal group-hover:-translate-x-1 transition-transform">
            ←
          </span>
          <span className="font-mono text-xs text-muted-text uppercase tracking-widest group-hover:text-foreground transition-colors">
            Return Home
          </span>
        </Link>

        {/* Page Header */}
        <header className="mb-20">
          <h1 className="text-7xl md:text-[10rem] font-sans font-black text-foreground uppercase tracking-[0.1em] leading-none opacity-10 absolute -z-10 select-none">
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
        <footer className="mt-20 flex justify-between items-center font-mono text-[10px] text-muted-text uppercase tracking-widest">
          <span>Total Projects: {projects.length}</span>
          <span>Ref: 2023 — 2026</span>
        </footer>
      </div>
    </main>
  );
}
