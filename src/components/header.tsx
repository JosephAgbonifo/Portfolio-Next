"use client";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3 rounded-2xl border border-border-color bg-background/70 backdrop-blur-md">
        {/* Logo / Name */}
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-accent-teal animate-pulse" />
          <span className="font-sans font-bold text-foreground tracking-tighter">
            JOSEPH<span className="text-accent-purple">.</span>
          </span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="/"
            className="font-mono text-xs uppercase tracking-widest text-muted-text hover:text-accent-gold transition-colors"
          >
            [ Home ]
          </a>
          <a
            href="/my-projects"
            className="font-mono text-xs uppercase tracking-widest text-muted-text hover:text-accent-gold transition-colors"
          >
            [ Projects ]
          </a>
          <a
            href="/about"
            className="font-mono text-xs uppercase tracking-widest text-muted-text hover:text-accent-pink transition-colors"
          >
            [ About ]
          </a>
          <a
            href="/contact"
            className="font-mono text-xs uppercase tracking-widest text-muted-text hover:text-accent-blue transition-colors"
          >
            [ Contact ]
          </a>
        </div>

        {/* CTA / Status Indicator */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:block px-3 py-1 rounded-full border border-border-color bg-background/50">
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
  );
};

export default Header;
