import * as SelectPrimitive from '@radix-ui/react-select'
import {
  Content,
  Item,
  ItemIndicator,
  Label,
  ScrollDownButton,
  ScrollUpButton,
  SelectIcon,
  SelectTrigger,
  Separator,
  Viewport,
} from '@radix-ui/react-select'
import { styled } from 'styles/stitches.config'

export const StyledTrigger = styled(SelectTrigger, {
  all: 'unset',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderRadius: '$md',
  padding: '0.5rem 1rem',
  fontSize: '$sm',
  lineHeight: 1,
  gap: 8,
  cursor: 'pointer',
  minWidth: 150,

  transition: 'all 0.3s ease-in-out',

  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },

  '&:not(:disabled):hover': { filter: 'brightness(1.1)' },
  '&:not(:disabled):focus': { outline: '2px solid $orange500' },

  variants: {
    theme: {
      light: {
        backgroundColor: '$gray900',
        color: '$gray50',
        boxShadow: '$default',
      },
      dark: {
        backgroundColor: '$gray50',
        color: '$gray900',
        boxShadow: 'none',
      },
    },
  },
})

export const StyledIcon = styled(SelectIcon, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  variants: {
    theme: {
      light: {
        color: '$gray50',
      },
      dark: {
        color: '$gray900',
      },
    },
  },
})

export const StyledContent = styled(Content, {
  overflow: 'hidden',
  borderRadius: 6,
  zIndex: 3,
  boxShadow: '$default',

  variants: {
    theme: {
      light: {
        backgroundColor: '$gray800',
        color: '$gray50',
      },
      dark: {
        backgroundColor: '$gray100',
        color: '$gray900',
      },
    },
  },
})

export const StyledViewport = styled(Viewport, {
  padding: 5,
})

export const StyledItem = styled(Item, {
  all: 'unset',
  fontSize: '$xs',
  lineHeight: 1,
  color: '$gray800',
  borderRadius: '$md',
  display: 'flex',
  alignItems: 'center',
  padding: '0.5rem 2rem',
  position: 'relative',
  userSelect: 'none',
  cursor: 'pointer',

  '&[data-disabled]': {
    color: '$gray800',
    pointerEvents: 'none',
  },

  variants: {
    theme: {
      light: {
        backgroundColor: '$gray800',
        color: '$gray50',

        '&[data-highlighted]': {
          backgroundColor: '$gray700',
          color: '$white',
          svg: {
            stroke: '$white',
          },
        },
      },
      dark: {
        backgroundColor: '$gray100',
        color: '$gray900',

        '&[data-highlighted]': {
          backgroundColor: '$gray300',
          svg: {
            stroke: '$gray900',
          },
        },
      },
    },
  },
})

export const StyledLabel = styled(Label, {
  padding: '0 25px',
  fontSize: 12,
  lineHeight: '25px',
  color: '$gray800',
})

export const StyledSeparator = styled(Separator, {
  height: 1,
  margin: 5,

  variants: {
    theme: {
      light: {
        backgroundColor: '$gray500',
      },
      dark: {
        backgroundColor: '$gray300',
      },
    },
  },
})

export const StyledItemIndicator = styled(ItemIndicator, {
  position: 'absolute',
  left: 0,
  width: 25,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$orange500',
})

export const scrollButtonStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 25,
  cursor: 'default',

  variants: {
    theme: {
      light: {
        backgroundColor: '$gray200',
        color: '$gray800',
      },
      dark: {
        backgroundColor: '$gray700',
        color: '$gray100',
      },
    },
  },
}

export const StyledScrollUpButton = styled(ScrollUpButton, scrollButtonStyles)

export const StyledScrollDownButton = styled(
  ScrollDownButton,
  scrollButtonStyles
)

// Exports
export const SelectRoot = SelectPrimitive.Root
export const SelectValue = SelectPrimitive.Value
export const SelectGroup = SelectPrimitive.Group
export const SelectItemText = SelectPrimitive.ItemText
