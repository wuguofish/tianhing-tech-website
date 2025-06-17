/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'tianhing-blue': '#87CEEB',
        'tianhing-dark-blue': '#4682B4',
        'tianhing-light-blue': '#E0F6FF',
      },
      fontFamily: {
        sans: ['Taipei Sans TC', 'Microsoft JhengHei', 'PingFang TC', 'Noto Sans TC', 'sans-serif'],
        cubic: ['Cubic 11', 'Monaco', 'Menlo', 'Ubuntu Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
