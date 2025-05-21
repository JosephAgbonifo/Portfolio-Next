"use client";

import { useEffect, useState } from "react";

type TypewriterLoopProps = {
  text: string;
  speed?: number;
  pause?: number;
};

const TypewriterLoop = ({
  text,
  speed = 100,
  pause = 5000,
}: TypewriterLoopProps) => {
  const [rendered, setRendered] = useState<React.ReactNode[]>([]);
  const [index, setIndex] = useState(0);

  // Convert escaped newlines to actual line breaks
  const processedText = text.replace(/\\n/g, "\n");

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (index < processedText.length) {
      timeout = setTimeout(() => {
        const char = processedText[index];
        setRendered((prev) => [
          ...prev,
          char === "\n" ? <br key={index} /> : <span key={index}>{char}</span>,
        ]);
        setIndex((prev) => prev + 1);
      }, speed);
    } else {
      timeout = setTimeout(() => {
        setRendered([]);
        setIndex(0);
      }, pause);
    }

    return () => clearTimeout(timeout);
  }, [index, processedText, speed, pause]);

  return (
    <div
      style={{
        whiteSpace: "pre-wrap",
        display: "inline-block",
        position: "relative",
      }}
    >
      {rendered}
      <span className="block-cursor bg-yellow-600" />
      <style jsx>{`
        .block-cursor {
          display: inline-block;
          width: 0.6ch; /* width of a monospace character */
          height: 1em;
          margin-left: 3px;
          animation: blink 1s steps(1) infinite;
        }

        @keyframes blink {
          50% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default TypewriterLoop;
