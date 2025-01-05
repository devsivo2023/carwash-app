/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,css}", // Include all relevant files in 'app' directory
    "./src/components/**/*.{js,ts,jsx,tsx}", // Include components directory
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E3A8A", // Define your primary color
        secondary: "#16A34A", // Define your secondary color
        alert: "#DC2626", // Define your alert color
      },
    },
  },
  plugins: [],
};
