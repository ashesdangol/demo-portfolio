//  /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        'xsMobile':'375px',
        'lgMobile':'425px',
        // sm
        'smTablet': '640px',
        // => @media (min-width: 640px) { ... }
        // md
        'tablet': '768px',
        'mdLg':'800px',
        // lg
        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }
        // xl
        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
        'xlDesktop': '1440px',

        // 2xl=> 1536px

        'xxlDesktop':'2560px'
      },
      fontFamily:{
        'sansPro':['Source Sans Pro', 'sans-serif'],
        'codePro':['Source Code Pro', 'monospace']
      },
      fontWeight:{
        regular:'300',
        bold:'900'
      },
      colors:{
        white:'#FFFFFF',
        black:'#000000',
        dark:'#303030',
        accent_bright:'#16e0bd',
        accent_dark:'#14CFAE',
        accent_off:'#1C4B43',
      }
    },
  },
  plugins: [],
}
