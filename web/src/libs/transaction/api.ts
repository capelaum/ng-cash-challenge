import { api } from 'services/api'
import { currencyFormatter, dateFormatter } from 'utils/formatters'
import { CreateTransaction, Transaction } from './types'

export const getTransactions = async () => {
  const { data } = await api.get('/transactions')

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
