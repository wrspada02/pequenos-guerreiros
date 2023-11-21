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
        'gradient-primary': 'linear-gradient(180deg, rgba(0,137,189,1) 15%, rgba(1,149,51,0.55) 33%);',
        'gradient-header-scrolled': 'linear-gradient(180deg, rgba(221,205,73,1) 33%, rgba(255,255,255,1) 52%, rgba(92,150,227,1) 98%)',
        'first-image': "url('../../public/image-1.jpg')",
        'second-image': "url('../../public/image-2.jpg')",
      },
      backgroundColor: {
        'green-default': '#3D8D53',
        'yellow-default': '#CDBC24',
      },
      maxWidth: {
        'logo': '10ch'
      },
      fontFamily: {
        'logo': 'Suez One, serif',
        'rubik': 'Rubik, sans-serif',
        'poppins': 'Poppins, sans-serif',
        'strait': 'Strait, sans-serif',
        'roboto': 'Roboto, sans-serif',
      },
      keyframes: {
        'opacity-from-right': {
          'from': { transform: 'translateX(500px)', opacity: '0' },
          'to': { transform: 'translateX(0)', opacity: '1' },
        },
        'opacity': {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
        'opacity-from-top': {
          'from': { transform: 'translateY(-100px)', opacity: '0' },
          'to': { transform: 'translateY(0)', opacity: '1' },
        },
        'opacity-from-bot': {
          'from': { transform: 'translateY(100px)', opacity: '0' },
          'to': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        'opacity-from-right': 'opacity-from-right 0.5s normal',
        'opacity': 'opacity 1s ease-in-out',
        'opacity-from-top': 'opacity-from-top 1s ease-in-out',
        'opacity-from-bot': 'opacity-from-bot 1s ease-in-out',
      },
    },
    screens: {
      'mobile': {
        min: '0px',
        max: '768px',
      },
      'tablet': {
        min: '769px',
        max: '1024px',
      },
      'desktop': {
        min: '1025px',
        max: '1920px',
      },
      'fullscreen': {
        min: '1921px',
      },
    }
  },
  plugins: [],
}
export default config
