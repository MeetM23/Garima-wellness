import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#234B3A", // Deep forest green
          dark: "#1A392C",
          light: "#2F5F4A",
          surface: "#EAF0EC",
        },
        sage: {
          DEFAULT: "#A7B9A1", // Sage green
          light: "#D5DFD1",
          soft: "#EDF2EB",
          dark: "#7E9677",
        },
        ivory: {
          DEFAULT: "#F8F7F1", // Warm ivory background
          card: "#FFFFFF",
          warm: "#F2EFE9",
          sand: "#E9E4D8",
        },
        terracotta: {
          DEFAULT: "#C68C72", // Muted terracotta accent
          light: "#DFB3A0",
          soft: "#F6ECE6",
          dark: "#A3684F",
        },
        charcoal: {
          DEFAULT: "#252A26", // Deep charcoal text
          muted: "#5A615B",
          subtle: "#8A948C",
          border: "#E2E5E0",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "var(--font-gujarati)",
          "Noto Sans Gujarati UI",
          "Noto Sans Gujarati",
          "-apple-system",
          "BlinkMacSystemFont",
          "sans-serif",
        ],
        inter: ["var(--font-inter)", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        gujarati: ["var(--font-gujarati)", "Noto Sans Gujarati UI", "Noto Sans Gujarati", "sans-serif"],
      },
      borderRadius: {
        'xl': '0.875rem',
        '2xl': '1.25rem',
        '3xl': '1.75rem',
      },
      boxShadow: {
        '2xs': '0 1px 2px 0 rgba(0, 0, 0, 0.03)',
        'xs': '0 1px 2px 0 rgba(0, 0, 0, 0.04)',
        'soft': '0 4px 20px -2px rgba(35, 75, 58, 0.05)',
        'lifted': '0 12px 32px -4px rgba(35, 75, 58, 0.08)',
      },
      animation: {
        'marquee': 'marquee 45s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translate3d(0, 0, 0)' },
          '100%': { transform: 'translate3d(-50%, 0, 0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
