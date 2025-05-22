"use client";
import { useEffect, useState, useRef } from "react";

export function useScrollProgress() {
  const [scrollPercent, setScrollPercent] = useState(0);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (rafId.current !== null) return; // already scheduled
      rafId.current = window.requestAnimationFrame(() => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight;
        const winHeight = window.innerHeight;
        const totalScroll = docHeight - winHeight;
        const scrollwin = (scrollTop / winHeight) * 100;
        setScrollPercent(scrollwin);
        rafId.current = null;
      });
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // init on mount
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId.current !== null) {
        window.cancelAnimationFrame(rafId.current);
      }
    };
  }, []);
  return scrollPercent;
}

export function usedocProgress() {
  const [docPercent, setDocPercent] = useState(0);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (rafId.current !== null) return;
      rafId.current = window.requestAnimationFrame(() => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight;
        const winHeight = window.innerHeight;
        const totalScroll = docHeight - winHeight;
        const scroll = (scrollTop / totalScroll) * 100;
        setDocPercent(scroll);
        rafId.current = null;
      });
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // init on mount
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId.current !== null) {
        window.cancelAnimationFrame(rafId.current);
      }
    };
  }, []);
  return docPercent;
}
