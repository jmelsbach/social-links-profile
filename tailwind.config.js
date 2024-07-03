/** @type {import('tailwindcss').Config} */
export default {
    content: [
    './src/**/*.{html,js,tsx}',
    './src/components/**/*.{html,js,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui', /* other fallbacks */],
      },
    },
  },
  plugins: [],
}

