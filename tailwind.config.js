module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nosifer: '"Nosifer"',
      },
      keyframes: {
        wave: {
          "0%": { transform: "rotate(0.0deg)" },
          "10%": { transform: "rotate(14.0deg)" },
          "20%": { transform: "rotate(-8.0deg)" },
          "30%": { transform: "rotate(14.0deg)" },
          "40%": { transform: "rotate(-4.0deg)" },
          "50%": { transform: "rotate(10.0deg)" },
          "60%": { transform: "rotate(0.0deg)" },
          "100%": { transform: "rotate(0.0deg)" },
        },
        float: {
          "0%": {
            transform: "translatey(0px)",
          },
          "50%": {
            transform: "translatey(-20px)",
          },
          "100%": {
            transform: "translatey(0px)",
          },
        },
        scaleIn: {
          "0%": {
            opacity: 0,
            transform: "scale3d(0.3,0.3,0.3)",
          },
          "50%": {
            opacity: 1,
          },
        },
      },
      animation: {
        wave: "wave 2.5s  infinite",
        float: "float 6s ease-in-out infinite",
        paint: "scaleIn 0.3s ease-in-out",
      },
      transformOrigin: {
        wave: "70% 70%",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar"), require("tailwind-scrollbar-hide")],
};
