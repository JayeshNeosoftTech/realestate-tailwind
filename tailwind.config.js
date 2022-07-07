/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./main/**/*.{html,js}","index.html"],
  theme: {
    extend: {
      colors: {
        'red_shade': '#FF8484',
        'black-shade': '#444444',
      },
      screens: {
        'mobile-m':{'max':'376px'},
        'mobile-l':{'min':'376px','max':'475px'},
        'mobile-md':{'max':'575px'},
        'mx-lg': {'min':'640px','max': '1024px'},
        'mx-sm':{'max': '640px'},
        'mx-md':{'max':'768px'},
        'tablet':{'min':'768px','max':'992px'},
        'tablet-min':{'min':'992px'},
        'tablet-max':{'max':'991px'},
        'xl-max': {'min':'640px','max': '1279px'},
        'footer-mxxl': '1198px',
        'footer-minxl': '1200px',
      }
    },
  },
  plugins: [],
}
