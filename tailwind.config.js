/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#fefcf8',
          100: '#fbf3e4',
          200: '#f7e8c8',
          300: '#f2d9a7',
          400: '#ecc885',
          500: '#e5b563',
          600: '#d49c42',
          700: '#b8832a',
          800: '#9a6b1f',
          900: '#7d5518',
        },
        gold: {
          400: '#fac042',
          500: '#f5b041',
          600: '#e5a03a',
          700: '#d49032',
        },
        burgundy: {
          500: '#bb1545',
          600: '#a61239',
          700: '#910f2d',
          800: '#7c0c21',
          900: '#670915',
        },
        n8n: {
          50: '#fef7f0',
          100: '#fdeee1',
          200: '#fac042',
          300: '#bb1545',
          400: '#fbf3e4',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}