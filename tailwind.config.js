/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html'],
  theme: {
    fontFamily: {
      serif: ['"Cormorant Garamond"', 'Georgia', '"Times New Roman"', 'serif'],
      sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
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
        accent: {
          50:  '#FEF7F0',
          100: '#FCEADB',
          200: '#F8D2B0',
          300: '#F2B67A',
          400: '#E89843',
          500: '#C97214',
          600: '#A85E10',
          700: '#874B0D',
          800: '#66380A',
          900: '#452606',
        },
        warm: {
          50:  '#FDFCFB',
          100: '#FAF8F5',
          200: '#F5F0EB',
          300: '#EDE6DD',
        },
      },
      maxWidth: {
        container: '1200px',
      },
      letterSpacing: {
        'institutional': '0.2em',
      },
    },
  },
  plugins: [],
};
