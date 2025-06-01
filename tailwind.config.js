export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      DEFAULT: '4px', // Remove duplicado
      'md': '0.375rem',
      'lg': '0.5rem',
      'full': '9999px',
      'large': '12px',
    },
    extend: {
      fontFamily: {
        LondonBoutique: ['Brother Deluxe', 'sans-serif'],
      },
      keyframes: {
        equalize: {
          '0%, 100%': { transform: 'scaleY(1)' },
          '50%': { transform: 'scaleY(0.3)' },
        },
        spinSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        equalize: 'equalize 1s infinite ease-in-out',
        'spin-slow': 'spinSlow 6s linear infinite',
      },
    },
  },
  plugins: [],
}
