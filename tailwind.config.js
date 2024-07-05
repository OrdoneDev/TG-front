/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js, jsx, ts, tsx}"
  ],
  theme: {
    screens: {
      xs: '500px',
      sm: '640px',
      md: '760px',
      ll: '800px',
      lg: '976px',
      lx: '1220px',
      xl: '1340px',
    },
    extend: {}
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

