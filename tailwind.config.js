/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Balgin ExtraBold"],
        sans: ["Balgin Bold"],
        text: ["Balgin Medium"],
        body: ["Balgin Regular"],
      },
      fontSize: {
        "10xl": "10rem",
      },
      lineHeight: {
        1: "0.7em",
        2: "1.3em",
      },
      colors: {
        solightyellow: "#ffe89d",
        verylightyellow: "#FFDF78",
        lightyellow: "#ffd241",
        yellow: "#F9BE00",
        darkyellow: "#f8bd00",
        offwhite: "#ededed",
        creamwhite: "#fff3cd",
        dark: "#242424",
        verydark: "#222222",
      },
      zIndex: {
        "-1": "-1",
      },
    },
  },
  plugins: [],
};
