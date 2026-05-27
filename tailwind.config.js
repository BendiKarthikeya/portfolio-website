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
          50:  '#f8f9fa',
          100: '#e9ecef',
          200: '#dee2e6',
          300: '#ced4da',
          400: '#adb5bd',
          500: '#6c757d',
          600: '#495057',
          700: '#343a40',
          800: '#212529',
          900: '#16191d',
        },
        gold: {
          400: '#f8f9fa',
          500: '#dee2e6',
          600: '#ced4da',
          700: '#adb5bd',
        },
        burgundy: {
          500: '#adb5bd',
          600: '#6c757d',
          700: '#495057',
          800: '#343a40',
          900: '#212529',
        },
        n8n: {
          50:  '#f8f9fa',
          100: '#dee2e6',
          200: '#adb5bd',
          300: '#6c757d',
          400: '#343a40',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      opacity: {
        '0': '0', '5': '0.05', '8': '0.08', '10': '0.1', '12': '0.12',
        '15': '0.15', '20': '0.2', '25': '0.25', '30': '0.3', '35': '0.35',
        '40': '0.4', '45': '0.45', '50': '0.5', '60': '0.6', '70': '0.7',
        '75': '0.75', '80': '0.8', '90': '0.9', '95': '0.95', '100': '1',
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
