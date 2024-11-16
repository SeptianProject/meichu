/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '440px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        light: '#ffffff',
        dark: '#1e1e1e',
        bluePrimary: '#3848E9',
        blueDark: '#1F1F2C',
      },
      backgroundColor: {
        dark: '#191820',
        light: '#ffffff',
      }
    },
  },
  plugins: [],
}