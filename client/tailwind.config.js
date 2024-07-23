// eslint-disable-next-line no-undef
const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      colors: {
        primaryText: "#1B2432",
        placeHolderText: "#A4A7AD",
      },
    },
  },
  plugins: [flowbite.plugin(), require("tailwind-scrollbar")],
};
