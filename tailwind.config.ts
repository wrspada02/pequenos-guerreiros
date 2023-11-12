import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(180deg, rgba(0,137,189,1) 15%, rgba(1,149,51,0.55) 33%);'
      },
      maxWidth: {
        'logo': '10ch'
      },
      fontFamily: {
        'logo': 'Suez One, serif',
        'rubik': 'Rubik, sans-serif'
      }
    },
  },
  plugins: [],
}
export default config
