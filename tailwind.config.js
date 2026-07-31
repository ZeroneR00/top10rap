/** @type {import('tailwindcss').Config} */
module.exports = {
  // 1. Укажите пути ко всем вашим файлам шаблонов (HTML, JS, React, Vue и т.д.)
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "./index.html",
  ],
  theme: {
    // 2. Расширение темы (добавление новых значений, а не удаление стандартных)
    extend: {
      colors: {
        'brand-blue': '#1fb6ff',
        'brand-purple': '#7e5bef',
        'brand-pink': '#ff49db',
      },
      fontFamily: {
        'sans': ['Graphik', 'sans-serif'],
        'serif': ['Merriweather', 'serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    },
  },
  // 3. Подключение плагинов, если нужно (например, формы или типографика)
  plugins: [],
}