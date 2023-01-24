/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./src/**/*.{js,jsx,ts,tsx}"],
   theme: {
      extend: {
         colors: {
            primary: "#FF6057",
         },
         backgroundImage: {
            "hero-bg": "url('imgs/bg1.png')",
         },
         // backgroundImage: {
         //    grad: "bg-gradient-to-r from-[#FF6057] to-[#7C1C80]",
         // },
      },
   },
   plugins: [],
};
