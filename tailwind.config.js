module.exports = {
  purge: [],
  theme: {
    screens: {
      phones: "640px",
      // => @media (min-width: 640px) { ... }

      tablets: "768px",
      // => @media (min-width: 1024px) { ... }

      desktops: "1440px",
      // => @media (min-width: 1440px) { ... }

      bigDesktops: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    colors: {
      darkBlueColor: "hsl(209, 23%, 22%)",
      veryDarkBlueDarkColor: "hsl(207, 26%, 17%)",
      veryDarkBlueLightColor: "hsl(200, 15%, 8%)",
      darkGrayColor: "hsl(0, 0%, 52%)",
      veryLightGrayColor: "hsl(0, 0%, 98%)",
      whiteColor: "hsl(0, 0%, 100%)",
    },
    extend: {},
  },
  variants: {},
  plugins: [],
};
