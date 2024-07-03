/** @type {import('tailwindcss').Config} */
export default {
    content: [
    './src/**/*.{html,js,tsx}',
    './src/components/**/*.{html,js,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Figtree", "sans-serif"],
      },
      fontWeight: {
        semibold: '500',
        extrabold: '800',
      }
    },
  },
  plugins: [],
}

