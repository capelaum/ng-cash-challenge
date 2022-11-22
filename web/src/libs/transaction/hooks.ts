import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { createTransaction, getTransactions } from './api'
import { useTransactionsStore } from './store'
import { GetTransactionsFilters, Transaction } from './types'

export const useTransactionsQuery = (filters: GetTransactionsFilters) => {
  const {
    setTransactions,
    setTransactionsDates,
    transactionsDates,
    userLoggedOut,
    setUserLoggedOut,
  } = useTransactionsStore()

  return useQuery(
    ['transactions', filters],
    async () => getTransactions(filters),
    {
      onSuccess: (transactions: Transaction[]) => {
        setTransactions(transactions)

        const getTransactionsDates = Array.from(
          new Set(transactions.map((transaction) => transaction.createdAt))
        )

        if (transactionsDates.length === 0 || userLoggedOut) {
          setTransactionsDates(getTransactionsDates)

          if (userLoggedOut) {
            setUserLoggedOut(false)
          }
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
