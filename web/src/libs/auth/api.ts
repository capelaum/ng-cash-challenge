import { User } from 'libs/user/types'
import { api } from 'services/api'
import { currencyFormatter } from 'utils/formatters'

export const getAuthUser = async (token: string): Promise<User | null> => {
  if (!token) {
    return null
  }

  const { data }: { data: User } = await api.get('/me', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  return {
    ...data,
    createdAt: new Date(data.createdAt).toLocaleDateString('pt-BR'),
    updatedAt: new Date(data.createdAt).toLocaleDateString('pt-BR'),
    account: {
      id: data.account.id,
      balance: Number(data.account.balance),
      formattedBalance: currencyFormatter(Number(data.account.balance)),
    },
  }
}
