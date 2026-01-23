"use client";
import { motion, Variants } from "framer-motion";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();
  // Animation variants for the floating cursors
  const floatingVariants: Variants = {
    animate: (i: number) => ({
      x: [0, 25, -20, 15, 0],
      y: [0, -30, 20, -15, 0],
      transition: {
        duration: 10 + i,
        repeat: Infinity,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-background pt-20">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-purple/10 blur-[140px] rounded-full pointer-events-none" />

      {/* Floating Cursor: Product */}
      <motion.div
        custom={1}
        variants={floatingVariants}
        animate="animate"
        className="absolute top-[25%] left-[10%] md:left-[20%] z-20 flex items-center gap-2 pointer-events-none"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          className="text-accent-pink drop-shadow-[0_0_10px_rgba(236,72,153,0.5)]"
        >
          <path
            d="M3 3L10 21L13 13L21 10L3 3Z"
            fill="currentColor"
            stroke="white"
            strokeWidth="1"
          />
        </svg>
        <span className="bg-accent-pink text-background px-3 py-1 rounded-full font-mono text-[10px] font-bold uppercase tracking-tighter border border-white/20">
          Product
        </span>
      </motion.div>

      {/* Floating Cursor: Design */}
      <motion.div
        custom={4}
        variants={floatingVariants}
        animate="animate"
        className="absolute bottom-[30%] right-[10%] md:right-[20%] z-20 flex items-center gap-2 pointer-events-none"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          className="text-accent-gold drop-shadow-[0_0_10px_rgba(253,224,71,0.5)]"
        >
          <path
            d="M3 3L10 21L13 13L21 10L3 3Z"
            fill="currentColor"
            stroke="white"
            strokeWidth="1"
          />
        </svg>
        <span className="bg-accent-gold text-background px-3 py-1 rounded-full font-mono text-[10px] font-bold uppercase tracking-tighter border border-white/20">
          Design
        </span>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-mono text-muted-text text-sm md:text-base mb-8 flex items-center justify-center gap-2"
        >
          <span className="text-accent-teal tracking-tighter">●</span> Based in
          Lagos, Nigeria{" "}
          <span className="text-accent-pink tracking-tighter">//</span>{" "}
          Available 2026
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-sans font-extrabold text-6xl md:text-[9rem] leading-[0.85] tracking-tighter text-foreground uppercase"
        >
          DIGITAL <br />
          <span className="text-accent-purple inline-block hover:scale-105 transition-transform cursor-default">
            EXPERIENCE
          </span>{" "}
          <br />
          <span className="flex flex-wrap items-center justify-center gap-x-4">
            <span className="text-accent-teal italic">DESIGNER</span>
            <span className="text-accent-gold">&</span>
            <span className="relative">
              DEV
              <motion.div
                className="absolute -bottom-2 left-0 w-full h-1 bg-accent-blue"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 1, duration: 0.8 }}
              />
            </span>
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6"
        >
          <p className="max-w-[400px] font-sans text-muted-text text-balance">
            Building highly interactive, visually polished digital products that
            bridge the gap between design and engineering.
          </p>

          <div
            onClick={() => router.push("/my-projects")}
            className="flex items-center gap-4"
          >
            <button className="group relative bg-foreground text-background px-8 py-4 rounded-full font-sans font-bold transition-all hover:pr-12">
              Explore Projects
              <span className="absolute right-4 opacity-0 group-hover:opacity-100 transition-all underline decoration-accent-teal underline-offset-2">
                →
              </span>
            </button>
          </div>
        </motion.div>
      </div>

      {/* Decorative Bottom Border */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-border-color to-transparent" />
    </section>
  );
};

export default Hero;
