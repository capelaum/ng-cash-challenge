import { api } from 'services/api'
import { currencyFormatter, dateFormatter } from 'utils/formatters'
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
    createdAt: dateFormatter(transaction.createdAt),
    value: Number(transaction.value),
    formattedValue: currencyFormatter(Number(transaction.value)),
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
