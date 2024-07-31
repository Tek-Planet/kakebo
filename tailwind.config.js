// tailwind.config.cjs

module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx, md, mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFFFFF",
        secondary: "#F5F5F5",
        linkactive: "#C19C5D",
        blueprimary: "#0033CC",
        redprimary: "#FF0000",
      },
      fontFamily: {
        poppins: ["Roboto", "Work Sans", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animation")],
};
