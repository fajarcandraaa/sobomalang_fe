/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jockey: ['"Jockey One"', 'sans-serif'],
        inder: ['Inder', 'sans-serif']
      },
      colors: {
        'custom-white': '#fbdebf' // FBDEBF // FFEFCB // '#f4f4f4', // Add your custom color here FFF6E3
      },
    },
  },
  plugins: [],
}

