import React, { CSSProperties } from "react";

const COLORS = {
  sanity: {
    "--start-color": "#007CF0",
    "--end-color": "#00DFD8",
  },
  cms: {
    "--start-color": "#7928CA",
    "--end-color": "#FF0080",
  },
  example: {
    "--start-color": "#FF4D4D",
    "--end-color": "#F9CB28",
  },
} as const;

function HeroText() {
  return (
    <h1
      className="mx-auto pt-10 w-fit text-9xl font-extrabold"
      aria-label="Sanity CMS Example"
    >
      <span className="block" style={COLORS.sanity as CSSProperties}>
        Sanity.
      </span>
      <span className="block" style={COLORS.cms as CSSProperties}>
        CMS.
      </span>
      <span className="block" style={COLORS.example as CSSProperties}>
        Example.
      </span>
    </h1>
  );
}

export default HeroText;
