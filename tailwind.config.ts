import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2b7a78",
          light: "#3aafa9",
          dark: "#17252a"
        },
        accent: "#def2f1",
        contrast: "#feffff"
      }
    }
  },
  plugins: []
};

export default config;
