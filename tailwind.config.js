module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      gridTemplateColumns: {
        kassa: "1fr 36em",
      },
      gridTemplateRows: {
        kassa: "4em 1fr",
      },
    },
  },
  plugins: [],
};
