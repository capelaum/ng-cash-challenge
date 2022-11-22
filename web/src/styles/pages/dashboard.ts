import { styled } from 'styles/stitches.config'

export const ContentWrapper = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',

  h2: {
    marginTop: '0.75rem',
    marginBottom: '3rem',
  },
})

export const ButtonWrapper = styled('div', {
  display: 'flex',
  marginTop: '2rem',
  gap: '1.5rem',
})
