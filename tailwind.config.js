/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}", // adjust this based on your project structure
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        custom: "#aaaaaa",
      },
    },
  },
  plugins: [],
};
