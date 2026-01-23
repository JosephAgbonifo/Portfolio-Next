"use client";
import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const About = () => {
  const router = useRouter();
  return (
    <section
      id="about"
      className="relative w-full bg-background py-32 px-6 md:px-12 border-t border-border-color/30"
    >
      <div className="max-w-7xl mx-auto">
        {/* Top Metadata Row: The "Status" Bar */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-mono text-[10px] text-muted-text leading-relaxed uppercase tracking-[0.2em]"
          >
            // Strategic Thinking
            <br />
            // Technical Precision
          </motion.div>

          {/* Social Icons Hub */}
          <div className="flex items-center gap-4 bg-foreground/5 p-1.5 rounded-full border border-border-color backdrop-blur-sm">
            {[
              { logo: "In", href: "https://linkedin.com/in/josephagbonifo" },
              { logo: "Gh", href: "https://github.com/josephagbonifo" },
              { logo: "X", href: "https://x.com/hellojoedev" },
            ].map((icon, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -2 }}
                onClick={() => router.push(icon.href)}
                className="w-9 h-9 rounded-full bg-foreground text-background flex items-center justify-center text-[11px] font-black cursor-pointer hover:bg-accent-teal transition-colors shadow-lg"
              >
                {icon.logo}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 bg-background border border-border-color px-5 py-2.5 rounded-2xl shadow-sm"
          >
            <div className="relative">
              <div className="w-2 h-2 rounded-full bg-accent-pink animate-ping absolute" />
              <div className="w-2 h-2 rounded-full bg-accent-pink relative" />
            </div>
            <span className="font-mono text-[11px] text-foreground uppercase tracking-tighter">
              Current: Shiping V2
            </span>
          </motion.div>
        </div>

        {/* Main Content: The Narrative */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
          <div className="md:col-span-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-sans font-bold text-foreground tracking-tight leading-[1.1] mb-14"
            >
              Turning{" "}
              <span className="text-accent-purple italic">
                complex friction
              </span>{" "}
              into seamless <br className="hidden md:block" />
              interaction. I build tools for those who{" "}
              <br className="hidden md:block" />
              refuse to settle for "standard."
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-2"
            >
              <h3 className="text-accent-teal text-4xl md:text-5xl font-sans font-black leading-none uppercase italic tracking-tighter">
                Logic in Motion
              </h3>
              <h3 className="text-foreground text-4xl md:text-5xl font-sans font-black leading-none uppercase tracking-tighter opacity-40">
                Design by Code
              </h3>
            </motion.div>

            <div className="h-[1px] w-full bg-gradient-to-r from-border-color via-accent-gold/20 to-transparent my-12" />

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="max-w-xl text-muted-text text-xl font-sans leading-relaxed tracking-tight"
            >
              I don't just "make websites." I engineer digital artifacts. My
              work sits at the intersection of aesthetic ruthlessness and clean,
              scalable architecture.
            </motion.p>
          </div>

          {/* Sidebar: The Signature Style */}
          <div className="md:col-span-4 flex flex-col items-end gap-16">
            <p className="text-right font-mono text-[12px] text-muted-text max-w-[200px] leading-relaxed italic">
              "Good design is obvious. <br /> Great design is invisible logic."
            </p>

            {/* Interactive Badge */}
            <motion.div
              whileHover={{ rotate: 90 }}
              className="w-24 h-24 rounded-full border-2 border-dashed border-accent-gold/40 flex items-center justify-center p-2"
            >
              <div className="w-full h-full rounded-full bg-accent-gold text-background flex items-center justify-center font-black text-2xl">
                JS
              </div>
            </motion.div>

            <button
              onClick={() => router.push("/about")}
              className="group flex items-center gap-6 border border-border-color px-8 py-4 rounded-full hover:border-accent-purple transition-all bg-background/50 overflow-hidden relative"
            >
              <span className="font-sans font-bold text-sm z-10">
                MORE ABOUT ME
              </span>
              <div className="absolute inset-0 bg-accent-purple translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 -z-0" />
              <span className="group-hover:translate-x-2 group-hover:text-background transition-all z-10">
                →
              </span>
            </button>
          </div>
        </div>

        {/* Dynamic Background Text */}
        <div className="mt-10 relative flex overflow-hidden border-y border-border-color/10 py-4 pointer-events-none">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex whitespace-nowrap"
          >
            {/* First Set */}
            <span className="text-foreground font-sans font-black text-[12vw] opacity-[0.03] uppercase leading-none pr-8">
              Creative Engineering — Creative Engineering —&nbsp;
            </span>
            {/* Second Set (Duplicate for seamless loop) */}
            <span className="text-foreground font-sans font-black text-[12vw] opacity-[0.03] uppercase leading-none pr-8">
              Creative Engineering — Creative Engineering —&nbsp;
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
