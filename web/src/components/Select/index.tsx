import { SelectProps as RadixSelectProps } from '@radix-ui/react-select'
import { useTheme } from 'contexts/ThemeContext'
import { TbCheck, TbChevronDown, TbChevronUp } from 'react-icons/tb'
import {
  SelectItemText,
  SelectRoot,
  SelectValue,
  StyledContent,
  StyledIcon,
  StyledItem,
  StyledItemIndicator,
  StyledScrollDownButton,
  StyledScrollUpButton,
  StyledTrigger,
  StyledViewport,
} from './styles'

export type ContentType = {
  value: string
  text: string
}

interface SelectProps extends RadixSelectProps {
  ariaLabel?: string
  title?: string
  placeholder?: string
  items: ContentType[]
}

export function Select({
  ariaLabel = 'Selecione',
  title = 'Selecione',
  placeholder = 'Selecione',
  items,
  ...props
}: SelectProps) {
  const { theme } = useTheme()

  return (
    <SelectRoot {...props}>
      <StyledTrigger theme={theme} aria-label={ariaLabel} title={title}>
        <SelectValue placeholder={placeholder} />
        <StyledIcon theme={theme}>
          <TbChevronDown size={20} />
        </StyledIcon>
      </StyledTrigger>

      <StyledContent theme={theme}>
        <StyledScrollUpButton>
          <TbChevronUp size={18} />
        </StyledScrollUpButton>

        <StyledViewport>
          {items.map(({ value, text }) => (
            <StyledItem theme={theme} key={value} value={value}>
              <SelectItemText>{text}</SelectItemText>
              <StyledItemIndicator>
                <TbCheck />
              </StyledItemIndicator>
            </StyledItem>
          ))}
        </StyledViewport>

        <StyledScrollDownButton>
          <TbChevronDown size={18} />
        </StyledScrollDownButton>
      </StyledContent>
    </SelectRoot>
  )
}
