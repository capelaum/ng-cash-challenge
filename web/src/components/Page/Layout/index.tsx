import { ButtonToggleTheme } from 'components/Button/ButtonToggleTheme'
import { useTheme } from 'contexts/ThemeContext'
import { ReactNode } from 'react'
import { Footer } from '../Footer'
import { BodyWrapper, Main } from './styles'

interface AppLayoutProps {
  children: ReactNode
}

export function Layout({ children }: AppLayoutProps) {
  const { theme } = useTheme()

  return (
    <BodyWrapper theme={theme}>
      <ButtonToggleTheme />

      <Main>{children}</Main>

      <Footer />
    </BodyWrapper>
  )
}
