
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      colors: {
        orange: {
          '50': '#FFF0E0',
          '100': '#FEF2D6',
          '200': '#FDE4AD',
          '300': '#FDD584',
          '400': '#FCC75A',
          '500': '#FD9B32',
          '600': '#E58A2D',
        },
        'brand-gray': {
          'light': '#F9FAFB',
          'DEFAULT': '#6B7280',
          'dark': '#1F2937',
        }
      }
    }
  },
  plugins: [],
}
export default config
