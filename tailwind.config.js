module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
        'slide-in': 'slideIn 1s ease-out forwards',
        'progress-clockwise': 'progressClockwise 10s linear forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        progressClockwise: {
          '0%': {
            borderTopColor: 'white',
            borderRightColor: 'transparent',
            borderBottomColor: 'transparent',
            borderLeftColor: 'transparent',
            borderWidth: '4px',
          },
          '25%': {
            borderRightColor: 'white',
            borderWidth: '4px',
          },
          '50%': {
            borderBottomColor: 'white',
            borderWidth: '4px',
          },
          '75%': {
            borderLeftColor: 'white',
            borderWidth: '4px',
          },
          '100%': {
            borderTopColor: 'white',
            borderRightColor: 'white',
            borderBottomColor: 'white',
            borderLeftColor: 'white',
            borderWidth: '4px',
          },
        },
      },
    },
  },
  plugins: [],
};
