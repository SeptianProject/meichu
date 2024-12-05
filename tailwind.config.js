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
        dark: '#0B0A13',
        light: '#ffffff',
        blueDark: '#1F1F2C',
        bluePrimary: '#3848E9',
        purplePrimary: '#312058',
        purpleSecondary: '#8474DB',
        redDanger: '#C52528',
        grayPrimary: '#48484D',
        graySecondary: '#5E5A5A',
      }
    },
  },
  plugins: [],
}