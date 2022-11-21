import { ng_black, ng_white } from 'components/@constants'
import { Button } from 'components/Button'
import { ButtonToggleTheme } from 'components/Button/ButtonToggleTheme'
import { Heading } from 'components/Heading'
import { InputName } from 'components/Input/InputName'
import { InputPassword } from 'components/Input/InputPassword'
import { Layout } from 'components/Page/Layout'
import { Text } from 'components/Text'
import { useTheme } from 'contexts/ThemeContext'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { ContentWrapper, FormWrapper, HeaderWrapper } from 'styles/pages/auth'

export default function Home() {
  const { theme } = useTheme()

  return (
    <>
      <Head>
        <title>NG.CASH | Entrar</title>
      </Head>

      <Layout>
        <Image
          src={theme === 'light' ? ng_black : ng_white}
          alt="NG.CASH Logo"
          width={100}
        />

        <ContentWrapper>
          <HeaderWrapper>
            <Heading>Entrar</Heading>

            <Text size="sm">
              Não possui conta?{' '}
              <Link href="/cadastro" title="Cadastre-se">
                Cadastre-se
              </Link>
            </Text>
          </HeaderWrapper>

          <ButtonToggleTheme />

          <FormWrapper>
            <InputName required />
            <InputPassword required />

            <Button title="Entrar" isFullWidth>
              Entrar
            </Button>
          </FormWrapper>
        </ContentWrapper>
      </Layout>
    </>
  )
}
