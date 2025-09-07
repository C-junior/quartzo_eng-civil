/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fdf2f3',
          100: '#fce4e6',
          200: '#f9c8cd',
          300: '#f59ea7',
          400: '#ef6674',
          500: '#C62828',  // Vermelho intenso
          600: '#b91c1c',
          700: '#991b1b',
          800: '#7f1d1d',
          900: '#7B1E26'   // Vinho escuro
        },
        wine: {
          50: '#fdf2f3',
          100: '#fce7e8',
          200: '#f9d4d6',
          300: '#f4b5b9',
          400: '#ec8b92',
          500: '#e15d67',
          600: '#cc4551',
          700: '#a83640',
          800: '#8d2f37',
          900: '#7B1E26'   // Vinho escuro principal
        },
        gray: {
          50: '#FAFAFA',
          100: '#F5F5F5',  // Cinza muito claro
          200: '#EEEEEE',
          300: '#E0E0E0',
          400: '#BDBDBD',
          500: '#9E9E9E',
          600: '#757575',
          700: '#616161',
          800: '#424242',
          900: '#333333'   // Cinza grafite
        },
        accent: {
          green: '#059669',
          warning: '#f59e0b'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'system-ui', 'sans-serif']
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem'
      }
    }
  },
  plugins: []
}