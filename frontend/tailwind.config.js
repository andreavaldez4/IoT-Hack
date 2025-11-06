/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Tamaños personalizados para accesibilidad
      fontSize: {
        "accessibility-sm": "1rem",
        "accessibility-base": "1.125rem",
        "accessibility-lg": "1.5rem",
        "accessibility-xl": "2rem",
      },
    },
  },
  plugins: [],
};
