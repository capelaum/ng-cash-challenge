import { styled } from 'styles/stitches.config'

const lightStyles = {
  backgroundColor: '$gray900',
  color: '$gray50',

  svg: {
    stroke: '$gray50',
  },

  '&:not(:disabled):hover': {
    backgroundColor: '$gray800',
  },
}

const darkStyles = {
  backgroundColor: '$gray50',
  color: '$gray900',

  svg: {
    stroke: '$gray900',
  },

  '&:not(:disabled):hover': {
    backgroundColor: '$gray100',
  },
}

export const PrimitiveButton = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 8,
  textDecoration: 'none',
  borderRadius: '$lg',
  fontWeight: 500,

  transition: 'all 0.2s ease-out',

  '&:focus': {
    outline: '2px solid $sky500',
  },

  '&:disabled': {
    opacity: 0.8,
    cursor: 'not-allowed',
  },

  variants: {
    theme: {
      dark: {
        ...darkStyles,
      },

      light: {
        ...lightStyles,
      },
    },

    size: {
      sm: {
        fontSize: '$xs',
        padding: '0.75rem 1.25rem',
      },
      md: {
        fontSize: '$sm',
        padding: '1rem 2.5rem',
      },
      lg: {
        fontSize: '$lg',
        padding: '1rem 3rem',
      },
      xl: {
        fontSize: '$xl',
        padding: '1rem 2rem',
      },
    },

    isFullWidth: {
      true: {
        width: '100%',
      },
    },

    isOnlyIcon: {
      true: {
        fontSize: '$lg',
        padding: '0.75rem !important',
      },
    },

    isLoading: {
      true: {
        pointerEvents: 'none',
        cursor: 'not-allowed',
      },
    },

    isRounded: {
      true: {
        borderRadius: '$full',
      },
    },
  },

  defaultVariants: {
    theme: 'light',
    size: 'md',
    isFullWidth: false,
    isOnlyIcon: false,
    isLoading: false,
  },
})
