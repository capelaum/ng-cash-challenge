import { styled } from 'styles/stitches.config'

export const BodyWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  height: '100%',
  position: 'relative',

  variants: {
    theme: {
      light: {
        color: '$gray900',
        backgroundColor: '$gray50',
      },
      dark: {
        color: '$gray50',
        backgroundColor: '$gray900',
      },
    },
  },

  defaultVariants: {
    theme: 'light',
  },
})

export const Main = styled('main', {
  maxWidth: '1200px',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '$md',
  padding: '1.5rem',
})
