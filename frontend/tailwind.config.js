/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textColor: {
        link: "#49557e",
      },
      backgroundImage: {
        banner: "url(/header_img.png)",
      },
      fontSize: {
        responsive: "max(4.5vw, 22px)",
        small: "max(1vw, 13px)",
        normal: "max(1.4vw, 16px)",
        medium: "max(2vw, 24px)",
        large: "max(3vw, 20px)",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in-out",
      },
      width: {
        responsive: "max(30vw,120px)",
        login: "max(23vw, 330px)",
        checkout: "max(15vw, 200px)",
        promoButton: "max(10vw, 150px)",
        placeOrder: "max(30%, 500px)",
      },
      maxWidth: {
        placeOrderLeft: "max(30%, 500px)",
        placeOrderRight: "max(40%, 500px)",
      },
      gridTemplateColumns: {
        "auto-fit": "repeat(auto-fill, minmax(240px, 1fr))",
        custom: "2fr 1fr 1fr",
        cartGrid: "1fr 1.5fr 1fr 1fr 1fr 0.5fr",
      },
      gap: {
        custom: "max(3vw, 10px)",
        "12vw": "max(12vw, 20px)",
      },
    },
    screens: {
      laptop: { max: "1050px" },
      tablet: { max: "900px" },
      phone: { max: "750px" },
    },
  },
  plugins: [],
};
