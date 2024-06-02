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
        grid: "grid 15s linear infinite",
        scroll:
          "scroll var(--animation-duration, 4s) var(--animation-direction, forwards) linear infinite",
        scrollReverse:
          "scroll var(--animation-duration, 4s) reverse var(--animation-direction, forwards) linear infinite",
      },

      keyframes: {
        grid: {
          "0%": { transform: "translateY(-50%)" },
          "100%": { transform: "translateY(0)" },
        },
        scroll: {
          to: {
            transform: "translate(calc(-25% - 0.25rem))",
          },
        },
      },
    },
  },
  plugins: [],
};
