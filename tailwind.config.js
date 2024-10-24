/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    container:{
         center:true,
         padding:"1.5rem",
         screens:{sm:"100%",md:"100%",lg:"100%",xl:"1200px"}
    },
    extend: {},
  },
  plugins: [],
}

