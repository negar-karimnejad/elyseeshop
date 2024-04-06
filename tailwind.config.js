/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        vazirBold: ['vazirBold', 'sans-serif'],
        vazirMedium: ['vazirMedium', 'sans-serif'],
        BKoodak: ['BKoodak', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
