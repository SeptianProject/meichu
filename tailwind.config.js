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
        dark: '#1A1A1A',
        light: '#FFFFFF',
        blueDark: '#1F1F2C',
        bluePrimary: '#3848E9',
        purplePrimary: '#312058',
        purpleSecondary: '#8474DB',
        redDanger: '#C52528',
        grayPrimary: '#48484D',
        graySecondary: '#5E5A5A',
        yellowBloobs: '#FFBA00',
        yellowLinear1: '#FE7A0F',
        yellowLinear2: '#967009',
        cardBackground: '#212121',
        graySurface1: '#5E5A5A',
        graySurface2: '#15151A',
        textDark: '#1E1E1E',
      },
      backgroundImage: {
        'gold': 'linear-gradient(to right, #865319 9%, #FAC561 37%, #A27201 48%, #865319 56%, #ECB859 65%, #A07002 79%)',
      }
    },
  },
  plugins: [],
}