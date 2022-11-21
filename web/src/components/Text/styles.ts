import { Slot } from '@radix-ui/react-slot'
import { styled } from 'styles/stitches.config'

export const StyledText = styled(Slot, {
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
