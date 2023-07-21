/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      colors: {
        white: '#FFFFFF',
        green: '#04D361',
        background: '#F0F0F7',
        gray: {
          10: '#FAFAFC',
          20: '#F0F0F7',
          30: '#E6E6F0',
          40: '#9C98A6',
        },
        purple: {
          100: '#D4C2FF',
          200: '#9871F5',
          300: '#8257E5',
          500: '#6A6180',
          600: '#32264D',
        },
      },
    },
  },
  plugins: [],
};
