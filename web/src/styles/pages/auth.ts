import { styled } from 'styles/stitches.config'

export const ContentWrapper = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  gap: '2.5rem',
  width: '100%',
  maxWidth: '400px',
  marginTop: '7rem',

  img: {
    margin: '0 auto',
  },
})

export const FormWrapper = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  gap: '2.5rem',
  alignItems: 'center',
  width: '100%',
  marginTop: '2rem',
})

export const HeaderWrapper = styled('header', {
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
})
