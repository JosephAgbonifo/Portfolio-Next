// data/myprojects.ts

export interface Project {
  id: string;
  name: string;
  description: string;
  stack: string[];
  previewUrl: string;
  githubUrl: string;
  repoStatus: "public" | "private";
  image: string;
}

export const projects: Project[] = [
  {
    id: "1",
    name: "Quirklr",
    description:
      "Building the Future of Circular Creativity. Quirklr is the premier launchpad for creators and builders on the Flare Network. We bridge the gap between bold ideas and sustainable funding. Whether you're anchoring a new protocol or launching a community-driven project, Quirklr provides the smart-contract infrastructure to turn supporters into stakeholders.",
    stack: ["Next.js", "Solidity", "Flare Network", "Tailwind"],
    previewUrl: "https://quirklronchain.vercel.app",
    githubUrl: "#", // Private
    repoStatus: "private",
    image: "/projects/quirklr.png",
  },
  // Add 5 more placeholder objects here to test the "First Six" logic
];
