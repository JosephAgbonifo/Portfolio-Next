"use client";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
import { IconHome } from "@tabler/icons-react";
import { FaInfo, FaBriefcase, FaHeadset } from "react-icons/fa6";
export function FloatingNavDemo() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "#about",
      icon: <FaInfo className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Experience",
      link: "#experience",
      icon: (
        <FaBriefcase className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Contact",
      link: "#contact",
      icon: <FaHeadset className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
  ];
  return <FloatingNav navItems={navItems} />;
}
