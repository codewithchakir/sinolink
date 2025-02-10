/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#820000", // Deep red
        secondary: "#4E6C50", // Olive green
        accent: "#F2DEBA", // Cream beige
        background: "#FAECD6", // Soft peach
        text: "#111827", // (Keep this as the base dark text color)
        hover: "#C00000", // A slightly brighter red for hover states
      },
      fontFamily: {
        arabic: ["var(--font-vazirmatn)"],
      },
    },
  },
  plugins: [],
};
