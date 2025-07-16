import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",

  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "#f6f6f6",
        primary: "#2a374d",
        darkPrimary: "#fab627",
        darkMode: "#171717",
        secondary: "#18161b",
        accent: "#1be885",
        neutral: "#2b374d ",
        info: "#2b374d",
        success: "#23b893",
        warning: "#f79926",
        error: "#ea535a",
      },
    },
  },
  plugins: [],
};
export default config;
