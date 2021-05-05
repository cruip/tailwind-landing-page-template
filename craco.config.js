module.exports = {
  style: {
    postcss: {
      plugins: [
        require('tailwindcss')('./src/css/tailwind.config.js'),
        require('autoprefixer')
      ],
    },
  },
};