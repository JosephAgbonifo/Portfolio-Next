"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, ArrowLeft, Loader2 } from "lucide-react";
import Link from "next/link";

const ContactPage = () => {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const response = await fetch("https://formspree.io/f/xbdgaqde", {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      setStatus("success");
      (e.target as HTMLFormElement).reset();
    } else {
      setStatus("error");
    }
  }

  return (
    <main className="min-h-screen bg-background pt-32 pb-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Navigation Back */}
        <Link href="/" className="group flex items-center gap-2 mb-12 w-fit">
          <ArrowLeft
            size={16}
            className="text-accent-teal group-hover:-translate-x-1 transition-transform"
          />
          <span className="font-mono text-[10px] text-muted-text uppercase tracking-widest">
            Return home
          </span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left Column: Context */}
          <div className="lg:col-span-5">
            <h1 className="text-6xl md:text-8xl font-sans font-black text-foreground uppercase tracking-tighter leading-none mb-8">
              Let's <br />{" "}
              <span className="text-accent-purple italic">Connect.</span>
            </h1>
            <p className="text-muted-text text-xl font-sans leading-relaxed mb-12 max-w-sm">
              I&apos;m currently available for technical partnerships, Web3
              architecture, and high-fidelity frontend engineering.
            </p>

            <div className="space-y-8">
              <div>
                <span className="font-mono text-[10px] text-accent-gold uppercase tracking-widest block mb-2">
                  // Direct Line
                </span>
                <a
                  href="mailto:josephagbonifo9@gmail.com"
                  className="text-2xl font-sans font-bold text-foreground hover:text-accent-gold transition-colors"
                >
                  josephagbonifo9@gmail.com
                </a>
              </div>
              <div>
                <span className="font-mono text-[10px] text-accent-teal uppercase tracking-widest block mb-2">
                  // Digital Coordinates
                </span>
                <p className="text-lg font-sans text-foreground">
                  Lagos, Nigeria — 6.5244° N, 3.3792° E
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: The Form */}
          <div className="lg:col-span-7 bg-foreground/[0.02] border border-border-color p-8 md:p-12 rounded-[2.5rem]">
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center py-20"
                >
                  <CheckCircle size={64} className="text-accent-teal mb-6" />
                  <h2 className="text-3xl font-black uppercase text-foreground mb-4">
                    Transmission Received
                  </h2>
                  <p className="text-muted-text mb-8">
                    Your message has been logged into the system. I'll get back
                    to you shortly.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="text-accent-purple font-mono text-xs uppercase tracking-widest border-b border-accent-purple pb-1"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="name"
                        className="font-mono text-[10px] text-muted-text uppercase tracking-widest"
                      >
                        01. Name
                      </label>
                      <input
                        required
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Your full name"
                        className="bg-transparent border-b border-border-color py-4 text-foreground focus:outline-none focus:border-accent-purple transition-colors font-sans"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="email"
                        className="font-mono text-[10px] text-muted-text uppercase tracking-widest"
                      >
                        02. Email Address
                      </label>
                      <input
                        required
                        type="email"
                        name="email"
                        id="email"
                        placeholder="your@email.com"
                        className="bg-transparent border-b border-border-color py-4 text-foreground focus:outline-none focus:border-accent-purple transition-colors font-sans"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="service"
                      className="font-mono text-[10px] text-muted-text uppercase tracking-widest"
                    >
                      03. Project Type
                    </label>
                    <select
                      name="service"
                      id="service"
                      className="bg-transparent border-b border-border-color py-4 text-foreground focus:outline-none focus:border-accent-purple transition-colors font-sans appearance-none"
                    >
                      <option className="bg-background" value="frontend">
                        Frontend Architecture
                      </option>
                      <option className="bg-background" value="web3">
                        Web3 / Decentralized Systems
                      </option>
                      <option className="bg-background" value="fullstack">
                        Fullstack Development
                      </option>
                      <option className="bg-background" value="mobile">
                        Mobile (React Native)
                      </option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="message"
                      className="font-mono text-[10px] text-muted-text uppercase tracking-widest"
                    >
                      04. Message
                    </label>
                    <textarea
                      required
                      name="message"
                      id="message"
                      rows={4}
                      placeholder="What are we building?"
                      className="bg-transparent border-b border-border-color py-4 text-foreground focus:outline-none focus:border-accent-purple transition-colors font-sans resize-none"
                    />
                  </div>

                  <button
                    disabled={status === "loading"}
                    type="submit"
                    className="group flex items-center justify-center gap-4 w-full bg-foreground text-background py-6 rounded-2xl font-sans font-black uppercase tracking-widest text-sm hover:bg-accent-teal transition-all disabled:opacity-50"
                  >
                    {status === "loading" ? (
                      <Loader2 className="animate-spin" />
                    ) : (
                      <>
                        Push Message{" "}
                        <Send
                          size={18}
                          className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                        />
                      </>
                    )}
                  </button>
                  {status === "error" && (
                    <p className="text-accent-pink font-mono text-[10px] text-center uppercase tracking-widest">
                      Error transmitting message. Please try again.
                    </p>
                  )}
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
