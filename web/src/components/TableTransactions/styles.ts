import { styled } from 'styles/stitches.config'

export const TableTransactionsSection = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$md',

  marginTop: '5rem',
  overflowX: 'auto',
})

export const FiltersWrapper = styled('div', {
  display: 'flex',
  gap: '2rem',

  '@bp4': {
    flexDirection: 'column',
  },
})

export const StyledTable = styled('table', {
  width: '100%',
  borderCollapse: 'collapse',
  minWidth: 750,

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
          color: '$gray900',
          backgroundColor: '$gray300',
        },

        td: {
          color: '$gray900',
          backgroundColor: '$gray200',
          borderTop: '4px solid $gray50',
        },
      },
      dark: {
        th: {
          color: '$gray50',
          backgroundColor: '$gray700',
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
