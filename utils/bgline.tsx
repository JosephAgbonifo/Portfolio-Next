import React from "react";

const HorizontalLines = () => {
  // heights: divide viewport by 6 and 3 respectively
  const desktopLines = Array.from({ length: 6 });
  const mobileLines = Array.from({ length: 3 });

  return (
    <div className="fixed inset-0 z-[-10] pointer-events-none">
      {/* Desktop lines */}
      <div className="hidden bg-background md:block h-full w-full absolute top-0 left-0">
        {desktopLines.map((_, i) => (
          <div
            key={`line-desktop-${i}`}
            className="w-full h-[1px] bg-white opacity-20 absolute"
            style={{ top: `${(i + 1) * (100 / 7)}vh` }} // 7 so lines are spaced with top/bottom padding
          />
        ))}
      </div>

      {/* Mobile lines */}
      <div className="block bg-background md:hidden h-full w-full absolute top-0 left-0">
        {mobileLines.map((_, i) => (
          <div
            key={`line-mobile-${i}`}
            className="w-full h-[1px] bg-white opacity-20 absolute"
            style={{ top: `${(i + 1) * (100 / 4)}vh` }} // 4 so we get padding top & bottom
          />
        ))}
      </div>
    </div>
  );
};

export default HorizontalLines;
