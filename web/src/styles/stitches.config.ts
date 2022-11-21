import { createStitches } from '@stitches/react'

export const {
  config,
  theme,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      white: '#fff',
      black: '#000',

      red600: '#dc2626',
      red500: '#ef4444',

      gray900: '#171717',
      gray800: '#262626',
      gray700: '#404040',
      gray600: '#525252',
      gray500: '#737373',
      gray400: '#a3a3a3',
      gray300: '#d4d4d4',
      gray200: '#e5e5e5',
      gray100: '#f5f5f5',
      gray50: '#fafafa',

      sky900: '#0c4a6e',
      sky800: '#075985',
      sky700: '#0369a1',
      sky600: '#0284c7',
      sky500: '#0ea5e9',
      sky400: '#38bdf8',
      sky300: '#7dd3fc',
      sky200: '#bae6fd',
      sky100: '#e0f2fe',
      sky50: '#f0f9ff',
    },

    space: {
      xs: '0.5rem', // 8px
      sm: '0.75rem', // 12px
      md: '1.5rem', // 24px
      lg: '2rem', // 32px
      xl: '4rem', // 64px
      '2xl': '5rem', // 80px
      '3xl': '7rem', // 112px
    },

    fonts: {
      roboto: 'Roboto, sans-serif',
    },

    fontSizes: {
      xs: '0.875rem', // 14px
      sm: '1rem', // 16px
      md: '1.125rem', // 18px
      lg: '1.25rem', // 20px
      xl: '1.5rem', // 24px
      '2xl': '2rem', // 32px
      '3xl': '2.5rem', // 40px
    },

    shadows: {
      default: '4px 4px 8px rgba(0, 0, 0, 0.25)',
      sm: '4px 4px 12px rgba(0, 0, 0, 0.25)',
    },

    radii: {
      sm: '0.125rem', // 2px
      md: '0.25rem', // 4px
      lg: '0.5rem', // 8px
      xl: '0.75rem', // 12px
      '2xl': '1rem', // 16px
      '3xl': '1.25rem', //20px
      full: '9999px',
    },
  },

  media: {
    bp1: '(max-width: 1200px)',
    bp2: '(max-width: 768px)',
    bp3: '(max-width: 576px)',
    bp4: '(max-width: 480px)',
  },
})
