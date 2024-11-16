/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        apple: {
          blue: '#007AFF',
          red: '#E43B3E',
          gray: {
            dark: '#1C1C1E',
            medium: '#3A3A3C',
          },
        },
      },
    },
  },
  plugins: [],
};