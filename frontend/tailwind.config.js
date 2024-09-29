import { keepTheme } from "keep-react/keepTheme";

const config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true, // center horizontally
      },
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
    },
  },
};

export default keepTheme(config);
