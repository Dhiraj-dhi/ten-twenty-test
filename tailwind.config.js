module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      animation: {
        'hero-fade': 'heroFade 1s ease-out forwards',
        'text-fade-up': 'textFadeUp 1s ease-out forwards',
        'progress-clockwise': 'progressClockwise 10s linear forwards',
        'fade-in': 'fadeIn 2s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        heroFade: {
          '0%': { opacity: 0, transform: 'scale(1.02)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        },
        textFadeUp: {
          '0%': { opacity: 0, transform: 'translateY(40px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        progressClockwise: {
          '0%': {
            borderColor: 'transparent',
            borderTopColor: 'white',
            borderWidth: '4px',
            transform: 'scale(0.95)',
          },
          '50%': {
            borderBottomColor: 'white',
            borderWidth: '4px',
            transform: 'scale(1)',
          },
          '75%': {
            borderLeftColor: 'white',
            borderWidth: '4px',
            transform: 'scale(1.02)',
          },
          '100%': {
            borderColor: 'white',
            borderWidth: '4px',
            transform: 'scale(1.05)',
          },
        },
      },
    },
  },
  plugins: [],
};
