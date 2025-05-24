import React from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiPostgresql,
  SiGit,
  SiNodedotjs,
  SiExpress,
  SiFramer,
  SiFirebase,
  SiVercel,
  SiDocker,
  SiRust,
  SiWeb3Dotjs,
} from "react-icons/si";

const skills = [
  { name: "HTML5", icon: <SiHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <SiCss3 className="text-blue-500" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-400" /> },
  { name: "React.js", icon: <SiReact className="text-cyan-400" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
  { name: "TailwindCSS", icon: <SiTailwindcss className="text-teal-300" /> },
  { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-500" /> },
  { name: "Firebase", icon: <SiFirebase className="text-yellow-400" /> },
  { name: "Git", icon: <SiGit className="text-orange-500" /> },
  { name: "Framer Motion", icon: <SiFramer className="text-pink-400" /> },
  { name: "Vercel", icon: <SiVercel className="text-white" /> },
  { name: "Docker", icon: <SiDocker className="text-blue-300" /> },
  { name: "Rust", icon: <SiRust className="text-orange-600" /> },
];

const Skills = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-white px-4 py-20">
      <h2 className="text-4xl md:text-6xl font-bold mb-12 text-center">
        Skillset ⚒️
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 ">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center space-y-2 hover:scale-110 transition-transform duration-300"
          >
            <div className="text-5xl">{skill.icon}</div>
            <p className="text-xl font-semibold">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
