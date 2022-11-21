import { Slot } from '@radix-ui/react-slot'
import { styled } from 'styles/stitches.config'

export const StyledHeading = styled(Slot, {
  fontWeight: 600,

  variants: {
    theme: {
      light: {
        color: '$gray900',
      },
      dark: {
        color: '$gray50',
      },
    },

    size: {
      sm: {
        fontSize: '$lg',
      },
      md: {
        fontSize: '$xl',
      },
      lg: {
        fontSize: '$2xl',
      },
      xl: {
        fontSize: '$3xl',
      },
    },
  },

  defaultVariants: {
    theme: 'light',
    size: 'md',
  },
})
