import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { createTransaction, getTransactions } from './api'
import { useTransactionsStore } from './store'
import { GetTransactionsFilters } from './types'

export const useTransactionsQuery = (filters: GetTransactionsFilters) => {
  const { setTransactions } = useTransactionsStore()

  return useQuery(
    ['transactions', filters],
    async () => getTransactions(filters),
    {
      onSuccess: (transactions) => {
        setTransactions(transactions)
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
