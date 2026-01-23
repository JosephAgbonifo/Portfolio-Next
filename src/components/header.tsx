"use client";
import { useRouter, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Home, FolderGit2, User, Mail, Plus, Contact2 } from "lucide-react";

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();

  const navLinks = [
    {
      name: "Home",
      href: "/",
      icon: <Home size={18} />,
      color: "hover:text-accent-gold",
    },
    {
      name: "Projects",
      href: "/my-projects",
      icon: <FolderGit2 size={18} />,
      color: "hover:text-accent-gold",
    },
    {
      name: "About",
      href: "/about",
      icon: <User size={18} />,
      color: "hover:text-accent-pink",
    },
    {
      name: "Contact",
      href: "/contact",
      icon: <Mail size={18} />,
      color: "hover:text-accent-blue",
    },
  ];

  return (
    <>
      {/* --- DESKTOP TOP NAV --- */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3 rounded-2xl border border-border-color bg-background/70 backdrop-blur-md">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-accent-teal animate-pulse" />
            <span className="font-sans font-bold text-foreground tracking-tighter uppercase">
              JOSEPH<span className="text-accent-purple">.</span>
            </span>
          </div>

          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-mono text-xs uppercase tracking-widest transition-colors ${
                  pathname === link.href ? "text-foreground" : "text-muted-text"
                } ${link.color}`}
              >
                [ {link.name} ]
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <div className="px-3 py-1 rounded-full border border-border-color bg-background/50">
              <span className="font-mono text-[10px] text-accent-teal uppercase">
                Available for hire
              </span>
            </div>
            <button
              onClick={() => router.push("/contact")}
              className="bg-foreground text-background px-4 py-2 rounded-xl font-sans text-xs font-bold hover:bg-accent-purple transition-all active:scale-95"
            >
              Let's Talk
            </button>
          </div>
        </div>
      </nav>

      {/* --- MOBILE LOGO BAR (TOP) --- */}
      <div className="fixed top-0 left-0 w-full p-6 flex justify-between items-center md:hidden z-50 pointer-events-none">
        <div className="flex items-center gap-2 bg-background/80 backdrop-blur-md p-2 px-4 rounded-full border border-border-color pointer-events-auto">
          <div className="w-2 h-2 rounded-full bg-accent-teal animate-pulse" />
          <span className="font-sans font-black text-xs text-foreground tracking-tighter uppercase">
            JA.
          </span>
        </div>
        <button
          onClick={() => router.push("/contact")}
          className="bg-accent-purple text-white p-3 rounded-full shadow-lg pointer-events-auto active:scale-90 transition-transform"
        >
          <Contact2 size={20} />
        </button>
      </div>

      {/* --- MOBILE NAVIGATION DOCK (BOTTOM) --- */}
      <div className="fixed bottom-8 left-0 w-full flex justify-center px-6 md:hidden z-50">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="flex items-center gap-2 bg-background/90 backdrop-blur-xl border border-border-color p-2 rounded-3xl shadow-2xl"
        >
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="relative">
              <motion.div
                className={`p-4 rounded-2xl transition-colors ${
                  pathname === link.href
                    ? "text-accent-teal bg-foreground/5"
                    : "text-muted-text"
                }`}
              >
                {link.icon}
              </motion.div>
              {pathname === link.href && (
                <motion.div
                  layoutId="active-dot"
                  className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent-teal"
                />
              )}
            </Link>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default Header;
