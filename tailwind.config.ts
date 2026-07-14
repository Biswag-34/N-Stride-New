import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "420px",
        "3xl": "1800px",
      },
      colors: {
        background: "rgb(var(--background-rgb) / <alpha-value>)",
        "background-soft": "rgb(var(--background-soft-rgb) / <alpha-value>)",
        surface: "rgb(var(--surface-rgb) / <alpha-value>)",
        "surface-elevated": "rgb(var(--surface-elevated-rgb) / <alpha-value>)",
        primary: "rgb(var(--primary-rgb) / <alpha-value>)",
        "primary-dark": "rgb(var(--primary-dark-rgb) / <alpha-value>)",
        "accent-aqua": "rgb(var(--accent-aqua-rgb) / <alpha-value>)",
        "accent-green": "rgb(var(--accent-green-rgb) / <alpha-value>)",
        "accent-amber": "rgb(var(--accent-amber-rgb) / <alpha-value>)",
        "accent-indigo": "rgb(var(--accent-indigo-rgb) / <alpha-value>)",
        "text-primary": "rgb(var(--text-primary-rgb) / <alpha-value>)",
        "text-secondary": "rgb(var(--text-secondary-rgb) / <alpha-value>)",
        "text-muted": "rgb(var(--text-muted-rgb) / <alpha-value>)",
        "border-soft": "rgb(var(--border-soft-rgb) / <alpha-value>)",
        "soft-sky": "rgb(var(--soft-sky-blue-rgb) / <alpha-value>)",
      },
      boxShadow: {
        soft: "var(--shadow-soft)",
        card: "var(--shadow-card)",
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
      },
      maxWidth: {
        container: "var(--container-width)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
        heading: ["var(--font-sora)", "Sora", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
