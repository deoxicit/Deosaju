/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'azure-blue': '#007FFF',
        'neon-purple': '#bf00ff',
        'cyber-black': '#0a0a0a',
        'grid-line': 'rgba(0, 128, 255, 0.2)',
        'off-white': '#f5f5f7',
        'glass': 'rgba(255, 255, 255, 0.05)',
        'glass-hover': 'rgba(255, 255, 255, 0.1)',
        'glass-border': 'rgba(255, 255, 255, 0.1)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['monospace'],
      },
      backgroundImage: {
        'noise': "url('https://grainy-gradients.vercel.app/noise.svg')",
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 20px -10px rgba(0, 127, 255, 0.5)' },
          '100%': { boxShadow: '0 0 30px -5px rgba(191, 0, 255, 0.5)' },
        }
      }
    },
  },
  plugins: [],
}
