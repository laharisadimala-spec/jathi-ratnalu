/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFBF7',
          100: '#FAF6EE',
          200: '#F4ECE0',
          300: '#EBDDC9',
          400: '#DFCBB0',
          500: '#CFB594',
        },
        cinema: {
          maroon: '#7F1D1D',
          'maroon-dark': '#5F1212',
          orange: '#D9532F',
          'orange-dark': '#B83E1D',
          yellow: '#E6A229',
          'yellow-light': '#F6CA65',
          gold: '#C98B27',
          green: '#2D5A3D',
          olive: '#4D6B37',
          dark: '#1C1917',
          charcoal: '#292524',
          muted: '#78716C',
          ticket: '#F5EADB',
          stamp: '#1E3A5F',
        }
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'Impact', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        typewriter: ['"Special Elite"', '"Courier Prime"', 'monospace'],
        handwriting: ['"Caveat"', 'cursive'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
      boxShadow: {
        'cinema': '0 4px 20px -2px rgba(28, 25, 23, 0.08), 0 2px 6px -1px rgba(28, 25, 23, 0.04)',
        'cinema-hover': '0 12px 30px -4px rgba(28, 25, 23, 0.14), 0 6px 12px -2px rgba(28, 25, 23, 0.08)',
        'ticket': '0 6px 0px 0px #292524',
        'ticket-sm': '0 3px 0px 0px #292524',
        'stamp': 'inset 0 0 0 1px rgba(28, 25, 23, 0.15), 0 2px 4px rgba(0,0,0,0.06)',
      },
      keyframes: {
        reel: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        },
        bobble: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-6px) rotate(1deg)' }
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' }
        }
      },
      animation: {
        reel: 'reel 25s linear infinite',
        bobble: 'bobble 4s ease-in-out infinite',
        wiggle: 'wiggle 1.5s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
