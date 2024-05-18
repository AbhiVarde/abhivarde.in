/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        scroll:
          "scroll var(--animation-duration, 3s) var(--animation-direction, forwards) linear infinite",
        scrollReverse:
          "scroll var(--animation-duration, 3s) reverse var(--animation-direction, forwards) linear infinite",
      },

      keyframes: {
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
