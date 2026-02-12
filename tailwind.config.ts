export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {},
      container: {
        center: true,
        screens: {
          sm: "640px",
          md: "768px",
          lg: "960px",
          xl: "1120px",
          "2xl": "1280px",
        },
      },
    },
    plugins: [],
  };