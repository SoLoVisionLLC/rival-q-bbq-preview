/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rival: {
          dark: '#0e0e0e',
          charcoal: '#171717',
          card: '#222222',
          border: '#333333',
          orange: '#f26522',
          orangeHover: '#d85213',
          amber: '#fbbf24',
          cream: '#fbf9f5',
          creamDark: '#eee8de',
          smoke: '#888888',
        }
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', 'serif'],
        display: ['Impact', 'Arial Black', 'sans-serif'],
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
