/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'custom': ['CustomFont', 'sans'],
      },
      textColor: {
        'custom': '#333333', // Custom text color
      },
    },
  },
  plugins: [],
}

