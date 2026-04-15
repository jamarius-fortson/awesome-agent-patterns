/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'aether-bg': '#0a0a0c',
        'aether-glass': 'rgba(255, 255, 255, 0.03)',
        'aether-border': 'rgba(255, 255, 255, 0.1)',
        'aether-cyan': '#00f2ff',
        'aether-pink': '#ff00ea',
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'pulse-fast': 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      backdropBlur: {
        'xs': '2px',
      }
    },
  },
  plugins: [],
}
