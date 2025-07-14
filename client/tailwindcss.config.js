/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // 'sans' is the default font family, overriding it with Inter
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
