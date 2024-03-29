import * as DialogPrimitive from '@radix-ui/react-dialog'
import { keyframes, styled } from 'styles/stitches.config'

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
})

const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
  '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
})

export const StyledOverlay = styled(DialogPrimitive.Overlay, {
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  position: 'fixed',
  inset: 0,
  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
})

export const StyledContent = styled(DialogPrimitive.Content, {
  borderRadius: '$xl',
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  maxWidth: '450px',
  maxHeight: '85vh',
  padding: 25,
  '&:focus': { outline: 'none' },
  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
  overflow: 'auto',

  variants: {
    theme: {
      light: {
        backgroundColor: '$white',
        color: '$gray800',
      },
      dark: {
        backgroundColor: '$gray800',
        color: '$gray100',
      },
    },
  },
})

export const StyledTitle = styled(DialogPrimitive.Title, {
  fontSize: '$lg',
  fontWeight: 500,
  marginBottom: '1.25rem',

  variants: {
    theme: {
      light: {
        color: '$gray800',
      },
      dark: {
        color: '$gray100',
      },
    },
  },
})

export const StyledDescription = styled(DialogPrimitive.Description, {
  marginBottom: '1.25rem',
  fontSize: '$sm',
  lineHeight: 1.6,

  variants: {
    theme: {
      light: {
        color: '$gray700',
      },
      dark: {
        color: '$gray200',
      },
    },
  },
})

export const DialogCloseButton = styled('button', {
  position: 'absolute',
  backgroundColor: 'transparent',
  fontSize: '$lg',
  top: 12,
  right: 12,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0.25rem',
  borderRadius: '$full',

  variants: {
    theme: {
      light: {
        color: '$gray800',
      },
      dark: {
        color: '$gray300',
      },
    },
  },
})

export const DialogButtonsContainer = styled('div', {
  marginTop: '1.5rem',
  display: 'flex',
  justifyContent: 'space-between',
  gap: '$lg',

  '@bp3': {
    flexDirection: 'column',
    gap: '$sm',
  },
})

export const DialogRoot = DialogPrimitive.Root
export const DialogTrigger = DialogPrimitive.Trigger
export const DialogTitle = StyledTitle
export const DialogDescription = StyledDescription
export const DialogClose = DialogPrimitive.Close
