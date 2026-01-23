"use client";
import React from "react";
import { motion } from "framer-motion";
import { Shield, Zap, Target, Code, Cpu, Eye, Download } from "lucide-react";

const AboutPage = () => {
  const principles = [
    {
      title: "Aesthetic Logic",
      desc: "Beauty is not an afterthought; it is a functional requirement. I build interfaces that respect the user's intent and intelligence.",
      icon: <Eye className="text-accent-purple" size={24} />,
    },
    {
      title: "Technical Rigor",
      desc: "From Rust systems to React components, I write code that is scalable, documented, and built for high-performance environments.",
      icon: <Code className="text-accent-teal" size={24} />,
    },
    {
      title: "User-Centric Innovation",
      desc: "I leverage emerging technologies like the Flare Network to solve real-world problems in decentralized finance and circular economies.",
      icon: <Zap className="text-accent-gold" size={24} />,
    },
  ];

  return (
    <main className="min-h-screen bg-background pt-32 pb-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <header className="mb-24 relative">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-mono text-accent-teal text-xs uppercase tracking-[0.5em] mb-4 block"
          >
            // The Engineer Behind The Pixels
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-[120px] font-sans font-black text-foreground uppercase tracking-tighter leading-[0.85]"
          >
            JOSEPH <br />
            <span className="text-accent-purple italic">AGBONIFO.</span>
          </motion.h1>

          {/* Absolute Background Text */}
          <div className="absolute top-0 right-0 opacity-[0.03] select-none pointer-events-none hidden lg:block">
            <span className="text-[200px] font-black uppercase">BIO</span>
          </div>
        </header>

        {/* Narrative & Image Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32">
          <div className="lg:col-span-7 space-y-8">
            <h3 className="text-2xl md:text-4xl font-sans font-bold text-foreground leading-tight">
              I am a Creative Engineer obsessed with the friction-less delivery
              of complex ideas.
            </h3>
            <div className="h-[1px] w-20 bg-accent-gold" />
            <div className="space-y-6 font-sans text-muted-text text-lg md:text-xl leading-relaxed">
              <p>
                Based in Lagos, Nigeria, I operate at the intersection of
                <strong> Design Systems</strong> and{" "}
                <strong>Full-Stack Development</strong>. My journey is defined
                by a relentless curiosity for how things work—and a drive to
                make them work better.
              </p>
              <p>
                Whether it's architecting smart contracts for{" "}
                <strong>Quirklr</strong> on the Flare Network or building
                high-fidelity mobile experiences with{" "}
                <strong>React Native</strong>, my goal is always the same: to
                create digital artifacts that are as robust as they are
                beautiful.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] bg-foreground/[0.05] rounded-[2.5rem] overflow-hidden border border-border-color">
              <img
                src="/profile-alt.png"
                alt="Joseph Agbonifo"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-background/80 backdrop-blur-md rounded-2xl border border-border-color">
                <span className="font-mono text-[10px] text-accent-pink uppercase tracking-widest block mb-1">
                  Current Focus
                </span>
                <p className="text-sm font-bold text-foreground uppercase tracking-tight">
                  EVM-Compatible Economies & UX
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Philosophy / Principles Section */}
        <section className="mb-32">
          <div className="mb-16">
            <h4 className="font-sans text-4xl font-black uppercase tracking-tighter text-foreground">
              My Core{" "}
              <span className="text-accent-teal italic">Principles</span>
            </h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {principles.map((p, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="p-10 rounded-3xl border border-border-color bg-foreground/[0.02] hover:bg-foreground/[0.04] transition-all"
              >
                <div className="mb-6">{p.icon}</div>
                <h5 className="text-xl font-bold text-foreground mb-4 uppercase tracking-tight">
                  {p.title}
                </h5>
                <p className="text-muted-text text-sm leading-relaxed">
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Experience / Timeline Section */}
        <section className="border-t border-border-color/30 pt-32">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <h4 className="text-4xl font-sans font-black uppercase text-foreground sticky top-32">
                The <br /> Journey.
              </h4>
            </div>
            <div className="md:col-span-8 space-y-16">
              {[
                {
                  year: "Nov 2025 — Present",
                  role: "Senior Frontend Engineer",
                  company: "Vertexone Holdings",
                  desc: "Architecting the company’s digital footprint from the ground up using the MERN stack. I bridge the gap between high-level marketing strategy and functional, responsive web ecosystems.",
                },
                {
                  year: "Aug 2025 — Present",
                  role: "Administrator & Web Manager",
                  company: "Labora",
                  desc: "Overseeing critical digital infrastructure, ensuring 99.9% uptime and security. I leverage user analytics to pivot content strategy and optimize site usability for a growing audience.",
                },
                {
                  year: "Feb 2025 — Oct 2025",
                  role: "Frontend Developer (Intern)",
                  company: "Tann Mann Gaadi",
                  desc: "Translated complex Figma architectures into performant Next.js applications. Specialized in REST API integration and ensuring strict cross-browser compatibility and accessibility.",
                },
                {
                  year: "Feb 2025 — Dec 2025",
                  role: "Fullstack Developer",
                  company: "De-Emmaculate College",
                  desc: "Re-engineered the institution’s interface to enhance student-parent engagement. Implemented deep SEO optimizations and security protocols while managing the end-to-end feature roadmap.",
                },
                {
                  year: "2024 — Present",
                  role: "Creative Lead & Engineer",
                  company: "Quirklr / Web3 Projects",
                  desc: "Directing the technical architecture for decentralized launchpads. Building smart-contract infrastructure and UI flows for the next generation of circular economy protocols on the Flare Network.",
                },
              ].map((job, i) => (
                <div
                  key={i}
                  className="group relative pl-8 border-l border-border-color hover:border-accent-purple transition-colors"
                >
                  <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-border-color group-hover:bg-accent-purple transition-colors" />
                  <span className="font-mono text-xs text-accent-gold uppercase tracking-widest block mb-2">
                    {job.year}
                  </span>
                  <h5 className="text-2xl font-bold text-foreground uppercase tracking-tight">
                    {job.role}
                  </h5>
                  <p className="text-accent-teal text-sm font-mono mb-4">
                    {job.company}
                  </p>
                  <p className="text-muted-text max-w-2xl leading-relaxed">
                    {job.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <a
          href="/Joseph_Agbonifo_Resume.pdf" // Ensure this filename matches your file in /public
          download="Joseph_Agbonifo_Resume"
          className="group mt-10 h-20 md:w-60 m-auto flex items-center gap-2 bg-foreground/5 border border-border-color px-4 py-2 rounded-xl hover:bg-foreground hover:text-background transition-all duration-300"
        >
          <span className="font-mono text-[10px] md:text-xl uppercase tracking-widest font-bold">
            Resume
          </span>
          <Download
            size={14}
            className="group-hover:translate-y-0.5 transition-transform"
          />
        </a>
      </div>
    </main>
  );
};

export default AboutPage;
