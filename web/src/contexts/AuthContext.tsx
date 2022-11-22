import { deleteCookie, getCookie, setCookie } from 'cookies-next'
import { getAuthUser } from 'libs/auth/api'
import { AuthFormData } from 'libs/auth/schemas'
import { LoginResponse, RegisterResponse } from 'libs/auth/types'
import { useTransactionsStore } from 'libs/transaction/store'
import { User } from 'libs/user/types'
import Router from 'next/router'
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
import { api } from 'services/api'
import { getApiErrorMessage } from 'utils/apiErrors'
import { showToastError, showToastSuccess } from 'utils/toasts'
import { useTheme } from './ThemeContext'

interface AuthProviderProps {
  children: ReactNode
}

interface AuthContextData {
  authUser: User | null
  isAuthenticaded: boolean
  isAuthLoading: boolean
  setAuthUser: (user: User) => void
  setIsAuthLoading: (isAuthLoading: boolean) => void
  register: (registerFormData: AuthFormData) => Promise<boolean>
  login: (loginFormData: AuthFormData) => Promise<boolean>
  logout: () => Promise<boolean>
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export function AuthProvider({ children }: AuthProviderProps) {
  const [authUser, setAuthUser] = useState<User | null>(null)
  const [isAuthLoading, setIsAuthLoading] = useState(false)

  const { theme } = useTheme()

  const { setUserLoggedOut, transactions } = useTransactionsStore()

  const isAuthenticaded = !!authUser

  async function updateAuthUser() {
    const token = getCookie(process.env.NEXT_PUBLIC_AUTH_COOKIE_NAME!)

    if (!token) {
      return
    }

    const user = await getAuthUser(token.toString())

    if (!user) {
      return
    }

    api.defaults.headers.Authorization = `Bearer ${token}`

    setAuthUser(user)
  }

  useEffect(() => {
    updateAuthUser()
  }, [transactions])

  const register = async (registerFormData: AuthFormData) => {
    setIsAuthLoading(true)

    try {
      const { data }: { data: RegisterResponse } = await api.post(
        '/users',
        registerFormData
      )

      showToastSuccess(theme, 'Cadastro realizado com sucesso!')
      setIsAuthLoading(false)

      Router.push('/')

      return true
    } catch (error) {
      const errorMessage = getApiErrorMessage(error)

      showToastError(theme, errorMessage)
      setIsAuthLoading(false)

      return false
    }
  }

  const login = async ({ username, password }: AuthFormData) => {
    setIsAuthLoading(true)

    try {
      const { data }: { data: LoginResponse } = await api.post('/login', {
        username,
        password,
      })

      const { token } = data

      api.defaults.headers.Authorization = `Bearer ${token}`

      setCookie(process.env.NEXT_PUBLIC_AUTH_COOKIE_NAME!, token, {
        maxAge: 60 * 60 * 24 * 30, // 30 days
      })

      const user = await getAuthUser(token)

      setAuthUser(user)

      showToastSuccess(theme, 'Login realizado com sucesso!')
      setIsAuthLoading(false)

      Router.push('/dashboard')

      return true
    } catch (error) {
      const errorMessage = getApiErrorMessage(error)

      showToastError(theme, errorMessage)
      setIsAuthLoading(false)

      return false
    }
  }

  const logout = async () => {
    try {
      deleteCookie(process.env.NEXT_PUBLIC_AUTH_COOKIE_NAME!)

      Router.push('/')

      showToastSuccess(theme, 'Logout realizado com sucesso. Volte sempre!')

      setUserLoggedOut(true)

      setAuthUser(null)
      setIsAuthLoading(false)

      return true
    } catch (error) {
      const errorMessage = getApiErrorMessage(error)

      showToastError(theme, errorMessage)
      setIsAuthLoading(false)

      return false
    }
  }

  return (
    <AuthContext.Provider
      value={{
        authUser,
        isAuthenticaded,
        isAuthLoading,
        setAuthUser,
        setIsAuthLoading,
        register,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = (): AuthContextData => useContext(AuthContext)
