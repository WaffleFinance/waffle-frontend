import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      primary: '#05DF85',
      darkGreen: '#293933',
      gray: { 300: '#A5A5A5', 400: '#4C4C4C', 500: '#232323', 900: '#111111' },
      white: '#FFF',
      transparent: 'transparent',
    },
    extend: {
      maxWidth: {
        desktop: '90rem',
      },
      boxShadow: {
        greenShadow: '0px 10px 30px 0px #05DF854D',
      },
    },
  },
  plugins: [],
}
export default config
