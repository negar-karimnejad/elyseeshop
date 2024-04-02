/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: true,
  theme: {
    extend: {
      fontFamily: {
        yekanB: ["yekanB", "sans-serif"],
      },
    },
  },
  plugins: [],
};
