// tailwind.config.js
module.exports = {
  mode: 'jit', // Ensure this is set
  purge: ['./**/*.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ['Ubuntu', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
