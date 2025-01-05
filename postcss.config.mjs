/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {}, // Add autoprefixer for Tailwind CSS compatibility
  },
};

export default config;
