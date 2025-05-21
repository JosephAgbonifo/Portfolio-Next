"use client";
import { useEffect, useState } from "react";

export function useScrollProgress() {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [docPercent, setDocPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const totalScroll = docHeight - winHeight;

      const scroll = (scrollTop / totalScroll) * 100;
      const scrollwin = (scrollTop / winHeight) * 100;
      setScrollPercent(scrollwin);
      setDocPercent(scroll);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // init on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollPercent;
}

export function usedocProgress() {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [docPercent, setDocPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const totalScroll = docHeight - winHeight;

      const scroll = (scrollTop / totalScroll) * 100;
      const scrollwin = (scrollTop / winHeight) * 100;
      setScrollPercent(scrollwin);
      setDocPercent(scroll);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // init on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return docPercent;
}
