/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          300: '#7FBCFF',
          500: '#2A7FFF',
          700: '#1548B7'
        },
        'primary2': {
          300: '#B99BF9',
          500: '#7F58EB',
          700: '#462CA9',
        }
      },
    },
  },
  plugins: [],
}

