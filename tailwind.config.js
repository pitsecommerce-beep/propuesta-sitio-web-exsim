/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html'],
  theme: {
    fontFamily: {
      serif: ['"Playfair Display"', 'Georgia', 'serif'],
      sans: ['"Source Sans 3"', 'system-ui', 'sans-serif'],
    },
    extend: {
      colors: {
        // TODO: confirmar azul institucional contra logo oficial IPADE
        ipade: {
          50:  '#e6eef5',
          100: '#b3cce0',
          200: '#80aacb',
          300: '#4d88b6',
          400: '#2670a5',
          500: '#003A70',
          600: '#003364',
          700: '#002b55',
          800: '#002347',
          900: '#001a36',
        },
        accent: {
          50:  '#fdf5ef',
          100: '#fae6d3',
          200: '#f4c9a0',
          300: '#eeab6d',
          400: '#e8933f',
          500: '#C97214',
          600: '#a85e10',
          700: '#874b0d',
          800: '#66380a',
          900: '#452606',
        },
        neutral: {
          50:  '#F8F9FA',
          100: '#F1F3F5',
          200: '#E9ECEF',
          300: '#DEE2E6',
          400: '#ADB5BD',
          500: '#6C757D',
          600: '#495057',
          700: '#343A40',
          800: '#212529',
          900: '#0D1117',
        },
      },
      maxWidth: {
        container: '1200px',
      },
    },
  },
  plugins: [],
};
