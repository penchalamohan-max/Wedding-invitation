export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fdf9f3',
          100: '#faf2e8',
          200: '#f5e6d3',
          300: '#efd4b8',
          400: '#e8c29d',
          500: '#d4a574',
          600: '#c9945f',
          700: '#a67c4f',
          800: '#83643f',
          900: '#6b5235'
        },
        accent: {
          50: '#fdf3f6',
          100: '#fce7ed',
          200: '#f9d1db',
          300: '#f5bac9',
          400: '#f0a4b7',
          500: '#e88da5',
          600: '#d67693',
          700: '#b85a7a',
          800: '#8b3f54',
          900: '#6b2d3f'
        },
        dark: {
          50: '#f9f8f7',
          100: '#f2f1f0',
          200: '#e5e3e0',
          300: '#d8d6d3',
          400: '#cbc8c5',
          500: '#bbb8b5',
          600: '#a8a5a2',
          700: '#95928f',
          800: '#6b6966',
          900: '#4a4844'
        }
      },
      fontFamily: {
        cormorant: ['Cormorant Garamond', 'serif'],
        poppins: ['Poppins', 'sans-serif'],
        playfair: ['Playfair Display', 'serif']
      },
      backdropBlur: {
        xs: '2px'
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      }
    }
  },
  plugins: []
}