/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        globalColor: "#8C52FF",
        "globalColor-hover": "#7e49e5",
      },
      textColor: {
        globalTextColor: "#8C52FF",
        "globalTextColor-hover": "#6239B2",
      },
    },
  },
  variants: {
    backgroundColor: ["responsive", "hover"],
    textColor: ["responsive", "hover"],
  },
  plugins: [],
};
