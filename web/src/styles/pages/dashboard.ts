import { styled } from 'styles/stitches.config'

export const ContentWrapper = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',

  h2: {
    margin: '3rem 0',
  },
})

export const ButtonWrapper = styled('div', {
  display: 'flex',
  marginTop: '2rem',
  gap: '1.5rem',
})

export const BadgesWrapper = styled('div', {
  display: 'flex',
  gap: '1rem',

  '@bp3': {
    flexDirection: 'column',
  },
})

export const Badge = styled('div', {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '0.5rem',
  padding: '0.5rem 1rem',

  borderRadius: '$md',

  variants: {
    theme: {
      light: {
        border: '1px solid $gray900',
        color: '$gray900',
      },
      dark: {
        border: '1px solid $gray50',
        color: '$gray50',
      },
    },
  },
})
