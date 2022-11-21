import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider } from 'contexts/ThemeContext'
import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import { globalStyles } from '../styles/global'

globalStyles()

const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Component {...pageProps} />
        <ToastContainer
          position="bottom-right"
          theme="light"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </ThemeProvider>
    </QueryClientProvider>
  )
}
