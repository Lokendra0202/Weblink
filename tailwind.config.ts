import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          indigo: '#0F4C81',
          purple: '#E85D75',
          sky: '#13A8A8',
          cyan: '#0EA5A5',
          slate: '#111827',
          light: '#F7F7F3'
        }
      },
      boxShadow: {
        soft: '0 20px 45px -28px rgba(17, 24, 39, 0.55)'
      },
      animation: {
        'gradient-shift': 'gradientShift 12s ease infinite',
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'floatSlow 9s ease-in-out infinite'
      },
      keyframes: {
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        floatSlow: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '50%': { transform: 'translate3d(0, -14px, 0)' }
        }
      }
    }
  },
  plugins: []
}

export default config
