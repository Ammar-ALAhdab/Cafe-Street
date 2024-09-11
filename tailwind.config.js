/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "375px",
      small420: "420px",
      sm: "640px",
      md: "834px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        primary: "#FF902B",
        secondary: "#2F2105",
        accents: "#F6EBDA",
        light: "#7E7D7A",
        glass: "#00000029",
        yellow: "#F4AE26",
      },
      backgroundImage: {
        aboutBackground: "url('assets/imgs/about_us_bg.png')",
        subscribeBackground: "url('assets/imgs/mail_bg.png')",
        subscribeBackgroundMobile: "url('assets/imgs/mail_bg_mobile.png')",
      },
    },
  },
  plugins: [],
};
