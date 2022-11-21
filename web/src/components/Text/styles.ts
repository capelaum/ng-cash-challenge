import { Slot } from '@radix-ui/react-slot'
import { styled } from 'styles/stitches.config'

export const StyledText = styled(Slot, {
  a: {
    textDecoration: 'none',
    fontWeight: 500,
    color: '$gray50',

    transition: 'all 0.2s ease-out',

    '&:hover': {
      textDecoration: 'underline',
      textUnderlineOffset: '0.25rem',
    },
  },

  variants: {
    theme: {
      light: {
        color: '$gray900',
        a: {
          color: '$gray900',
        },
      },
      dark: {
        color: '$gray50',

        a: {
          color: '$gray50',
        },
      },
    },

    size: {
      xs: {
        fontSize: '$xs',
      },
      sm: {
        fontSize: '$sm',
      },
      md: {
        fontSize: '$md',
      },
      lg: {
        fontSize: '$lg',
      },
      xl: {
        fontSize: '$xl',
      },
      '2xl': {
        fontSize: '$2xl',
      },
    },
  },

  defaultVariants: {
    theme: 'light',
    size: 'md',
  },
})
