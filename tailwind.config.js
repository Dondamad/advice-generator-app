/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          "light-cyan": "#CEE3E9",
          "neon-green": "#53FFAA",
        },
        neutral: {
          "grayish-blue": "#4F5D74",
          "dark-grayish-blue": "#313A48",
          "dark-blue": "#202733",
        },
      },
      fontFamily: {
        manrope: ["var(--font-manrope)"],
      },
    },
  },
  plugins: [],
};
