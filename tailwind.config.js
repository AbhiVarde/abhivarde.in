/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        carousel:
          "carousel 10s linear infinite",
        carouselReverse:
          "carousel 10s reverse linear infinite",
      },
      keyframes: {
       carousel: {
          '0%': { transform: 'translateZ(0);' },
          '100%': { transform: 'translate3d(-50%, 0, 0);' }, 
        },
        carouselReverse: {
          '0%': { transform: 'translate3d(-50%, 0, 0)' },
          '100%': { transform: 'translateZ(0)' },
        },
      },
    },
  },
  plugins: [],
};
