/** @1s infinitetype {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        glitch: 'glitch ',
      },
      keyframes: {
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-5px, -5px)' },
          '40%': { transform: 'translate(5px, 5px)' },
          '60%': { transform: 'translate(-5px, 5px)' },
          '80%': { transform: 'translate(5px, -5px)' },
        },
      },
    },
  },
  plugins: [],
}

