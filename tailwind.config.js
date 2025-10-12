/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0d2f5a',
        secondary: '#e8b735',
        accent: '#2a6bb3',
        dark: '#1a1a2e',
        light: '#f8f9fa',
      },
      fontFamily: {
        'tajawal': ['Tajawal', 'sans-serif'],
      },
    },
  },
  plugins: [],
}