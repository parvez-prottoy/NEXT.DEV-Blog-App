/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      mobile: "480px",
      tablet: "768px",
      laptop: "1024px",
      desktop: "1280px",
    },
    colors: {
      primary: "#242424",
      secondary: "#6B6B6B",
      background: "#F2F2F2",
    },
    extend: {
      container: {
        center: true, // center horizontally
      },
    },
  },
  plugins: [],
};
