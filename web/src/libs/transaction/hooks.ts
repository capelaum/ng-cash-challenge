import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { createTransaction, getTransactions } from './api'
import { useTransactionsStore } from './store'
import { GetTransactionsFilters, Transaction } from './types'

export const useTransactionsQuery = (filters: GetTransactionsFilters) => {
  const { setTransactions, setTransactionsDates, transactionsDates } =
    useTransactionsStore()

  return useQuery(
    ['transactions', filters],
    async () => getTransactions(filters),
    {
      onSuccess: (transactions: Transaction[]) => {
        setTransactions(transactions)

        const getTransactionsDates = Array.from(
          new Set(transactions.map((transaction) => transaction.createdAt))
        )

        if (transactionsDates.length === 0) {
          setTransactionsDates(getTransactionsDates)
        }
      },
    }
  )
}

export const useTransactions = () => {
  const queryClient = useQueryClient()

  const createTransactionMutation = useMutation(createTransaction, {
    onSuccess: () => {
      queryClient.invalidateQueries(['transactions'])
    },
  })

  return {
    createTransactionMutation,
  }
}
