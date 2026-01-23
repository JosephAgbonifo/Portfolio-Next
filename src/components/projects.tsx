"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { projects } from "@/data/myprojects";

const ProjectCard = ({ project }: { project: (typeof projects)[0] }) => {
  return (
    <motion.div
      id="work"
      layout
      className="group relative w-full bg-foreground/[0.03] border border-border-color rounded-3xl overflow-hidden hover:border-accent-purple/50 transition-colors"
    >
      {/* Image Container */}
      <div className="aspect-video w-full overflow-hidden bg-muted-text/10">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content Area */}
      <div className="p-6 md:p-8">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-2xl font-sans font-black text-foreground uppercase tracking-tight">
              {project.name}
            </h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.stack.map((s) => (
                <span
                  key={s}
                  className="text-[10px] font-mono text-accent-teal uppercase tracking-widest"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
          <div className="hidden md:block">
            <span className="text-muted-text group-hover:text-accent-purple transition-colors">
              ↗
            </span>
          </div>
        </div>

        {/* Expandable Details (Always visible on mobile, hidden-then-shown on desktop) */}
        <motion.div className="md:h-0 md:opacity-0 md:overflow-hidden group-hover:md:h-auto group-hover:md:opacity-100 transition-all duration-500 ease-in-out">
          <p className="text-muted-text font-sans text-sm leading-relaxed mb-6 pt-4 border-t border-border-color">
            {project.description}
          </p>

          <div className="flex items-center gap-4">
            <a
              href={project.previewUrl}
              target="_blank"
              className="bg-foreground text-background px-5 py-2 rounded-full font-sans font-bold text-xs hover:bg-accent-teal transition-colors"
            >
              Live Preview
            </a>

            {project.repoStatus === "public" && (
              <a
                href={project.githubUrl}
                target="_blank"
                className="border border-border-color text-foreground px-5 py-2 rounded-full font-sans font-bold text-xs hover:border-accent-pink transition-colors"
              >
                Source Code
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const displayedProjects = projects.slice(0, 6);

  return (
    <section className="w-full bg-background py-32 px-6 md:px-12 border-t border-border-color/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <span className="font-mono text-[10px] text-accent-pink uppercase tracking-[0.4em] mb-4 block">
              // Selected Artifacts
            </span>
            <h2 className="text-6xl md:text-8xl font-sans font-black text-foreground uppercase tracking-tighter leading-none">
              Featured <br />{" "}
              <span className="text-accent-purple italic">Work.</span>
            </h2>
          </div>
          <p className="font-sans text-muted-text max-w-[300px] text-lg leading-snug">
            A curation of digital products built at the intersection of
            decentralization and user experience.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Load More Button */}
        <div className="mt-20 flex justify-center">
          <Link href="/my-projects">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-4 bg-foreground/[0.03] border border-border-color px-10 py-5 rounded-full hover:bg-foreground hover:text-background transition-all duration-300"
            >
              <span className="font-sans font-bold uppercase tracking-widest text-sm">
                View Archive
              </span>
              <span className="text-accent-purple group-hover:text-background transition-colors">
                →
              </span>
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
