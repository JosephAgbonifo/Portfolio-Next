import { useEffect, useRef } from "react";

type ParallaxItemProps = {
  children: React.ReactNode;
  speed?: number;
  className?: string;
};

const ParallaxItem: React.FC<ParallaxItemProps> = ({
  children,
  speed = 1,
  className = "",
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Throttle function to limit updates
    const throttle = (callback: Function, delay = 10) => {
      let lastCall = 0;
      return (...args: any[]) => {
        const now = new Date().getTime();
        if (now - lastCall < delay) return;
        lastCall = now;
        return callback(...args);
      };
    };

    const updateTransform = () => {
      if (!ref.current) return;

      const offset = window.scrollY * speed;
      ref.current.style.transform = `translateY(${offset}px)`;
    };

    const handleScroll = throttle(updateTransform);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return (
    <div ref={ref} className={className} style={{ willChange: "transform" }}>
      {children}
    </div>
  );
};

export default ParallaxItem;
