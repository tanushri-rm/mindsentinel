/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#6A7BA2',
        secondary: '#E6A157',
        accent: '#4C9F70',
      },
    },
  },
  plugins: [],
};