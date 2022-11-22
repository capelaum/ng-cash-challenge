import { Text } from 'components/Text'
import { useTheme } from 'contexts/ThemeContext'
import Link from 'next/link'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { FaCode } from 'react-icons/fa'
import { FooterWrapper, SocialLinkItem, SocialLinks } from './styles'

export function Footer() {
  const { theme } = useTheme()

  return (
    <FooterWrapper>
      <SocialLinks>
        <SocialLinkItem
          title="Luís V. Capelleto Linkedin"
          href="https://www.linkedin.com/in/luis-capelletto"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsLinkedin
            size={32}
            color={theme === 'light' ? '#171717' : '#fafafa'}
          />
        </SocialLinkItem>

        <SocialLinkItem
          title="Luís V. Capelleto Github"
          href="https://github.com/capelaum"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsGithub
            size={32}
            color={theme === 'light' ? '#171717' : '#fafafa'}
          />
        </SocialLinkItem>

        <SocialLinkItem
          title="Luís V. Capelleto Portfolio"
          href="https://luis-capelletto-portfolio.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaCode size={32} color={theme === 'light' ? '#171717' : '#fafafa'} />
        </SocialLinkItem>
      </SocialLinks>

      <Text size="sm">
        Feito com {theme === 'light' ? '🖤' : '🤍'} por{' '}
        <Link
          href="https://github.com/capelaum"
          target="_blank"
          rel="noopener noreferrer"
        >
          Luís Vinicius Capelletto
        </Link>
      </Text>
    </FooterWrapper>
  )
}
