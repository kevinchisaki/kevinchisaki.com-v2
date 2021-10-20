module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    screens: {
      'sm': {'min': '375px', 'max': '767px'},
      'md': {'min': '768px', 'max': '719px'},
      'lg': {'min': '720px', 'max': '1535px'},
      'xl': {'min': '1536px', 'max': '1536px'},
    },
    extend: {
      
    },
  },
  variants: {
    extend: {
      margin: ['even'],
    }
  },
  plugins: [],
}
