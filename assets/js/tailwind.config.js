tailwind.config = {
  theme: {
    extend: {
      colors: {
        saffron: "hsl(45, 91%, 58%)",
        "space-cadet": "hsl(249, 37%, 19%)",
        cultured: "hsl(220, 13%, 95%)",
        rhythm: "hsl(240, 9%, 51%)",
        pistachio: "hsl(88, 50%, 60%)",
        "red-orange-crayola": "hsl(0, 100%, 66%)",
      },
      fontFamily: {
        monoton: ["Monoton", "cursive"],
        rubik: ["Rubik", "sans-serif"],
      },
      animation: {
        "scale-up": "scaleUp 3s ease-in-out infinite",
        "move-up": "moveUp 3s ease-in-out infinite",
      },
      keyframes: {
        scaleUp: {
          "0%, 100%": { transform: "translateY(0) scale(1)" },
          "50%": { transform: "translateY(-5px) scale(1.05)" },
        },
        moveUp: {
          "0%, 100%": { transform: "translateY(0)" },
          "20%": { transform: "translateY(-3px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".animation-delay-1000": {
          "animation-delay": "1s",
        },
        ".animation-delay-2000": {
          "animation-delay": "2s",
        },
        ".align-super": {
          "vertical-align": "super",
          "font-size": "0.7em",
        },
      });
    },
  ],
};
