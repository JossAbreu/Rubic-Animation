/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        primary: ["FontPrimary-bold", "sans"],
        secondary: ["FontSecondary", "sans"],
        tertiary: ["FontTertiary", "sans"],
      },
      colors: {
        primary: "",
        secondary: "",
        accent: "",
        "accent-2": "",
      },
      cursor: {
        fancy: "url(hand.cur), pointer",
      },
      gridTemplateColumns: {
        "2-cols-layout-index": "12rem, minmax(0, 1fr)",
      },
      gridTemplateRows: {
        "2-rows-layout-index": "5rem, minmax(0, 1fr)",
        "2-rows-products": "auto, minmax(0, 1fr)",
      },
    },
  },
  darkMode: "class", // Add this line to enable dark mode
  plugins: [],
};
