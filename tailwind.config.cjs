const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        blue: {
          print: "#304faa",
        },
        green: {
          print: "#2d9d4c",
        },
        "dark-green": {
          print: "#0d6b3e",
        },
        lime: {
          print: "#bed630",
        },
        orange: {
          print: "#fec50d",
        },
        pink: {
          print: "#f171ab",
        },
        red: {
          print: "#ee2e33",
        },
        sky: {
          print: "#6bcff6",
        },
        yellow: {
          print: "#eeef2a",
        },
      },
      fontFamily: {
        sans: ["Yanone Kaffeesatz", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("daisyui")],
};
