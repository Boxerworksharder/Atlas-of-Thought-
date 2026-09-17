/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkpaper: {
          50: '#262D3D',
          100: '#1D222F',
          200: '#181C28',
          300: '#131620',
          base: '#0C0E12',
          surface: '#151821',
          elevated: '#1D222F',
          border: '#2E3547',
          borderMuted: '#232A3B',
          textMuted: '#94A3B8',
          textSecondary: '#CBD5E1',
          textPrimary: '#F8FAFC',
        },
        paper: {
          50: '#FCFAF7',
          100: '#FAF8F5',
          200: '#F5F2EB',
          300: '#EFECE3',
          400: '#E3DFD5',
          500: '#D5D0C3',
          800: '#3A362D',
          900: '#1C1A16',
        },
        ink: {
          950: '#0A0A0A',
          900: '#111111',
          800: '#222222',
          700: '#3D3D3D',
          600: '#555555',
          500: '#777777',
          400: '#999999',
          300: '#CCCCCC',
          200: '#E5E5E5',
          100: '#F2F2F2',
        },
        entity: {
          philosopher: '#B93828', // Terracotta
          idea: '#1E3A8A',        // Academic Navy
          school: '#B45309',      // Ochre/Amber
          argument: '#15803D',    // Deep Forest Green
          question: '#6B21A8',    // Plum
          era: '#9A3412',
        }
      },
      fontFamily: {
        serif: ['"Cinzel"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace']
      },
      boxShadow: {
        'brutal-sm': '2px 2px 0px 0px #111111',
        'brutal': '3px 3px 0px 0px #111111',
        'brutal-md': '4px 4px 0px 0px #111111',
        'brutal-lg': '6px 6px 0px 0px #111111',
        'brutal-xl': '8px 8px 0px 0px #111111',
        'brutal-dark-sm': '2px 2px 0px 0px #06080C',
        'brutal-dark': '3px 3px 0px 0px #06080C',
        'brutal-dark-md': '4px 4px 0px 0px #06080C',
        'brutal-dark-lg': '6px 6px 0px 0px #06080C',
        'brutal-dark-xl': '8px 8px 0px 0px #06080C',
      },
      borderWidth: {
        '3': '3px',
      }
    },
  },
  plugins: [],
}
