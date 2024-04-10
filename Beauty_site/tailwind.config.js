/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#000B53",
        secondary: "#E5E5E5",
        tertiary: "#FCE186",
        highlight: "#311178",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        ducklingYellow: "rgba(250,211,24)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      fontSize: {
        s: '1rem', // 16px
        md: '1.25rem', // 20px
        lg: '2rem', // 32px
        xl: '3rem', // 48px
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
    boxShadow: {
      'custom': '0 4px 6px rgba(0, 0, 0, 0.5)',
    },
  },
  plugins: [],
};
