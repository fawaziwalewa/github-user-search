import type { Config } from "tailwindcss";

export default {
  darkMode: "selector",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0079FF",
        light: {
          "blue-100": "#697C9A",
          "blue-200": "#4B6A9B",
          "blue-300": "#2B3442",
          "white": "#FEFEFE",
          "off-white": "#F6F8FF",
        },
        dark: {
          "blue-100": "#141D2F",
          "blue-200": "#1E2A47",
        },
      },
      boxShadow: {
        custom: "0 16px 30px -10px rgba(70, 96, 187, 0.19)",
      },
    },
  },
  plugins: [],
} satisfies Config;
