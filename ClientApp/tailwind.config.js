/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,tsx,jsx}'],
  theme: {
    extend: {
      colors: {
        'gray-20': '#FAF8F0',
        'gray-50': '#E4EBED',
        'gray-100': '#BAD5DE',
        'gray-500': '#00374A',
        'primary-100': '#D5EEF7',
        'primary-300': '#A2E5FC',
        'primary-500': '#086788',
        'secondary-400': '#FAE169',
        'secondary-500': '#F0C808',
      },
      // backgroundImage: (theme) => ({
      'gradient-yellowred': 'linear-gradient(90deg, #FF616A 0%, #FFC837 100%)',
      'mobile-home': "url('./assets/HomePageGraphic.png')",
      // }),
      fontFamily: {
        dmsans: ['DM Sans', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      content: {
        evolvetext: "url('./assets/EvolveText.png')",
        abstractwaves: "url('./assets/AbstractWaves.png')",
        sparkles: "url('./assets/Sparkles.png')",
        circles: "url('./assets/Circles.png')",
      },
    },
    screens: {
      xs: '480px',
      sm: '768px',
      md: '1060px',
    },
  },
  plugins: [],
}
