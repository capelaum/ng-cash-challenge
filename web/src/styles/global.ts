import { globalCss } from './stitches.config'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  html: {
    scrollBehavior: 'smooth',
  },
  body: {
    fontFamily: '$roboto',
    fontWeight: 400,
  },
  'a, button': {
    cursor: 'pointer',
    border: 'none',
    fontFamily: '$roboto',
  },
  input: {
    border: 'none',
    fontFamily: '$roboto',
    // '&:-webkit-autofill, &:-webkit-autofill:focus': {
    //   transition: 'background-color 600000s 0s, color 600000s 0s',
    // },
  },
})
