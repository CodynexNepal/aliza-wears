import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // 60% - Warm Alabaster & White surfaces
        alabaster: "#F7F7F5",
        surface: "#FFFFFF",
        // 30% - Deep Charcoal Ink
        ink: "#0E0F0C",
        // 10% - Lime for primary CTAs and active states
        lime: {
          DEFAULT: "#C3FF7D",
          dark: "#9FE870",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "system-ui",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
export default config;
