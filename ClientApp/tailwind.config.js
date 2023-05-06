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
        'primary-300': '#064a60',
        'primary-500': '#086788',
        'secondary-400': '#FAE169',
        'secondary-500': '#F0C808',
      },
      fontFamily: {
        dmsans: ['DM Sans', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        script: ['Kaushan Script'],
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
