import { styled } from 'styles/stitches.config'

export const InputContainer = styled('fieldset', {
  width: '100%',
  border: 'none',
})

export const InputWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$xs',
  padding: '0.25rem 0.5rem',
  width: '100%',
  backgroundColor: 'transparent',

  '&:focus-within': {
    '& > div > svg': {
      color: '$sky600',
    },

    borderBottom: '1px solid $sky600',
  },

  variants: {
    theme: {
      light: {
        borderBottom: '1px solid $gray400',
      },
      dark: {
        borderBottom: '1px solid $gray100',
      },
    },

    error: {
      true: {
        borderBottom: '1px solid $red500 !important',

        '& > div > svg': {
          color: '$red500',
        },
      },
    },

    disabled: {
      true: {
        opacity: 0.5,

        '&:hover': {
          cursor: 'not-allowed',
        },

        input: {
          cursor: 'not-allowed',
        },
      },
    },
  },

  defaultVariants: {
    theme: 'light',
    error: false,
  },

  '@bp3': {
    padding: '0.25rem 1rem',
  },
})

export const InputLabel = styled('label', {
  display: 'inline-flex',
  fontSize: '$xs',
  marginBottom: '$xs',
  fontWeight: 600,

  span: {
    color: '$red500',
  },

  variants: {
    theme: {
      light: {
        color: '$gray600',
      },
      dark: {
        color: '$gray100',
      },
    },
  },
})

export const InputErrorMessage = styled('span', {
  display: 'block',
  fontSize: '$xs',
  marginTop: '$xs',

  variants: {
    theme: {
      light: {
        color: '$red600',
      },
      dark: {
        color: '$red500',
      },
    },
  },
  fontWeight: 600,
})

export const InputIconWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '$xl',

  variants: {
    theme: {
      light: {
        color: '$gray900',
      },
      dark: {
        color: '$gray100',
      },
    },
  },

  '@bp3': {
    fontSize: '$md',
  },
})

export const ShowPasswordButton = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '$md',
  borderRadius: '$full',
  padding: '0.25rem',
  backgroundColor: 'transparent',

  variants: {
    theme: {
      light: {
        color: '$gray900',
      },
      dark: {
        color: '$gray100',
      },
    },
  },
})

export const InputStyled = styled('input', {
  outline: 'none',
  fontSize: '$md',
  borderRadius: '$md',
  padding: '0.25rem 0',
  backgroundColor: 'transparent',
  width: '100%',

  '&::placeholder': {
    color: '$gray400',
  },

  variants: {
    theme: {
      light: {
        color: '$gray900',
      },
      dark: {
        colorScheme: 'dark',

        color: '$gray50',
      },
    },
  },

  '@bp3': {
    fontSize: '$sm',
  },
})
