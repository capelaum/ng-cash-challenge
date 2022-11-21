import { Heading } from 'components/Heading'
import { Layout } from 'components/Page/Layout'
import { useAuth } from 'contexts/AuthContext'
import { getCookie } from 'cookies-next'
import { getAuthUser } from 'libs/auth/api'
import { GetServerSideProps } from 'next'
import Head from 'next/head'

export default function Dashboard() {
  const { authUser } = useAuth()

  return (
    <>
      <Head>
        <title>NG.CASH | Dashboard</title>
      </Head>

      <Layout>
        <Heading>Dashboard</Heading>

        <p>Olá, {authUser?.username}</p>
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
