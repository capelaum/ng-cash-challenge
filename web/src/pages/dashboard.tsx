import { DialogCreateTransaction } from 'components/Dialog/DialogCreateTransaction'
import { Heading } from 'components/Heading'
import { Layout } from 'components/Page/Layout'
import { TableTransactions } from 'components/TableTransactions'
import { Text } from 'components/Text'
import { useAuth } from 'contexts/AuthContext'
import { getCookie } from 'cookies-next'
import { getAuthUser } from 'libs/auth/api'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { ButtonWrapper, ContentWrapper } from 'styles/pages/dashboard'

export default function Dashboard() {
  const { authUser } = useAuth()

  if (!authUser) {
    return <p>Carregando...</p>
  }

  const { username, account, createdAt } = authUser

  return (
    <>
      <Head>
        <title>NG.CASH | Dashboard</title>
      </Head>

      <Layout>
        <ContentWrapper>
          <Heading size="sm">Olá, {username}</Heading>

          <Text>
            <strong>Data de cadastro:</strong> {createdAt}
          </Text>

          <Text>
            <strong>Conta: </strong>
            {account.id}
          </Text>

          <Text>
            <strong>Saldo:</strong> {account.formattedBalance}
          </Text>

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
