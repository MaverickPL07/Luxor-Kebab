/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sidenav': 'rgba(0, 0, 0, .3)',
        'orange': '#E09400',
        'orangelight': '#FFA800',
        'gray': '#767676',
        'orange-transparent': 'rgba(255, 168, 0, .5)',
      }
    },
  },
  plugins: [
    
  ],

  // mode: 'jit'
}

