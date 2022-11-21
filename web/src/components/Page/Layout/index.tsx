import { useTheme } from 'contexts/ThemeContext'
import { ReactNode } from 'react'
import { BodyWrapper, Main } from './styles'

interface AppLayoutProps {
  children: ReactNode
}

export function Layout({ children }: AppLayoutProps) {
  const { theme } = useTheme()

  return (
    <BodyWrapper theme={theme}>
      <Main>{children}</Main>
    </BodyWrapper>
  )
}
