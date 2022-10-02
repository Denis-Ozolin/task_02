module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'backdrop-rgba': 'rgba(0, 0, 0, 0.8)',
        'bgc-hex': '#ccc',
      },
      width: {
        'table-w': '1080px',
        'modal-w': '600px',
      },
      height: {
        'modal-h': '400px',
      },
    },
  },
  plugins: [],
};
