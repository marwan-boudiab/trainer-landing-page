import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    default: 'dark',
    container: {
      center: true,
      padding: '15px',
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1400px',
    },

    fontFamily: {
      oswald: 'var(--font-oswald)',
      roboto: 'var(--font-roboto)',
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#02060E',
          100: '#09090a',
          200: '#1f1f24',
          300: '#292930',
        },
        accent: '#ba2045',
        muted: {
          DEFAULT: '#e5e7eb',
          100: '#c7cbd4',
          200: '#9ca3b7',
          300: '#151515',
          400: '#111',
        },
      },
    },
  },
  plugins: [],
};
export default config;
