import Link from 'next/link'
import { styled } from 'styles/stitches.config'

export const FooterWrapper = styled('footer', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '2rem',
  marginTop: '6rem',
  paddingBottom: '0.25rem',
})

export const SocialLinks = styled('div', {
  display: 'flex',
  gap: '2rem',
})

export const SocialLinkItem = styled(Link, {
  transition: 'all 0.2s ease-in-out',

  '&:hover': {
    transform: 'scale(1.1)',
  },
})
