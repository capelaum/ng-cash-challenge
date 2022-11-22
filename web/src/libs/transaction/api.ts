import { api } from 'services/api'
import { currencyFormatter } from 'utils/formatters'
import { CreateTransaction, GetTransactionsFilters, Transaction } from './types'

export const getTransactions = async ({
  createdAt,
  isOnlyCashIn,
  isOnlyCashOut,
}: GetTransactionsFilters) => {
  const filters = `createdAt=${createdAt}&isOnlyCashIn=${isOnlyCashIn}&isOnlyCashOut=${isOnlyCashOut}`

  const { data } = await api.get(`/transactions?${filters}`)

  return data.map((transaction: Transaction) => ({
    ...transaction,
    createdAt: transaction.createdAt,
    formattedValue: currencyFormatter(transaction.value),
  }))
}

export const createTransaction = async ({
  username,
  value,
}: CreateTransaction) => {
  const { data } = await api.post('/transactions', {
    username,
    value,
  })

  return data
}
