module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}","./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
      fontFamily:{
          montserrat:['Montserrat']
      },
    extend: {},
  },
  variants: {
    extend: {
        width:['responsive','hover'],
        display:['group-hover']
    },
  },
  plugins: [
      require('@tailwindcss/forms')
  ],
}
