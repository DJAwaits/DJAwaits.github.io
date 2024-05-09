/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
  'node_modules/flowbite-react/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'celestial-blue': '#449dd1',
        'sky-blue': '#78c0e0',
        'gunmetal': '#293040',
        'tan': '#c9ad8b',
        'gold': '#d5b263',
      }
    },
  },
  plugins: [
   require('flowbite/plugin')
  ]
}



