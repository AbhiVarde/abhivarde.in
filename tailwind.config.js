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
          "scroll var(--animation-duration, 4s) var(--animation-direction, forwards) linear infinite",
        carouselReverse:
          "scroll var(--animation-duration, 4s) reverse var(--animation-direction, forwards) linear infinite",
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
