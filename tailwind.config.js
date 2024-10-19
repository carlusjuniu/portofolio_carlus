export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      DEFAULT: '0.25rem',
      DEFAULT: '4px',
      'md': '0.375rem',
      'lg': '2.5rem',
      '3xl':'1.5rem',
      'full': '9999px',
      'large': '12px',
    },
    extend: {            
      fontFamily: {
        LondonBoutique: ['Brother Deluxe', 'sans-serif'],},
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
        marquee: 'marquee 10s linear infinite',
      },
      keyframes: {
        infiniteSlider: {
          "0%": { transform: "translateX(0)" },
          "100%": {
            transform: "translateX(calc(-250px * 5))",
          },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
}