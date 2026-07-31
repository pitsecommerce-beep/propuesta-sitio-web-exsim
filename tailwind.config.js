/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html'],
  theme: {
    fontFamily: {
      serif: ['"Source Serif 4"', 'Georgia', '"Times New Roman"', 'serif'],
      sans: ['"Source Sans 3"', 'system-ui', '-apple-system', 'sans-serif'],
    },
    borderRadius: {
      none: '0px',
      sm: '2px',
      DEFAULT: '2px',
      md: '2px',
      lg: '2px',
      xl: '2px',
      '2xl': '2px',
      '3xl': '2px',
      full: '9999px',
    },
    extend: {
      colors: {
        // TODO: confirmar azul institucional contra logo oficial IPADE
        ipade: {
          50:  '#EBF0F7',
          100: '#D1DCEA',
          200: '#A3B9D5',
          300: '#7596C0',
          400: '#4773AB',
          500: '#003A70',
          600: '#003060',
          700: '#002750',
          800: '#001D3D',
          900: '#00142B',
          950: '#000C1A',
        },
      },
      maxWidth: {
        container: '1200px',
      },
    },
  },
  plugins: [],
};
