/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          300: "#94CDFD",
          500: "#4E9BFA",
          700: "#2759B3",
        },
        primary2: {
          300: "#B99BF9",
          500: "#7F58EB",
          700: "#462CA9",
        },
        pokemon: {
          red: "#F06D57",
          green: "#70D0A8",
          black: "#000000",
          white: "#FFFFFF",
          darkblue: "#3861AB",
          blue: "#79A0FD",
          yellow: "#FFCA02",
        },
      },
      fontFamily: {
        sans: ["Poppins", "Arial", "sans-serif"],
        serif: ["Newsreader", "Times New Roman"],
        pokemon: ["NeoDGM", "Source Code Pro", "sans-serif"],
        pokemonBody: ["Source Code Pro", "sans-serif"],
      },
    },
  },
  plugins: [],
};
