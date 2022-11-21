import { styled } from 'styles/stitches.config'

export const TableTransactionsSection = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$md',

  marginTop: '5rem',

  h1: {},
})

export const StyledTable = styled('table', {
  width: '100%',
  borderCollapse: 'collapse',
  minWidth: 800,

  th: {
    padding: '1rem',
    textAlign: 'left',
    fontSize: '0.875rem',
    lineHeight: 1.6,

    '&:first-child': {
      borderTopLeftRadius: 8,
      paddingLeft: '1.5rem',
    },

    '&:last-child': {
      borderTopRightRadius: 8,
      paddingRight: '1.5rem',
    },
  },

  td: {
    padding: '1rem',
    fontSize: '0.875rem',
    lineHeight: 1.6,

    '&:first-child': {
      paddingLeft: '1.5rem',
    },

    '&:last-child': {
      paddingRight: '1.5rem',
    },
  },

  variants: {
    theme: {
      light: {
        th: {
          color: '$gray50',
          backgroundColor: '$gray800',
        },

        td: {
          color: '$gray900',
          backgroundColor: '$gray200',
          borderTop: '4px solid $gray50',
        },
      },
      dark: {
        th: {
          color: '$gray900',
          backgroundColor: '$gray50',
        },

        td: {
          color: '$gray200',
          backgroundColor: '$gray800',
          borderTop: '4px solid $gray900',
        },
      },
    },
  },
})
