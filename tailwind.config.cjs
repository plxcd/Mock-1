/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,js}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f5f7ff",
          100: "#e0e5ff",
          500: "#4f46e5",
          600: "#4338ca",
          900: "#111827"
        }
      }
    }
  },
  plugins: []
};
