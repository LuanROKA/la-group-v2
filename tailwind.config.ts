import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    // On ajoute la recherche dans le dossier src
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    
    // On garde les anciens chemins au cas où
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#ffffff",
        foreground: "#0a0a0a",
        muted: "#6b7280",
        border: "#e5e7eb",
        success: "#16a34a",
        error: "#dc2626",
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        serif: ['var(--font-playfair)'],
      },
    },
  },
  plugins: [],
};
export default config;