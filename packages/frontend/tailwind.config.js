/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      screens: {
        '2sm': { max: '320px' },
        sm: { max: '640px' },
        md: { max: '768px' },
        lg: { max: '1024px' },
        xl: { max: '1280px' },
        '2xl': { max: '1536px' },
      },
      colors: {
        red: '#f75a68',
        white: '#FFFFFF',
        green: '#04D361',
        background: '#F0F0F7',
        gray: {
          10: '#FAFAFC',
          20: '#F0F0F7',
          30: '#E6E6F0',
          40: '#9C98A6',
          50: '#C1BCCC',
          60: '#DCDCE5',
        },
        purple: {
          100: '#D4C2FF',
          200: '#9871F5',
          300: '#8257E5',
          500: '#6A6180',
          600: '#32264D',
        },
      },
      spacing: {
        1: '8px',
        2: '12px',
        3: '16px',
        4: '24px',
        5: '32px',
        6: '48px',
      },
    },
  },
  plugins: [],
};
