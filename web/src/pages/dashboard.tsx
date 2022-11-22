import { ng_black, ng_white } from 'components/@constants'
import { ButtonLogout } from 'components/Button/ButtonLogout'
import { DialogCreateTransaction } from 'components/Dialog/DialogCreateTransaction'
import { Heading } from 'components/Heading'
import { Loader } from 'components/Loader'
import { Layout } from 'components/Page/Layout'
import { TableTransactions } from 'components/TableTransactions'
import { useAuth } from 'contexts/AuthContext'
import { useTheme } from 'contexts/ThemeContext'
import { getCookie } from 'cookies-next'
import { getAuthUser } from 'libs/auth/api'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import {
  Badge,
  BadgesWrapper,
  ButtonWrapper,
  ContentWrapper,
} from 'styles/pages/dashboard'

export default function Dashboard() {
  const { authUser } = useAuth()
  const { theme } = useTheme()

  if (!authUser) {
    return <Loader />
  }

  const { username, account, createdAt } = authUser

  return (
    <>
      <Head>
        <title>NG.CASH | Dashboard</title>
      </Head>

      <Layout>
        <ContentWrapper>
          <Image
            src={theme === 'light' ? ng_black : ng_white}
            alt="NG.CASH Logo"
            width={100}
          />

          <Heading size="sm">Olá, {username}</Heading>

          <ButtonLogout />

          <BadgesWrapper>
            <Badge theme={theme}>
              <strong>Data de cadastro:</strong> {createdAt}
            </Badge>

            <Badge theme={theme}>
              <strong>Conta: </strong>
              {account.id}
            </Badge>

            <Badge theme={theme}>
              <strong>Saldo:</strong> {account.formattedBalance}
            </Badge>
          </BadgesWrapper>

          <ButtonWrapper>
            <DialogCreateTransaction />
          </ButtonWrapper>

          <TableTransactions />
        </ContentWrapper>
      </Layout>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const token = getCookie(process.env.NEXT_PUBLIC_AUTH_COOKIE_NAME ?? '', ctx)

  if (!token) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  const user = await getAuthUser(token.toString())

  if (!user) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: {
      token,
      user,
    },
  }
}
