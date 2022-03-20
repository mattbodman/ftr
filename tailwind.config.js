module.exports = {
  content: ['./src/**/*.{html,scss,ts}'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
