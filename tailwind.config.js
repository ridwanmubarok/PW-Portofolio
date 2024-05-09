/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
  ],
  theme: {
    extend: {
      backdropFilter: {
        'none': 'none',
        'blur': 'blur(20px)',
      }
    }
  },
  plugins: [
    require('tailwindcss-filters'),
  ],
}

