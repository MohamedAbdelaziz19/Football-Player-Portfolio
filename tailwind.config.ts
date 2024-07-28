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
        background: "#1a1a1a", // Dark background color
        primary: "#333", // Darker primary color for sections or cards
        secondary: "#444", // Slightly lighter dark color for contrasts
        text: "#e0e0e0", // Light text color for readability
        accent: "#ff5722", // Accent color to stand out (optional)
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  darkMode: 'class', // Enable dark mode with a class
  plugins: [],
};

export default config;
