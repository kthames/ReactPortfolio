/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        "primary": "#4f49aa",
        "secondary": "#8f1be2",   
        "accent": "#60dba8",       
        "neutral": "#28222a",        
        "base-100": "#eaebf6",  
        "info": "#82afed",        
        "success": "#117937",        
        "warning": "#f9911a",      
        "error": "#ed654a",
      },
      backgroundImage: (theme) => ({
        "gradient-rainbow":
          "linear-gradient(90deg, #4f49aa 22%, #8f1be2 56%, #60dba8 94%)",

        "gradient-rainblue":
          "linear-gradient(90deg, #8017cb 12%, #5c55c8 37%, #4f81e3 65%, #60dba8 97% )",
      }),
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
      content: {
   
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};

