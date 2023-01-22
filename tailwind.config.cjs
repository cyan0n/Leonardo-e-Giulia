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
          print: "#1f683a",
        },
        lime: {
          print: "#b3dc18",
        },
        orange: {
          print: "#fbc108",
        },
        pink: {
          print: "#ef2891",
        },
        red: {
          print: "#ee2332",
        },
        sky: {
          print: "#6bd0f6",
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
