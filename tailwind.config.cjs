/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
       float: {
      '0%' : { transform: 'translate(0,  0px)' },
      '50%' : { transform: 'translate(0, -7px)'  },
      '100%' :  { transform: 'translate(0, -0px)' }   
       },
      },
      animation: {
        'floating': 'float 4s ease-in-out infinite'
      },
  },
  plugins: [],
}
}
