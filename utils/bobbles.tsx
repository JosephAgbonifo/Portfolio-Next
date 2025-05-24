import { useEffect, useRef } from "react";

type FloatingBobbleProps = {
  speed?: number;
  size?: number;
  left?: string;
  color?: string;
  bottom?: string;
};

const FloatingBobble: React.FC<FloatingBobbleProps> = ({
  speed = 1,
  size = 20,
  left = "50%",
  bottom = "-10%",
  color = "#f87171", // Tailwind rose-400
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollProgress = scrollTop / scrollHeight;

      const translateY = -scrollProgress * 1000 * speed; // Adjust multiplier to control total distance
      ref.current.style.transform = `translateY(${translateY}px)`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return (
    <div
      ref={ref}
      style={{
        position: "fixed",
        bottom,
        left,
        width: size,
        height: size,
        backgroundColor: color,
        borderRadius: "9999px",
        willChange: "transform",
        zIndex: -1,
        opacity: 0.2,
      }}
    />
  );
};

export default FloatingBobble;
