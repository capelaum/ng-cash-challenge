import { zodResolver } from '@hookform/resolvers/zod'
import { ng_black, ng_white } from 'components/@constants'
import { Button } from 'components/Button'
import { Heading } from 'components/Heading'
import { InputName } from 'components/Input/InputName'
import { InputPassword } from 'components/Input/InputPassword'
import { Layout } from 'components/Page/Layout'
import { Text } from 'components/Text'
import { useAuth } from 'contexts/AuthContext'
import { useTheme } from 'contexts/ThemeContext'
import { getCookie } from 'cookies-next'
import { getAuthUser } from 'libs/auth/api'
import { AuthFormData, authSchema } from 'libs/auth/schemas'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { ContentWrapper, FormWrapper, HeaderWrapper } from 'styles/pages/auth'

export default function Register() {
  const { isAuthLoading, register } = useAuth()
  const { theme } = useTheme()

  const registerForm = useForm<AuthFormData>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      username: '',
      password: '',
    },
    mode: 'onChange',
    reValidateMode: 'onChange',
  })

  const {
    handleSubmit,
    watch,
    reset,
    control,
    formState: { errors },
  } = registerForm

  const isSubmitDisabled =
    !!errors.username ||
    !!errors.password ||
    !watch('username') ||
    !watch('password')

  async function handleRegister(data: AuthFormData) {
    const isRegisterSuccess = await register(data)

    if (isRegisterSuccess) {
      reset()
    }
  }

  return (
    <>
      <Head>
        <title>NG.CASH | Cadastro</title>
      </Head>

      <Layout>
        <ContentWrapper>
          <Image
            src={theme === 'light' ? ng_black : ng_white}
            alt="NG.CASH Logo"
            width={100}
          />

          <HeaderWrapper>
            <Heading>Cadastro</Heading>

            <Text size="sm">
              Já possui conta?{' '}
              <Link href="/" title="Entre com sua conta!">
                {' '}
                Entre com sua conta!
              </Link>
            </Text>
          </HeaderWrapper>

          <FormWrapper onSubmit={handleSubmit(handleRegister)}>
            <InputName
              required
              error={errors.username}
              control={control as any}
            />

            <InputPassword
              required
              error={errors.password}
              control={control as any}
            />

            <Button
              type="submit"
              title="Cadastrar"
              isFullWidth
              isLoading={isAuthLoading}
              disabled={isSubmitDisabled}
            >
              Cadastrar
            </Button>
          </FormWrapper>
        </ContentWrapper>
      </Layout>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const token = getCookie(process.env.NEXT_PUBLIC_AUTH_COOKIE_NAME ?? '', ctx)

  if (token) {
    try {
      const user = await getAuthUser(token.toString())

      if (user) {
        return {
          redirect: {
            destination: '/dashboard',
            permanent: false,
          },
        }
      }
    } catch (err) {
      console.log('💥 ~ err', err)
    }
  }

  return {
    props: {},
  }
}
