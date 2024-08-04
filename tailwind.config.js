/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  screens: {
    'sm': '640px', // Existing small breakpoint
    'md': '768px', // Existing medium breakpoint
    'lg': '1024px', // Existing large breakpoint
    'xl': '1280px', // Existing extra-large breakpoint
    '2xl': '1536px', // Existing 2x extra-large breakpoint
    'custom': '1200px', // Adding a new custom breakpoint
  },
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.hide-scrollbar::-webkit-scrollbar': {
          display: 'none',
        },
        '.hide-scrollbar': {
          '-ms-overflow-style': 'none', // IE and Edge
          'scrollbar-width': 'none', // Firefox
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    }
  ]};
