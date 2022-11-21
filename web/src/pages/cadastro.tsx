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
        <title>NG.CASH | Cadastro</title>
      </Head>

      <Layout>
        <Image
          src={theme === 'light' ? ng_black : ng_white}
          alt="NG.CASH Logo"
          width={100}
        />

        <ContentWrapper>
          <HeaderWrapper>
            <Heading>Cadastro</Heading>

            <Text size="sm">
              Já possui conta?{' '}
              <Link href="/" title="Entre com sua conta!">
                Entre com sua conta!
              </Link>
            </Text>
          </HeaderWrapper>

          <ButtonToggleTheme />

          <FormWrapper>
            <InputName required />
            <InputPassword required />

            <Button title="Entrar" isFullWidth>
              Cadastrar
            </Button>
          </FormWrapper>
        </ContentWrapper>
      </Layout>
    </>
  )
}
