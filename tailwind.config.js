module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Phần custom
      },
      height: {
        100: "800px",
        99 :  "680px"
       },
      container: {
        width: "100%",
        padding: {
          DEFAULT: "10px",
        },
        screens: {
          "xs": "576px",
          'sm': '640px',
          'md': '768px',
          'lg': '1024px',
          'xl': '1280px',
        }
      }
    },
  },
  plugins: [
    
  ],
  
  // corePlugins: {
  //   preflight: false,
  // }, // Tránh đè css
}