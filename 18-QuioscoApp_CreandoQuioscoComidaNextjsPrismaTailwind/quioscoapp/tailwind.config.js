/** @type {import('tailwindcss').Config} */
module.exports = {
  // Configurar tailwindcss (archivos al que valos aplicar)
  content: [
    "./pages**/*.{js,ts,jsx,tsx}",
    "./layout**/*.{js,ts,jsx,tsx}",
    "./components**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
